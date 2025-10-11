# Error Handling: Taming the Chaos

*Learn to catch and handle exceptions with try-except blocks*

## The Nature of Chaos

In the mystical realm of programming, not all spells work as intended. Sometimes the unexpected happens - files don't exist, networks fail, users enter invalid data, or the cosmic forces simply refuse to cooperate. This is where error handling becomes your most valuable defensive magic.

## Understanding Exceptions

An exception is Python's way of saying "something went wrong." When an error occurs, Python raises an exception, which can crash your program if not handled properly.

```python
# This will raise a ZeroDivisionError
result = 10 / 0  # Error: division by zero!

# This will raise a KeyError
wizard_stats = {"name": "Merlin", "level": 50}
mana = wizard_stats["mana"]  # Error: key 'mana' doesn't exist!

# This will raise a FileNotFoundError
with open("nonexistent_spell.txt", "r") as file:  # Error: file not found!
    content = file.read()
```

## The Try-Except Shield

The `try-except` block is your magical shield against exceptions:

```python
# Basic try-except structure
try:
    # Code that might raise an exception
    risky_spell = 10 / 0
except ZeroDivisionError:
    # Code to handle the specific exception
    print("Cannot divide by zero! The cosmic balance forbids it.")
```

## Catching Specific Exceptions

```python
def cast_spell(spell_name, target):
    spell_book = {
        "fireball": "Launches blazing destruction",
        "heal": "Restores health and vitality",
        "shield": "Creates protective barrier"
    }
    
    try:
        spell_description = spell_book[spell_name]
        print(f"Casting {spell_name} on {target}: {spell_description}")
        
        # Simulate spell power calculation
        power = 100 / len(target)  # This could cause ZeroDivisionError
        print(f"Spell power: {power}")
        
    except KeyError:
        print(f"Unknown spell: {spell_name}. Check your spellbook!")
    except ZeroDivisionError:
        print("Target name cannot be empty! Spells need a focus.")
    except Exception as e:
        print(f"Unexpected magical interference: {e}")

# Test the function
cast_spell("fireball", "dragon")      # Works fine
cast_spell("lightning", "orc")        # KeyError - unknown spell
cast_spell("heal", "")                # ZeroDivisionError - empty target
```

## Multiple Exception Types

```python
def read_wizard_data(filename):
    try:
        with open(filename, 'r') as file:
            data = file.read()
            wizard_level = int(data.strip())
            return wizard_level
            
    except FileNotFoundError:
        print(f"Spellbook '{filename}' not found in the mystical library!")
        return 0
    except ValueError:
        print("The ancient text contains corrupted data!")
        return 0
    except PermissionError:
        print("The spellbook is protected by powerful wards!")
        return 0

# Usage
level = read_wizard_data("wizard_level.txt")
print(f"Wizard level: {level}")
```

## The Else and Finally Clauses

```python
def perform_ritual(ritual_name):
    print("Preparing mystical circle...")
    
    try:
        if ritual_name == "summon_dragon":
            raise ValueError("Dragons are too dangerous to summon!")
        elif ritual_name == "time_travel":
            raise RuntimeError("Time magic is forbidden!")
        else:
            print(f"Successfully performed {ritual_name} ritual")
            
    except ValueError as e:
        print(f"Ritual failed: {e}")
    except RuntimeError as e:
        print(f"Forbidden magic detected: {e}")
    else:
        # This runs only if no exception occurred
        print("Ritual completed successfully! The spirits are pleased.")
    finally:
        # This always runs, regardless of exceptions
        print("Cleaning up mystical circle and dismissing spirits...")

# Test different scenarios
perform_ritual("healing_circle")    # Success
perform_ritual("summon_dragon")     # ValueError
perform_ritual("time_travel")       # RuntimeError
```

## Raising Your Own Exceptions

```python
class InsufficientManaError(Exception):
    """Custom exception for when a wizard doesn't have enough mana"""
    pass

class SpellCooldownError(Exception):
    """Custom exception for when a spell is on cooldown"""
    pass

class Wizard:
    def __init__(self, name, mana=100):
        self.name = name
        self.mana = mana
        self.spell_cooldowns = {}
    
    def cast_spell(self, spell_name, mana_cost, cooldown=0):
        # Check if spell is on cooldown
        if spell_name in self.spell_cooldowns:
            raise SpellCooldownError(f"{spell_name} is still on cooldown!")
        
        # Check if wizard has enough mana
        if self.mana < mana_cost:
            raise InsufficientManaError(
                f"Not enough mana! Need {mana_cost}, have {self.mana}"
            )
        
        # Cast the spell
        self.mana -= mana_cost
        if cooldown > 0:
            self.spell_cooldowns[spell_name] = cooldown
        
        print(f"{self.name} casts {spell_name}! Remaining mana: {self.mana}")

# Usage with error handling
wizard = Wizard("Gandalf", mana=50)

try:
    wizard.cast_spell("fireball", 30)      # Success
    wizard.cast_spell("lightning", 40)     # InsufficientManaError
except InsufficientManaError as e:
    print(f"Mana shortage: {e}")
except SpellCooldownError as e:
    print(f"Cooldown active: {e}")
```

## Exception Chaining

```python
def load_spell_config(filename):
    try:
        with open(filename, 'r') as file:
            config_data = file.read()
            # Simulate parsing error
            if "corrupted" in config_data:
                raise ValueError("Configuration data is corrupted")
            return config_data
    except FileNotFoundError as e:
        # Chain the original exception with a new one
        raise RuntimeError("Failed to load spell configuration") from e

def initialize_spellbook():
    try:
        config = load_spell_config("spells.cfg")
        print("Spellbook initialized successfully!")
    except RuntimeError as e:
        print(f"Initialization failed: {e}")
        print(f"Original cause: {e.__cause__}")

# This will show both the RuntimeError and the original FileNotFoundError
initialize_spellbook()
```

## Context Managers and Exception Safety

```python
class MagicalCircle:
    def __init__(self, circle_type):
        self.circle_type = circle_type
        self.is_active = False
    
    def __enter__(self):
        print(f"Creating {self.circle_type} circle...")
        self.is_active = True
        return self
    
    def __exit__(self, exc_type, exc_value, traceback):
        print(f"Dismissing {self.circle_type} circle...")
        self.is_active = False
        
        # Handle exceptions that occurred in the with block
        if exc_type is not None:
            print(f"Circle disrupted by {exc_type.__name__}: {exc_value}")
        
        # Return False to propagate the exception
        return False

# Usage
try:
    with MagicalCircle("protection") as circle:
        print("Performing dangerous ritual...")
        # Simulate an error
        raise ValueError("Ritual went wrong!")
        print("This won't be printed")
except ValueError as e:
    print(f"Caught exception: {e}")
```

## Best Practices for Error Handling

### 1. Be Specific with Exceptions

```python
# Bad: Too broad
try:
    result = risky_operation()
except Exception:
    print("Something went wrong")

# Good: Specific exceptions
try:
    result = risky_operation()
except ValueError:
    print("Invalid input provided")
except ConnectionError:
    print("Network connection failed")
except FileNotFoundError:
    print("Required file not found")
```

### 2. Don't Ignore Exceptions

```python
# Bad: Silent failure
try:
    dangerous_spell()
except:
    pass  # Never do this!

# Good: At least log the error
try:
    dangerous_spell()
except Exception as e:
    print(f"Spell failed: {e}")
    # Or use proper logging
    # logging.error(f"Spell failed: {e}")
```

### 3. Use Exception Hierarchies

```python
class MagicalError(Exception):
    """Base exception for all magical errors"""
    pass

class SpellError(MagicalError):
    """Exception for spell-related errors"""
    pass

class PotionError(MagicalError):
    """Exception for potion-related errors"""
    pass

class InvalidIngredientError(PotionError):
    """Exception for invalid potion ingredients"""
    pass

# Now you can catch at different levels
try:
    brew_potion(["eye_of_newt", "invalid_ingredient"])
except InvalidIngredientError:
    print("Invalid ingredient used")
except PotionError:
    print("General potion brewing error")
except MagicalError:
    print("Some kind of magical error occurred")
```

## Practical Example: Robust File Processing

```python
import json
from pathlib import Path

def process_wizard_data(filename):
    """Process wizard data with comprehensive error handling"""
    
    try:
        # Check if file exists
        file_path = Path(filename)
        if not file_path.exists():
            raise FileNotFoundError(f"Wizard data file '{filename}' not found")
        
        # Read and parse the file
        with open(file_path, 'r', encoding='utf-8') as file:
            data = json.load(file)
        
        # Validate required fields
        required_fields = ['name', 'level', 'class']
        for field in required_fields:
            if field not in data:
                raise ValueError(f"Missing required field: {field}")
        
        # Process the data
        wizard_name = data['name']
        wizard_level = int(data['level'])  # Could raise ValueError
        wizard_class = data['class']
        
        print(f"Processing wizard: {wizard_name} (Level {wizard_level} {wizard_class})")
        return data
        
    except FileNotFoundError as e:
        print(f"File error: {e}")
        return None
    except json.JSONDecodeError as e:
        print(f"Invalid JSON format: {e}")
        return None
    except ValueError as e:
        print(f"Data validation error: {e}")
        return None
    except PermissionError:
        print(f"Permission denied accessing '{filename}'")
        return None
    except Exception as e:
        print(f"Unexpected error processing wizard data: {e}")
        return None

# Usage
wizard_data = process_wizard_data("wizard_profile.json")
if wizard_data:
    print("Wizard data processed successfully!")
else:
    print("Failed to process wizard data.")
```

## Debugging with Exception Information

```python
import traceback
import sys

def debug_spell_casting():
    try:
        # Simulate a complex spell with multiple steps
        step1_result = perform_incantation()
        step2_result = channel_energy(step1_result)
        final_result = release_spell(step2_result)
        return final_result
        
    except Exception as e:
        print("=== SPELL CASTING DEBUG INFO ===")
        print(f"Exception type: {type(e).__name__}")
        print(f"Exception message: {str(e)}")
        print(f"Exception args: {e.args}")
        
        # Print full traceback
        print("\nFull traceback:")
        traceback.print_exc()
        
        # Get traceback as string
        tb_str = traceback.format_exc()
        
        # Log to file or send to monitoring system
        with open("spell_errors.log", "a") as log_file:
            log_file.write(f"Error at {datetime.now()}: {tb_str}\n")

def perform_incantation():
    raise ValueError("Incantation words were mispronounced!")

def channel_energy(incantation):
    pass

def release_spell(energy):
    pass

# Test the debugging
debug_spell_casting()
```

## The Wisdom of Graceful Failure

Remember these principles when handling errors:

1. **Fail Fast**: Detect errors early and handle them immediately
2. **Fail Gracefully**: Provide meaningful error messages to users
3. **Fail Safely**: Ensure your program doesn't leave resources in an inconsistent state
4. **Learn from Failure**: Log errors for debugging and improvement

## Practice Challenges

1. **Safe Calculator**: Create a calculator that handles division by zero, invalid input, and other mathematical errors.

2. **File Manager**: Build a file management system that gracefully handles missing files, permission errors, and corrupted data.

3. **Network Spell**: Create a function that simulates network requests with proper timeout and connection error handling.

## The Path Forward

Error handling is not just about preventing crashes - it's about creating robust, user-friendly applications that can handle the unexpected with grace. Master these techniques, and your code will be as resilient as the most powerful protective ward.

*"The wise wizard prepares for failure as carefully as they prepare for success, for in the realm of code, chaos is always lurking in the shadows."*

---

**Next**: Continue your journey with File Operations to learn how to safely read and write data to persistent storage.
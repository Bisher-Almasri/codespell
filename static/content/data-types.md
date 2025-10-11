# Data Types: The Elements of Creation

Welcome, apprentice, to the fundamental elements of programming - data types. These are the basic building blocks from which all magical programs are constructed.

## What Are Data Types?

Data types are like the different forms of mystical energy in the programming realm. Each type has its own properties, behaviors, and magical abilities. Understanding them is crucial for wielding code effectively.

Think of data types as:
- **Elements** like fire, water, earth, and air
- **Materials** with different properties and uses
- **Containers** designed for specific kinds of magical essence

## Numbers: The Quantified Magic

### Integers (int) - Whole Numbers
Integers represent whole numbers without decimal points:

```python
# Creating integers
level = 25
health = 100
damage = -15  # Negative numbers are allowed
experience = 0

print(f"Level: {level}")
print(f"Health: {health}")
print(f"Damage: {damage}")

# Integer operations
base_damage = 20
strength_bonus = 5
total_damage = base_damage + strength_bonus
print(f"Total damage: {total_damage}")

# Large integers (Python handles them automatically)
big_number = 123456789012345678901234567890
print(f"Big number: {big_number}")
```

### Floats (float) - Decimal Numbers
Floats represent numbers with decimal points:

```python
# Creating floats
health_percentage = 87.5
magic_multiplier = 1.25
pi_approximation = 3.14159
temperature = -2.5

print(f"Health: {health_percentage}%")
print(f"Magic multiplier: {magic_multiplier}")

# Float operations
base_price = 10.99
tax_rate = 0.08
total_price = base_price * (1 + tax_rate)
print(f"Total price: ${total_price:.2f}")  # .2f rounds to 2 decimal places

# Scientific notation
speed_of_light = 3e8  # 3 * 10^8
print(f"Speed of light: {speed_of_light}")
```

### Complex Numbers (complex) - Advanced Magic
For advanced mathematical operations:

```python
# Complex numbers (rarely used in basic programming)
magical_frequency = 3 + 4j
print(f"Magical frequency: {magical_frequency}")
```

## Strings: The Language of Spells

Strings represent text and are one of the most important data types:

### Creating Strings
```python
# Different ways to create strings
wizard_name = "Gandalf"
spell_incantation = 'Abracadabra'
mixed_quotes = "It's a beautiful day"
empty_string = ""

# Multi-line strings
ancient_scroll = """
In the beginning was the Code,
and the Code was with the Wizard,
and the Code was good.
"""

print(wizard_name)
print(spell_incantation)
print(ancient_scroll)
```

### String Operations
```python
first_name = "Harry"
last_name = "Potter"

# Concatenation (joining strings)
full_name = first_name + " " + last_name
print(f"Full name: {full_name}")

# String repetition
magic_word = "Abra" * 3  # "AbraAbraAbra"
print(magic_word)

# String length
name_length = len(full_name)
print(f"Name length: {name_length} characters")

# String methods
message = "Welcome to Hogwarts"
print(f"Uppercase: {message.upper()}")
print(f"Lowercase: {message.lower()}")
print(f"Title case: {message.title()}")
print(f"Replace: {message.replace('Hogwarts', 'the Academy')}")
```

### String Formatting
```python
name = "Merlin"
level = 50
health = 95.5

# f-strings (modern Python, recommended)
status = f"{name} is level {level} with {health}% health"
print(status)

# Format method
status2 = "{} is level {} with {:.1f}% health".format(name, level, health)
print(status2)

# Old-style formatting (avoid in new code)
status3 = "%s is level %d with %.1f%% health" % (name, level, health)
print(status3)
```

### String Indexing and Slicing
```python
spell = "Expelliarmus"

# Indexing (starts at 0)
first_letter = spell[0]    # 'E'
last_letter = spell[-1]    # 's'
print(f"First: {first_letter}, Last: {last_letter}")

# Slicing [start:end:step]
first_three = spell[0:3]   # 'Exp'
last_three = spell[-3:]    # 'mus'
middle = spell[2:8]        # 'pellia'
every_second = spell[::2]  # 'Eelams'

print(f"First three: {first_three}")
print(f"Last three: {last_three}")
print(f"Middle: {middle}")
print(f"Every second: {every_second}")
```

## Booleans: The Truth of Magic

Booleans represent truth values - either True or False:

```python
# Creating booleans
is_wizard = True
has_wand = False
is_student = True

print(f"Is wizard: {is_wizard}")
print(f"Has wand: {has_wand}")

# Boolean operations
can_cast_spells = is_wizard and has_wand
print(f"Can cast spells: {can_cast_spells}")

# Comparison operations return booleans
level = 15
is_experienced = level >= 10
print(f"Is experienced: {is_experienced}")

# Truthiness - other values can be treated as True/False
empty_string = ""
non_empty_string = "Hello"
zero = 0
non_zero = 42

print(f"Empty string is truthy: {bool(empty_string)}")      # False
print(f"Non-empty string is truthy: {bool(non_empty_string)}")  # True
print(f"Zero is truthy: {bool(zero)}")                     # False
print(f"Non-zero is truthy: {bool(non_zero)}")             # True
```

## None: The Void

None represents the absence of a value:

```python
# None is used when no value is assigned
current_spell = None
last_enemy = None

print(f"Current spell: {current_spell}")

# Checking for None
if current_spell is None:
    print("No spell is currently selected")

# Functions return None by default if no return statement
def cast_spell():
    print("Casting spell...")
    # No return statement

result = cast_spell()
print(f"Function result: {result}")  # None
```

## Type Checking and Conversion

### Checking Types
```python
name = "Gandalf"
level = 50
health = 95.5
is_alive = True

print(f"Type of name: {type(name)}")        # <class 'str'>
print(f"Type of level: {type(level)}")      # <class 'int'>
print(f"Type of health: {type(health)}")    # <class 'float'>
print(f"Type of is_alive: {type(is_alive)}")# <class 'bool'>

# Using isinstance() for type checking
print(f"Is name a string? {isinstance(name, str)}")
print(f"Is level an integer? {isinstance(level, int)}")
```

### Type Conversion
```python
# Converting between types
number_string = "42"
actual_number = int(number_string)
print(f"Converted to int: {actual_number}")

float_string = "3.14"
actual_float = float(float_string)
print(f"Converted to float: {actual_float}")

number = 42
number_as_string = str(number)
print(f"Converted to string: '{number_as_string}'")

# Converting to boolean
print(f"bool(1): {bool(1)}")        # True
print(f"bool(0): {bool(0)}")        # False
print(f"bool(''): {bool('')}")      # False
print(f"bool('hello'): {bool('hello')}")  # True
```

## Practical Examples

### Character Stats System
```python
def create_character_stats():
    # Different data types for different purposes
    name = input("Enter character name: ")           # string
    level = int(input("Enter level (1-100): "))     # integer
    health_percent = float(input("Enter health %: ")) # float
    is_alive = health_percent > 0                    # boolean
    special_ability = None                           # None (to be assigned later)
    
    # Display character info
    print(f"\n--- Character Stats ---")
    print(f"Name: {name} (type: {type(name).__name__})")
    print(f"Level: {level} (type: {type(level).__name__})")
    print(f"Health: {health_percent}% (type: {type(health_percent).__name__})")
    print(f"Alive: {is_alive} (type: {type(is_alive).__name__})")
    print(f"Special Ability: {special_ability} (type: {type(special_ability).__name__})")
    
    return name, level, health_percent, is_alive, special_ability

# Run the function
# create_character_stats()
```

### Data Type Calculator
```python
def data_type_calculator():
    print("🧮 Magical Data Type Calculator")
    
    # Get input from user
    first_input = input("Enter first value: ")
    second_input = input("Enter second value: ")
    
    # Try to convert to numbers
    try:
        # Try integer first
        num1 = int(first_input)
        num2 = int(second_input)
        result = num1 + num2
        print(f"Integer calculation: {num1} + {num2} = {result}")
    except ValueError:
        try:
            # Try float if integer fails
            num1 = float(first_input)
            num2 = float(second_input)
            result = num1 + num2
            print(f"Float calculation: {num1} + {num2} = {result}")
        except ValueError:
            # If both fail, treat as strings
            result = first_input + second_input
            print(f"String concatenation: '{first_input}' + '{second_input}' = '{result}'")

# Run the calculator
# data_type_calculator()
```

### Type Validation System
```python
def validate_user_input(value, expected_type):
    """Validate if a value matches the expected type"""
    
    if expected_type == "int":
        try:
            int(value)
            return True, int(value)
        except ValueError:
            return False, f"'{value}' is not a valid integer"
    
    elif expected_type == "float":
        try:
            float(value)
            return True, float(value)
        except ValueError:
            return False, f"'{value}' is not a valid float"
    
    elif expected_type == "bool":
        if value.lower() in ["true", "yes", "1", "on"]:
            return True, True
        elif value.lower() in ["false", "no", "0", "off"]:
            return True, False
        else:
            return False, f"'{value}' is not a valid boolean"
    
    elif expected_type == "str":
        return True, str(value)
    
    else:
        return False, f"Unknown expected type: {expected_type}"

# Test the validation
test_cases = [
    ("42", "int"),
    ("3.14", "float"),
    ("hello", "str"),
    ("true", "bool"),
    ("not_a_number", "int")
]

for value, expected in test_cases:
    is_valid, result = validate_user_input(value, expected)
    print(f"'{value}' as {expected}: {is_valid} -> {result}")
```

## Advanced Data Type Concepts

### Immutable vs Mutable
```python
# Strings are immutable (cannot be changed)
spell = "Fireball"
# spell[0] = "f"  # This would cause an error!

# Instead, create a new string
new_spell = "f" + spell[1:]
print(f"Modified spell: {new_spell}")

# Numbers are also immutable
x = 5
y = x  # y gets a copy of x's value
x = 10  # This creates a new integer, doesn't change the original
print(f"x: {x}, y: {y}")  # x: 10, y: 5
```

### Memory and Identity
```python
# Small integers are cached by Python
a = 100
b = 100
print(f"a is b: {a is b}")  # True (same object in memory)

# Large integers are not cached
x = 1000
y = 1000
print(f"x is y: {x is y}")  # May be False (different objects)

# Strings behave similarly
str1 = "hello"
str2 = "hello"
print(f"str1 is str2: {str1 is str2}")  # True (string interning)
```

## Common Data Type Pitfalls

### 1. Integer Division vs Float Division
```python
# In Python 3, division always returns float
result1 = 10 / 3
print(f"10 / 3 = {result1}")  # 3.3333333333333335

# Use // for integer division
result2 = 10 // 3
print(f"10 // 3 = {result2}")  # 3

# Modulo operator for remainder
remainder = 10 % 3
print(f"10 % 3 = {remainder}")  # 1
```

### 2. String and Number Concatenation
```python
name = "Player"
level = 25

# This will cause an error:
# message = "Hello " + name + ", you are level " + level

# Correct ways:
message1 = f"Hello {name}, you are level {level}"
message2 = "Hello " + name + ", you are level " + str(level)
print(message1)
print(message2)
```

### 3. Boolean Conversion Gotchas
```python
# These are all False in boolean context
falsy_values = [False, 0, 0.0, "", None, [], {}]
for value in falsy_values:
    print(f"{repr(value)} is falsy: {not bool(value)}")

# Everything else is True
truthy_values = [True, 1, -1, "hello", [1], {"key": "value"}]
for value in truthy_values:
    print(f"{repr(value)} is truthy: {bool(value)}")
```

## Practice Challenges

Try these exercises to master data types:

```python
# Challenge 1: Type Guesser
def guess_type(value_string):
    """
    Given a string, determine what data type it represents
    Return the type name and converted value
    """
    pass

# Challenge 2: Data Type Converter
def convert_data_types():
    """
    Create a program that:
    1. Takes user input
    2. Tries to convert it to int, float, bool
    3. Shows the results of each conversion
    """
    pass

# Challenge 3: Character Sheet Validator
def validate_character_sheet(name, level, health, is_alive):
    """
    Validate that:
    - name is a non-empty string
    - level is an integer between 1 and 100
    - health is a float between 0.0 and 100.0
    - is_alive is a boolean
    Return True if valid, False with error message if not
    """
    pass
```

## Next Steps

You've now mastered the fundamental data types! These building blocks will be used in everything you create:

- **Variables** store these data types
- **Functions** process and transform them
- **Collections** (lists, dictionaries) organize them
- **Conditionals** make decisions based on them

Next, you'll learn about **collections** - powerful data structures that can hold multiple values and organize complex data!

Remember: *"Understanding the nature of data is the first step to commanding it. Each type has its purpose, its power, and its place in the grand design of code."*
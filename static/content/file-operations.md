# File Operations: Reading Ancient Scrolls

*Master the art of reading from and writing to files*

## The Eternal Library

In the mystical realm of programming, data must often be preserved beyond the life of a single spell execution. Files serve as our ancient scrolls, storing knowledge that persists through time. Learning to read from and write to files is essential for any wizard who wishes to create lasting magic.

## Understanding File Paths

Before we can work with files, we must understand how to locate them in the digital realm:

```python
# Absolute path (full path from root)
absolute_path = "/Users/wizard/spells/fireball.txt"

# Relative path (relative to current directory)
relative_path = "spells/fireball.txt"
relative_path2 = "../scrolls/ancient_wisdom.txt"

# Current directory
current_dir = "."

# Parent directory
parent_dir = ".."
```

## Opening Files: The Basic Incantation

```python
# Basic file opening (not recommended - no automatic cleanup)
file = open("spell_book.txt", "r")
content = file.read()
file.close()  # Must remember to close!

# Better approach: using 'with' statement (automatic cleanup)
with open("spell_book.txt", "r") as file:
    content = file.read()
    # File automatically closes when leaving the 'with' block
```

## File Opening Modes

```python
# Reading modes
with open("spells.txt", "r") as file:      # Read text (default)
    content = file.read()

with open("spells.txt", "rb") as file:     # Read binary
    binary_content = file.read()

# Writing modes
with open("new_spell.txt", "w") as file:   # Write text (overwrites existing)
    file.write("Lightning Bolt: Strikes with electrical fury")

with open("spells.txt", "a") as file:      # Append text (adds to end)
    file.write("\nNew spell added to collection")

with open("data.bin", "wb") as file:       # Write binary
    file.write(b"Binary magical data")

# Read and write mode
with open("spells.txt", "r+") as file:     # Read and write
    content = file.read()
    file.write("\nAdditional content")
```

## Reading Files: Different Approaches

```python
# Method 1: Read entire file at once
with open("ancient_wisdom.txt", "r") as file:
    entire_content = file.read()
    print(entire_content)

# Method 2: Read line by line
with open("spell_list.txt", "r") as file:
    for line in file:
        spell_name = line.strip()  # Remove newline characters
        print(f"Found spell: {spell_name}")

# Method 3: Read all lines into a list
with open("ingredients.txt", "r") as file:
    lines = file.readlines()
    for i, ingredient in enumerate(lines, 1):
        print(f"{i}. {ingredient.strip()}")

# Method 4: Read one line at a time
with open("potion_recipe.txt", "r") as file:
    first_line = file.readline().strip()
    second_line = file.readline().strip()
    print(f"Step 1: {first_line}")
    print(f"Step 2: {second_line}")
```

## Writing Files: Preserving Knowledge

```python
# Writing a single string
spell_description = """Fireball Spell
=================
A powerful offensive spell that launches a blazing orb of destruction.

Mana Cost: 25
Damage: 50-75
Range: 30 meters
Casting Time: 2 seconds
"""

with open("fireball_spell.txt", "w") as file:
    file.write(spell_description)

# Writing multiple lines
spell_names = ["Fireball", "Lightning Bolt", "Ice Shard", "Heal", "Shield"]

with open("available_spells.txt", "w") as file:
    for spell in spell_names:
        file.write(f"{spell}\n")

# Writing with formatting
wizard_stats = {
    "name": "Gandalf",
    "level": 99,
    "mana": 1000,
    "spells_known": 47
}

with open("wizard_profile.txt", "w") as file:
    file.write("=== WIZARD PROFILE ===\n")
    for key, value in wizard_stats.items():
        file.write(f"{key.title()}: {value}\n")
```

## Working with CSV Files

```python
import csv

# Writing CSV data
spell_data = [
    ["Spell Name", "Mana Cost", "Damage", "Type"],
    ["Fireball", 25, 65, "Offensive"],
    ["Heal", 20, -50, "Restorative"],
    ["Shield", 15, 0, "Defensive"],
    ["Lightning", 30, 80, "Offensive"]
]

with open("spell_database.csv", "w", newline="") as file:
    writer = csv.writer(file)
    writer.writerows(spell_data)

# Reading CSV data
with open("spell_database.csv", "r") as file:
    reader = csv.reader(file)
    headers = next(reader)  # Read the header row
    print(f"Headers: {headers}")
    
    for row in reader:
        spell_name, mana_cost, damage, spell_type = row
        print(f"{spell_name}: {mana_cost} mana, {damage} damage ({spell_type})")

# Using DictReader for easier access
with open("spell_database.csv", "r") as file:
    reader = csv.DictReader(file)
    for row in reader:
        print(f"Spell: {row['Spell Name']}")
        print(f"  Mana Cost: {row['Mana Cost']}")
        print(f"  Damage: {row['Damage']}")
        print(f"  Type: {row['Type']}")
        print()
```

## Working with JSON Files

```python
import json

# Writing JSON data
wizard_data = {
    "name": "Merlin",
    "level": 50,
    "class": "Archmage",
    "stats": {
        "health": 800,
        "mana": 1200,
        "strength": 15,
        "intelligence": 95
    },
    "spells": ["Fireball", "Teleport", "Time Stop", "Meteor"],
    "inventory": {
        "gold": 5000,
        "health_potions": 12,
        "mana_crystals": 8
    }
}

# Save to JSON file
with open("wizard_save.json", "w") as file:
    json.dump(wizard_data, file, indent=2)

# Load from JSON file
with open("wizard_save.json", "r") as file:
    loaded_data = json.load(file)
    print(f"Loaded wizard: {loaded_data['name']}")
    print(f"Level: {loaded_data['level']}")
    print(f"Spells known: {len(loaded_data['spells'])}")
```

## Error Handling with Files

```python
def safe_read_spell_book(filename):
    """Safely read a spell book with proper error handling"""
    try:
        with open(filename, "r", encoding="utf-8") as file:
            content = file.read()
            return content
    except FileNotFoundError:
        print(f"Spell book '{filename}' not found in the mystical library!")
        return None
    except PermissionError:
        print(f"The spell book '{filename}' is protected by powerful wards!")
        return None
    except UnicodeDecodeError:
        print(f"The spell book '{filename}' contains ancient runes that cannot be decoded!")
        return None
    except Exception as e:
        print(f"Unexpected error reading '{filename}': {e}")
        return None

def safe_write_spell(filename, spell_content):
    """Safely write a spell with error handling"""
    try:
        with open(filename, "w", encoding="utf-8") as file:
            file.write(spell_content)
            print(f"Spell successfully inscribed in '{filename}'")
            return True
    except PermissionError:
        print(f"Cannot write to '{filename}' - location is magically protected!")
        return False
    except OSError as e:
        print(f"System error writing to '{filename}': {e}")
        return False
    except Exception as e:
        print(f"Unexpected error writing spell: {e}")
        return False

# Usage
spell_content = safe_read_spell_book("fireball.txt")
if spell_content:
    print("Spell book contents:")
    print(spell_content)

success = safe_write_spell("new_spell.txt", "Ice Blast: Freezes enemies solid")
```

## Working with File Paths (pathlib)

```python
from pathlib import Path

# Create Path objects
spell_dir = Path("spells")
spell_file = spell_dir / "fireball.txt"  # Equivalent to "spells/fireball.txt"

# Check if path exists
if spell_file.exists():
    print(f"Found spell file: {spell_file}")

# Check if it's a file or directory
if spell_file.is_file():
    print("It's a file")
elif spell_file.is_dir():
    print("It's a directory")

# Get file information
if spell_file.exists():
    print(f"File size: {spell_file.stat().st_size} bytes")
    print(f"File name: {spell_file.name}")
    print(f"File stem: {spell_file.stem}")  # Name without extension
    print(f"File suffix: {spell_file.suffix}")  # Extension
    print(f"Parent directory: {spell_file.parent}")

# Create directories
spell_dir.mkdir(exist_ok=True)  # Create directory if it doesn't exist

# List files in directory
for file_path in spell_dir.glob("*.txt"):
    print(f"Found text file: {file_path}")

# Read/write using pathlib
spell_file.write_text("Lightning Bolt: Strikes with electrical energy")
content = spell_file.read_text()
print(content)
```

## Practical Example: Spell Book Manager

```python
import json
from pathlib import Path
from datetime import datetime

class SpellBookManager:
    def __init__(self, data_dir="spell_data"):
        self.data_dir = Path(data_dir)
        self.data_dir.mkdir(exist_ok=True)
        self.spell_book_file = self.data_dir / "spell_book.json"
        self.load_spell_book()
    
    def load_spell_book(self):
        """Load spell book from file or create new one"""
        try:
            if self.spell_book_file.exists():
                with open(self.spell_book_file, "r") as file:
                    self.spells = json.load(file)
            else:
                self.spells = {}
                self.save_spell_book()
        except Exception as e:
            print(f"Error loading spell book: {e}")
            self.spells = {}
    
    def save_spell_book(self):
        """Save spell book to file"""
        try:
            with open(self.spell_book_file, "w") as file:
                json.dump(self.spells, file, indent=2)
            return True
        except Exception as e:
            print(f"Error saving spell book: {e}")
            return False
    
    def add_spell(self, name, description, mana_cost, damage=0):
        """Add a new spell to the book"""
        spell_data = {
            "description": description,
            "mana_cost": mana_cost,
            "damage": damage,
            "created": datetime.now().isoformat(),
            "times_cast": 0
        }
        
        self.spells[name] = spell_data
        
        if self.save_spell_book():
            print(f"Spell '{name}' added to the spell book!")
            return True
        return False
    
    def cast_spell(self, name):
        """Cast a spell (increment usage counter)"""
        if name in self.spells:
            self.spells[name]["times_cast"] += 1
            self.save_spell_book()
            
            spell = self.spells[name]
            print(f"Casting {name}!")
            print(f"Description: {spell['description']}")
            print(f"Mana Cost: {spell['mana_cost']}")
            if spell['damage'] > 0:
                print(f"Damage: {spell['damage']}")
            print(f"Times cast: {spell['times_cast']}")
            return True
        else:
            print(f"Spell '{name}' not found in spell book!")
            return False
    
    def list_spells(self):
        """List all spells in the book"""
        if not self.spells:
            print("The spell book is empty!")
            return
        
        print("=== SPELL BOOK ===")
        for name, data in self.spells.items():
            print(f"\n{name}:")
            print(f"  Description: {data['description']}")
            print(f"  Mana Cost: {data['mana_cost']}")
            if data['damage'] > 0:
                print(f"  Damage: {data['damage']}")
            print(f"  Times Cast: {data['times_cast']}")
    
    def export_spell_list(self, filename="spell_list.txt"):
        """Export spell names to a text file"""
        try:
            with open(filename, "w") as file:
                file.write("=== AVAILABLE SPELLS ===\n\n")
                for name in sorted(self.spells.keys()):
                    file.write(f"- {name}\n")
            print(f"Spell list exported to {filename}")
            return True
        except Exception as e:
            print(f"Error exporting spell list: {e}")
            return False

# Usage example
spell_manager = SpellBookManager()

# Add some spells
spell_manager.add_spell("Fireball", "Launches a blazing orb of destruction", 25, 65)
spell_manager.add_spell("Heal", "Restores health to the target", 20, -50)
spell_manager.add_spell("Shield", "Creates a protective magical barrier", 15)

# Cast spells
spell_manager.cast_spell("Fireball")
spell_manager.cast_spell("Heal")

# List all spells
spell_manager.list_spells()

# Export spell list
spell_manager.export_spell_list()
```

## File Processing Patterns

```python
# Pattern 1: Processing large files line by line (memory efficient)
def count_spell_occurrences(filename, target_spell):
    """Count occurrences of a spell in a large log file"""
    count = 0
    try:
        with open(filename, "r") as file:
            for line_num, line in enumerate(file, 1):
                if target_spell.lower() in line.lower():
                    count += 1
                    print(f"Line {line_num}: {line.strip()}")
    except FileNotFoundError:
        print(f"Log file '{filename}' not found!")
        return 0
    
    return count

# Pattern 2: Backup and modify files safely
def update_spell_config(filename, updates):
    """Safely update a configuration file with backup"""
    import shutil
    
    # Create backup
    backup_file = f"{filename}.backup"
    try:
        shutil.copy2(filename, backup_file)
        print(f"Backup created: {backup_file}")
        
        # Read current config
        with open(filename, "r") as file:
            lines = file.readlines()
        
        # Apply updates
        with open(filename, "w") as file:
            for line in lines:
                modified_line = line
                for old_value, new_value in updates.items():
                    if old_value in line:
                        modified_line = line.replace(old_value, new_value)
                        print(f"Updated: {old_value} -> {new_value}")
                file.write(modified_line)
        
        print("Configuration updated successfully!")
        return True
        
    except Exception as e:
        print(f"Error updating config: {e}")
        # Restore from backup if something went wrong
        if Path(backup_file).exists():
            shutil.copy2(backup_file, filename)
            print("Restored from backup")
        return False

# Pattern 3: Batch file processing
def process_all_spell_files(directory):
    """Process all spell files in a directory"""
    spell_dir = Path(directory)
    
    if not spell_dir.exists():
        print(f"Directory '{directory}' not found!")
        return
    
    spell_files = list(spell_dir.glob("*.txt"))
    
    if not spell_files:
        print("No spell files found!")
        return
    
    print(f"Processing {len(spell_files)} spell files...")
    
    for spell_file in spell_files:
        try:
            content = spell_file.read_text()
            word_count = len(content.split())
            line_count = len(content.splitlines())
            
            print(f"{spell_file.name}: {word_count} words, {line_count} lines")
            
        except Exception as e:
            print(f"Error processing {spell_file.name}: {e}")

# Usage
count = count_spell_occurrences("battle_log.txt", "fireball")
print(f"Fireball was cast {count} times")

updates = {"old_spell_name": "new_spell_name", "25": "30"}
update_spell_config("spell_config.txt", updates)

process_all_spell_files("spells")
```

## Best Practices for File Operations

1. **Always use context managers (`with` statements)** for automatic resource cleanup
2. **Handle exceptions** appropriately - files might not exist, be locked, or have permission issues
3. **Specify encoding** explicitly when working with text files (usually `utf-8`)
4. **Use pathlib** for cross-platform path handling
5. **Create backups** before modifying important files
6. **Process large files line by line** to avoid memory issues
7. **Validate file contents** before processing
8. **Use appropriate file modes** for your needs

## Practice Challenges

1. **Log Analyzer**: Create a program that reads log files and generates statistics about spell usage.

2. **Configuration Manager**: Build a system to read, modify, and validate configuration files.

3. **Data Converter**: Write a program that converts between different file formats (CSV to JSON, etc.).

4. **File Organizer**: Create a tool that organizes files in a directory based on their content or metadata.

## The Path Forward

File operations are fundamental to creating persistent, data-driven applications. Whether you're saving game states, processing configuration files, or analyzing data, these skills will serve you well in your programming journey.

*"The wise wizard knows that knowledge preserved is knowledge that endures. Master the art of files, and your spells will outlast the ages."*

---

**Next**: Continue your journey with Modules and Imports to learn how to organize and reuse your magical code.
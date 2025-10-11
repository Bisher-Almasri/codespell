# Modules: Libraries of Power

*Learn to import and use external libraries and create your own modules*

## The Great Library of Code

In the mystical realm of programming, no wizard works alone. The greatest spells are built upon the foundations laid by countless other mages who came before. Modules are Python's way of organizing and sharing code - they are the scrolls and tomes that contain reusable magic.

## What Are Modules?

A module is simply a Python file containing definitions, statements, and functions. When you create a `.py` file, you've created a module! Modules allow you to:

- Organize related code together
- Reuse code across multiple programs
- Access powerful libraries created by other developers
- Keep your main program clean and focused

## Creating Your First Module

Let's create a simple spell module:

```python
# File: spell_utils.py
"""
A collection of utility functions for spell casting
"""

def calculate_mana_cost(base_cost, wizard_level, spell_modifier=1.0):
    """Calculate the actual mana cost for a spell"""
    level_discount = wizard_level * 0.02  # 2% discount per level
    final_cost = base_cost * spell_modifier * (1 - level_discount)
    return max(1, int(final_cost))  # Minimum cost of 1

def spell_damage(base_damage, intelligence, critical_chance=0.1):
    """Calculate spell damage based on intelligence"""
    import random
    
    # Intelligence bonus
    damage = base_damage + (intelligence * 0.5)
    
    # Critical hit chance
    if random.random() < critical_chance:
        damage *= 2
        print("Critical hit!")
    
    return int(damage)

def format_spell_description(name, description, mana_cost, damage=None):
    """Format a spell description for display"""
    result = f"=== {name.upper()} ===\n"
    result += f"Description: {description}\n"
    result += f"Mana Cost: {mana_cost}\n"
    
    if damage:
        result += f"Damage: {damage}\n"
    
    return result

# Module-level variables
SPELL_SCHOOLS = ["Evocation", "Illusion", "Enchantment", "Divination", "Necromancy"]
MAX_SPELL_LEVEL = 9

# This code runs when the module is imported
print("Spell utilities loaded successfully!")
```

## Importing Modules

Now let's use our spell module:

```python
# File: main_program.py

# Method 1: Import the entire module
import spell_utils

wizard_level = 10
base_cost = 25
actual_cost = spell_utils.calculate_mana_cost(base_cost, wizard_level)
print(f"Mana cost: {actual_cost}")

# Access module variables
print(f"Available spell schools: {spell_utils.SPELL_SCHOOLS}")

# Method 2: Import specific functions
from spell_utils import calculate_mana_cost, spell_damage

# Now we can use them directly
cost = calculate_mana_cost(30, 15)
damage = spell_damage(50, 25)

# Method 3: Import with aliases
from spell_utils import format_spell_description as format_spell
import spell_utils as spells

description = format_spell("Fireball", "Launches blazing destruction", 25, 65)
print(description)

# Method 4: Import everything (use sparingly!)
from spell_utils import *

# Now all functions are available directly
schools = SPELL_SCHOOLS
max_level = MAX_SPELL_LEVEL
```

## The Python Standard Library

Python comes with a vast collection of built-in modules:

```python
# Working with dates and times
import datetime

now = datetime.datetime.now()
print(f"Current time: {now}")

birthday = datetime.date(1990, 5, 15)
age = (datetime.date.today() - birthday).days // 365
print(f"Age: {age} years")

# Random number generation
import random

# Random spell selection
spells = ["Fireball", "Lightning", "Ice Shard", "Heal"]
random_spell = random.choice(spells)
print(f"Random spell: {random_spell}")

# Random damage
damage = random.randint(20, 50)
print(f"Damage: {damage}")

# Mathematical operations
import math

# Calculate spell range using distance formula
x1, y1 = 0, 0  # Wizard position
x2, y2 = 30, 40  # Target position
distance = math.sqrt((x2 - x1)**2 + (y2 - y1)**2)
print(f"Distance to target: {distance:.2f} meters")

# Trigonometry for spell trajectories
angle = math.radians(45)  # 45 degrees in radians
trajectory_x = math.cos(angle) * 100
trajectory_y = math.sin(angle) * 100

# Working with JSON data
import json

wizard_data = {
    "name": "Gandalf",
    "level": 50,
    "spells": ["Fireball", "Heal", "Teleport"]
}

# Convert to JSON string
json_string = json.dumps(wizard_data, indent=2)
print(json_string)

# Parse JSON string
parsed_data = json.loads(json_string)
print(f"Wizard name: {parsed_data['name']}")
```

## Creating Package Structures

For larger projects, organize modules into packages:

```
magic_system/
    __init__.py
    spells/
        __init__.py
        offensive.py
        defensive.py
        utility.py
    characters/
        __init__.py
        wizard.py
        warrior.py
    items/
        __init__.py
        weapons.py
        potions.py
```

```python
# File: magic_system/spells/offensive.py
def fireball(caster_level, target_defense=0):
    """Cast a fireball spell"""
    base_damage = 30 + (caster_level * 2)
    actual_damage = max(1, base_damage - target_defense)
    return {
        "spell": "Fireball",
        "damage": actual_damage,
        "mana_cost": 25,
        "description": "A blazing orb of destruction"
    }

def lightning_bolt(caster_level, target_defense=0):
    """Cast a lightning bolt spell"""
    base_damage = 40 + (caster_level * 2.5)
    actual_damage = max(1, base_damage - target_defense)
    return {
        "spell": "Lightning Bolt",
        "damage": actual_damage,
        "mana_cost": 30,
        "description": "Strikes with electrical fury"
    }

# File: magic_system/spells/__init__.py
"""
Spell system for the magic game
"""

from .offensive import fireball, lightning_bolt
from .defensive import shield, heal
from .utility import teleport, detect_magic

# Package-level variables
SPELL_CATEGORIES = ["offensive", "defensive", "utility"]

# File: magic_system/__init__.py
"""
Magic System Package
A comprehensive system for magical combat and utility
"""

from . import spells
from . import characters
from . import items

__version__ = "1.0.0"
__author__ = "The Arcane Council"

# Usage in main program
import magic_system

# Use spells from the package
result = magic_system.spells.fireball(caster_level=10)
print(f"Fireball damage: {result['damage']}")

# Or import specific modules
from magic_system.spells import offensive

lightning_result = offensive.lightning_bolt(15)
print(f"Lightning damage: {lightning_result['damage']}")
```

## Third-Party Libraries

Python's ecosystem includes thousands of third-party libraries:

```python
# First, install libraries using pip:
# pip install requests beautifulsoup4 pillow

# Working with HTTP requests
import requests

def fetch_spell_data(spell_id):
    """Fetch spell data from a magical API"""
    try:
        response = requests.get(f"https://api.spells.com/spell/{spell_id}")
        if response.status_code == 200:
            return response.json()
        else:
            print(f"Failed to fetch spell data: {response.status_code}")
            return None
    except requests.RequestException as e:
        print(f"Network error: {e}")
        return None

# Web scraping with BeautifulSoup
from bs4 import BeautifulSoup

def parse_spell_wiki(html_content):
    """Parse spell information from HTML"""
    soup = BeautifulSoup(html_content, 'html.parser')
    
    spell_name = soup.find('h1', class_='spell-title')
    description = soup.find('div', class_='spell-description')
    
    return {
        'name': spell_name.text if spell_name else 'Unknown',
        'description': description.text if description else 'No description'
    }

# Image processing with Pillow
from PIL import Image, ImageDraw, ImageFont

def create_spell_icon(spell_name, color=(255, 100, 100)):
    """Create a simple spell icon"""
    # Create a new image
    img = Image.new('RGB', (64, 64), color=color)
    draw = ImageDraw.Draw(img)
    
    # Add spell name text
    try:
        font = ImageFont.truetype("arial.ttf", 12)
    except:
        font = ImageFont.load_default()
    
    # Calculate text position
    text_width, text_height = draw.textsize(spell_name[:3], font=font)
    x = (64 - text_width) // 2
    y = (64 - text_height) // 2
    
    draw.text((x, y), spell_name[:3], fill=(255, 255, 255), font=font)
    
    return img

# Usage
spell_icon = create_spell_icon("Fireball", (255, 50, 0))
spell_icon.save("fireball_icon.png")
```

## Module Search Path and PYTHONPATH

```python
import sys

# See where Python looks for modules
print("Python module search path:")
for path in sys.path:
    print(f"  {path}")

# Add custom paths
sys.path.append("/path/to/my/custom/modules")

# Environment variable PYTHONPATH can also add paths
# export PYTHONPATH="/path/to/modules:$PYTHONPATH"
```

## Advanced Module Concepts

### Module Attributes and Introspection

```python
# File: advanced_spells.py
"""
Advanced spell casting module with metadata
"""

__version__ = "2.1.0"
__author__ = "Master Wizard"
__all__ = ["cast_spell", "list_spells"]  # Controls what * imports

def cast_spell(name):
    """Cast a spell by name"""
    return f"Casting {name}!"

def list_spells():
    """List available spells"""
    return ["Fireball", "Lightning", "Heal"]

def _internal_function():
    """Private function (by convention)"""
    return "This is internal"

# Usage
import advanced_spells

print(f"Module version: {advanced_spells.__version__}")
print(f"Module author: {advanced_spells.__author__}")
print(f"Module docstring: {advanced_spells.__doc__}")
print(f"Module file: {advanced_spells.__file__}")

# List all attributes
print("Module attributes:")
for attr in dir(advanced_spells):
    if not attr.startswith('_'):
        print(f"  {attr}")
```

### Conditional Imports

```python
# Handle optional dependencies gracefully
try:
    import numpy as np
    HAS_NUMPY = True
except ImportError:
    HAS_NUMPY = False
    print("NumPy not available - some features disabled")

def calculate_spell_matrix(spells):
    """Calculate spell effectiveness matrix"""
    if HAS_NUMPY:
        # Use NumPy for efficient calculations
        return np.array(spells).reshape(-1, 1)
    else:
        # Fallback to pure Python
        return [[spell] for spell in spells]

# Platform-specific imports
import sys

if sys.platform == "win32":
    import winsound
    def play_spell_sound():
        winsound.Beep(1000, 500)
elif sys.platform == "darwin":  # macOS
    import os
    def play_spell_sound():
        os.system("say 'Spell cast!'")
else:  # Linux and others
    def play_spell_sound():
        print("*magical sound effect*")
```

### Reloading Modules (Development)

```python
import importlib

# Reload a module during development
import spell_utils
importlib.reload(spell_utils)

# This is useful when you're modifying modules and want to test changes
# without restarting your Python session
```

## Practical Example: Game Module System

```python
# File: game_engine.py
"""
Simple game engine for a text-based RPG
"""

import random
import json
from pathlib import Path

class GameEngine:
    def __init__(self):
        self.player = None
        self.current_location = None
        self.game_data = {}
        self.load_game_data()
    
    def load_game_data(self):
        """Load game data from JSON files"""
        data_dir = Path("game_data")
        
        # Load different types of game data
        data_files = {
            "spells": "spells.json",
            "locations": "locations.json",
            "items": "items.json",
            "monsters": "monsters.json"
        }
        
        for data_type, filename in data_files.items():
            file_path = data_dir / filename
            try:
                if file_path.exists():
                    with open(file_path, 'r') as f:
                        self.game_data[data_type] = json.load(f)
                else:
                    self.game_data[data_type] = {}
                    print(f"Warning: {filename} not found")
            except Exception as e:
                print(f"Error loading {filename}: {e}")
                self.game_data[data_type] = {}

# File: character.py
"""
Character classes and management
"""

class Character:
    def __init__(self, name, character_class="Wizard"):
        self.name = name
        self.character_class = character_class
        self.level = 1
        self.health = 100
        self.mana = 50
        self.experience = 0
        self.inventory = {}
        self.spells = []
    
    def add_experience(self, amount):
        """Add experience and handle level ups"""
        self.experience += amount
        
        # Simple leveling system
        required_exp = self.level * 100
        if self.experience >= required_exp:
            self.level_up()
    
    def level_up(self):
        """Level up the character"""
        self.level += 1
        self.health += 20
        self.mana += 10
        print(f"{self.name} reached level {self.level}!")
    
    def cast_spell(self, spell_name, target=None):
        """Cast a spell if known and have enough mana"""
        if spell_name not in self.spells:
            return f"{self.name} doesn't know {spell_name}!"
        
        # This would integrate with the spell system
        mana_cost = 25  # Simplified
        if self.mana < mana_cost:
            return f"{self.name} doesn't have enough mana!"
        
        self.mana -= mana_cost
        return f"{self.name} casts {spell_name}!"

# File: main_game.py
"""
Main game loop and user interface
"""

from game_engine import GameEngine
from character import Character
import spell_utils

def main():
    """Main game function"""
    print("=== WELCOME TO THE MYSTICAL REALM ===")
    
    # Initialize game systems
    engine = GameEngine()
    
    # Create player character
    player_name = input("Enter your wizard's name: ")
    player = Character(player_name, "Wizard")
    
    # Add starting spells
    player.spells = ["Fireball", "Heal"]
    
    # Game loop
    while True:
        print(f"\n{player.name} (Level {player.level})")
        print(f"Health: {player.health}, Mana: {player.mana}")
        print("\nWhat would you like to do?")
        print("1. Cast spell")
        print("2. View character")
        print("3. Quit")
        
        choice = input("> ").strip()
        
        if choice == "1":
            print("Available spells:", ", ".join(player.spells))
            spell = input("Which spell? ").strip()
            result = player.cast_spell(spell)
            print(result)
        
        elif choice == "2":
            print(f"\nCharacter: {player.name}")
            print(f"Class: {player.character_class}")
            print(f"Level: {player.level}")
            print(f"Experience: {player.experience}")
            print(f"Health: {player.health}")
            print(f"Mana: {player.mana}")
            print(f"Known Spells: {', '.join(player.spells)}")
        
        elif choice == "3":
            print("Farewell, brave wizard!")
            break
        
        else:
            print("Invalid choice!")

if __name__ == "__main__":
    main()
```

## Best Practices for Modules

1. **Use descriptive names** for modules and functions
2. **Include docstrings** to document your modules
3. **Follow PEP 8** naming conventions
4. **Keep modules focused** on a single responsibility
5. **Use `__all__`** to control what gets imported with `*`
6. **Handle import errors** gracefully for optional dependencies
7. **Organize related modules** into packages
8. **Version your modules** for better maintenance

## Common Module Patterns

```python
# Pattern 1: Configuration module
# config.py
DATABASE_URL = "sqlite:///game.db"
DEBUG_MODE = True
MAX_PLAYERS = 100

# Pattern 2: Constants module
# constants.py
SPELL_SCHOOLS = ["Evocation", "Illusion", "Enchantment"]
DAMAGE_TYPES = ["Fire", "Ice", "Lightning", "Physical"]
MAX_LEVEL = 100

# Pattern 3: Utility module
# utils.py
def clamp(value, min_val, max_val):
    """Clamp a value between min and max"""
    return max(min_val, min(value, max_val))

def format_time(seconds):
    """Format seconds into readable time"""
    minutes, seconds = divmod(seconds, 60)
    return f"{minutes:02d}:{seconds:02d}"

# Pattern 4: Factory module
# spell_factory.py
def create_spell(spell_type, **kwargs):
    """Factory function to create different spell types"""
    if spell_type == "offensive":
        return OffensiveSpell(**kwargs)
    elif spell_type == "defensive":
        return DefensiveSpell(**kwargs)
    else:
        raise ValueError(f"Unknown spell type: {spell_type}")
```

## Practice Challenges

1. **Spell Library**: Create a comprehensive spell system with multiple modules for different spell schools.

2. **Game Save System**: Build a module that can save and load game states using JSON or pickle.

3. **Plugin System**: Design a system where new spells can be added as separate modules without modifying the core game.

4. **Configuration Manager**: Create a module that handles game settings with validation and default values.

## The Path Forward

Modules are the building blocks of larger Python applications. They allow you to organize code, reuse functionality, and leverage the work of other developers. Master the art of modules, and you'll be able to create complex, maintainable magical systems.

*"The greatest wizards stand on the shoulders of those who came before. Learn to use the libraries of power, and your magic will know no bounds."*

---

**Next**: Continue your journey with Classes and Objects to learn how to create your own magical blueprints and entities.
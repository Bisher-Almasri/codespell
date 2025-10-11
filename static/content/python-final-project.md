# Final Project: Your First Spell

*Combine all your knowledge to create a complete Python application*

## The Ultimate Challenge

You've learned the fundamental arts of Python magic. Now it's time to weave everything together into your first complete spell - a text-based RPG game that demonstrates all the concepts you've mastered.

## Project Overview: Mystical Adventure

Create a simple text-based adventure game featuring:
- Character creation and management
- Spell casting system
- Inventory management
- Simple combat
- Save/load functionality

## Core Requirements

### 1. Character Class
```python
class Character:
    def __init__(self, name, character_class="Wizard"):
        self.name = name
        self.character_class = character_class
        self.level = 1
        self.health = 100
        self.mana = 50
        self.inventory = {}
        self.spells = ["Heal", "Fireball"]
    
    def cast_spell(self, spell_name, target=None):
        # Implement spell casting logic
        pass
    
    def add_item(self, item, quantity=1):
        # Implement inventory management
        pass
    
    def save_character(self, filename):
        # Save character to JSON file
        pass
    
    @classmethod
    def load_character(cls, filename):
        # Load character from JSON file
        pass
```

### 2. Game Loop Structure
```python
def main_game():
    print("=== MYSTICAL ADVENTURE ===")
    
    # Character creation or loading
    character = create_or_load_character()
    
    while True:
        display_menu()
        choice = input("Choose your action: ").strip()
        
        if choice == "1":
            explore_area(character)
        elif choice == "2":
            cast_spell_menu(character)
        elif choice == "3":
            view_inventory(character)
        elif choice == "4":
            save_game(character)
        elif choice == "5":
            print("Farewell, brave adventurer!")
            break
        else:
            print("Invalid choice!")

if __name__ == "__main__":
    main_game()
```

## Implementation Challenges

### Challenge 1: Spell System
Create a dictionary-based spell system:
```python
SPELLS = {
    "Fireball": {"damage": 30, "mana_cost": 20, "type": "offensive"},
    "Heal": {"healing": 25, "mana_cost": 15, "type": "restorative"},
    "Shield": {"defense": 10, "mana_cost": 10, "type": "defensive"}
}
```

### Challenge 2: Random Encounters
Use the `random` module to create encounters:
```python
import random

def random_encounter():
    encounters = [
        "You find a treasure chest!",
        "A wild goblin appears!",
        "You discover a magical fountain.",
        "Nothing happens... this time."
    ]
    return random.choice(encounters)
```

### Challenge 3: File Operations
Implement save/load using JSON:
```python
import json

def save_game(character, filename="savegame.json"):
    try:
        with open(filename, "w") as file:
            json.dump(character.__dict__, file, indent=2)
        print("Game saved successfully!")
    except Exception as e:
        print(f"Error saving game: {e}")
```

### Challenge 4: Error Handling
Add robust error handling throughout:
```python
def safe_input(prompt, input_type=str):
    while True:
        try:
            user_input = input(prompt)
            if input_type == int:
                return int(user_input)
            return user_input
        except ValueError:
            print("Invalid input! Please try again.")
        except KeyboardInterrupt:
            print("\nGame interrupted!")
            return None
```

## Bonus Features

If you complete the basic requirements, try adding:

1. **Multiple Character Classes** with different abilities
2. **Equipment System** with weapons and armor
3. **Experience and Leveling** system
4. **Multiple Areas** to explore
5. **Quest System** with objectives

## Sample Game Flow

```
=== MYSTICAL ADVENTURE ===

Welcome, brave soul! What is your name? Gandalf

Choose your class:
1. Wizard (High mana, magical spells)
2. Warrior (High health, physical attacks)
3. Rogue (Balanced, stealth abilities)

Your choice: 1

Welcome, Gandalf the Wizard!

=== MAIN MENU ===
1. Explore
2. Cast Spell
3. View Inventory
4. Save Game
5. Quit

Your choice: 1

You venture into the mystical forest...
You find a treasure chest!
You obtained: Magic Potion x1

=== MAIN MENU ===
Your choice: 2

Available Spells:
1. Fireball (20 mana) - Offensive
2. Heal (15 mana) - Restorative

Cast which spell: 1
You cast Fireball! The forest lights up with magical energy.
```

## Testing Your Project

Create test scenarios for:
- Character creation
- Spell casting with insufficient mana
- Inventory management
- Save/load functionality
- Invalid user inputs

## Submission Guidelines

Your final project should include:
1. **main.py** - Main game file
2. **character.py** - Character class (optional separate file)
3. **README.md** - Instructions on how to play
4. **Sample save file** - Example of saved game data

## Success Criteria

Your project demonstrates mastery when it includes:
- ✅ Variables and data types
- ✅ Functions with parameters and return values
- ✅ Loops for game flow
- ✅ Conditionals for decision making
- ✅ Lists/dictionaries for data storage
- ✅ File operations for save/load
- ✅ Error handling for user input
- ✅ Classes and objects
- ✅ Modules (if using separate files)

## The Path Forward

This project combines everything you've learned into a cohesive application. Take your time, experiment, and don't be afraid to add your own creative touches. Remember - every master wizard started with their first spell!

*"The journey of a thousand spells begins with a single line of code. Cast your first complete spell, and watch as the mystical realm of programming unfolds before you."*

---

**Congratulations!** You've completed the Foundations of Dark Magic. You're now ready to advance to Web Sorcery or dive deeper into the Algorithms of the Void.
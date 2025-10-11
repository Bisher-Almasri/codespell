# Lists: Containers of Power

Welcome, data conjurer, to the mystical art of lists and arrays - the fundamental containers that hold multiple pieces of magical essence in organized collections.

## What Are Lists?

Lists (called arrays in many programming languages) are like enchanted containers that can hold multiple items in a specific order. Think of them as:
- **Magical inventories** that store multiple items
- **Spell components** organized in sequence
- **Collections of power** that can be manipulated as a whole

## Creating Lists in Python

### Basic List Creation
```python
# Empty list
empty_inventory = []
empty_spells = list()

# List with initial items
spell_components = ["dragon scale", "phoenix feather", "moonstone", "silver dust"]
damage_values = [25, 40, 15, 60, 35]
mixed_inventory = ["health potion", 3, True, "magic sword", 99.5]

# List from range
levels = list(range(1, 11))  # [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
even_numbers = list(range(0, 21, 2))  # [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20]

print("Spell components:", spell_components)
print("Damage values:", damage_values)
print("Levels:", levels)
```

### List Comprehensions - Magical Transformations
```python
# Basic list comprehension
squares = [x**2 for x in range(1, 6)]  # [1, 4, 9, 16, 25]

# With conditions
even_squares = [x**2 for x in range(1, 11) if x % 2 == 0]  # [4, 16, 36, 64, 100]

# String transformations
spells = ["fireball", "heal", "shield", "lightning"]
capitalized_spells = [spell.title() for spell in spells]
long_spells = [spell for spell in spells if len(spell) > 4]

# More complex transformations
spell_info = [f"{spell.title()} ({len(spell)} letters)" for spell in spells]

print("Squares:", squares)
print("Even squares:", even_squares)
print("Capitalized spells:", capitalized_spells)
print("Long spells:", long_spells)
print("Spell info:", spell_info)
```

## Accessing List Elements

### Indexing and Slicing
```python
magical_creatures = ["dragon", "phoenix", "unicorn", "griffin", "basilisk"]

# Positive indexing (starts at 0)
first_creature = magical_creatures[0]    # "dragon"
second_creature = magical_creatures[1]   # "phoenix"
last_creature = magical_creatures[4]     # "basilisk"

# Negative indexing (starts from end)
last_creature_alt = magical_creatures[-1]   # "basilisk"
second_last = magical_creatures[-2]         # "griffin"

print(f"First: {first_creature}")
print(f"Last: {last_creature}")
print(f"Second to last: {second_last}")

# Slicing [start:end:step]
first_three = magical_creatures[0:3]     # ["dragon", "phoenix", "unicorn"]
last_two = magical_creatures[-2:]        # ["griffin", "basilisk"]
middle_creatures = magical_creatures[1:4] # ["phoenix", "unicorn", "griffin"]
every_other = magical_creatures[::2]     # ["dragon", "unicorn", "basilisk"]
reversed_list = magical_creatures[::-1]  # ["basilisk", "griffin", "unicorn", "phoenix", "dragon"]

print("First three:", first_three)
print("Last two:", last_two)
print("Middle:", middle_creatures)
print("Every other:", every_other)
print("Reversed:", reversed_list)
```

### Safe Access with Error Handling
```python
def safe_get_item(lst, index, default=None):
    """Safely get an item from a list without causing an error"""
    try:
        return lst[index]
    except IndexError:
        return default

spells = ["fireball", "heal", "shield"]

# Safe access
first_spell = safe_get_item(spells, 0)      # "fireball"
missing_spell = safe_get_item(spells, 10)   # None
missing_with_default = safe_get_item(spells, 10, "unknown spell")  # "unknown spell"

print(f"First spell: {first_spell}")
print(f"Missing spell: {missing_spell}")
print(f"Missing with default: {missing_with_default}")
```

## Modifying Lists

### Adding Elements
```python
inventory = ["sword", "shield"]

# Add single item to end
inventory.append("potion")
print("After append:", inventory)  # ["sword", "shield", "potion"]

# Add multiple items to end
inventory.extend(["scroll", "gem"])
print("After extend:", inventory)  # ["sword", "shield", "potion", "scroll", "gem"]

# Insert at specific position
inventory.insert(1, "magic ring")
print("After insert:", inventory)  # ["sword", "magic ring", "shield", "potion", "scroll", "gem"]

# Concatenation (creates new list)
new_items = ["cloak", "boots"]
full_inventory = inventory + new_items
print("Full inventory:", full_inventory)
```

### Removing Elements
```python
spell_list = ["fireball", "heal", "shield", "lightning", "heal", "teleport"]

# Remove by value (first occurrence)
spell_list.remove("heal")
print("After remove:", spell_list)  # ["fireball", "shield", "lightning", "heal", "teleport"]

# Remove by index
removed_spell = spell_list.pop(2)  # Removes "lightning"
print("Removed spell:", removed_spell)
print("After pop:", spell_list)  # ["fireball", "shield", "heal", "teleport"]

# Remove last item
last_spell = spell_list.pop()
print("Last spell:", last_spell)  # "teleport"
print("Final list:", spell_list)  # ["fireball", "shield", "heal"]

# Clear all items
backup_list = spell_list.copy()
spell_list.clear()
print("Cleared list:", spell_list)  # []
print("Backup:", backup_list)  # ["fireball", "shield", "heal"]
```

### Modifying Elements
```python
weapons = ["sword", "bow", "staff", "dagger"]

# Change single element
weapons[0] = "enchanted sword"
print("Modified weapons:", weapons)

# Change multiple elements with slicing
weapons[1:3] = ["magic bow", "wizard staff"]
print("After slice modification:", weapons)

# Replace with different number of elements
weapons[2:4] = ["crystal orb", "flame sword", "ice spear"]
print("After replacement:", weapons)
```

## List Methods and Operations

### Searching and Counting
```python
spell_components = ["fire", "water", "earth", "air", "fire", "spirit", "fire"]

# Find index of first occurrence
fire_index = spell_components.index("fire")
print(f"First 'fire' at index: {fire_index}")

# Count occurrences
fire_count = spell_components.count("fire")
print(f"'fire' appears {fire_count} times")

# Check if item exists
has_water = "water" in spell_components
has_lightning = "lightning" in spell_components
print(f"Has water: {has_water}")
print(f"Has lightning: {has_lightning}")

# Find all indices of an item
def find_all_indices(lst, item):
    return [i for i, x in enumerate(lst) if x == item]

fire_indices = find_all_indices(spell_components, "fire")
print(f"All 'fire' indices: {fire_indices}")
```

### Sorting and Organizing
```python
spell_names = ["fireball", "heal", "shield", "lightning", "teleport"]
spell_levels = [3, 1, 2, 4, 5]

# Sort in place (modifies original list)
spell_names.sort()
print("Sorted spells:", spell_names)

# Sort in reverse
spell_levels.sort(reverse=True)
print("Levels (descending):", spell_levels)

# Create sorted copy (original unchanged)
original_spells = ["fireball", "heal", "shield", "lightning", "teleport"]
sorted_spells = sorted(original_spells)
print("Original:", original_spells)
print("Sorted copy:", sorted_spells)

# Sort by custom criteria
spell_data = [
    {"name": "fireball", "damage": 85, "mana": 25},
    {"name": "heal", "damage": 0, "mana": 20},
    {"name": "lightning", "damage": 95, "mana": 30},
    {"name": "shield", "damage": 0, "mana": 15}
]

# Sort by damage
by_damage = sorted(spell_data, key=lambda spell: spell["damage"], reverse=True)
print("Sorted by damage:")
for spell in by_damage:
    print(f"  {spell['name']}: {spell['damage']} damage")

# Sort by mana cost
by_mana = sorted(spell_data, key=lambda spell: spell["mana"])
print("Sorted by mana cost:")
for spell in by_mana:
    print(f"  {spell['name']}: {spell['mana']} mana")
```

### Reversing and Shuffling
```python
import random

quest_steps = ["gather herbs", "find the cave", "defeat the guardian", "claim the treasure"]

# Reverse in place
quest_steps.reverse()
print("Reversed quest:", quest_steps)

# Create reversed copy
original_steps = ["gather herbs", "find the cave", "defeat the guardian", "claim the treasure"]
reversed_copy = original_steps[::-1]
print("Original:", original_steps)
print("Reversed copy:", reversed_copy)

# Shuffle randomly
deck_of_cards = ["ace", "king", "queen", "jack", "10", "9", "8", "7"]
random.shuffle(deck_of_cards)
print("Shuffled deck:", deck_of_cards)
```

## Advanced List Operations

### List Filtering and Transformation
```python
spell_stats = [
    {"name": "fireball", "damage": 85, "mana": 25, "element": "fire"},
    {"name": "heal", "damage": 0, "mana": 20, "element": "light"},
    {"name": "ice shard", "damage": 70, "mana": 22, "element": "ice"},
    {"name": "lightning", "damage": 95, "mana": 30, "element": "storm"},
    {"name": "shield", "damage": 0, "mana": 15, "element": "arcane"}
]

# Filter offensive spells
offensive_spells = [spell for spell in spell_stats if spell["damage"] > 0]
print("Offensive spells:")
for spell in offensive_spells:
    print(f"  {spell['name']}: {spell['damage']} damage")

# Filter by element
fire_spells = [spell for spell in spell_stats if spell["element"] == "fire"]
print(f"\nFire spells: {[spell['name'] for spell in fire_spells]}")

# Transform data
spell_names = [spell["name"].title() for spell in spell_stats]
damage_per_mana = [
    {
        "name": spell["name"],
        "efficiency": spell["damage"] / spell["mana"] if spell["mana"] > 0 else 0
    }
    for spell in spell_stats
]

print(f"\nSpell names: {spell_names}")
print("\nDamage efficiency:")
for spell in damage_per_mana:
    print(f"  {spell['name']}: {spell['efficiency']:.2f} damage per mana")
```

### Working with Multiple Lists
```python
spell_names = ["fireball", "heal", "shield", "lightning"]
spell_damages = [85, 0, 0, 95]
spell_mana_costs = [25, 20, 15, 30]

# Zip lists together
spell_data = list(zip(spell_names, spell_damages, spell_mana_costs))
print("Zipped data:", spell_data)

# Create dictionary from multiple lists
spell_dict = {
    name: {"damage": damage, "mana": mana}
    for name, damage, mana in zip(spell_names, spell_damages, spell_mana_costs)
}
print("Spell dictionary:")
for name, stats in spell_dict.items():
    print(f"  {name}: {stats}")

# Enumerate for index and value
print("\nSpells with indices:")
for index, spell in enumerate(spell_names):
    print(f"  {index}: {spell}")

# Parallel iteration
print("\nComplete spell info:")
for name, damage, mana in zip(spell_names, spell_damages, spell_mana_costs):
    print(f"  {name}: {damage} damage, {mana} mana")
```

## Practical Examples

### Inventory Management System
```python
class MagicalInventory:
    def __init__(self):
        self.items = []
        self.max_capacity = 20
    
    def add_item(self, item, quantity=1):
        """Add item to inventory"""
        if len(self.items) + quantity > self.max_capacity:
            print(f"Cannot add {quantity} {item}(s). Inventory full!")
            return False
        
        for _ in range(quantity):
            self.items.append(item)
        
        print(f"Added {quantity} {item}(s) to inventory")
        return True
    
    def remove_item(self, item, quantity=1):
        """Remove item from inventory"""
        removed_count = 0
        
        for _ in range(quantity):
            if item in self.items:
                self.items.remove(item)
                removed_count += 1
            else:
                break
        
        if removed_count > 0:
            print(f"Removed {removed_count} {item}(s) from inventory")
        else:
            print(f"No {item} found in inventory")
        
        return removed_count
    
    def count_item(self, item):
        """Count how many of an item we have"""
        return self.items.count(item)
    
    def get_unique_items(self):
        """Get list of unique items"""
        return list(set(self.items))
    
    def get_inventory_summary(self):
        """Get summary of all items and quantities"""
        unique_items = self.get_unique_items()
        summary = {}
        
        for item in unique_items:
            summary[item] = self.count_item(item)
        
        return summary
    
    def display_inventory(self):
        """Display formatted inventory"""
        print(f"\n--- Magical Inventory ({len(self.items)}/{self.max_capacity}) ---")
        
        if not self.items:
            print("Inventory is empty")
            return
        
        summary = self.get_inventory_summary()
        for item, quantity in sorted(summary.items()):
            print(f"  {item}: {quantity}")

# Example usage
inventory = MagicalInventory()

# Add items
inventory.add_item("health potion", 3)
inventory.add_item("mana potion", 2)
inventory.add_item("magic sword")
inventory.add_item("spell scroll", 4)

# Display inventory
inventory.display_inventory()

# Use items
inventory.remove_item("health potion")
inventory.remove_item("spell scroll", 2)

# Check specific item count
sword_count = inventory.count_item("magic sword")
print(f"\nMagic swords: {sword_count}")

# Final inventory
inventory.display_inventory()
```

### Spell Combination System
```python
def find_spell_combinations(available_spells, target_damage, max_spells=3):
    """Find combinations of spells that achieve target damage"""
    from itertools import combinations
    
    valid_combinations = []
    
    # Try combinations of different sizes
    for combo_size in range(1, min(len(available_spells), max_spells) + 1):
        for combo in combinations(available_spells, combo_size):
            total_damage = sum(spell["damage"] for spell in combo)
            total_mana = sum(spell["mana"] for spell in combo)
            
            if total_damage >= target_damage:
                valid_combinations.append({
                    "spells": [spell["name"] for spell in combo],
                    "total_damage": total_damage,
                    "total_mana": total_mana,
                    "efficiency": total_damage / total_mana if total_mana > 0 else 0
                })
    
    # Sort by efficiency (damage per mana)
    valid_combinations.sort(key=lambda x: x["efficiency"], reverse=True)
    
    return valid_combinations

# Example spells
available_spells = [
    {"name": "Magic Missile", "damage": 25, "mana": 10},
    {"name": "Fireball", "damage": 85, "mana": 25},
    {"name": "Lightning Bolt", "damage": 95, "mana": 30},
    {"name": "Ice Shard", "damage": 70, "mana": 22},
    {"name": "Flame Strike", "damage": 60, "mana": 18}
]

# Find combinations for 150 damage
target = 150
combinations = find_spell_combinations(available_spells, target)

print(f"Spell combinations for {target}+ damage:")
for i, combo in enumerate(combinations[:5]):  # Show top 5
    spells_str = " + ".join(combo["spells"])
    print(f"{i+1}. {spells_str}")
    print(f"   Damage: {combo['total_damage']}, Mana: {combo['total_mana']}, "
          f"Efficiency: {combo['efficiency']:.2f}")
```

### Quest Progress Tracker
```python
class QuestTracker:
    def __init__(self):
        self.quests = []
    
    def add_quest(self, name, steps):
        """Add a new quest with steps"""
        quest = {
            "name": name,
            "steps": steps,
            "completed_steps": [],
            "current_step": 0,
            "completed": False
        }
        self.quests.append(quest)
        print(f"Added quest: {name}")
    
    def complete_step(self, quest_name, step_index=None):
        """Complete the next step or a specific step"""
        quest = self.find_quest(quest_name)
        if not quest:
            print(f"Quest '{quest_name}' not found")
            return False
        
        if quest["completed"]:
            print(f"Quest '{quest_name}' is already completed")
            return False
        
        # Use current step if no specific step provided
        if step_index is None:
            step_index = quest["current_step"]
        
        if step_index >= len(quest["steps"]):
            print(f"Invalid step index for quest '{quest_name}'")
            return False
        
        step = quest["steps"][step_index]
        if step not in quest["completed_steps"]:
            quest["completed_steps"].append(step)
            print(f"Completed step: {step}")
        
        # Update current step
        quest["current_step"] = len(quest["completed_steps"])
        
        # Check if quest is complete
        if len(quest["completed_steps"]) >= len(quest["steps"]):
            quest["completed"] = True
            print(f"🎉 Quest '{quest_name}' completed!")
        
        return True
    
    def find_quest(self, quest_name):
        """Find a quest by name"""
        for quest in self.quests:
            if quest["name"].lower() == quest_name.lower():
                return quest
        return None
    
    def display_progress(self, quest_name=None):
        """Display progress for a specific quest or all quests"""
        if quest_name:
            quest = self.find_quest(quest_name)
            if quest:
                self._display_single_quest(quest)
            else:
                print(f"Quest '{quest_name}' not found")
        else:
            print("\n--- Quest Progress ---")
            for quest in self.quests:
                self._display_single_quest(quest)
                print()
    
    def _display_single_quest(self, quest):
        """Display progress for a single quest"""
        status = "✅ COMPLETED" if quest["completed"] else "🔄 IN PROGRESS"
        progress = len(quest["completed_steps"])
        total = len(quest["steps"])
        
        print(f"{quest['name']} - {status} ({progress}/{total})")
        
        for i, step in enumerate(quest["steps"]):
            if step in quest["completed_steps"]:
                print(f"  ✅ {step}")
            elif i == quest["current_step"]:
                print(f"  ➡️  {step} (current)")
            else:
                print(f"  ⏸️  {step}")

# Example usage
tracker = QuestTracker()

# Add quests
tracker.add_quest("The Lost Artifact", [
    "Speak to the village elder",
    "Gather ancient maps",
    "Explore the forgotten temple",
    "Solve the temple puzzle",
    "Retrieve the artifact"
])

tracker.add_quest("Master of Elements", [
    "Learn fire magic",
    "Learn water magic",
    "Learn earth magic",
    "Learn air magic",
    "Combine all elements"
])

# Complete some steps
tracker.complete_step("The Lost Artifact")  # Complete current step
tracker.complete_step("The Lost Artifact")  # Complete next step
tracker.complete_step("Master of Elements")

# Display progress
tracker.display_progress()
```

## Common List Patterns and Idioms

### Finding Maximum and Minimum
```python
spell_damages = [25, 85, 70, 95, 60, 40]

# Built-in functions
max_damage = max(spell_damages)
min_damage = min(spell_damages)
print(f"Max damage: {max_damage}, Min damage: {min_damage}")

# Find index of max/min
max_index = spell_damages.index(max_damage)
min_index = spell_damages.index(min_damage)
print(f"Max at index {max_index}, Min at index {min_index}")

# Custom criteria
spells = [
    {"name": "fireball", "damage": 85, "mana": 25},
    {"name": "lightning", "damage": 95, "mana": 30},
    {"name": "ice shard", "damage": 70, "mana": 22}
]

most_efficient = max(spells, key=lambda s: s["damage"] / s["mana"])
print(f"Most efficient spell: {most_efficient['name']}")
```

### List Aggregation
```python
numbers = [1, 2, 3, 4, 5]

# Sum and average
total = sum(numbers)
average = sum(numbers) / len(numbers)
print(f"Sum: {total}, Average: {average}")

# Product (using reduce)
from functools import reduce
import operator

product = reduce(operator.mul, numbers, 1)
print(f"Product: {product}")

# Custom aggregation
spell_stats = [
    {"damage": 85, "mana": 25},
    {"damage": 70, "mana": 22},
    {"damage": 95, "mana": 30}
]

total_damage = sum(spell["damage"] for spell in spell_stats)
total_mana = sum(spell["mana"] for spell in spell_stats)
print(f"Total damage: {total_damage}, Total mana: {total_mana}")
```

## Performance Considerations

### List vs Other Data Structures
```python
import time

# List operations performance
large_list = list(range(100000))

# Accessing by index - O(1)
start = time.time()
element = large_list[50000]
print(f"Index access time: {time.time() - start:.6f} seconds")

# Searching for element - O(n)
start = time.time()
found = 75000 in large_list
print(f"Search time: {time.time() - start:.6f} seconds")

# Appending - O(1) amortized
start = time.time()
large_list.append(100001)
print(f"Append time: {time.time() - start:.6f} seconds")

# Inserting at beginning - O(n)
start = time.time()
large_list.insert(0, -1)
print(f"Insert at beginning time: {time.time() - start:.6f} seconds")
```

## Best Practices

1. **Use list comprehensions** for simple transformations
2. **Avoid modifying lists while iterating** over them
3. **Use appropriate data structures** (set for membership testing, deque for frequent insertions/deletions at both ends)
4. **Pre-allocate lists** when size is known
5. **Use enumerate()** instead of range(len()) for index access
6. **Use zip()** for parallel iteration

## Practice Challenges

Try implementing these list-based solutions:

```python
# Challenge 1: Spell Inventory Sorter
def sort_spells_by_criteria(spells, criteria="name"):
    """
    Sort spells by different criteria: name, damage, mana, efficiency
    """
    pass

# Challenge 2: Quest Step Validator
def validate_quest_sequence(steps, completed_steps):
    """
    Check if completed steps follow the correct sequence
    Return True if valid, False otherwise
    """
    pass

# Challenge 3: Magical Item Combiner
def find_item_combinations(items, target_value, max_items=3):
    """
    Find combinations of items that sum to target value
    Items have 'name' and 'value' properties
    """
    pass

# Challenge 4: Spell Rotation Optimizer
def optimize_spell_rotation(spells, fight_duration):
    """
    Create optimal spell casting sequence for maximum damage
    Consider cooldowns and mana costs
    """
    pass
```

## Next Steps

You've now mastered the art of list manipulation! Lists are fundamental to:

- **Data Processing**: Filtering, transforming, and analyzing collections
- **Game Development**: Managing inventories, quest systems, and game states
- **Algorithm Implementation**: Sorting, searching, and optimization
- **User Interface**: Dynamic content generation and management

Next, you'll learn about **dictionaries** - powerful key-value mappings that organize complex data relationships!

Remember: *"Lists are the foundation of organized data. Master them, and you master the art of managing collections in the digital realm."*
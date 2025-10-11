# Dictionaries: Maps of Knowledge

*Master the art of key-value mappings to organize complex magical data*

## The Ancient Art of Mapping

In the mystical realm of programming, sometimes we need more than simple lists. We need a way to connect pieces of information - to map keys to their corresponding values. This is where dictionaries come into play, serving as powerful containers that store relationships between data.

## What Are Dictionaries?

A dictionary is a collection of key-value pairs, where each key is unique and maps to a specific value. Think of it like a magical tome where you can instantly find any spell by its name.

```python
# Creating a dictionary of magical spells
spells = {
    "fireball": "Launches a blazing orb of destruction",
    "heal": "Restores health to the target",
    "teleport": "Instantly moves to another location",
    "shield": "Creates a protective barrier"
}

print(spells["fireball"])  # Output: Launches a blazing orb of destruction
```

## Creating Dictionaries

There are several ways to create dictionaries in Python:

```python
# Method 1: Using curly braces
wizard_stats = {
    "name": "Merlin",
    "level": 50,
    "mana": 1000,
    "health": 800
}

# Method 2: Using the dict() constructor
potion_ingredients = dict(
    moonstone=5,
    dragon_scale=2,
    phoenix_feather=1
)

# Method 3: Creating an empty dictionary
empty_spellbook = {}
another_empty = dict()
```

## Accessing Dictionary Values

```python
wizard_stats = {
    "name": "Gandalf",
    "level": 99,
    "class": "White Wizard",
    "spells_known": 47
}

# Accessing values using keys
print(wizard_stats["name"])        # Output: Gandalf
print(wizard_stats["level"])       # Output: 99

# Using get() method (safer - returns None if key doesn't exist)
print(wizard_stats.get("mana"))    # Output: None
print(wizard_stats.get("mana", 0)) # Output: 0 (default value)
```

## Modifying Dictionaries

```python
# Adding new key-value pairs
wizard_stats["mana"] = 500
wizard_stats["location"] = "Rivendell"

# Updating existing values
wizard_stats["level"] = 100

# Removing items
del wizard_stats["location"]  # Removes the key-value pair

# Using pop() to remove and return a value
removed_class = wizard_stats.pop("class")
print(removed_class)  # Output: White Wizard
```

## Dictionary Methods

```python
spell_book = {
    "lightning": "Strikes with electrical energy",
    "frost": "Freezes enemies in place",
    "earthquake": "Shakes the very ground"
}

# Get all keys
print(spell_book.keys())    # dict_keys(['lightning', 'frost', 'earthquake'])

# Get all values
print(spell_book.values())  # dict_values(['Strikes with...', 'Freezes...', 'Shakes...'])

# Get all key-value pairs
print(spell_book.items())   # dict_items([('lightning', 'Strikes...'), ...])

# Check if key exists
if "fireball" in spell_book:
    print("Fireball spell found!")
else:
    print("Fireball spell not in spellbook")
```

## Iterating Through Dictionaries

```python
wizard_inventory = {
    "gold": 1500,
    "health_potions": 12,
    "mana_potions": 8,
    "magic_sword": 1
}

# Iterate through keys
for item in wizard_inventory:
    print(f"Item: {item}")

# Iterate through values
for quantity in wizard_inventory.values():
    print(f"Quantity: {quantity}")

# Iterate through key-value pairs
for item, quantity in wizard_inventory.items():
    print(f"{item}: {quantity}")
```

## Nested Dictionaries

```python
# Dictionary containing other dictionaries
guild_members = {
    "wizard": {
        "name": "Merlin",
        "level": 50,
        "spells": ["fireball", "heal", "teleport"]
    },
    "warrior": {
        "name": "Arthur",
        "level": 45,
        "weapons": ["excalibur", "shield"]
    },
    "rogue": {
        "name": "Robin",
        "level": 40,
        "skills": ["stealth", "lockpick", "backstab"]
    }
}

# Accessing nested values
print(guild_members["wizard"]["name"])     # Output: Merlin
print(guild_members["warrior"]["level"])   # Output: 45
```

## Dictionary Comprehensions

```python
# Creating dictionaries with comprehensions
numbers = [1, 2, 3, 4, 5]
squared_dict = {num: num**2 for num in numbers}
print(squared_dict)  # Output: {1: 1, 2: 4, 3: 9, 4: 16, 5: 25}

# With conditions
even_squares = {num: num**2 for num in numbers if num % 2 == 0}
print(even_squares)  # Output: {2: 4, 4: 16}
```

## Practical Example: Character Management System

```python
def create_character(name, character_class, level=1):
    """Create a new character dictionary"""
    return {
        "name": name,
        "class": character_class,
        "level": level,
        "experience": 0,
        "health": 100,
        "mana": 50,
        "inventory": {},
        "skills": []
    }

def add_item_to_inventory(character, item, quantity=1):
    """Add an item to character's inventory"""
    if item in character["inventory"]:
        character["inventory"][item] += quantity
    else:
        character["inventory"][item] = quantity

def level_up(character):
    """Level up the character"""
    character["level"] += 1
    character["health"] += 20
    character["mana"] += 10
    print(f"{character['name']} leveled up to level {character['level']}!")

# Create a character
hero = create_character("Aragorn", "Ranger", 10)

# Add items to inventory
add_item_to_inventory(hero, "sword", 1)
add_item_to_inventory(hero, "health_potion", 5)
add_item_to_inventory(hero, "gold", 250)

# Level up
level_up(hero)

# Display character info
print(f"Character: {hero['name']}")
print(f"Class: {hero['class']}")
print(f"Level: {hero['level']}")
print(f"Health: {hero['health']}")
print(f"Inventory: {hero['inventory']}")
```

## Common Dictionary Patterns

```python
# Counting items
text = "the quick brown fox jumps over the lazy dog"
word_count = {}

for word in text.split():
    if word in word_count:
        word_count[word] += 1
    else:
        word_count[word] = 1

# Or using get() method
word_count = {}
for word in text.split():
    word_count[word] = word_count.get(word, 0) + 1

print(word_count)
```

## Dictionary vs List: When to Use Which?

**Use dictionaries when:**
- You need to associate keys with values
- You need fast lookups by key
- The order doesn't matter (though Python 3.7+ preserves insertion order)
- You have unique identifiers for your data

**Use lists when:**
- You need ordered data
- You access items by position/index
- You need to maintain duplicates
- You frequently append/remove from the end

## Practice Challenges

Try these exercises to master dictionaries:

1. **Student Grade Book**: Create a dictionary to store student names and their grades, then calculate the average grade.

2. **Word Frequency Counter**: Write a function that takes a string and returns a dictionary with word frequencies.

3. **Inventory Manager**: Create a system to manage a shop's inventory with items, quantities, and prices.

## The Path Forward

Dictionaries are fundamental to Python programming and appear everywhere - from configuration files to database records to API responses. Master them, and you'll have unlocked one of the most powerful tools in your programming arsenal.

*"In the realm of data, the wise wizard knows that the right structure can make the difference between chaos and order."*

---

**Next**: Continue your journey with File Operations to learn how to read and write data to persistent storage.
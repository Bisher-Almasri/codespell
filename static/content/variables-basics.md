# Variables: Storing Mystical Energy

Welcome, apprentice, to the fundamental art of variable creation - the ability to capture and store mystical energy in named containers.

## What Are Variables?

Variables are like enchanted vessels that hold different types of magical essence. In the realm of programming, they store data that your spells (programs) can use and manipulate.

Think of variables as labeled bottles in an alchemist's laboratory:
- Each bottle has a **name** (the variable name)
- Each bottle contains **contents** (the value)
- The contents can change over time

## Creating Your First Variables

In Python, creating a variable is as simple as naming it and assigning a value:

```python
# Storing mystical energy
wizard_name = "Merlin"
magic_level = 42
has_staff = True
spell_power = 3.14
```

## Variable Naming Rules

The ancient laws of variable naming must be followed:

1. **Start with a letter or underscore**: `name`, `_secret`
2. **Use letters, numbers, and underscores**: `spell_level_2`
3. **Case sensitive**: `Magic` and `magic` are different
4. **No spaces**: Use `snake_case` or `camelCase`
5. **Avoid reserved words**: Don't use `if`, `for`, `while`, etc.

### Good Variable Names
```python
player_health = 100
max_spell_count = 5
is_wizard_alive = True
```

### Bad Variable Names
```python
x = 100  # Too vague
2spells = 5  # Starts with number
my-name = "Bob"  # Contains hyphen
```

## Types of Mystical Energy

Variables can store different types of magical essence:

### Numbers (Integers and Floats)
```python
# Whole numbers (integers)
level = 25
lives = 3

# Decimal numbers (floats)
health_percentage = 87.5
magic_multiplier = 1.25
```

### Text (Strings)
```python
# Single or double quotes work
character_name = "Gandalf"
spell_incantation = 'Abracadabra'

# Multi-line strings
ancient_scroll = """
In the beginning was the Code,
and the Code was with the Wizard,
and the Code was good.
"""
```

### True/False (Booleans)
```python
is_magical = True
has_defeated_dragon = False
can_cast_spells = True
```

## Variable Operations

Once you've stored energy in variables, you can manipulate it:

```python
# Arithmetic with numbers
base_damage = 10
strength_bonus = 5
total_damage = base_damage + strength_bonus

# String concatenation
first_name = "Harry"
last_name = "Potter"
full_name = first_name + " " + last_name

# String formatting (the modern way)
greeting = f"Welcome, {full_name}! Your level is {level}."
```

## Changing Variable Values

Variables are called "variable" because their contents can change:

```python
health = 100
print(f"Health: {health}")

# Take damage
health = health - 25
print(f"Health after damage: {health}")

# Heal
health += 50  # Shorthand for health = health + 50
print(f"Health after healing: {health}")
```

## Practice Exercise

Try creating variables for a character in a mystical adventure:

```python
# Character creation
character_name = "Your Name Here"
character_class = "Wizard"
level = 1
health = 100
mana = 50
gold = 25

# Display character info
print(f"Character: {character_name}")
print(f"Class: {character_class}")
print(f"Level: {level}")
print(f"Health: {health}")
print(f"Mana: {mana}")
print(f"Gold: {gold}")

# Level up!
level += 1
health += 20
mana += 10

print(f"\nAfter leveling up:")
print(f"Level: {level}")
print(f"Health: {health}")
print(f"Mana: {mana}")
```

## Key Principles to Remember

1. **Choose meaningful names**: `player_score` is better than `x`
2. **Be consistent**: If you use `snake_case`, stick with it
3. **Variables store references**: When you assign a variable to another, you're copying the reference
4. **Python is dynamically typed**: Variables can change type during execution

## Next Steps

Now that you've mastered the art of storing mystical energy in variables, you're ready to learn about the different types of data you can work with and how to manipulate them with functions and operations.

Remember: Every great wizard started by learning to properly store and manage their magical essence. Variables are the foundation upon which all other spells are built!
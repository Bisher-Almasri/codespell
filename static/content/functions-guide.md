# Functions: Crafting Spell Formulas

Greetings, apprentice! Today you shall learn the ancient art of function creation - the ability to craft reusable spell formulas that can be invoked whenever their power is needed.

## What Are Functions?

Functions are like spell scrolls that contain a series of magical instructions. Once written, these scrolls can be used repeatedly without having to rewrite the incantations each time.

Think of functions as:
- **Recipes** that take ingredients (parameters) and produce a dish (return value)
- **Machines** that take input, process it, and give output
- **Spells** that perform specific magical tasks when invoked

## Your First Function

Let's create a simple greeting spell:

```python
def greet_wizard(name):
    """A spell to greet fellow wizards"""
    return f"Greetings, {name}! May your code be bug-free!"

# Casting the spell
message = greet_wizard("Merlin")
print(message)  # Output: Greetings, Merlin! May your code be bug-free!
```

## Anatomy of a Function

Every function spell has these components:

```python
def function_name(parameters):
    """Optional docstring explaining the spell"""
    # Function body - the magical instructions
    return result  # Optional return value
```

### The `def` Keyword
This tells Python you're defining a new function - like declaring "I'm about to teach you a new spell!"

### Function Name
Choose descriptive names using `snake_case`:
- `calculate_damage()`
- `heal_player()`
- `cast_fireball()`

### Parameters (Ingredients)
These are the inputs your function needs to work:

```python
def calculate_spell_damage(base_power, magic_level, spell_modifier):
    total_damage = base_power * magic_level * spell_modifier
    return total_damage
```

### Return Statement
This sends a result back to whoever called the function:

```python
def roll_dice():
    import random
    return random.randint(1, 6)

result = roll_dice()  # result gets the returned value
```

## Types of Functions

### Functions with No Parameters
```python
def display_welcome_message():
    print("Welcome to the Mystical Academy!")
    print("Prepare to learn the ancient arts!")

display_welcome_message()  # Call the function
```

### Functions with Multiple Parameters
```python
def create_character(name, character_class, level=1):
    character = {
        'name': name,
        'class': character_class,
        'level': level,
        'health': level * 20
    }
    return character

# Using the function
hero = create_character("Aragorn", "Ranger", 5)
print(hero)
```

### Functions with Default Parameters
```python
def cast_healing_spell(target, healing_power=25):
    """Heal a target with optional healing power"""
    print(f"Healing {target} for {healing_power} points!")
    return healing_power

# Both calls work
cast_healing_spell("Player")  # Uses default healing_power of 25
cast_healing_spell("Player", 50)  # Uses custom healing_power of 50
```

## Advanced Function Concepts

### Functions That Return Multiple Values
```python
def get_character_stats():
    health = 100
    mana = 75
    strength = 15
    return health, mana, strength

# Unpack the returned values
hp, mp, str_val = get_character_stats()
```

### Functions as Variables
```python
def fireball():
    return "🔥 FIREBALL! 🔥"

def ice_shard():
    return "❄️ ICE SHARD! ❄️"

# Store functions in variables
current_spell = fireball
print(current_spell())  # Calls fireball()

# Change the spell
current_spell = ice_shard
print(current_spell())  # Calls ice_shard()
```

### Nested Functions (Spells within Spells)
```python
def create_spell_caster(magic_school):
    def cast_spell(spell_name):
        return f"Casting {spell_name} using {magic_school} magic!"
    
    return cast_spell

# Create specialized spell casters
fire_mage = create_spell_caster("Fire")
ice_mage = create_spell_caster("Ice")

print(fire_mage("Fireball"))  # Casting Fireball using Fire magic!
print(ice_mage("Freeze"))     # Casting Freeze using Ice magic!
```

## Practical Examples

### Character Management System
```python
def create_player(name, starting_class="Adventurer"):
    """Create a new player character"""
    player = {
        'name': name,
        'class': starting_class,
        'level': 1,
        'health': 100,
        'mana': 50,
        'experience': 0
    }
    return player

def level_up(player):
    """Level up a player character"""
    player['level'] += 1
    player['health'] += 20
    player['mana'] += 10
    print(f"{player['name']} reached level {player['level']}!")
    return player

def display_character(player):
    """Display character information"""
    print(f"\n--- {player['name']} ---")
    print(f"Class: {player['class']}")
    print(f"Level: {player['level']}")
    print(f"Health: {player['health']}")
    print(f"Mana: {player['mana']}")
    print(f"Experience: {player['experience']}")

# Using the system
hero = create_player("Gandalf", "Wizard")
display_character(hero)

hero = level_up(hero)
display_character(hero)
```

### Combat System
```python
def calculate_damage(attacker_level, weapon_power, critical_hit=False):
    """Calculate damage dealt in combat"""
    base_damage = attacker_level * weapon_power
    
    if critical_hit:
        base_damage *= 2
        print("💥 CRITICAL HIT! 💥")
    
    return base_damage

def battle(player_level, enemy_level):
    """Simulate a battle between player and enemy"""
    player_damage = calculate_damage(player_level, 10)
    enemy_damage = calculate_damage(enemy_level, 8)
    
    print(f"Player deals {player_damage} damage!")
    print(f"Enemy deals {enemy_damage} damage!")
    
    if player_damage > enemy_damage:
        return "Victory!"
    elif enemy_damage > player_damage:
        return "Defeat!"
    else:
        return "Draw!"

# Test the battle system
result = battle(5, 4)
print(f"Battle result: {result}")
```

## Best Practices for Function Crafting

1. **Single Responsibility**: Each function should do one thing well
2. **Descriptive Names**: `calculate_spell_damage()` not `calc()`
3. **Keep It Short**: If a function is too long, break it into smaller functions
4. **Use Docstrings**: Document what your function does
5. **Avoid Global Variables**: Pass data through parameters instead

## Practice Challenge

Create a simple RPG character system with these functions:

```python
# Your challenge: implement these functions!

def create_character(name, character_class):
    # Create and return a character dictionary
    pass

def add_experience(character, exp_points):
    # Add experience and level up if needed
    pass

def equip_weapon(character, weapon_name, weapon_damage):
    # Give the character a weapon
    pass

def character_attack(character):
    # Calculate and return attack damage
    pass

# Test your functions
player = create_character("Hero", "Knight")
add_experience(player, 100)
equip_weapon(player, "Excalibur", 50)
damage = character_attack(player)
```

## Next Steps

You've now learned to craft reusable spell formulas! Functions are the building blocks of larger programs. Next, you'll learn about:

- **Lists and Loops**: Managing collections of data
- **Conditionals**: Making decisions in your code
- **Classes**: Creating your own data types
- **Modules**: Organizing functions into libraries

Remember: A wise wizard writes functions that can be reused, shared, and understood by others. Your future self will thank you for writing clean, well-documented functions!
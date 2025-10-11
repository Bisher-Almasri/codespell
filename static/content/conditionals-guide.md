# Conditionals: Paths of Decision

Welcome, apprentice, to the mystical art of conditionals - the power to make your code choose different paths based on the conditions of reality.

## What Are Conditionals?

Conditionals are like magical crossroads where your program must choose which path to take. They allow your code to make decisions, respond to different situations, and create dynamic, intelligent behavior.

Think of conditionals as:
- **Magical gates** that only open under certain conditions
- **Branching paths** in an enchanted forest
- **Decision trees** that guide your program's flow

## The If Statement: The Basic Gate

The `if` statement is the fundamental conditional - it executes code only when a condition is true:

```python
# Basic if statement
health = 50

if health < 20:
    print("⚠️ Warning: Health is critically low!")
    print("Find a healing potion immediately!")
```

### Comparison Operators
These are the magical symbols used to compare values:

```python
# Equality and inequality
level = 10
if level == 10:
    print("You've reached level 10!")

if level != 1:
    print("You're no longer a beginner!")

# Numerical comparisons
score = 85
if score > 90:
    print("Excellent performance!")
elif score >= 70:
    print("Good job!")
elif score >= 50:
    print("You passed!")
else:
    print("Keep practicing!")

# String comparisons
spell_name = "Fireball"
if spell_name == "Fireball":
    print("🔥 Casting Fireball!")
```

## The Else Statement: The Alternative Path

When the `if` condition is false, the `else` block provides an alternative:

```python
has_key = True

if has_key:
    print("🗝️ The door opens with a satisfying click.")
    print("You enter the mysterious chamber...")
else:
    print("🚪 The door remains locked.")
    print("You need to find the key first.")
```

## The Elif Statement: Multiple Paths

Use `elif` (else if) to check multiple conditions in sequence:

```python
def check_weather(weather):
    if weather == "sunny":
        print("☀️ Perfect day for outdoor magic practice!")
    elif weather == "rainy":
        print("🌧️ Great weather for studying ancient scrolls indoors.")
    elif weather == "stormy":
        print("⛈️ The storm amplifies your lightning spells!")
    elif weather == "snowy":
        print("❄️ Ice magic is particularly powerful today.")
    else:
        print("🌫️ Mysterious weather... anything could happen!")

# Test the function
check_weather("stormy")
```

## Logical Operators: Combining Conditions

Combine multiple conditions using logical operators:

### AND Operator (`and`)
Both conditions must be true:

```python
level = 15
has_staff = True
mana = 30

if level >= 10 and has_staff and mana >= 25:
    print("✨ You can cast the advanced spell!")
else:
    print("❌ You don't meet all requirements for this spell.")
```

### OR Operator (`or`)
At least one condition must be true:

```python
character_class = "Wizard"
has_spellbook = False

if character_class == "Wizard" or has_spellbook:
    print("📚 You can learn new spells!")
else:
    print("❌ You cannot learn spells without proper training.")
```

### NOT Operator (`not`)
Reverses the truth value:

```python
is_cursed = False

if not is_cursed:
    print("✅ You are free from curses!")
else:
    print("💀 A dark curse affects you...")
```

## Nested Conditionals: Conditions Within Conditions

You can place if statements inside other if statements:

```python
def enter_dungeon(level, has_torch, party_size):
    if level >= 5:
        print("🏰 You approach the dungeon entrance...")
        
        if has_torch:
            print("🔦 Your torch illuminates the dark passage.")
            
            if party_size >= 2:
                print("👥 With your party, you enter confidently!")
                return "success"
            else:
                print("⚠️ It's dangerous to go alone, but you proceed...")
                return "risky"
        else:
            print("🌑 It's too dark to enter safely.")
            return "failed"
    else:
        print("❌ You're not experienced enough for this dungeon.")
        return "failed"

# Test the function
result = enter_dungeon(7, True, 3)
print(f"Result: {result}")
```

## Practical Examples

### Character Creation System
```python
def create_character():
    print("🧙‍♂️ Welcome to Character Creation!")
    
    name = input("Enter your character's name: ")
    character_class = input("Choose class (Wizard/Warrior/Rogue): ").lower()
    
    if character_class == "wizard":
        health = 80
        mana = 120
        strength = 10
        intelligence = 20
        print(f"✨ {name} the Wizard has been created!")
    elif character_class == "warrior":
        health = 150
        mana = 30
        strength = 20
        intelligence = 10
        print(f"⚔️ {name} the Warrior has been created!")
    elif character_class == "rogue":
        health = 100
        mana = 60
        strength = 15
        intelligence = 15
        print(f"🗡️ {name} the Rogue has been created!")
    else:
        print("❌ Invalid class! Creating default Adventurer...")
        health = 100
        mana = 75
        strength = 12
        intelligence = 12
    
    print(f"Stats - Health: {health}, Mana: {mana}, Strength: {strength}, Intelligence: {intelligence}")

# Run character creation
create_character()
```

### Battle System with Conditionals
```python
def battle_turn(player_health, enemy_health, player_mana):
    print(f"\n⚔️ Battle Status:")
    print(f"Player Health: {player_health}")
    print(f"Enemy Health: {enemy_health}")
    print(f"Player Mana: {player_mana}")
    
    if player_health <= 0:
        print("💀 You have been defeated!")
        return "defeat"
    elif enemy_health <= 0:
        print("🎉 Victory! The enemy has been vanquished!")
        return "victory"
    
    action = input("\nChoose action (attack/spell/heal): ").lower()
    
    if action == "attack":
        damage = 25
        enemy_health -= damage
        print(f"⚔️ You deal {damage} damage!")
        
    elif action == "spell":
        if player_mana >= 20:
            damage = 40
            enemy_health -= damage
            player_mana -= 20
            print(f"✨ Your spell deals {damage} damage!")
        else:
            print("❌ Not enough mana for a spell!")
            
    elif action == "heal":
        if player_mana >= 15:
            heal_amount = 30
            player_health += heal_amount
            player_mana -= 15
            print(f"💚 You heal for {heal_amount} health!")
        else:
            print("❌ Not enough mana to heal!")
    else:
        print("❌ Invalid action! You lose your turn.")
    
    # Enemy attacks back
    if enemy_health > 0:
        enemy_damage = 20
        player_health -= enemy_damage
        print(f"👹 Enemy deals {enemy_damage} damage to you!")
    
    return "continue"

# Example battle loop
player_hp = 100
enemy_hp = 80
player_mp = 50

while True:
    result = battle_turn(player_hp, enemy_hp, player_mp)
    if result != "continue":
        break
```

### Grade Calculator
```python
def calculate_grade(score):
    if score >= 90:
        grade = "A"
        message = "Excellent! You've mastered the mystical arts!"
    elif score >= 80:
        grade = "B"
        message = "Great work! Your magical skills are impressive."
    elif score >= 70:
        grade = "C"
        message = "Good job! You're progressing well in your studies."
    elif score >= 60:
        grade = "D"
        message = "You're learning, but more practice is needed."
    else:
        grade = "F"
        message = "The magic eludes you. Seek additional training."
    
    return grade, message

# Test the function
test_scores = [95, 87, 73, 65, 45]
for score in test_scores:
    grade, message = calculate_grade(score)
    print(f"Score: {score} → Grade: {grade} - {message}")
```

## Advanced Conditional Techniques

### Ternary Operator (Conditional Expression)
A shorthand way to write simple if-else statements:

```python
# Traditional if-else
level = 15
if level >= 10:
    status = "Advanced"
else:
    status = "Beginner"

# Ternary operator (more concise)
status = "Advanced" if level >= 10 else "Beginner"
print(f"Status: {status}")

# More examples
health = 25
health_status = "Critical" if health < 30 else "Healthy"

mana = 80
can_cast = "Yes" if mana >= 50 else "No"
```

### Membership Testing
Check if a value exists in a collection:

```python
# Check if item is in a list
inventory = ["sword", "potion", "scroll", "gem"]
item = "potion"

if item in inventory:
    print(f"✅ You have a {item} in your inventory!")
else:
    print(f"❌ You don't have a {item}.")

# Check character class
valid_classes = ["wizard", "warrior", "rogue", "archer"]
chosen_class = "wizard"

if chosen_class in valid_classes:
    print(f"✅ {chosen_class.title()} is a valid class!")
else:
    print("❌ Invalid class selection!")
```

### Chained Comparisons
Python allows chaining comparison operators:

```python
level = 15
# Instead of: level >= 10 and level <= 20
if 10 <= level <= 20:
    print("You're in the intermediate level range!")

score = 85
# Instead of: score > 70 and score < 90
if 70 < score < 90:
    print("Good score range!")
```

## Common Pitfalls and Best Practices

### 1. Assignment vs Equality
```python
# Wrong - assignment instead of comparison
level = 10
if level = 10:  # This will cause an error!
    print("Level 10!")

# Correct - use == for comparison
if level == 10:
    print("Level 10!")
```

### 2. Boolean Values
```python
# Verbose way
is_alive = True
if is_alive == True:
    print("Character is alive")

# Better way
if is_alive:
    print("Character is alive")

# For False checks
is_cursed = False
if not is_cursed:
    print("Character is not cursed")
```

### 3. Avoid Deep Nesting
```python
# Hard to read (too much nesting)
if has_key:
    if door_is_unlocked:
        if monster_defeated:
            if has_treasure_map:
                print("You can enter the treasure room!")

# Better approach
if has_key and door_is_unlocked and monster_defeated and has_treasure_map:
    print("You can enter the treasure room!")
```

## Practice Challenges

Try implementing these conditional-based solutions:

```python
# Challenge 1: Magic 8-Ball
def magic_8_ball():
    import random
    responses = [
        "Yes, definitely!",
        "Ask again later.",
        "Don't count on it.",
        "It is certain.",
        "Very doubtful."
    ]
    # Return a random response
    pass

# Challenge 2: Password Strength Checker
def check_password_strength(password):
    # Check if password has:
    # - At least 8 characters
    # - At least one uppercase letter
    # - At least one lowercase letter  
    # - At least one number
    # Return strength level: "Weak", "Medium", "Strong"
    pass

# Challenge 3: RPG Damage Calculator
def calculate_damage(attacker_level, weapon_damage, is_critical, enemy_armor):
    # Calculate final damage considering:
    # - Base damage = attacker_level * weapon_damage
    # - Critical hits double the damage
    # - Armor reduces damage by a percentage
    # Return final damage dealt
    pass
```

## Next Steps

You've now mastered the art of making decisions in code! Conditionals are essential for creating:

- **Interactive Programs**: Responding to user input
- **Game Logic**: Character actions, combat systems, puzzles
- **Data Validation**: Checking if input is correct
- **Flow Control**: Directing program execution

Next, you'll learn about **loops** - the power to repeat actions efficiently, and then combine conditionals with loops to create even more powerful programs!

Remember: *"In the realm of code, every decision shapes reality. Choose your conditions wisely, young wizard."*
# Classes: Blueprints of Reality

*Create your own data types and objects with classes and methods*

## The Art of Creation

Classes are blueprints for creating objects - they define what data an object can hold and what actions it can perform. Think of a class as a magical template for creating wizards, spells, or any other entity in your mystical realm.

## Creating Your First Class

```python
class Wizard:
    def __init__(self, name, level=1):
        self.name = name
        self.level = level
        self.health = 100
        self.mana = 50
        self.spells = []
    
    def cast_spell(self, spell_name):
        if self.mana >= 10:
            self.mana -= 10
            return f"{self.name} casts {spell_name}!"
        return f"{self.name} is out of mana!"
    
    def rest(self):
        self.health = 100
        self.mana = 50
        return f"{self.name} feels refreshed!"

# Creating objects (instances)
gandalf = Wizard("Gandalf", 50)
merlin = Wizard("Merlin", 99)

print(gandalf.cast_spell("Fireball"))
print(merlin.rest())
```

## Class Methods and Attributes

```python
class Spell:
    # Class attribute (shared by all instances)
    total_spells_created = 0
    
    def __init__(self, name, damage, mana_cost):
        self.name = name
        self.damage = damage
        self.mana_cost = mana_cost
        Spell.total_spells_created += 1
    
    def cast(self, caster):
        if caster.mana >= self.mana_cost:
            caster.mana -= self.mana_cost
            return f"{self.name} deals {self.damage} damage!"
        return "Not enough mana!"
    
    @classmethod
    def get_spell_count(cls):
        return cls.total_spells_created
    
    @staticmethod
    def is_valid_name(name):
        return len(name) > 0 and name.isalpha()

# Usage
fireball = Spell("Fireball", 50, 25)
lightning = Spell("Lightning", 60, 30)

print(f"Total spells created: {Spell.get_spell_count()}")
print(f"Valid name: {Spell.is_valid_name('Fireball')}")
```

## Inheritance: Magical Bloodlines

```python
class Character:
    def __init__(self, name, health=100):
        self.name = name
        self.health = health
    
    def take_damage(self, amount):
        self.health -= amount
        return f"{self.name} takes {amount} damage!"

class Wizard(Character):
    def __init__(self, name, health=100, mana=50):
        super().__init__(name, health)  # Call parent constructor
        self.mana = mana
        self.spells = []
    
    def cast_spell(self, spell_name):
        if self.mana >= 10:
            self.mana -= 10
            return f"{self.name} casts {spell_name}!"
        return "Not enough mana!"

class Warrior(Character):
    def __init__(self, name, health=150, strength=20):
        super().__init__(name, health)
        self.strength = strength
        self.weapon = "Sword"
    
    def attack(self, target):
        damage = self.strength
        return target.take_damage(damage)

# Usage
wizard = Wizard("Merlin")
warrior = Warrior("Arthur")

print(wizard.cast_spell("Heal"))
print(warrior.attack(wizard))
```

## Practical Example: RPG Character System

```python
class RPGCharacter:
    def __init__(self, name, character_class):
        self.name = name
        self.character_class = character_class
        self.level = 1
        self.experience = 0
        self.stats = {"health": 100, "mana": 50, "strength": 10}
        self.inventory = []
    
    def add_experience(self, amount):
        self.experience += amount
        if self.experience >= self.level * 100:
            self.level_up()
    
    def level_up(self):
        self.level += 1
        self.stats["health"] += 20
        self.stats["mana"] += 10
        print(f"{self.name} reached level {self.level}!")
    
    def add_item(self, item):
        self.inventory.append(item)
        print(f"{self.name} obtained {item}!")
    
    def __str__(self):
        return f"{self.name} (Level {self.level} {self.character_class})"

# Create and use characters
hero = RPGCharacter("Aragorn", "Ranger")
hero.add_experience(150)
hero.add_item("Magic Sword")
print(hero)
```

## Special Methods (Magic Methods)

```python
class MagicItem:
    def __init__(self, name, power):
        self.name = name
        self.power = power
    
    def __str__(self):
        return f"{self.name} (Power: {self.power})"
    
    def __repr__(self):
        return f"MagicItem('{self.name}', {self.power})"
    
    def __eq__(self, other):
        return self.power == other.power
    
    def __lt__(self, other):
        return self.power < other.power
    
    def __add__(self, other):
        combined_name = f"{self.name} + {other.name}"
        combined_power = self.power + other.power
        return MagicItem(combined_name, combined_power)

# Usage
sword = MagicItem("Excalibur", 100)
shield = MagicItem("Aegis", 80)

print(sword)  # Uses __str__
print(repr(sword))  # Uses __repr__
print(sword > shield)  # Uses __lt__

combined = sword + shield  # Uses __add__
print(combined)
```

*Classes are the foundation of object-oriented programming. Master them to create complex, organized magical systems.*

---

**Next**: Complete your Python foundation with the Final Project challenge.
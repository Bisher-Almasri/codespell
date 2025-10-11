# DOM Manipulation: Reshaping Reality

*Learn to dynamically modify web pages with JavaScript*

## The Living Web

The Document Object Model (DOM) is the bridge between your HTML structure and JavaScript magic. It represents your web page as a tree of objects that you can manipulate, creating dynamic and interactive experiences.

## Understanding the DOM Tree

```html
<!DOCTYPE html>
<html>
<head>
    <title>Mystical Realm</title>
</head>
<body>
    <div id="game-world">
        <h1 class="title">Welcome, Wizard</h1>
        <p class="description">Your magical journey begins...</p>
        <button id="cast-spell">Cast Spell</button>
    </div>
</body>
</html>
```

## Selecting Elements

```javascript
// Select by ID
const gameWorld = document.getElementById('game-world');
const spellButton = document.getElementById('cast-spell');

// Select by class name
const title = document.getElementsByClassName('title')[0];
const descriptions = document.getElementsByClassName('description');

// Select by tag name
const allParagraphs = document.getElementsByTagName('p');

// Modern selectors (recommended)
const titleModern = document.querySelector('.title');
const allButtons = document.querySelectorAll('button');
const firstParagraph = document.querySelector('p');
```

## Modifying Content

```javascript
// Change text content
const title = document.querySelector('.title');
title.textContent = 'Greetings, Master Wizard!';

// Change HTML content
const description = document.querySelector('.description');
description.innerHTML = 'Your <strong>epic</strong> journey begins...';

// Modify attributes
const spellButton = document.getElementById('cast-spell');
spellButton.setAttribute('class', 'magical-button');
spellButton.setAttribute('data-spell', 'fireball');

// Get attribute values
const spellType = spellButton.getAttribute('data-spell');
console.log(spellType); // "fireball"
```

## Styling with JavaScript

```javascript
const gameWorld = document.getElementById('game-world');

// Direct style modification
gameWorld.style.backgroundColor = '#1a1a2e';
gameWorld.style.color = '#eee';
gameWorld.style.padding = '20px';
gameWorld.style.borderRadius = '10px';

// Adding/removing CSS classes
gameWorld.classList.add('mystical-theme');
gameWorld.classList.remove('default-theme');
gameWorld.classList.toggle('dark-mode');

// Check if class exists
if (gameWorld.classList.contains('mystical-theme')) {
    console.log('Mystical theme is active!');
}
```

## Creating and Adding Elements

```javascript
// Create new elements
const spellList = document.createElement('ul');
spellList.id = 'available-spells';

const spells = ['Fireball', 'Lightning Bolt', 'Heal', 'Shield'];

spells.forEach(spell => {
    const listItem = document.createElement('li');
    listItem.textContent = spell;
    listItem.classList.add('spell-item');
    spellList.appendChild(listItem);
});

// Add to the page
const gameWorld = document.getElementById('game-world');
gameWorld.appendChild(spellList);

// Insert at specific position
const newTitle = document.createElement('h2');
newTitle.textContent = 'Choose Your Spell';
gameWorld.insertBefore(newTitle, spellList);
```

## Removing Elements

```javascript
// Remove specific element
const oldDescription = document.querySelector('.description');
oldDescription.remove();

// Remove child element
const parent = document.getElementById('game-world');
const child = document.getElementById('cast-spell');
parent.removeChild(child);

// Clear all content
const spellList = document.getElementById('available-spells');
spellList.innerHTML = ''; // Removes all children
```

## Practical Example: Dynamic Spell Book

```javascript
class SpellBook {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
        this.spells = [
            { name: 'Fireball', damage: 50, mana: 25, school: 'Evocation' },
            { name: 'Heal', healing: 30, mana: 20, school: 'Restoration' },
            { name: 'Lightning', damage: 60, mana: 30, school: 'Evocation' },
            { name: 'Shield', defense: 25, mana: 15, school: 'Abjuration' }
        ];
        this.render();
    }
    
    render() {
        // Clear existing content
        this.container.innerHTML = '';
        
        // Create title
        const title = document.createElement('h2');
        title.textContent = 'Spell Book';
        title.classList.add('spell-book-title');
        this.container.appendChild(title);
        
        // Create spell grid
        const spellGrid = document.createElement('div');
        spellGrid.classList.add('spell-grid');
        
        this.spells.forEach((spell, index) => {
            const spellCard = this.createSpellCard(spell, index);
            spellGrid.appendChild(spellCard);
        });
        
        this.container.appendChild(spellGrid);
    }
    
    createSpellCard(spell, index) {
        const card = document.createElement('div');
        card.classList.add('spell-card');
        card.dataset.spellIndex = index;
        
        card.innerHTML = `
            <h3>${spell.name}</h3>
            <p class="school">${spell.school}</p>
            <div class="stats">
                ${spell.damage ? `<span>Damage: ${spell.damage}</span>` : ''}
                ${spell.healing ? `<span>Healing: ${spell.healing}</span>` : ''}
                ${spell.defense ? `<span>Defense: ${spell.defense}</span>` : ''}
                <span>Mana: ${spell.mana}</span>
            </div>
            <button class="cast-button">Cast Spell</button>
        `;
        
        // Add click event
        const castButton = card.querySelector('.cast-button');
        castButton.addEventListener('click', () => this.castSpell(index));
        
        return card;
    }
    
    castSpell(index) {
        const spell = this.spells[index];
        this.showSpellEffect(spell);
    }
    
    showSpellEffect(spell) {
        // Create temporary effect element
        const effect = document.createElement('div');
        effect.classList.add('spell-effect');
        effect.textContent = `${spell.name} cast successfully!`;
        
        document.body.appendChild(effect);
        
        // Remove after animation
        setTimeout(() => {
            effect.remove();
        }, 2000);
    }
    
    addSpell(newSpell) {
        this.spells.push(newSpell);
        this.render(); // Re-render the spell book
    }
}

// Initialize the spell book
const spellBook = new SpellBook('spell-container');

// Add a new spell dynamically
spellBook.addSpell({
    name: 'Teleport',
    mana: 40,
    school: 'Conjuration'
});
```

## Form Manipulation

```javascript
// Working with form elements
const characterForm = document.getElementById('character-creation');

// Get form values
function getCharacterData() {
    const formData = new FormData(characterForm);
    return {
        name: formData.get('character-name'),
        class: formData.get('character-class'),
        level: parseInt(formData.get('level')) || 1
    };
}

// Set form values
function setCharacterData(character) {
    document.getElementById('character-name').value = character.name;
    document.getElementById('character-class').value = character.class;
    document.getElementById('level').value = character.level;
}

// Validate form
function validateForm() {
    const name = document.getElementById('character-name').value;
    const errorDiv = document.getElementById('error-message');
    
    if (name.length < 3) {
        errorDiv.textContent = 'Character name must be at least 3 characters';
        errorDiv.style.display = 'block';
        return false;
    }
    
    errorDiv.style.display = 'none';
    return true;
}
```

## Advanced DOM Techniques

```javascript
// Clone elements
const originalSpell = document.querySelector('.spell-card');
const clonedSpell = originalSpell.cloneNode(true); // true = deep clone
clonedSpell.querySelector('h3').textContent = 'New Spell';

// Find elements relative to current element
const spellCard = document.querySelector('.spell-card');
const nextCard = spellCard.nextElementSibling;
const prevCard = spellCard.previousElementSibling;
const parent = spellCard.parentElement;

// Get element dimensions and position
const rect = spellCard.getBoundingClientRect();
console.log(`Width: ${rect.width}, Height: ${rect.height}`);
console.log(`Position: ${rect.left}, ${rect.top}`);

// Scroll to element
spellCard.scrollIntoView({ behavior: 'smooth' });
```

*DOM manipulation is the key to creating dynamic, interactive web experiences. Master these techniques to bring your web pages to life!*

---

**Next**: Continue with Events and Interactions to learn how to respond to user actions.
# Events: Responding to User Magic

*Handle clicks, keyboard input, and other user interactions*

## The Language of Interaction

Events are how web pages communicate with users. Every click, keystroke, mouse movement, and page load triggers an event that you can capture and respond to with JavaScript magic.

## Basic Event Handling

```javascript
// Method 1: HTML onclick attribute (not recommended)
// <button onclick="castSpell()">Cast Spell</button>

// Method 2: DOM property (limited to one handler)
const spellButton = document.getElementById('cast-spell');
spellButton.onclick = function() {
    console.log('Spell cast!');
};

// Method 3: addEventListener (recommended - allows multiple handlers)
spellButton.addEventListener('click', function() {
    console.log('Fireball launched!');
});

// Arrow function syntax
spellButton.addEventListener('click', () => {
    console.log('Lightning strikes!');
});
```

## Common Event Types

```javascript
const gameArea = document.getElementById('game-area');
const spellInput = document.getElementById('spell-input');

// Mouse events
gameArea.addEventListener('click', (event) => {
    console.log(`Clicked at: ${event.clientX}, ${event.clientY}`);
});

gameArea.addEventListener('mouseover', () => {
    gameArea.style.backgroundColor = '#2a2a4e';
});

gameArea.addEventListener('mouseout', () => {
    gameArea.style.backgroundColor = '#1a1a2e';
});

// Keyboard events
spellInput.addEventListener('keydown', (event) => {
    console.log(`Key pressed: ${event.key}`);
    
    if (event.key === 'Enter') {
        castSpellFromInput();
    }
});

spellInput.addEventListener('keyup', (event) => {
    console.log(`Key released: ${event.key}`);
});

// Form events
const characterForm = document.getElementById('character-form');
characterForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent default form submission
    createCharacter();
});

// Window events
window.addEventListener('load', () => {
    console.log('Page fully loaded!');
    initializeGame();
});

window.addEventListener('resize', () => {
    console.log('Window resized!');
    adjustGameLayout();
});
```

## Event Object Properties

```javascript
document.addEventListener('click', (event) => {
    console.log('Event details:');
    console.log('Type:', event.type);           // 'click'
    console.log('Target:', event.target);       // Element that was clicked
    console.log('Current Target:', event.currentTarget); // Element with the listener
    console.log('Mouse X:', event.clientX);     // X coordinate
    console.log('Mouse Y:', event.clientY);     // Y coordinate
    console.log('Timestamp:', event.timeStamp); // When event occurred
});

document.addEventListener('keydown', (event) => {
    console.log('Key:', event.key);             // 'a', 'Enter', 'Shift'
    console.log('Key Code:', event.keyCode);    // Numeric code (deprecated)
    console.log('Ctrl pressed:', event.ctrlKey); // Boolean
    console.log('Shift pressed:', event.shiftKey); // Boolean
    console.log('Alt pressed:', event.altKey);   // Boolean
});
```

## Event Delegation

```javascript
// Instead of adding listeners to each spell card individually
const spellContainer = document.getElementById('spell-container');

spellContainer.addEventListener('click', (event) => {
    // Check if clicked element is a spell card
    if (event.target.classList.contains('spell-card')) {
        const spellName = event.target.dataset.spellName;
        castSpell(spellName);
    }
    
    // Check if clicked element is a cast button
    if (event.target.classList.contains('cast-button')) {
        const spellCard = event.target.closest('.spell-card');
        const spellName = spellCard.dataset.spellName;
        castSpell(spellName);
    }
});

function castSpell(spellName) {
    console.log(`Casting ${spellName}!`);
    // Add spell casting logic here
}
```

## Practical Example: Interactive Spell Casting Game

```javascript
class SpellCastingGame {
    constructor() {
        this.playerMana = 100;
        this.playerHealth = 100;
        this.spells = {
            'fireball': { damage: 30, manaCost: 20, cooldown: 0 },
            'heal': { healing: 25, manaCost: 15, cooldown: 0 },
            'lightning': { damage: 45, manaCost: 30, cooldown: 0 }
        };
        
        this.initializeEventListeners();
        this.updateUI();
    }
    
    initializeEventListeners() {
        // Spell casting buttons
        document.querySelectorAll('.spell-button').forEach(button => {
            button.addEventListener('click', (event) => {
                const spellName = event.target.dataset.spell;
                this.castSpell(spellName);
            });
        });
        
        // Keyboard shortcuts
        document.addEventListener('keydown', (event) => {
            switch(event.key) {
                case '1':
                    this.castSpell('fireball');
                    break;
                case '2':
                    this.castSpell('heal');
                    break;
                case '3':
                    this.castSpell('lightning');
                    break;
                case ' ': // Spacebar
                    event.preventDefault();
                    this.restoreMana();
                    break;
            }
        });
        
        // Mouse hover effects
        document.querySelectorAll('.spell-button').forEach(button => {
            button.addEventListener('mouseenter', (event) => {
                this.showSpellTooltip(event.target);
            });
            
            button.addEventListener('mouseleave', () => {
                this.hideSpellTooltip();
            });
        });
        
        // Right-click context menu (prevent default and show custom menu)
        document.addEventListener('contextmenu', (event) => {
            event.preventDefault();
            this.showContextMenu(event.clientX, event.clientY);
        });
        
        // Click anywhere to hide context menu
        document.addEventListener('click', () => {
            this.hideContextMenu();
        });
    }
    
    castSpell(spellName) {
        const spell = this.spells[spellName];
        
        if (!spell) {
            console.log('Unknown spell!');
            return;
        }
        
        if (spell.cooldown > 0) {
            console.log(`${spellName} is on cooldown!`);
            return;
        }
        
        if (this.playerMana < spell.manaCost) {
            console.log('Not enough mana!');
            this.showMessage('Not enough mana!', 'error');
            return;
        }
        
        // Cast the spell
        this.playerMana -= spell.manaCost;
        
        if (spell.damage) {
            console.log(`${spellName} deals ${spell.damage} damage!`);
            this.showMessage(`${spellName} deals ${spell.damage} damage!`, 'success');
        }
        
        if (spell.healing) {
            this.playerHealth = Math.min(100, this.playerHealth + spell.healing);
            console.log(`Healed for ${spell.healing} health!`);
            this.showMessage(`Healed for ${spell.healing} health!`, 'success');
        }
        
        // Set cooldown
        spell.cooldown = 3000; // 3 seconds
        setTimeout(() => {
            spell.cooldown = 0;
            this.updateUI();
        }, 3000);
        
        this.updateUI();
        this.createSpellEffect(spellName);
    }
    
    showSpellTooltip(button) {
        const spellName = button.dataset.spell;
        const spell = this.spells[spellName];
        
        const tooltip = document.createElement('div');
        tooltip.id = 'spell-tooltip';
        tooltip.innerHTML = `
            <strong>${spellName.toUpperCase()}</strong><br>
            Mana Cost: ${spell.manaCost}<br>
            ${spell.damage ? `Damage: ${spell.damage}<br>` : ''}
            ${spell.healing ? `Healing: ${spell.healing}<br>` : ''}
            ${spell.cooldown > 0 ? 'On Cooldown' : 'Ready'}
        `;
        
        document.body.appendChild(tooltip);
        
        // Position tooltip near button
        const rect = button.getBoundingClientRect();
        tooltip.style.position = 'absolute';
        tooltip.style.left = rect.right + 10 + 'px';
        tooltip.style.top = rect.top + 'px';
    }
    
    hideSpellTooltip() {
        const tooltip = document.getElementById('spell-tooltip');
        if (tooltip) {
            tooltip.remove();
        }
    }
    
    showContextMenu(x, y) {
        const menu = document.createElement('div');
        menu.id = 'context-menu';
        menu.innerHTML = `
            <div class="menu-item" data-action="restore-mana">Restore Mana</div>
            <div class="menu-item" data-action="restore-health">Restore Health</div>
            <div class="menu-item" data-action="reset-cooldowns">Reset Cooldowns</div>
        `;
        
        menu.style.position = 'absolute';
        menu.style.left = x + 'px';
        menu.style.top = y + 'px';
        
        // Add click handlers to menu items
        menu.addEventListener('click', (event) => {
            const action = event.target.dataset.action;
            this.handleContextMenuAction(action);
            this.hideContextMenu();
        });
        
        document.body.appendChild(menu);
    }
    
    hideContextMenu() {
        const menu = document.getElementById('context-menu');
        if (menu) {
            menu.remove();
        }
    }
    
    handleContextMenuAction(action) {
        switch(action) {
            case 'restore-mana':
                this.playerMana = 100;
                break;
            case 'restore-health':
                this.playerHealth = 100;
                break;
            case 'reset-cooldowns':
                Object.values(this.spells).forEach(spell => spell.cooldown = 0);
                break;
        }
        this.updateUI();
    }
    
    createSpellEffect(spellName) {
        const effect = document.createElement('div');
        effect.classList.add('spell-effect', spellName);
        effect.textContent = '✨';
        
        // Random position
        effect.style.position = 'absolute';
        effect.style.left = Math.random() * window.innerWidth + 'px';
        effect.style.top = Math.random() * window.innerHeight + 'px';
        effect.style.fontSize = '2em';
        effect.style.pointerEvents = 'none';
        
        document.body.appendChild(effect);
        
        // Animate and remove
        setTimeout(() => {
            effect.style.transform = 'scale(2) rotate(360deg)';
            effect.style.opacity = '0';
        }, 100);
        
        setTimeout(() => {
            effect.remove();
        }, 1000);
    }
    
    showMessage(text, type) {
        const message = document.createElement('div');
        message.classList.add('game-message', type);
        message.textContent = text;
        
        const messageContainer = document.getElementById('message-container');
        messageContainer.appendChild(message);
        
        setTimeout(() => {
            message.remove();
        }, 3000);
    }
    
    updateUI() {
        document.getElementById('player-mana').textContent = this.playerMana;
        document.getElementById('player-health').textContent = this.playerHealth;
        
        // Update spell button states
        document.querySelectorAll('.spell-button').forEach(button => {
            const spellName = button.dataset.spell;
            const spell = this.spells[spellName];
            
            if (spell.cooldown > 0 || this.playerMana < spell.manaCost) {
                button.disabled = true;
                button.classList.add('disabled');
            } else {
                button.disabled = false;
                button.classList.remove('disabled');
            }
        });
    }
    
    restoreMana() {
        this.playerMana = Math.min(100, this.playerMana + 20);
        this.updateUI();
        this.showMessage('Mana restored!', 'info');
    }
}

// Initialize the game when page loads
document.addEventListener('DOMContentLoaded', () => {
    const game = new SpellCastingGame();
});
```

## Preventing Default Behavior

```javascript
// Prevent form submission
document.getElementById('spell-form').addEventListener('submit', (event) => {
    event.preventDefault();
    console.log('Form submission prevented');
});

// Prevent right-click context menu
document.addEventListener('contextmenu', (event) => {
    event.preventDefault();
    console.log('Context menu prevented');
});

// Prevent specific key combinations
document.addEventListener('keydown', (event) => {
    if (event.ctrlKey && event.key === 's') {
        event.preventDefault();
        console.log('Ctrl+S prevented - using custom save');
        saveGame();
    }
});
```

## Event Bubbling and Capturing

```javascript
// Event bubbling (default) - events bubble up from child to parent
document.getElementById('parent').addEventListener('click', () => {
    console.log('Parent clicked');
});

document.getElementById('child').addEventListener('click', (event) => {
    console.log('Child clicked');
    // event.stopPropagation(); // Uncomment to stop bubbling
});

// Event capturing - events capture down from parent to child
document.getElementById('parent').addEventListener('click', () => {
    console.log('Parent clicked (capturing)');
}, true); // true enables capturing phase
```

*Events are the foundation of interactive web applications. Master event handling to create engaging, responsive user experiences!*

---

**Next**: Continue with Async JavaScript to learn about promises, async/await, and handling asynchronous operations.
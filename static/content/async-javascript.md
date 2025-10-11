# Async JavaScript: Time Manipulation

*Master promises, async/await, and asynchronous programming*

## The Nature of Time in Code

JavaScript is single-threaded, but the web is full of operations that take time - loading data, waiting for user input, or communicating with servers. Asynchronous programming lets you handle these time-consuming tasks without freezing your magical interface.

## Understanding Asynchronous Operations

```javascript
// Synchronous (blocking) - each line waits for the previous to complete
console.log('First spell');
console.log('Second spell');
console.log('Third spell');

// Asynchronous (non-blocking) - doesn't wait
console.log('Casting spell...');
setTimeout(() => {
    console.log('Spell effect appears!');
}, 2000);
console.log('Continuing with other magic...');

// Output:
// Casting spell...
// Continuing with other magic...
// (2 seconds later) Spell effect appears!
```

## Callbacks: The Old Way

```javascript
function castSpellWithDelay(spellName, callback) {
    console.log(`Preparing ${spellName}...`);
    
    setTimeout(() => {
        console.log(`${spellName} cast successfully!`);
        callback(null, `${spellName} dealt 50 damage`);
    }, 1000);
}

// Using callbacks
castSpellWithDelay('Fireball', (error, result) => {
    if (error) {
        console.log('Spell failed:', error);
    } else {
        console.log('Spell result:', result);
    }
});

// Callback hell (avoid this!)
castSpellWithDelay('Fireball', (error1, result1) => {
    if (!error1) {
        castSpellWithDelay('Lightning', (error2, result2) => {
            if (!error2) {
                castSpellWithDelay('Heal', (error3, result3) => {
                    console.log('All spells cast!');
                });
            }
        });
    }
});
```

## Promises: A Better Way

```javascript
// Creating a promise
function castSpell(spellName) {
    return new Promise((resolve, reject) => {
        console.log(`Casting ${spellName}...`);
        
        setTimeout(() => {
            const success = Math.random() > 0.2; // 80% success rate
            
            if (success) {
                resolve(`${spellName} cast successfully! Dealt 50 damage.`);
            } else {
                reject(new Error(`${spellName} fizzled out!`));
            }
        }, 1000);
    });
}

// Using promises with .then() and .catch()
castSpell('Fireball')
    .then(result => {
        console.log('Success:', result);
        return castSpell('Lightning'); // Chain another spell
    })
    .then(result => {
        console.log('Success:', result);
        return castSpell('Heal');
    })
    .then(result => {
        console.log('Success:', result);
        console.log('All spells completed!');
    })
    .catch(error => {
        console.log('Spell failed:', error.message);
    });
```

## Async/Await: The Modern Way

```javascript
// Using async/await (cleaner syntax)
async function castSpellSequence() {
    try {
        console.log('Starting spell sequence...');
        
        const fireball = await castSpell('Fireball');
        console.log('Fireball result:', fireball);
        
        const lightning = await castSpell('Lightning');
        console.log('Lightning result:', lightning);
        
        const heal = await castSpell('Heal');
        console.log('Heal result:', heal);
        
        console.log('All spells completed successfully!');
        
    } catch (error) {
        console.log('Spell sequence failed:', error.message);
    }
}

// Call the async function
castSpellSequence();

// Parallel spell casting (all at once)
async function castSpellsInParallel() {
    try {
        console.log('Casting multiple spells simultaneously...');
        
        const spellPromises = [
            castSpell('Fireball'),
            castSpell('Lightning'),
            castSpell('Heal')
        ];
        
        const results = await Promise.all(spellPromises);
        console.log('All spells completed:', results);
        
    } catch (error) {
        console.log('At least one spell failed:', error.message);
    }
}
```

## Fetching Data from APIs

```javascript
// Fetching spell data from an API
async function fetchSpellData(spellId) {
    try {
        console.log(`Fetching data for spell ${spellId}...`);
        
        const response = await fetch(`https://api.spells.com/spell/${spellId}`);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const spellData = await response.json();
        return spellData;
        
    } catch (error) {
        console.log('Failed to fetch spell data:', error.message);
        throw error; // Re-throw to let caller handle it
    }
}

// Using the fetch function
async function displaySpellInfo(spellId) {
    try {
        const spell = await fetchSpellData(spellId);
        
        document.getElementById('spell-name').textContent = spell.name;
        document.getElementById('spell-description').textContent = spell.description;
        document.getElementById('spell-damage').textContent = spell.damage;
        
    } catch (error) {
        document.getElementById('error-message').textContent = 
            'Failed to load spell data. Please try again.';
    }
}
```

## Practical Example: Spell Loading System

```javascript
class SpellLoader {
    constructor() {
        this.loadedSpells = new Map();
        this.loadingPromises = new Map();
    }
    
    async loadSpell(spellName) {
        // Return cached spell if already loaded
        if (this.loadedSpells.has(spellName)) {
            return this.loadedSpells.get(spellName);
        }
        
        // Return existing promise if already loading
        if (this.loadingPromises.has(spellName)) {
            return this.loadingPromises.get(spellName);
        }
        
        // Start loading the spell
        const loadingPromise = this.fetchSpellFromServer(spellName);
        this.loadingPromises.set(spellName, loadingPromise);
        
        try {
            const spell = await loadingPromise;
            this.loadedSpells.set(spellName, spell);
            this.loadingPromises.delete(spellName);
            return spell;
        } catch (error) {
            this.loadingPromises.delete(spellName);
            throw error;
        }
    }
    
    async fetchSpellFromServer(spellName) {
        // Simulate network delay
        await this.delay(1000 + Math.random() * 2000);
        
        // Simulate occasional failures
        if (Math.random() < 0.1) {
            throw new Error(`Failed to load ${spellName} from server`);
        }
        
        // Return mock spell data
        return {
            name: spellName,
            damage: Math.floor(Math.random() * 100) + 20,
            manaCost: Math.floor(Math.random() * 50) + 10,
            description: `A powerful ${spellName.toLowerCase()} spell`,
            castTime: Math.random() * 3 + 1
        };
    }
    
    async loadMultipleSpells(spellNames) {
        const loadPromises = spellNames.map(name => this.loadSpell(name));
        
        try {
            const spells = await Promise.all(loadPromises);
            return spells;
        } catch (error) {
            console.log('Failed to load some spells:', error.message);
            
            // Use Promise.allSettled to get partial results
            const results = await Promise.allSettled(loadPromises);
            
            const successfulSpells = results
                .filter(result => result.status === 'fulfilled')
                .map(result => result.value);
                
            const failedSpells = results
                .filter(result => result.status === 'rejected')
                .map(result => result.reason.message);
            
            console.log('Loaded spells:', successfulSpells);
            console.log('Failed spells:', failedSpells);
            
            return successfulSpells;
        }
    }
    
    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}

// Usage example
const spellLoader = new SpellLoader();

async function initializeSpellBook() {
    const loadingIndicator = document.getElementById('loading');
    const spellContainer = document.getElementById('spell-container');
    
    try {
        loadingIndicator.style.display = 'block';
        
        const spellNames = ['Fireball', 'Lightning', 'Heal', 'Shield', 'Teleport'];
        const spells = await spellLoader.loadMultipleSpells(spellNames);
        
        // Display loaded spells
        spellContainer.innerHTML = '';
        spells.forEach(spell => {
            const spellElement = createSpellElement(spell);
            spellContainer.appendChild(spellElement);
        });
        
    } catch (error) {
        console.log('Failed to initialize spell book:', error.message);
        spellContainer.innerHTML = '<p>Failed to load spells. Please refresh the page.</p>';
    } finally {
        loadingIndicator.style.display = 'none';
    }
}

function createSpellElement(spell) {
    const element = document.createElement('div');
    element.className = 'spell-card';
    element.innerHTML = `
        <h3>${spell.name}</h3>
        <p>${spell.description}</p>
        <div class="spell-stats">
            <span>Damage: ${spell.damage}</span>
            <span>Mana: ${spell.manaCost}</span>
            <span>Cast Time: ${spell.castTime.toFixed(1)}s</span>
        </div>
    `;
    return element;
}
```

## Error Handling in Async Code

```javascript
async function robustSpellCasting() {
    const maxRetries = 3;
    let attempt = 0;
    
    while (attempt < maxRetries) {
        try {
            const result = await castSpell('Fireball');
            console.log('Spell cast successfully:', result);
            return result;
            
        } catch (error) {
            attempt++;
            console.log(`Attempt ${attempt} failed:`, error.message);
            
            if (attempt >= maxRetries) {
                console.log('All attempts failed. Spell casting aborted.');
                throw new Error('Spell casting failed after multiple attempts');
            }
            
            // Wait before retrying
            await new Promise(resolve => setTimeout(resolve, 1000 * attempt));
        }
    }
}

// Timeout wrapper for async operations
function withTimeout(promise, timeoutMs) {
    return Promise.race([
        promise,
        new Promise((_, reject) => 
            setTimeout(() => reject(new Error('Operation timed out')), timeoutMs)
        )
    ]);
}

// Usage
async function castSpellWithTimeout() {
    try {
        const result = await withTimeout(castSpell('Fireball'), 5000);
        console.log('Spell cast within time limit:', result);
    } catch (error) {
        if (error.message === 'Operation timed out') {
            console.log('Spell took too long to cast!');
        } else {
            console.log('Spell failed:', error.message);
        }
    }
}
```

## Promise Utility Methods

```javascript
// Promise.all - wait for all promises (fails if any fail)
const allSpells = await Promise.all([
    castSpell('Fireball'),
    castSpell('Lightning'),
    castSpell('Heal')
]);

// Promise.allSettled - wait for all promises (doesn't fail)
const allResults = await Promise.allSettled([
    castSpell('Fireball'),
    castSpell('Lightning'),
    castSpell('Heal')
]);

// Promise.race - return first completed promise
const firstSpell = await Promise.race([
    castSpell('Fireball'),
    castSpell('Lightning'),
    castSpell('Heal')
]);

// Promise.any - return first successful promise
const firstSuccessfulSpell = await Promise.any([
    castSpell('Fireball'),
    castSpell('Lightning'),
    castSpell('Heal')
]);
```

*Asynchronous programming is essential for modern web development. Master these patterns to create responsive, efficient magical applications!*

---

**Next**: Continue with Fetch APIs to learn how to communicate with external magical services and data sources.
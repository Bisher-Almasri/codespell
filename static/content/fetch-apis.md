# Fetch APIs: Summoning External Data

*Learn to communicate with external services and APIs*

## The Art of Digital Summoning

In the mystical realm of web development, your applications rarely exist in isolation. They must communicate with external services, databases, and APIs to fetch data, send information, and interact with the broader digital universe. The Fetch API is your primary tool for these magical communications.

## Understanding APIs

An API (Application Programming Interface) is like a mystical portal that allows different applications to communicate. Think of it as a waiter in a restaurant - you tell the waiter what you want, they go to the kitchen (server), and bring back your order (data).

```javascript
// Basic fetch syntax
fetch('https://api.example.com/spells')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Summoning failed:', error));
```

## Making Your First API Call

```javascript
// Fetch spell data from a magical API
async function fetchSpellData() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const spellData = await response.json();
    console.log('Spell summoned:', spellData);
    return spellData;
    
  } catch (error) {
    console.error('Failed to summon spell:', error);
    throw error;
  }
}

// Use the function
fetchSpellData()
  .then(spell => {
    document.getElementById('spell-title').textContent = spell.title;
    document.getElementById('spell-body').textContent = spell.body;
  });
```

## HTTP Methods: Different Types of Magic

```javascript
// GET - Retrieve data (default method)
async function getSpells() {
  const response = await fetch('/api/spells');
  return response.json();
}

// POST - Create new data
async function createSpell(spellData) {
  const response = await fetch('/api/spells', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(spellData)
  });
  return response.json();
}

// PUT - Update existing data
async function updateSpell(spellId, spellData) {
  const response = await fetch(`/api/spells/${spellId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(spellData)
  });
  return response.json();
}

// DELETE - Remove data
async function deleteSpell(spellId) {
  const response = await fetch(`/api/spells/${spellId}`, {
    method: 'DELETE'
  });
  return response.ok;
}
```

## Working with Headers and Authentication

```javascript
// Adding authentication headers
async function fetchProtectedSpells() {
  const token = localStorage.getItem('authToken');
  
  const response = await fetch('/api/protected-spells', {
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  });
  
  if (response.status === 401) {
    throw new Error('Authentication failed - please log in');
  }
  
  return response.json();
}

// Custom headers for API keys
async function fetchWeatherSpell(location) {
  const apiKey = 'your-api-key-here';
  
  const response = await fetch(`/api/weather?location=${location}`, {
    headers: {
      'X-API-Key': apiKey,
      'Accept': 'application/json'
    }
  });
  
  return response.json();
}
```

## Error Handling and Response Validation

```javascript
async function robustFetch(url, options = {}) {
  try {
    const response = await fetch(url, options);
    
    // Check if response is ok
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(`HTTP ${response.status}: ${errorData.message || response.statusText}`);
    }
    
    // Check content type
    const contentType = response.headers.get('content-type');
    if (!contentType || !contentType.includes('application/json')) {
      throw new Error('Response is not JSON');
    }
    
    const data = await response.json();
    return data;
    
  } catch (error) {
    if (error.name === 'TypeError') {
      throw new Error('Network error - check your connection');
    }
    throw error;
  }
}

// Usage with comprehensive error handling
async function loadSpellBook() {
  const loadingElement = document.getElementById('loading');
  const errorElement = document.getElementById('error');
  const contentElement = document.getElementById('content');
  
  try {
    loadingElement.style.display = 'block';
    errorElement.style.display = 'none';
    
    const spells = await robustFetch('/api/spells');
    
    contentElement.innerHTML = spells.map(spell => `
      <div class="spell-card">
        <h3>${spell.name}</h3>
        <p>${spell.description}</p>
      </div>
    `).join('');
    
  } catch (error) {
    errorElement.textContent = `Failed to load spells: ${error.message}`;
    errorElement.style.display = 'block';
  } finally {
    loadingElement.style.display = 'none';
  }
}
```

## Practical Example: Spell Database Manager

```javascript
class SpellAPI {
  constructor(baseUrl = '/api') {
    this.baseUrl = baseUrl;
    this.cache = new Map();
  }
  
  async request(endpoint, options = {}) {
    const url = `${this.baseUrl}${endpoint}`;
    
    const defaultOptions = {
      headers: {
        'Content-Type': 'application/json',
      }
    };
    
    const mergedOptions = {
      ...defaultOptions,
      ...options,
      headers: {
        ...defaultOptions.headers,
        ...options.headers
      }
    };
    
    const response = await fetch(url, mergedOptions);
    
    if (!response.ok) {
      throw new Error(`API Error: ${response.status} ${response.statusText}`);
    }
    
    return response.json();
  }
  
  // Get all spells with caching
  async getSpells(useCache = true) {
    const cacheKey = 'all-spells';
    
    if (useCache && this.cache.has(cacheKey)) {
      return this.cache.get(cacheKey);
    }
    
    const spells = await this.request('/spells');
    this.cache.set(cacheKey, spells);
    return spells;
  }
  
  // Get single spell
  async getSpell(id) {
    const cacheKey = `spell-${id}`;
    
    if (this.cache.has(cacheKey)) {
      return this.cache.get(cacheKey);
    }
    
    const spell = await this.request(`/spells/${id}`);
    this.cache.set(cacheKey, spell);
    return spell;
  }
  
  // Create new spell
  async createSpell(spellData) {
    const newSpell = await this.request('/spells', {
      method: 'POST',
      body: JSON.stringify(spellData)
    });
    
    // Invalidate cache
    this.cache.delete('all-spells');
    return newSpell;
  }
  
  // Update spell
  async updateSpell(id, spellData) {
    const updatedSpell = await this.request(`/spells/${id}`, {
      method: 'PUT',
      body: JSON.stringify(spellData)
    });
    
    // Update cache
    this.cache.set(`spell-${id}`, updatedSpell);
    this.cache.delete('all-spells');
    return updatedSpell;
  }
  
  // Delete spell
  async deleteSpell(id) {
    await this.request(`/spells/${id}`, {
      method: 'DELETE'
    });
    
    // Remove from cache
    this.cache.delete(`spell-${id}`);
    this.cache.delete('all-spells');
  }
  
  // Search spells
  async searchSpells(query) {
    const params = new URLSearchParams({ q: query });
    return this.request(`/spells/search?${params}`);
  }
}

// Usage
const spellAPI = new SpellAPI();

async function displaySpells() {
  try {
    const spells = await spellAPI.getSpells();
    const container = document.getElementById('spells-container');
    
    container.innerHTML = spells.map(spell => `
      <div class="spell-card" data-spell-id="${spell.id}">
        <h3>${spell.name}</h3>
        <p>${spell.description}</p>
        <div class="spell-stats">
          <span>Damage: ${spell.damage}</span>
          <span>Mana: ${spell.manaCost}</span>
        </div>
        <button onclick="editSpell(${spell.id})">Edit</button>
        <button onclick="deleteSpell(${spell.id})">Delete</button>
      </div>
    `).join('');
    
  } catch (error) {
    console.error('Failed to load spells:', error);
  }
}

async function editSpell(id) {
  try {
    const spell = await spellAPI.getSpell(id);
    
    // Populate form with spell data
    document.getElementById('spell-name').value = spell.name;
    document.getElementById('spell-description').value = spell.description;
    document.getElementById('spell-damage').value = spell.damage;
    
    // Show edit form
    document.getElementById('edit-form').style.display = 'block';
    
  } catch (error) {
    alert('Failed to load spell for editing');
  }
}
```

## Working with Real APIs

```javascript
// Example: Using a public API (JSONPlaceholder)
async function fetchRandomQuote() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await response.json();
    const randomPost = posts[Math.floor(Math.random() * posts.length)];
    
    return {
      title: randomPost.title,
      content: randomPost.body,
      id: randomPost.id
    };
  } catch (error) {
    console.error('Failed to fetch quote:', error);
    return null;
  }
}

// Example: Weather API (requires API key)
async function fetchWeather(city) {
  const apiKey = 'your-openweather-api-key';
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  
  try {
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`Weather API error: ${response.status}`);
    }
    
    const data = await response.json();
    
    return {
      city: data.name,
      temperature: data.main.temp,
      description: data.weather[0].description,
      humidity: data.main.humidity
    };
  } catch (error) {
    console.error('Weather fetch failed:', error);
    throw error;
  }
}
```

## Advanced Techniques

```javascript
// Request timeout
function fetchWithTimeout(url, options = {}, timeout = 5000) {
  return Promise.race([
    fetch(url, options),
    new Promise((_, reject) =>
      setTimeout(() => reject(new Error('Request timeout')), timeout)
    )
  ]);
}

// Retry mechanism
async function fetchWithRetry(url, options = {}, maxRetries = 3) {
  for (let i = 0; i < maxRetries; i++) {
    try {
      const response = await fetch(url, options);
      if (response.ok) return response;
      
      if (i === maxRetries - 1) throw new Error(`Failed after ${maxRetries} attempts`);
      
      // Wait before retry (exponential backoff)
      await new Promise(resolve => setTimeout(resolve, Math.pow(2, i) * 1000));
      
    } catch (error) {
      if (i === maxRetries - 1) throw error;
      await new Promise(resolve => setTimeout(resolve, Math.pow(2, i) * 1000));
    }
  }
}

// Parallel requests
async function fetchMultipleSpells(spellIds) {
  const promises = spellIds.map(id => 
    fetch(`/api/spells/${id}`).then(r => r.json())
  );
  
  try {
    const spells = await Promise.all(promises);
    return spells;
  } catch (error) {
    console.error('Failed to fetch some spells:', error);
    
    // Use Promise.allSettled for partial results
    const results = await Promise.allSettled(promises);
    return results
      .filter(result => result.status === 'fulfilled')
      .map(result => result.value);
  }
}
```

## Best Practices

1. **Always handle errors** - Network requests can fail
2. **Validate responses** - Check status codes and content types
3. **Use appropriate HTTP methods** - GET for reading, POST for creating, etc.
4. **Implement caching** - Avoid unnecessary requests
5. **Add loading states** - Show users when requests are in progress
6. **Set timeouts** - Don't let requests hang forever
7. **Secure your APIs** - Use authentication and validate inputs

*Master the Fetch API to connect your web applications to the vast network of digital services and data sources!*

---

**Next**: Continue with Responsive Design to learn how to create websites that work perfectly on all devices.
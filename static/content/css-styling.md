# CSS: Painting with Shadow and Light

Welcome, visual sorcerer, to the mystical art of CSS - Cascading Style Sheets. This is the magic that transforms plain HTML skeletons into beautiful, engaging visual experiences.

## What is CSS?

CSS is the paintbrush of the web, the magic that brings color, layout, typography, and visual effects to your HTML structure. While HTML provides meaning and structure, CSS provides beauty and presentation.

Think of CSS as:
- **The artist's palette** for web design
- **Visual spells** that transform appearance
- **The bridge** between structure and beauty

## CSS Fundamentals

### Basic CSS Syntax
```css
/* Selector { property: value; } */
h1 {
    color: #8b5cf6;
    font-size: 2.5rem;
    text-align: center;
}

.wizard-card {
    background-color: #1a1a2e;
    border: 2px solid #8b5cf6;
    border-radius: 10px;
    padding: 20px;
    margin: 15px;
}

#main-title {
    font-family: 'Cinzel', serif;
    text-shadow: 2px 2px 4px rgba(139, 92, 246, 0.5);
}
```

### CSS Selectors - Targeting Elements

#### Basic Selectors
```css
/* Element selector */
p {
    line-height: 1.6;
    color: #e5e7eb;
}

/* Class selector */
.spell-button {
    background: linear-gradient(45deg, #8b5cf6, #3b82f6);
    color: white;
    border: none;
    padding: 12px 24px;
    border-radius: 6px;
    cursor: pointer;
}

/* ID selector */
#hero-section {
    height: 100vh;
    background-image: url('mystical-background.jpg');
    background-size: cover;
    background-position: center;
}

/* Universal selector */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
```

#### Advanced Selectors
```css
/* Descendant selector */
.wizard-card p {
    margin-bottom: 10px;
}

/* Child selector */
nav > ul {
    display: flex;
    list-style: none;
}

/* Adjacent sibling */
h2 + p {
    font-size: 1.1em;
    font-weight: 500;
}

/* Attribute selectors */
input[type="email"] {
    border: 2px solid #8b5cf6;
}

a[href^="https://"] {
    color: #10b981;
}

img[alt*="wizard"] {
    border: 3px solid gold;
}

/* Pseudo-classes */
.spell-button:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(139, 92, 246, 0.3);
}

.spell-button:active {
    transform: translateY(0);
}

input:focus {
    outline: 3px solid #8b5cf6;
    outline-offset: 2px;
}

li:nth-child(odd) {
    background-color: rgba(139, 92, 246, 0.1);
}

/* Pseudo-elements */
.magical-text::before {
    content: "✨ ";
}

.magical-text::after {
    content: " ✨";
}

p::first-letter {
    font-size: 3em;
    float: left;
    line-height: 1;
    margin-right: 8px;
}
```

## The Box Model - Understanding Space

```css
.spell-container {
    /* Content area */
    width: 300px;
    height: 200px;
    
    /* Padding - space inside the border */
    padding: 20px;
    
    /* Border - the edge of the element */
    border: 3px solid #8b5cf6;
    
    /* Margin - space outside the border */
    margin: 15px auto;
    
    /* Box-sizing controls how width/height are calculated */
    box-sizing: border-box; /* Includes padding and border in width/height */
}

/* Visual debugging */
* {
    outline: 1px solid red; /* Temporary - shows all element boundaries */
}
```

## Typography - The Art of Text

```css
/* Font families */
body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
}

.mystical-title {
    font-family: 'Cinzel', 'Times New Roman', serif;
}

.code-text {
    font-family: 'Fira Code', 'Courier New', monospace;
}

/* Font properties */
.spell-name {
    font-size: 2rem;           /* Size */
    font-weight: 700;          /* Boldness (100-900) */
    font-style: italic;        /* Style */
    line-height: 1.4;          /* Line spacing */
    letter-spacing: 0.05em;    /* Character spacing */
    text-transform: uppercase; /* Case transformation */
}

/* Text alignment and decoration */
.centered-text {
    text-align: center;
}

.magical-link {
    text-decoration: none;
    color: #8b5cf6;
    border-bottom: 2px solid transparent;
    transition: border-color 0.3s ease;
}

.magical-link:hover {
    border-bottom-color: #8b5cf6;
}

/* Text effects */
.glowing-text {
    color: #fff;
    text-shadow: 
        0 0 5px #8b5cf6,
        0 0 10px #8b5cf6,
        0 0 15px #8b5cf6,
        0 0 20px #8b5cf6;
}

.gradient-text {
    background: linear-gradient(45deg, #8b5cf6, #3b82f6, #10b981);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}
```

## Colors and Backgrounds - Painting the Canvas

### Color Systems
```css
.color-examples {
    /* Named colors */
    color: purple;
    
    /* Hexadecimal */
    background-color: #8b5cf6;
    
    /* RGB */
    border-color: rgb(139, 92, 246);
    
    /* RGBA (with transparency) */
    box-shadow: 0 4px 20px rgba(139, 92, 246, 0.3);
    
    /* HSL (Hue, Saturation, Lightness) */
    background: hsl(258, 90%, 66%);
    
    /* HSLA (with transparency) */
    background: hsla(258, 90%, 66%, 0.8);
}

/* CSS Custom Properties (Variables) */
:root {
    --primary-color: #8b5cf6;
    --secondary-color: #3b82f6;
    --accent-color: #10b981;
    --dark-bg: #1a1a2e;
    --light-text: #e5e7eb;
}

.themed-element {
    background-color: var(--primary-color);
    color: var(--light-text);
    border: 2px solid var(--accent-color);
}
```

### Gradients and Backgrounds
```css
.gradient-backgrounds {
    /* Linear gradients */
    background: linear-gradient(45deg, #8b5cf6, #3b82f6);
    background: linear-gradient(to right, #1a1a2e, #8b5cf6, #1a1a2e);
    
    /* Radial gradients */
    background: radial-gradient(circle, #8b5cf6, #1a1a2e);
    background: radial-gradient(ellipse at top left, #8b5cf6, transparent);
    
    /* Multiple backgrounds */
    background: 
        linear-gradient(45deg, rgba(139, 92, 246, 0.8), transparent),
        url('stars.png'),
        #1a1a2e;
    background-size: cover, 100px 100px, auto;
    background-repeat: no-repeat, repeat, no-repeat;
}

.mystical-card {
    background-image: url('mystical-texture.jpg');
    background-size: cover;
    background-position: center;
    background-attachment: fixed; /* Parallax effect */
    
    /* Overlay */
    position: relative;
}

.mystical-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(26, 26, 46, 0.7);
    z-index: 1;
}

.mystical-card > * {
    position: relative;
    z-index: 2;
}
```

## Layout Magic - Positioning Elements

### Flexbox - One-Dimensional Layout
```css
.spell-container {
    display: flex;
    
    /* Direction */
    flex-direction: row; /* row, column, row-reverse, column-reverse */
    
    /* Main axis alignment */
    justify-content: center; /* flex-start, flex-end, center, space-between, space-around, space-evenly */
    
    /* Cross axis alignment */
    align-items: center; /* flex-start, flex-end, center, stretch, baseline */
    
    /* Wrapping */
    flex-wrap: wrap; /* nowrap, wrap, wrap-reverse */
    
    /* Gap between items */
    gap: 20px;
}

.spell-card {
    /* Flex item properties */
    flex: 1; /* flex-grow: 1, flex-shrink: 1, flex-basis: 0% */
    flex-basis: 300px; /* Initial size */
    flex-grow: 0; /* Don't grow */
    flex-shrink: 1; /* Can shrink */
}

/* Common flexbox patterns */
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.centered-content {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
}

.card-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
}

.card-grid > * {
    flex: 1 1 300px; /* Responsive cards */
}
```

### CSS Grid - Two-Dimensional Layout
```css
.spell-grid {
    display: grid;
    
    /* Define columns */
    grid-template-columns: repeat(3, 1fr); /* 3 equal columns */
    grid-template-columns: 200px 1fr 100px; /* Fixed, flexible, fixed */
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); /* Responsive */
    
    /* Define rows */
    grid-template-rows: auto 1fr auto; /* Header, content, footer */
    
    /* Gaps */
    gap: 20px;
    grid-column-gap: 30px;
    grid-row-gap: 15px;
}

/* Grid item positioning */
.featured-spell {
    grid-column: 1 / 3; /* Span from column 1 to 3 */
    grid-row: 1 / 2;
}

.sidebar {
    grid-column: 3;
    grid-row: 1 / -1; /* Span all rows */
}

/* Named grid areas */
.page-layout {
    display: grid;
    grid-template-areas: 
        "header header header"
        "sidebar main main"
        "footer footer footer";
    grid-template-columns: 200px 1fr 1fr;
    grid-template-rows: auto 1fr auto;
    min-height: 100vh;
}

.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main { grid-area: main; }
.footer { grid-area: footer; }
```

### Positioning
```css
.positioned-elements {
    /* Static (default) - normal document flow */
    position: static;
    
    /* Relative - positioned relative to its normal position */
    position: relative;
    top: 10px;
    left: 20px;
    
    /* Absolute - positioned relative to nearest positioned ancestor */
    position: absolute;
    top: 0;
    right: 0;
    
    /* Fixed - positioned relative to viewport */
    position: fixed;
    bottom: 20px;
    right: 20px;
    
    /* Sticky - switches between relative and fixed */
    position: sticky;
    top: 0;
}

/* Common positioning patterns */
.floating-action-button {
    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: 1000;
}

.overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    z-index: 999;
}

.tooltip {
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    z-index: 10;
}
```

## Responsive Design - Adaptive Magic

### Media Queries
```css
/* Mobile-first approach */
.spell-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 15px;
}

/* Tablet */
@media (min-width: 768px) {
    .spell-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 20px;
    }
}

/* Desktop */
@media (min-width: 1024px) {
    .spell-grid {
        grid-template-columns: repeat(3, 1fr);
        gap: 30px;
    }
}

/* Large screens */
@media (min-width: 1440px) {
    .spell-grid {
        grid-template-columns: repeat(4, 1fr);
    }
}

/* Print styles */
@media print {
    .no-print {
        display: none;
    }
    
    body {
        font-size: 12pt;
        color: black;
        background: white;
    }
}

/* Dark mode */
@media (prefers-color-scheme: dark) {
    :root {
        --bg-color: #1a1a2e;
        --text-color: #e5e7eb;
    }
}

/* Reduced motion */
@media (prefers-reduced-motion: reduce) {
    * {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
    }
}
```

### Flexible Units
```css
.responsive-typography {
    /* Relative to parent font size */
    font-size: 1.5em;
    
    /* Relative to root font size */
    font-size: 1.5rem;
    
    /* Viewport units */
    font-size: 4vw; /* 4% of viewport width */
    height: 100vh; /* 100% of viewport height */
    width: 50vmin; /* 50% of smaller viewport dimension */
    
    /* Clamp for responsive sizing */
    font-size: clamp(1rem, 4vw, 3rem); /* Min 1rem, preferred 4vw, max 3rem */
    
    /* Calc for calculations */
    width: calc(100% - 40px);
    margin-top: calc(2rem + 5vh);
}
```

## Animations and Transitions - Motion Magic

### Transitions
```css
.spell-button {
    background-color: #8b5cf6;
    color: white;
    padding: 12px 24px;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    
    /* Transition properties */
    transition: all 0.3s ease;
    /* Or specific properties */
    transition: 
        background-color 0.3s ease,
        transform 0.2s ease-out,
        box-shadow 0.3s ease;
}

.spell-button:hover {
    background-color: #7c3aed;
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(139, 92, 246, 0.4);
}

.spell-button:active {
    transform: translateY(0);
    transition-duration: 0.1s;
}
```

### Keyframe Animations
```css
/* Define keyframes */
@keyframes float {
    0%, 100% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-10px);
    }
}

@keyframes glow {
    0%, 100% {
        box-shadow: 0 0 5px #8b5cf6;
    }
    50% {
        box-shadow: 0 0 20px #8b5cf6, 0 0 30px #8b5cf6;
    }
}

@keyframes slideInFromLeft {
    from {
        transform: translateX(-100%);
        opacity: 0;
    }
    to {
        transform: translateX(0);
        opacity: 1;
    }
}

/* Apply animations */
.floating-orb {
    animation: float 3s ease-in-out infinite;
}

.glowing-crystal {
    animation: glow 2s ease-in-out infinite alternate;
}

.slide-in-element {
    animation: slideInFromLeft 0.6s ease-out;
}

/* Animation properties */
.complex-animation {
    animation-name: float;
    animation-duration: 3s;
    animation-timing-function: ease-in-out;
    animation-delay: 0.5s;
    animation-iteration-count: infinite;
    animation-direction: alternate;
    animation-fill-mode: both;
    animation-play-state: running;
}
```

## Advanced CSS Techniques

### CSS Custom Properties (Variables)
```css
:root {
    --primary-hue: 258;
    --primary-saturation: 90%;
    --primary-lightness: 66%;
    --primary-color: hsl(var(--primary-hue), var(--primary-saturation), var(--primary-lightness));
    
    --spacing-unit: 8px;
    --border-radius: 6px;
    
    --font-size-small: 0.875rem;
    --font-size-base: 1rem;
    --font-size-large: 1.25rem;
}

.themed-component {
    background-color: var(--primary-color);
    padding: calc(var(--spacing-unit) * 2);
    border-radius: var(--border-radius);
    font-size: var(--font-size-base);
}

/* Dynamic theming */
[data-theme="dark"] {
    --bg-color: #1a1a2e;
    --text-color: #e5e7eb;
}

[data-theme="light"] {
    --bg-color: #ffffff;
    --text-color: #1f2937;
}
```

### Modern CSS Features
```css
/* Container queries (when supported) */
@container (min-width: 400px) {
    .card {
        display: flex;
    }
}

/* Logical properties */
.international-text {
    margin-inline-start: 20px; /* Left in LTR, right in RTL */
    padding-block: 10px; /* Top and bottom */
    border-inline-end: 2px solid #8b5cf6; /* Right in LTR, left in RTL */
}

/* Aspect ratio */
.video-container {
    aspect-ratio: 16 / 9;
    background: #000;
}

/* Gap in flexbox */
.flex-container {
    display: flex;
    gap: 20px; /* Space between items */
}

/* Scroll behavior */
html {
    scroll-behavior: smooth;
}

/* Focus-visible for better accessibility */
button:focus-visible {
    outline: 3px solid #8b5cf6;
    outline-offset: 2px;
}
```

## CSS Architecture and Organization

### BEM Methodology
```css
/* Block */
.spell-card {
    background: #1a1a2e;
    border-radius: 8px;
    padding: 20px;
}

/* Element */
.spell-card__title {
    font-size: 1.5rem;
    color: #8b5cf6;
    margin-bottom: 10px;
}

.spell-card__description {
    color: #9ca3af;
    line-height: 1.6;
}

.spell-card__button {
    background: #8b5cf6;
    color: white;
    border: none;
    padding: 8px 16px;
    border-radius: 4px;
}

/* Modifier */
.spell-card--featured {
    border: 2px solid #8b5cf6;
    box-shadow: 0 8px 25px rgba(139, 92, 246, 0.3);
}

.spell-card__button--secondary {
    background: transparent;
    border: 2px solid #8b5cf6;
    color: #8b5cf6;
}
```

### CSS Organization
```css
/* 1. CSS Reset/Normalize */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

/* 2. CSS Variables */
:root {
    --primary-color: #8b5cf6;
    /* ... other variables */
}

/* 3. Base styles */
body {
    font-family: 'Inter', sans-serif;
    line-height: 1.6;
    color: var(--text-color);
}

/* 4. Layout */
.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

/* 5. Components */
.button { /* ... */ }
.card { /* ... */ }
.modal { /* ... */ }

/* 6. Utilities */
.text-center { text-align: center; }
.mb-4 { margin-bottom: 1rem; }
.hidden { display: none; }

/* 7. Media queries */
@media (min-width: 768px) {
    /* Responsive styles */
}
```

## Practice Project: Mystical Card Component

Create a complete CSS component:

```html
<div class="spell-card spell-card--featured">
    <div class="spell-card__header">
        <h3 class="spell-card__title">Fireball</h3>
        <span class="spell-card__level">Level 5</span>
    </div>
    <div class="spell-card__content">
        <p class="spell-card__description">
            A powerful offensive spell that hurls a ball of flame at enemies.
        </p>
        <div class="spell-card__stats">
            <span class="stat">Damage: 85</span>
            <span class="stat">Mana: 25</span>
            <span class="stat">Cast Time: 2.5s</span>
        </div>
    </div>
    <div class="spell-card__actions">
        <button class="spell-card__button">Learn Spell</button>
        <button class="spell-card__button spell-card__button--secondary">Preview</button>
    </div>
</div>
```

Your challenge: Style this component with:
- Responsive design
- Hover effects and animations
- CSS Grid or Flexbox layout
- Custom properties for theming
- Accessibility considerations

## Next Steps

You've now mastered the visual magic of CSS! With these skills, you can:

- **Create beautiful layouts** with Flexbox and Grid
- **Design responsive websites** that work on all devices
- **Add animations and interactions** to engage users
- **Implement modern design systems** with custom properties
- **Ensure accessibility** with proper focus states and contrast

Next, you'll learn **JavaScript** - the magic that brings interactivity and dynamic behavior to your beautifully styled web pages!

Remember: *"CSS is the bridge between structure and beauty. Master it, and you master the visual realm of the web."*
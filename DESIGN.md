# Elders Group - Design Record

## Color Palette

### Primary Colors
- **Navy**: `#1a1a2e` - Primary brand color
  - Used for: Headers, primary buttons, navigation, important text
  - Contrast ratio: 7.5:1 on white
  
### Secondary Colors
- **Gold**: `#c9a961` - Accent color
  - Used for: Hover states, highlights, secondary CTAs
  - Used for: Brand accents and hierarchy indicators
  
### Background Colors
- **White**: `#ffffff` - Main background
- **Light Gray**: `#fafafa` - Section backgrounds

### Text Colors
- **Dark**: `#2c2c2c` - Primary text
- **Medium**: `#666666` - Secondary text
- **Light**: `#999999` - Tertiary text

## Typography

### Fonts
- **Headings**: Instrument Sans (font-display)
- **Body**: Inter (font-body)
- **Serif**: Crimson Text (font-serif) - for italics

### Text Sizes
- **Hero H1**: 48px-72px (responsive)
- **Section H2**: 32px-52px (responsive)
- **Body**: 16px
- **Small**: 12px-14px

### Font Weights
- **Headings**: 700
- **Subheadings**: 600
- **Body**: 400-500
- **Captions**: 400

## Spacing System

### Section Padding
- **Large**: 120px (desktop), 60px (mobile)
- **Medium**: 80px (desktop), 48px (mobile)
- **Small**: 60px (desktop), 40px (mobile)

### Container
- **Max Width**: 1280px
- **Padding**: 40px (desktop), 24px (tablet), 16px (mobile)

### Component Spacing
- **Cards**: 8px border radius
- **Buttons**: 50px border radius (pill shape)
- **Inputs**: 4px border radius

## Components

### Buttons
```css
Primary:
- Background: #1a1a2e (navy)
- Text: #ffffff (white)
- Padding: 12px 28px
- Font-weight: 600

Secondary:
- Background: transparent
- Border: 1.5px solid #1a1a2e
- Text: #1a1a2e
- Padding: 12px 28px

Gold:
- Background: #c9a961 (gold)
- Text: #1a1a2e (navy)
- Padding: 12px 28px
```

### Cards
- **Background**: #ffffff (white)
- **Border**: 1px solid #e5e5e5
- **Border Radius**: 8px
- **Padding**: 28px
- **Hover**: translateY(-4px), shadow

### Navigation
- **Height**: 72px
- **Background**: rgba(255, 255, 255, 0.95)
- **Shadow**: 0 1px 3px rgba(0, 0, 0, 0.05)
- **Active State**: Gold underline (2px)
- **Transition**: 0.2s ease

### Hero Slider
- **Min Height**: 680px
- **Overlay**: Gradient (navy to blue)
- **Tag**: Semi-transparent white, gold text
- **Title**: Large, two-line
- **CTA Buttons**: Primary gold, secondary outline

## Layout Grids

### Business Grid
- **Desktop**: 3 columns (auto-fit)
- **Tablet**: 2 columns
- **Mobile**: 1 column

### Leadership Grid
- **Desktop**: 4 columns (auto-fit)
- **Mobile**: 2 columns

## Accessibility
- **Contrast**: AA compliant (4.5:1 minimum)
- **Focus**: Visible focus states on all interactive elements
- **Keyboard**: Full keyboard navigation support
- **Responsive**: Mobile-first breakpoints at 1024px, 768px, 480px

## Animation
- **Transition**: 0.2-0.3s cubic-bezier(0.4, 0, 0.2, 1)
- **Hover Effects**: translateY(-2px to -4px)
- **Icon Animation**: Scale on hover

## Status
- **Version**: 1.0
- **Last Updated**: November 2024
- **Maintained By**: Development Team
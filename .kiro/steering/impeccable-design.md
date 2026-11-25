---
inclusion: auto
name: Impeccable Design System
description: Design principles and patterns for the Elders Group website
---

# Elders Group Design System

## Brand Identity
- **Primary Color**: Navy (#1a1a2e) - Professional, trustworthy
- **Secondary Color**: Gold (#c9a961) - Elegant, premium accent
- **Background**: White (#ffffff) - Clean, spacious
- **Text**: Dark (#2c2c2c) with gray variations (#666666, #999999)

## Typography
- **Headings**: Instrument Sans (clean, modern sans-serif)
- **Body**: Inter (high readability)
- **Accents**: Crimson Text (elegant serif for italics)

## Layout Principles
- **Container Width**: Max 1280px
- **Section Padding**: 120px (desktop), 60px (mobile)
- **Card Radius**: 8px standard, 50px for buttons
- **Spacing**: Consistent 8px/16px increments

## Components
### Buttons
- Primary: Navy background, white text
- Secondary: White background, navy border
- Gold: Gold background, navy text

### Cards
- White background with subtle border
- Hover lift: translateY(-4px)
- Consistent padding: 28px

### Navigation
- Sticky header with glassmorphism
- Active state: gold underline
- Smooth transitions

## Design Commands Reference
- `/impeccable start` - Begin designing a new page
- `/impeccable improve` - Fix a problematic interface
- `/impeccable check` - Audit for accessibility, performance
- `/impeccable maintain` - Update design system

## Audit Checks
Run these after significant changes:
- **audit**: Accessibility, performance, responsive behavior
- **clarify**: Copy clarity, labels, error states
- **harden**: Edge cases, missing data, failure recovery
- **polish**: Hierarchy, spacing, consistency

## Live Mode Commands
- `/impeccable generate` - Create variants of an element
- `/impeccable steers` - Apply direction across the page
- `/impeccable tune` - Fine-tune specific properties
- `/impeccable accept` - Apply a variant to source
# Kiro Configuration for Elders Group

This folder contains configuration for the Kiro AI development environment.

## Structure

```
.kiro/
├── agents/          # Custom AI agents
│   └── impeccable.json    # Impeccable design agent
├── steering/        # Context and guidelines
│   ├── impeccable-design.md   # Design system
│   ├── impeccable-guidelines.md # Usage best practices
│   └── impeccable-hooks.md    # Automated checks
└── README.md        # This file
```

## Key Files

### PRODUCT.md
Project overview, audience, purpose, and constraints. Used by agents to understand the context.

### DESIGN.md
Design system including colors, typography, components, and layout rules.

## Impeccable Agent

The Impeccable agent helps with:
- Designing new pages from scratch
- Improving existing interfaces
- Checking for accessibility and performance
- Maintaining design consistency

**Usage in chat:**
```
/impeccable design a signup page for our monthly book club.
Make the next event and how to reserve a seat clear.
```

## Quick Commands

| Command | Description |
|---------|-------------|
| `/impeccable start` | Begin designing a new page |
| `/impeccable improve` | Fix a problematic interface |
| `/impeccable check` | Audit for issues |
| `/impeccable maintain` | Update design system |

## Learn More

- [Impeccable Documentation](https://impeccable.design)
- [Kiro Documentation](https://kiro.dev)
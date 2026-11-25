---
inclusion: auto
name: Impeccable Guidelines
description: Best practices for working with the Impeccable design agent
---

# Working with Impeccable - Best Practices

## How to Use Impeccable

### For New Designs
```
/impeccable design a signup page for our monthly book club.
Make the next event and how to reserve a seat clear.
```

### For Improvements
```
/impeccable this pricing page feels generic and it is hard to compare plans.
Give it a clearer hierarchy while keeping our brand and pricing accurate.
```

### For Reviews
```
/impeccable review the current design and explain what needs attention.
/impeccable check what is holding this design back.
```

### For Variants
```
/impeccable generate 3 bold variants of the pricing cards
```

### For Live Mode
```
/impeccable steers - Point at the page and say what you want to change
/impeccable tune - Fine-tune specific properties
/impeccable accept - Apply a variant to source
```

## What Impeccable Does

| Mode | When to Use | Purpose |
|------|-------------|---------|
| **Start** | Building new pages | Design from scratch with context |
| **Improve** | Fixing problems | Diagnose and fix specific issues |
| **Check** | Before release | Audit accessibility, performance, responsiveness |
| **Maintain** | Consistency | Extract components, update design system |

## Design Modes

| Mode | Use Case | Common On |
|------|----------|-----------|
| **Persuade** | Making offers clear | Landing pages, campaigns, pricing |
| **Operate** | Making tasks easy | Dashboards, editors, product interfaces |
| **Read** | Understanding content | Docs, guides, help pages |
| **Experience** | Letting work lead | Portfolios, galleries, showcases |

## Before You Ask

1. **Describe the outcome** - Use ordinary language
2. **Name specific problems** - "The important number is buried"
3. **Give references** - Show what you want if possible
4. **Keep context current** - Update PRODUCT.md and DESIGN.md

## When It's Not Working

- **Too vague?** - Add more context about audience and task
- **Wrong direction?** - Say "no" and describe what feels wrong
- **Missing details?** - Show a reference image or example
- **Not accessible?** - Ask for `/impeccable check audit`

## Quick Commands

| Command | Purpose |
|---------|---------|
| `/impeccable start` | Begin new design |
| `/impeccable improve` | Fix existing page |
| `/impeccable check audit` | Accessibility review |
| `/impeccable check clarify` | Copy review |
| `/impeccable check harden` | Edge cases |
| `/impeccable check polish` | Final details |
| `/impeccable generate` | Create variants |
| `/impeccable extract` | Create reusable components |
| `/impeccable document` | Update DESIGN.md |

## Important Notes

- **You have final judgment** - Impeccable suggests, you decide
- **Keep context useful** - Stale information leads to wrong assumptions
- **One clear instruction** - Don't mix conflicting design goals
- **Review the result** - Always test with real users
---
inclusion: auto
name: Impeccable Hooks
description: Automated checks and workflows for design quality
---

# Impeccable Hooks

## Post-File Save Hooks

Run these checks automatically when design-related files are saved:

```
# After saving CSS/Component files
/impeccable check audit

# After saving page content
/impeccable check clarify

# After saving layout changes
/impeccable check harden

# After final touches
/impeccable check polish
```

## Post-Component Creation

```
/impeccable maintain extract
/impeccable maintain document
```

## CI/CD Integration

Run these commands in your build pipeline:

```bash
# Check for accessibility issues
npx @impeccable/scan --path app --type accessibility

# Check for performance issues
npx @impeccable/scan --path app --type performance

# Check for responsive issues
npx @impeccable/scan --path app --type responsive
```

## Browser Extension

Install the Impeccable Chrome extension to:
- Scan pages in development
- See audit results on page elements
- Quick fixes for common issues
- Export reports

## Integration Commands

```
# Audit current page
/impeccable audit

# Clarify copy on selected element
/impeccable clarify

# Harden edge cases
/impeccable harden

# Polish final details
/impeccable polish
```
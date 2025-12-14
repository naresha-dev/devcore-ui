# DevCore UI Components

Reusable React UI components with built-in theming support using CSS Variables.

## Features

- **Atomic Design Components** - 9 fully-featured UI atoms
- **Light & Dark Theme Support** - Complete theme system with SCSS variables
- **CSS Variables (SSR Friendly)** - No JavaScript runtime for theming
- **Works with Next.js and React** - Framework agnostic
- **Easy Customization** - Override theme variables at the project level
- **TypeScript Support** - Full type definitions included
- **SCSS Modules** - Scoped styles with CSS variables

## Installation

```bash
npm install @dev-core-ui/components
```

## Quick Start

### 1. Import Theme

Add the theme SCSS to your main CSS file:

```scss
@import '@dev-core-ui/components/theme/light.scss';
```

### 2. Use Components

```tsx
import { Button, Input, Text } from '@dev-core-ui/components';

export default function App() {
  return (
    <div>
      <Text variant="h1">Welcome to DevCore UI</Text>
      <Input label="Email" name="email" />
      <Button variant="primary">Submit</Button>
    </div>
  );
}
```

## Available Components

### Button
Primary, secondary, ghost, and danger variants with loading and disabled states.

```tsx
<Button variant="primary" disabled={false}>Click Me</Button>
```

### Input
Text input with label, error state, and helper text.

```tsx
<Input label="Email" name="email" type="email" placeholder="Enter email" />
```

### Select
Dropdown select component with options.

```tsx
<Select label="Choose" name="option">
  <option value="">Select one</option>
  <option value="1">Option 1</option>
</Select>
```

### Checkbox
Checkbox with label and checked state.

```tsx
<Checkbox label="I agree" name="agree" />
```

### Textarea
Multi-line text input with optional rows.

```tsx
<Textarea label="Message" name="message" rows={4} />
```

### Label
Label component with optional required indicator.

```tsx
<Label htmlFor="email">Email *</Label>
```

### Text
Semantic text component for headings and paragraphs.

```tsx
<Text variant="h1">Heading</Text>
<Text variant="p">Paragraph text</Text>
```

### FileUpload
File input component with size validation.

```tsx
<FileUpload label="Upload File" name="file" accept=".pdf,.doc" />
```

### FormCard
Container card for form layouts.

```tsx
<FormCard title="Contact Form">
  <Input label="Name" name="name" />
  <Button variant="primary">Submit</Button>
</FormCard>
```

## Theming

All components use CSS variables from the theme. Customize by overriding variables:

```scss
:root {
  --colors-primary: #007bff;
  --colors-secondary: #6c757d;
  --spacing-sm: 8px;
  --spacing-md: 16px;
  --spacing-lg: 24px;
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;
}

@import '@dev-core-ui/components/theme/light.scss';
```

### Available Theme Variables

**Colors:** primary, secondary, success, danger, warning, info, dark, light, surface, border

**Spacing:** xs, sm, md, lg, xl (8px, 12px, 16px, 24px, 32px)

**Typography:** h1-h6, p, caption, label (font-size, font-weight, line-height)

**Border Radius:** sm, md, lg, xl (4px, 8px, 12px, 16px)

**Shadows:** xs, sm, md, lg (subtle to prominent)

**Motion:** fast, normal, slow with easing

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## License

MIT

## Repository

[GitHub - devcore-ui](https://github.com/naresha-dev/devcore-ui)

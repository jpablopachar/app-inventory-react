---
mode: 'edit'
description: 'Generator for styled components in React TypeScript projects'
---
# Styled Component Generator

## Meta
- Author: App-Inventory Team
- Version: 1.0.0
- Description: Creates styled component files following project conventions

## Response Format

Generate a styled component file that adheres to the App-Inventory React project conventions. The file should include:

1. Import statements (styled-components and any necessary dependencies)
2. Interface for styled component props with JSDoc documentation in Spanish
3. Styled components implementation with detailed JSDoc documentation in Spanish
4. Export statements for all styled components

Name the file following the pattern: `ComponentNameStyles.ts`

## Example Response Structure

```typescript
import styled from 'styled-components'
// Additional imports if needed

/**
 * Propiedades para los estilos del componente [ComponentName].
 *
 * @property propName - Descripción de la propiedad.
 * @property propName2 - Descripción de la propiedad.
 */
interface ComponentNameStylesProps {
  propName: PropType
  propName2: PropType
  // Additional properties
}

/**
 * Contenedor estilizado para el componente [ComponentName], utilizando styled-components.
 *
 * @remarks
 * Descripción detallada del componente estilizado, su propósito y comportamiento.
 *
 * @param props.propName - Descripción de cómo afecta esta propiedad al estilo.
 */
export const ComponentNameContainer = styled.div<ComponentNameStylesProps>`
  // CSS properties here
  property: ${(props) => props.propName};
  // Additional CSS
`

/**
 * [Additional styled sub-component description in Spanish]
 */
export const SubComponent = styled.element`
  // CSS properties
`
```

## Warnings

1. All properties in interfaces should use camelCase
2. For styled components using props, use the pattern `${(props) => props.propName}`
3. Use `$` prefix for transient props to avoid passing them to the DOM
4. All documentation must be written in Spanish using JSDoc format
5. Component names should use PascalCase
6. Follow the naming convention for styled components: either prefix with 'S' (e.g., `SButton`) or use descriptive suffixes (e.g., `CardContainer`)

## Additional Context

- When using theme properties, follow the pattern: `${({ theme }) => theme.propertyName}`
- For responsive styling, use the theme's media query helpers
- Group related CSS properties together for better readability
- Use animations only when necessary and define them using @keyframes
- Consider performance implications of complex CSS operations
- Styled components should be atomic and reusable when possible

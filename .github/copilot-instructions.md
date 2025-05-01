# GitHub Copilot Project Instructions

## Project Overview

App-Inventory-React is an inventory management application built with React and TypeScript. The project aims to provide a comprehensive solution for inventory tracking, reporting, and management with a focus on a responsive and accessible user interface.

Key technologies used:

- React 19
- TypeScript
- Styled Components for styling
- React Router for navigation
- Zustand for state management
- Tanstack React Query for data fetching
- Supabase and Firebase for backend services
- Chart.js for data visualization
- React Hook Form for form handling

## Architecture Guidelines

The application follows a component-based architecture with a clear separation of concerns:

1. **Context-based State Management**: Global state is managed through React Context API (e.g., AuthContext, ThemeContext) for cross-component state sharing.

2. **Custom Hooks Pattern**: Encapsulate and reuse complex logic through custom hooks.

3. **Container/Presentation Pattern**: Separate data-fetching container components from presentational components.

4. **Service Layer**: API calls and third-party integrations should be isolated in service modules.

5. **Theme Switching**: Support for both light and dark themes using ThemeProvider from styled-components.

## Folder Structure

```
src/
├── assets/          # Static assets like images, fonts
├── components/      # Reusable UI components
│   ├── common/      # Highly reusable components (Button, Input, etc.)
│   ├── layout/      # Layout components (Header, Footer, etc.)
│   └── [feature]/   # Feature-specific components
├── context/         # React Context definitions
├── hooks/           # Custom React hooks
├── pages/           # Page components corresponding to routes
├── routes/          # Route definitions
├── services/        # API services and external integrations
├── styles/          # Global styles and theme definitions
├── types/           # TypeScript type definitions
└── utils/           # Utility functions
```

### Component Pattern

Components should follow these patterns:

1. **Atomic Design**: Organize components from atoms (simple UI elements) to organisms (complex UI sections) to templates and pages.

2. **Consistent File Structure**:

   ```
   ComponentName/
   ├── index.ts                # Export the component
   ├── ComponentName.tsx       # Component implementation
   ├── ComponentName.styles.ts # Styled components
   └── ComponentName.test.tsx  # Component tests (optional)
   ```

3. **Props Interface**: Define props interface at the top of component files.

4. **Default Exports**: Use default exports for components.

## Code Style Guideline

- Use functional components with hooks
- Leverage TypeScript's type system extensively
- Avoid any types when possible
- Use arrow functions for component definitions
- Prefer destructuring for props and state values

### Naming Conventions

- **Components**: PascalCase (e.g., `ProductCard.tsx`)
- **Files**: PascalCase for components, camelCase for others
- **Hooks**: camelCase prefixed with 'use' (e.g., `useProducts.ts`)
- **Interfaces**: PascalCase prefixed with 'I' (e.g., `IProductProps`)
- **Type**: PascalCase (e.g., `ProductType`)
- **Context**: PascalCase suffixed with 'Context' (e.g., `AuthContext`)
- **Styled Components**: PascalCase prefixed with 'S' or suffixed descriptor (e.g., `SButton` or `CardContainer`)

### Documentation

- Use JSDoc format for documenting components, functions, and types
- Documentation comments should be in Spanish
- Each major component should include a description, props explanation, and usage examples
- Example:
  ```tsx
  /**
   * Componente que muestra una tarjeta de producto con información básica.
   *
   * @param {string} title - El título del producto a mostrar
   * @param {number} price - El precio del producto
   * @param {string} imageUrl - URL de la imagen del producto
   * @returns {ReactElement} Componente de tarjeta de producto
   */
  ```

### Performance Optimization

1. **Memoization**: Use React.memo for components that render often with the same props
2. **useCallback/useMemo**: For expensive calculations or to prevent unnecessary re-renders
3. **Virtualization**: For long lists, use virtualization libraries
4. **Code Splitting**: Use React.lazy and Suspense for code splitting
5. **Image Optimization**: Use lazy loading and proper sizing for images
6. **Avoid Prop Drilling**: Use Context or state management libraries for deep component trees

### Error Handling

1. **Boundary Pattern**: Implement Error Boundaries to catch and handle UI errors
2. **Consistent Error States**: Create reusable error components and states
3. **API Error Handling**: Standardize API error responses and handling
4. **Form Validation**: Use React Hook Form and schema validation
5. **Meaningful Error Messages**: Provide clear and actionable error messages in Spanish

## Styling Approach

The application uses styled-components with theme support:

1. **Theme Tokens**: Use theme variables for colors, spacing, typography
2. **Responsive Design**: Use relative units and media queries for responsive layouts
3. **Global Styles**: Maintain global styles for typography, resets, and common elements
4. **Component-Specific Styles**: Keep component styles scoped to their component file
5. **Animation Standards**: Consistent animation durations and easing functions

## Important Note

- While the codebase and instructions are in English, all documentation, comments, and user-facing text should be maintained in Spanish.

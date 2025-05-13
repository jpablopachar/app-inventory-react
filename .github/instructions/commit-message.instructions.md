---
applyTo: "**"
---
# Commit Message Generation Instructions

## Format

- Use conventional format: `type(scope): description`
- Types: feat, fix, docs, style, refactor, test, chore
- Optional scope in parentheses (component, service, etc.)
- Concise description in imperative mood, no period at end
- You must keep the names if they are technical themes or programming code

## Content

- First line should not exceed 72 characters
- Describe WHAT changed and WHY, not HOW
- Use Spanish for the description
- Maintain consistency with previous commits

## Type Definitions

- `feat`: A new feature
- `fix`: A bug fix
- `docs`: Documentation only changes
- `style`: Changes that do not affect the meaning of the code (white-space, formatting, etc.)
- `refactor`: A code change that neither fixes a bug nor adds a feature
- `test`: Adding missing tests or correcting existing tests
- `chore`: Changes to the build process or auxiliary tools

## Common Scopes

- `auth`: Authentication related changes
- `components`: UI component changes (can be more specific: `components/common`, `components/layout`)
- `context`: Context API related changes
- `hooks`: Custom React hooks
- `pages`: Page components
- `routes`: Routing configuration
- `services`: API services and external integrations
- `styles`: Styling and theme changes
- `types`: TypeScript type definitions
- `utils`: Utility functions
- `supabase`: Supabase related functionality
- `firebase`: Firebase related functionality
- `state`: State management (Zustand, etc.)
- `api`: API-related functionality
- `config`: Configuration changes
- `i18n`: Internationalization and localization
- `tests`: Test-related changes
- `deps`: Dependency updates

## Examples

- `feat(auth): Agregar inicio de sesión con Google`
- `fix(components): Corregir bug en selección de fecha en DatePicker`
- `docs(README): Actualizar instrucciones de instalación`
- `style(components): Mejorar estilos de tarjetas en modo oscuro`
- `refactor(hooks): Simplificar lógica en useProducts`
- `test(services): Añadir pruebas para inventoryService`
- `chore(deps): Actualizar dependencias no críticas`
- `feat(api): Implementar endpoints para gestión de categorías`
- `fix(styles): Resolver problema de diseño responsivo en Sidebar`
- `refactor(context): Optimizar rendimiento de AuthContext`
- `feat(components/common): Crear Button con variantes de tamaño`
- `fix(routes): Corregir redirección después de cierre de sesión`
- `docs(components): Añadir documentación JSDoc a componentes principales`
- `chore(config): Actualizar configuración de ESLint`

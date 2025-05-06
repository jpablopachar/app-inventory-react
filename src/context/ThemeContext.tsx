import { createContext } from 'react'

/**
 * Interfaz que define las propiedades para el contexto de tema de la aplicación.
 *
 * @property {string} theme - El tema actual seleccionado en la aplicación (por ejemplo, 'claro'
 * u 'oscuro').
 * @property {(theme: string) => void} setThemeUse - Función para actualizar el tema actual.
 */
interface ThemeContextProps {
  theme: string;
  setThemeUse: (theme: string) => void;
}

/**
 * Contexto de React para manejar el tema de la aplicación.
 * 
 * Proporciona acceso a las propiedades y funciones relacionadas con el tema
 * a los componentes hijos que consumen este contexto.
 * 
 * @type {React.Context<ThemeContextProps | null>}
 */
export const ThemeContext = createContext<ThemeContextProps | null>(null)

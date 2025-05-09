import { AiOutlineHome, AiOutlineSetting } from 'react-icons/ai'

import { iconsAndVars } from '../styles/variables'

/**
 * Representa un elemento de usuario para un menú desplegable.
 *
 * @property {string} text - El texto que se mostrará en el elemento del menú.
 * @property {React.ReactNode} icon - El icono asociado al elemento del menú.
 * @property {'myProfile' | 'configuration' | 'logout'} type - El
 * tipo de acción que representa el elemento:
 *   - 'myProfile': Perfil del usuario.
 *   - 'configuration': Configuración de la aplicación.
 *   - 'logout': Cerrar sesión.
 */
interface DropdownUserType {
  text: string
  icon: React.ReactNode
  type: 'myProfile' | 'configuration' | 'logout'
}

/**
 * Representa un elemento de datos para la barra lateral de navegación.
 *
 * @property {string} label - El texto que se mostrará como etiqueta en la barra lateral.
 * @property {React.ReactNode} icon - El icono que se mostrará junto a la etiqueta.
 * @property {string} to - La ruta de navegación asociada al elemento de la barra lateral.
 */
interface SidebarDataType {
  label: string
  icon: React.ReactNode
  to: string
}

/**
 * Representa un tipo de dato con una descripción y un icono asociado.
 *
 * @property {string} description - Descripción textual del elemento.
 * @property {string} icon - Nombre o ruta del icono representativo.
 */
interface DataType {
  description: string
  icon: string
}

/**
 * Representa la configuración de datos para un elemento de la aplicación.
 *
 * @property {string} title - El título principal del elemento.
 * @property {string} subtitle - El subtítulo o descripción adicional del elemento.
 * @property {string} icon - El nombre o ruta del icono asociado al elemento.
 * @property {string} link - El enlace o ruta de navegación relacionada con el elemento.
 */
interface DataConfigurationType {
  title: string
  subtitle: string
  icon: string
  link: string
  state?: boolean
}

/**
 * Lista de opciones para el menú desplegable del usuario.
 *
 * Cada elemento representa una acción disponible en el menú de usuario,
 * incluyendo su texto, icono asociado y tipo de acción.
 *
 * @type {DropdownUserType[]}
 */
export const DropdownUser: DropdownUserType[] = [
  {
    text: 'Mi perfil',
    icon: <iconsAndVars.userIcon />,
    type: 'myProfile',
  },
  {
    text: 'Configuración',
    icon: <iconsAndVars.settingsIcon />,
    type: 'configuration',
  },
  {
    text: 'Cerrar sesión',
    icon: <iconsAndVars.logoutIcon />,
    type: 'logout',
  },
]

/**
 * @constant
 * @description
 * Contiene los datos estáticos utilizados para construir los
 * elementos de la barra lateral de navegación (Sidebar).
 * Cada objeto representa una opción del menú, incluyendo su etiqueta, icono y ruta de navegación.
 *
 * @type {SidebarDataType[]}
 */
export const SidebarData: SidebarDataType[] = [
  {
    label: 'Home',
    icon: <AiOutlineHome />,
    to: '/',
  },
  {
    label: 'Kardex',
    icon: <iconsAndVars.categoriesIcon />,
    to: '/kardex',
  },
  {
    label: 'Reportes',
    icon: <iconsAndVars.reportsIcon />,
    to: '/reportes',
  },
]

/**
 * Arreglo de enlaces secundarios para la barra lateral de navegación.
 * Cada elemento representa una opción de configuración adicional, incluyendo su etiqueta,
 * icono y ruta de navegación correspondiente.
 */
export const SecondaryLinksArray: SidebarDataType[] = [
  {
    label: 'Configuración',
    icon: <AiOutlineSetting />,
    to: '/configurar',
  },
]

/**
 * Lista de temas disponibles para la aplicación.
 * Cada objeto contiene una descripción del tema y un icono representativo.
 *
 * @type {DataType[]}
 */
export const ThemesData: DataType[] = [
  {
    description: 'light',
    icon: '🌞',
  },
  {
    description: 'dark',
    icon: '🌚',
  },
]

/**
 * Lista de configuraciones disponibles en la aplicación.
 * Cada elemento representa una opción de configuración con su
 * título, subtítulo, ícono y enlace asociado.
 *
 * @type {DataConfigurationType[]}
 * @property {string} title - Título de la opción de configuración.
 * @property {string} subtitle - Descripción breve de la opción.
 * @property {string} icon - URL del ícono representativo.
 * @property {string} link - Ruta de navegación para acceder a la configuración.
 * @property {boolean} [state] - Estado opcional que indica si la opción está activa o no.
 */
export const DataConfiguration: DataConfigurationType[] = [
  {
    title: 'Productos',
    subtitle: 'registra tus productos',
    icon: 'https://i.ibb.co/85zJ6yG/caja-del-paquete.png',
    link: '/configurar/productos',
  },
  {
    title: 'Personal',
    subtitle: 'ten el control de tu personal',
    icon: 'https://i.ibb.co/5vgZ0fX/hombre.png',
    link: '/configurar/usuarios',
  },
  {
    title: 'Tu empresa',
    subtitle: 'configura tus opciones básicas',
    icon: 'https://i.ibb.co/x7mHPgm/administracion-de-empresas.png',
    link: '/configurar/empresa',
  },
  {
    title: 'Categoría de productos',
    subtitle: 'asigna categorías a tus productos',
    icon: 'https://i.ibb.co/VYbMRLZ/categoria.png',
    link: '/configurar/categorias',
  },
  {
    title: 'Marca de productos',
    subtitle: 'gestiona tus marcas',
    icon: 'https://i.ibb.co/1qsbCRb/piensa-fuera-de-la-caja.png',
    link: '/configurar/marca',
  },
]

/**
 * Lista de tipos de usuario disponibles en la aplicación.
 * Cada tipo de usuario contiene una descripción y un icono representativo.
 *
 * @type {DataType[]}
 * @property {string} description - Descripción del tipo de
 * usuario (por ejemplo, 'empleado', 'administrador').
 * @property {string} icon - Icono asociado al tipo de usuario.
 */
export const UserType: DataType[] = [
  {
    description: 'empleado',
    icon: '🪖',
  },
  {
    description: 'administrador',
    icon: '👑',
  },
]

/**
 * Lista estática de tipos de documentos con su descripción e ícono asociado.
 *
 * @constant
 * @type {DataType[]}
 * @description Contiene los tipos de documentos admitidos en la
 * aplicación, cada uno con una descripción y un ícono representativo.
 */
export const DocType: DataType[] = [
  {
    description: 'Dni',
    icon: '🪖',
  },
  {
    description: 'Libreta electoral',
    icon: '👑',
  },
  {
    description: 'Otros',
    icon: '👑',
  },
]

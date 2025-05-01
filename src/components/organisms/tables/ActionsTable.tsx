import { ActionsTableContainer } from './ActionsTableStyles'

/**
 * Propiedades para el componente ActionsTable.
 *
 * @property {() => void} task - Función a ejecutar al hacer clic en la acción
 * @property {React.ReactNode} icon - Icono o elemento a mostrar como acción
 * @property {string} color - Color del icono (valor CSS válido)
 * @property {string} fontSize - Tamaño de fuente del icono (valor CSS válido)
 */
interface ActionsTableProps {
  task: () => void
  icon: React.ReactNode
  color?: string
  fontSize?: string
}

/**
 * Componente que renderiza una acción interactiva para tablas, como botones de editar o eliminar.
 *
 * @component
 * @param {ActionsTableProps} props - Propiedades del componente
 * @param {() => void} props.task - Función de callback que se ejecuta al hacer clic
 * @param {React.ReactNode} props.icon - Elemento visual que representa la acción (normalmente un
 * icono)
 * @param {string} [props.color='#666'] - Color del icono
 * @param {string} [props.fontSize='1rem'] - Tamaño de fuente del icono
 *
 * @returns {JSX.Element} Un componente de acción para tablas
 */
const ActionsTable: React.FC<ActionsTableProps> = ({
  task,
  icon,
  color = '#666',
  fontSize = '1rem',
}) => {
  return (
    <ActionsTableContainer
      onClick={task}
      color={color}
      fontSize={fontSize}
      role="button"
      tabIndex={0}
      aria-label="Acción de tabla"
    >
      {icon}
    </ActionsTableContainer>
  )
}

export default ActionsTable

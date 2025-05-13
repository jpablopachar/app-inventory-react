import ActionsTable from './ActionsTable'
import { TableActionsContentContainer } from './TableActionsContentStyles'

import { iconsAndVars } from '@/styles'

/**
 * Propiedades para el componente TableActionsContent.
 *
 * @property editFunction - Función que se ejecuta al seleccionar la acción de editar.
 * @property deleteFunction - Función que se ejecuta al seleccionar la acción de eliminar.
 */
interface TableActionsContentProps {
  editFunction: () => void
  deleteFunction: () => void
}

/**
 * Componente que renderiza las acciones de edición y eliminación para una tabla.
 *
 * @component
 * @param {Object} props - Propiedades del componente.
 * @param {() => void} props.editFunction - Función que se ejecuta
 * al seleccionar la acción de editar.
 * @param {() => void} props.deleteFunction - Función que se
 * ejecuta al seleccionar la acción de eliminar.
 *
 * @returns {JSX.Element} Elemento JSX que contiene los botones de acciones para la tabla.
 */
const TableActionsContent: React.FC<TableActionsContentProps> = ({
  editFunction,
  deleteFunction,
}) => {
  return (
    <TableActionsContentContainer>
      <ActionsTable
        task={editFunction}
        fontSize="18px"
        color="#7d7d7d"
        icon={<iconsAndVars.tableEditIcon />}
      />
      <ActionsTable
        task={deleteFunction}
        fontSize="20px"
        color="#f76e8e"
        icon={<iconsAndVars.tableDeleteIcon />}
      />
    </TableActionsContentContainer>
  )
}

export default TableActionsContent

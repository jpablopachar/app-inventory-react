import { Table } from '@tanstack/react-table'

import { PaginationContainer } from './PaginationStyles'

import { useOperationsStore } from '@/store'
import { iconsAndVars } from '@/styles'

/**
 * Propiedades para el componente de paginación.
 *
 * @property table - Instancia de la tabla que contiene los datos y el estado de paginación.
 */
interface PaginationProps {
  table: Table<unknown>
}

/**
 * Componente de paginación para tablas.
 *
 * Este componente renderiza los controles de paginación para
 * navegar entre las páginas de una tabla.
 * Permite ir a la primera página, avanzar o retroceder una
 * página, y muestra el índice de la página actual
 * junto con el total de páginas disponibles. Los botones se
 * deshabilitan automáticamente cuando no es posible
 * avanzar o retroceder.
 *
 * @param {PaginationProps} props - Propiedades del componente, incluyendo la instancia de la tabla.
 * @returns {JSX.Element} Elemento JSX que representa los controles de paginación.
 */
const Pagination: React.FC<PaginationProps> = ({ table }) => {
  const { categoryColor } = useOperationsStore()

  return (
    <PaginationContainer $colorCategory={categoryColor}>
      <button
        onClick={() => table.setPageIndex(0)}
        disabled={!table.getCanPreviousPage()}
      >
        <span>{<iconsAndVars.allIcon />}</span>
      </button>
      <button
        disabled={!table.getCanPreviousPage()}
        onClick={() => table.previousPage()}
      >
        <span className="leftIcon">{<iconsAndVars.rightArrowIcon />}</span>
      </button>
      <span>{table.getState().pagination.pageIndex + 1}</span>
      <p>
        {' '}
        de
        {table.getPageCount()}
        {' '}
      </p>
      <button
        disabled={!table.getCanNextPage()}
        onClick={() => table.nextPage()}
      >
        <span>{<iconsAndVars.rightArrowIcon />}</span>
      </button>
    </PaginationContainer>
  )
}

export default Pagination

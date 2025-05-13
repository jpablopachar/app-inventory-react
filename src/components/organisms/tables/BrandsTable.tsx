import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  SortDirection,
  useReactTable
} from '@tanstack/react-table'

import { FaArrowsAltV } from 'react-icons/fa'

import { BrandsTableContainer } from './BrandsTableStyles'
import Pagination from './Pagination'

import { Brand } from '@/interfaces'

/**
 * Propiedades para el componente BrandsTable.
 *
 * @property {Brand[] | null} data - Lista de marcas a mostrar en
 * la tabla. Puede ser nulo si no hay datos disponibles.
 * @property {(value: boolean) => void} setOpenRegister - Función
 * para controlar la apertura o cierre del formulario de registro de marcas.
 * @property {(value: Brand | null) => void} setDataSelect -
 * Función para establecer la marca seleccionada en la tabla.
 * @property {(value: string) => void} setAction - Función para
 * definir la acción actual (por ejemplo, 'editar', 'eliminar', etc.).
 */
interface BrandsTableProps {
  data: Brand[] | null
  setOpenRegister: (value: boolean) => void
  setDataSelect: (value: Brand | null) => void
  setAction: (value: string) => void
}

const BrandsTable: React.FC<BrandsTableProps> = () => {
  const table = useReactTable({
    data,
    columns,
    state: {
      columnFilters,
    },
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    columnResizeMode: 'onChange',
  })

  return (
    <BrandsTableContainer>
      <table className="responsive-table">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id}>
                  {
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    header.column.columnDef.header as any
                  }
                  {header.column.getCanSort() && (
                    <span
                      style={{ cursor: 'pointer' }}
                      onClick={header.column.getToggleSortingHandler()}
                    >
                      <FaArrowsAltV />
                    </span>
                  )}
                  {
                    {
                      asc: ' 🔼',
                      desc: ' 🔽',
                    }[header.column.getIsSorted() as SortDirection]
                  }
                  <div
                    onMouseDown={header.getResizeHandler()}
                    onTouchStart={header.getResizeHandler()}
                    className={`resizer ${
                      header.column.getIsResizing() ? 'isResizing' : ''
                    }`}
                  />
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((item) => (
            <tr key={item.id}>
              {item.getVisibleCells().map((cell) => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination table={table} />
    </BrandsTableContainer>
  )
}

export default BrandsTable

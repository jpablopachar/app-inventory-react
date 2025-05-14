/* eslint-disable @typescript-eslint/no-explicit-any */

import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  SortDirection,
  useReactTable,
} from '@tanstack/react-table'
import { useState } from 'react'
import { FaArrowsAltV } from 'react-icons/fa'
import { SweetAlertOptions } from 'sweetalert2'

import Pagination from './Pagination'
import TableActionsContent from './TableActionsContent'
import { TableContainer } from './TablesStyles'

import { Personal } from '@/interfaces'
import { removeCategory, showCategories } from '@/services'
import { useCategoryStore, useCompanyStore } from '@/store'
import { showAlertWithActions } from '@/utils'

interface PersonalTableProps {
  personal: Personal[] | null
  setOpenRegister: (value: boolean) => void
  setDataSelect: (value: Personal | null) => void
  setAction: (value: string) => void
}

/**
 * Componente PersonalTable
 *
 * Renderiza una tabla interactiva de personal con funcionalidades de filtrado, ordenamiento,
 * paginación y edición/eliminación de registros. Permite gestionar el personal existente.
 *
 * @component
 * @param {Object} props - Propiedades del componente.
 * @param {Personal[]} props.personal - Lista de personal a mostrar en la tabla.
 * @param {Dispatch<SetStateAction<boolean>>} props.setOpenRegister - Función
 * para abrir el formulario de registro/edición.
 * @param {Dispatch<SetStateAction<Personal | null>>} props.setDataSelect - Función
 * para establecer el personal seleccionado para editar.
 * @param {Dispatch<SetStateAction<string>>} props.setAction - Función
 * para definir la acción actual (por ejemplo, 'Edit').
 *
 * @returns {JSX.Element | undefined} Retorna el JSX de la tabla
 * de personal o `undefined` si no hay personal para mostrar.
 */
const PersonalTable: React.FC<PersonalTableProps> = ({
  personal,
  setOpenRegister,
  setDataSelect,
  setAction,
}) => {
  const { deleteCategory } = useCategoryStore()

  const { companyData } = useCompanyStore()

  const [, setData] = useState<Personal[] | null>(personal)
  const [columnFilters] = useState([])

  /**
   * Elimina un registro de personal específico después de confirmar con el usuario.
   * Muestra una alerta de confirmación. Si el usuario confirma,
   * elimina el registro llamando a `deleteCategory`.
   *
   * @param personalItem El registro de personal que se desea eliminar.
   */
  const remove = (categoryId: number): void => {
    const options: SweetAlertOptions = {
      title: '¿Estás seguro(a)?',
      text: 'Una vez eliminado, ¡no podrá recuperar este registro!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar',
    }

    showAlertWithActions(options).then(async (result) => {
      if (result.isConfirmed) {
        await removeCategory(categoryId)

        const res = await showCategories(companyData?.id as number)

        deleteCategory(res)
      }
    })
  }

  /**
   * Edita un registro de personal seleccionado, permitiendo modificar sus datos.
   *
   * @param personalItem - Objeto de tipo Personal que representa el registro a editar.
   */
  const edit = (personalItem: Personal): void => {
    setOpenRegister(true)
    setDataSelect(personalItem)
    setAction('Edit')
  }

  /**
   * Define las columnas para la tabla de personal.
   */
  const columns = [
    {
      accessorKey: 'fullname',
      header: 'Nombre Completo',
      cell: (info: any) => <span>{info.getValue()}</span>,
      enableColumnFilter: true,
      filterFn: (row: any, columnId: any, filterStatuses: any) => {
        if (filterStatuses.length === 0) {
          return true
        }

        const status = row.getValue(columnId)

        return filterStatuses.includes(status?.id)
      },
    },
    {
      accessorKey: 'userType',
      header: 'Tipo de Usuario',
      enableSorting: false,
      cell: (info: any) => <span>{info.getValue()}</span>,
      enableColumnFilter: true,
      filterFn: (row: any, columnId: any, filterStatuses: any) => {
        if (filterStatuses.length === 0) {
          return true
        }

        const status = row.getValue(columnId)

        return filterStatuses.includes(status?.id)
      },
    },
    {
      accessorKey: 'state',
      header: 'Estado',
      enableSorting: false,
      cell: (info: any) => <span>{info.getValue()}</span>,
      enableColumnFilter: true,
      filterFn: (row: any, columnId: any, filterStatuses: any) => {
        if (filterStatuses.length === 0) {
          return true
        }

        const status = row.getValue(columnId)

        return filterStatuses.includes(status?.id)
      },
    },
    {
      accessorKey: 'actions',
      header: '',
      enableSorting: false,
      cell: (info: any) => (
        <div className="contentCell">
          <TableActionsContent
            editFunction={() => edit(info.row.original)}
            deleteFunction={() => remove(info.row.original.id)}
          />
        </div>
      ),
      enableColumnFilter: true,
      filterFn: (row: any, columnId: any, filterStatuses: any) => {
        if (filterStatuses.length === 0) {
          return true
        }

        const status = row.getValue(columnId)

        return filterStatuses.includes(status?.id)
      },
    },
  ]

  /**
   * Inicializa y configura una instancia de tabla utilizando el hook `useReactTable`.
   */
  const table = useReactTable({
    data: personal!,
    columns,
    state: {
      columnFilters,
    },
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    columnResizeMode: 'onChange',
    meta: {
      updateData: (rowIndex: number, columnId: string, value: any) => {
        setData((prev) =>
          prev!.map((row, index) =>
            index === rowIndex
              ? {
                  ...prev![rowIndex],
                  [columnId]: value,
                }
              : row,
          ),
        )
      },
    },
  })

  if (personal?.length === 0) {
    return
  }

  return (
    <TableContainer>
      <table className="responsive-table">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id}>
                  {header.column.columnDef.header as any}
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
                <td
                  data-title={cell.column.columnDef.header as string}
                  key={cell.id}
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination table={table} />
    </TableContainer>
  )
}

export default PersonalTable

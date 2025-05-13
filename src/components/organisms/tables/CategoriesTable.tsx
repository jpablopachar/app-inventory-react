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

import { CategoriesTableContainer } from './CategoriesTableStyles'
import Pagination from './Pagination'
import TableActionsContent from './TableActionsContent'

import { ColorContentStyles } from '@/components/atoms'
import { Category } from '@/interfaces'
import { removeCategory, showCategories } from '@/services'
import { useCategoryStore } from '@/store'
import { showAlert, showAlertWithActions } from '@/utils'

/**
 * Propiedades para el componente CategoriesTable.
 *
 * @property {Category[] | null} categories - Lista de categorías a mostrar en
 * la tabla. Puede ser nulo si no hay datos disponibles.
 * @property {(value: boolean) => void} setOpenRegister - Función
 * para controlar la apertura o cierre del formulario de registro de categorías.
 * @property {(value: Category | null) => void} setDataSelect -
 * Función para establecer la categoría seleccionada en la tabla.
 * @property {(value: string) => void} setAction - Función para
 * definir la acción actual (por ejemplo, 'editar', 'eliminar', etc.).
 */
interface CategoriesTableProps {
  categories: Category[] | null
  setOpenRegister: (value: boolean) => void
  setDataSelect: (value: Category | null) => void
  setAction: (value: string) => void
}

/**
 * Componente CategoriesTable
 *
 * Renderiza una tabla interactiva de categorías con funcionalidades de filtrado, ordenamiento,
 * paginación y edición/eliminación de registros. Permite gestionar las categorías existentes,
 * restringiendo la edición y eliminación de la categoría por defecto ("General").
 *
 * @component
 * @param {Object} props - Propiedades del componente.
 * @param {Category[]} props.categories - Lista de categorías a mostrar en la tabla.
 * @param {Dispatch<SetStateAction<boolean>>} props.setOpenRegister - Función
 * para abrir el formulario de registro/edición.
 * @param {Dispatch<SetStateAction<Category | null>>} props.setDataSelect - Función
 * para establecer la categoría seleccionada para editar.
 * @param {Dispatch<SetStateAction<string>>} props.setAction - Función
 * para definir la acción actual (por ejemplo, 'Edit').
 *
 * @returns {JSX.Element | undefined} Retorna el JSX de la tabla
 * de categorías o `undefined` si no hay categorías para mostrar.
 */
const CategoriesTable: React.FC<CategoriesTableProps> = ({
  categories,
  setOpenRegister,
  setDataSelect,
  setAction,
}) => {
  const { deleteCategory } = useCategoryStore()

  const [, setData] = useState<Category[] | null>(categories)
  const [columnFilters] = useState([])

  /**
   * Elimina una categoría específica después de confirmar con el usuario.
   *
   * - Si la categoría tiene la descripción 'General', muestra una
   * alerta de error e impide su eliminación,
   *   ya que es un valor por defecto.
   * - Para otras categorías, muestra una alerta de confirmación. Si el usuario confirma,
   *   elimina la categoría llamando a `removeCategory` y luego ejecuta `deleteCategory`.
   *
   * @param category La categoría que se desea eliminar.
   */
  const remove = (category: Category): void => {
    if (category.description === 'General') {
      const optionsError: SweetAlertOptions = {
        icon: 'error',
        title: 'Oops...',
        text: 'Este registro no se permite eliminar ya que es valor por defecto.',
        footer: '<a href="">...</a>',
      }

      showAlert(optionsError)

      return
    }

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
        await removeCategory(category.id)

        const res = await showCategories(category.companyId)

        deleteCategory(res)
      }
    })
  }

  /**
   * Edita una categoría seleccionada, permitiendo modificar sus datos
   * a menos que sea la categoría por defecto ("General").
   * Si la categoría es "General", muestra una alerta de error e impide la edición.
   *
   * @param category - Objeto de tipo Category que representa la categoría a editar.
   */
  const edit = (category: Category): void => {
    if (category.description === 'General') {
      const options: SweetAlertOptions = {
        icon: 'error',
        title: 'Oops...',
        text: 'Este registro no se permite modificar ya que es valor por defecto.',
        footer: '<a href="">...</a>',
      }

      showAlert(options)

      return
    }

    setOpenRegister(true)
    setDataSelect(category)
    setAction('Edit')
  }

  /**
   * Define las columnas para la tabla de categorías.
   *
   * Cada objeto en el arreglo representa una columna con sus propiedades:
   * - `accessorKey`: Clave para acceder al valor correspondiente en los datos.
   * - `header`: Título que se muestra en el encabezado de la columna.
   * - `cell`: Función que renderiza el contenido de la celda.
   * - `enableColumnFilter`: Indica si la columna permite filtrado.
   * - `filterFn`: Función personalizada para filtrar los datos de la columna.
   *
   * La columna "Descripción" permite filtrar por el identificador de estado.
   * La columna "Color" muestra un cuadro de color con el color de la categoría.
   * La columna "Acciones" muestra botones para editar y eliminar.
   */
  const columns = [
    {
      accessorKey: 'description',
      header: 'Descripción',
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
      accessorKey: 'color',
      header: 'Color',
      enableSorting: false,
      cell: (info: any) => (
        <div data-title="Color" className="contentCell">
          <ColorContentStyles $color={info.getValue()} $alto="25px" $ancho="25px" />
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
    {
      accessorKey: 'actions',
      header: '',
      enableSorting: false,
      cell: (info: any) => (
        <div className="contentCell">
          <TableActionsContent
            editFunction={() => edit(info.row.original)}
            deleteFunction={() => remove(info.row.original)}
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
   *
   * @constant
   * @type {ReturnType<typeof useReactTable>}
   *
   * @param {Array} categories - Lista de categorías que se mostrarán en la tabla.
   * @param {Array} columns - Definición de las columnas de la tabla.
   * @param {Array} columnFilters - Filtros aplicados a las columnas.
   * @param {Function} setData - Función para actualizar los datos de la tabla.
   *
   * @description
   * Esta constante crea una tabla reactiva con funcionalidades de
   * filtrado, paginación, ordenamiento y redimensionamiento de columnas.
   * Además, proporciona una función personalizada `updateData` en
   * la propiedad `meta` para actualizar los datos de una celda específica.
   */
  const table = useReactTable({
    data: categories!,
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

  if (categories?.length === 0) {
    return
  }

  return (
    <CategoriesTableContainer>
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
                <td data-title="Acciones" key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination table={table} />
    </CategoriesTableContainer>
  )
}

export default CategoriesTable

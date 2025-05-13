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

import { BrandsTableContainer } from './BrandsTableStyles'
import Pagination from './Pagination'

import TableActionsContent from './TableActionsContent'

import { Brand } from '@/interfaces'
import { removeBrand } from '@/services'
import { useBrandStore } from '@/store'
import { showAlert, showAlertWithActions } from '@/utils'

/**
 * Propiedades para el componente BrandsTable.
 *
 * @property {Brand[] | null} brands - Lista de marcas a mostrar en
 * la tabla. Puede ser nulo si no hay datos disponibles.
 * @property {(value: boolean) => void} setOpenRegister - Función
 * para controlar la apertura o cierre del formulario de registro de marcas.
 * @property {(value: Brand | null) => void} setDataSelect -
 * Función para establecer la marca seleccionada en la tabla.
 * @property {(value: string) => void} setAction - Función para
 * definir la acción actual (por ejemplo, 'editar', 'eliminar', etc.).
 */
interface BrandsTableProps {
  brands: Brand[] | null
  setOpenRegister: (value: boolean) => void
  setDataSelect: (value: Brand | null) => void
  setAction: (value: string) => void
}

/**
 * Componente BrandsTable
 *
 * Renderiza una tabla interactiva de marcas con funcionalidades de filtrado, ordenamiento,
 * paginación y edición/eliminación de registros. Permite gestionar las marcas existentes,
 * restringiendo la edición y eliminación de la marca por defecto ("Generica").
 *
 * @component
 * @param {Object} props - Propiedades del componente.
 * @param {Brand[]} props.brands - Lista de marcas a mostrar en la tabla.
 * @param {Dispatch<SetStateAction<boolean>>} props.setOpenRegister - Función
 * para abrir el formulario de registro/edición.
 * @param {Dispatch<SetStateAction<Brand | null>>} props.setDataSelect - Función
 * para establecer la marca seleccionada para editar.
 * @param {Dispatch<SetStateAction<string>>} props.setAction - Función
 * para definir la acción actual (por ejemplo, 'Edit').
 *
 * @returns {JSX.Element | undefined} Retorna el JSX de la tabla
 * de marcas o `undefined` si no hay marcas para mostrar.
 */
const BrandsTable: React.FC<BrandsTableProps> = ({
  brands,
  setOpenRegister,
  setDataSelect,
  setAction,
}) => {
  const { deleteBrand } = useBrandStore()

  const [, setData] = useState<Brand[] | null>(brands)
  const [columnFilters] = useState([])

  /**
   * Elimina una marca específica después de confirmar con el usuario.
   *
   * - Si la marca tiene la descripción 'Generica', muestra una
   * alerta de error e impide su eliminación,
   *   ya que es un valor por defecto.
   * - Para otras marcas, muestra una alerta de confirmación. Si el usuario confirma,
   *   elimina la marca llamando a `removeBrand` y luego ejecuta `deleteBrand`.
   *
   * @param brand La marca que se desea eliminar.
   */
  const remove = (brand: Brand): void => {
    if (brand.description === 'Generica') {
      const optionsError: SweetAlertOptions = {
        icon: 'error',
        title: 'Oops...',
        text: 'Esta registro no se permite eliminar ya que es valor por defecto.',
        footer: '<a href="">...</a>',
      }

      showAlert(optionsError)

      return
    }

    const options: SweetAlertOptions = {
      title: '¿Estás seguro(a)(e)?',
      text: 'Una vez eliminado, ¡no podrá recuperar este registro!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar',
    }

    showAlertWithActions(options).then(async (result) => {
      if (result.isConfirmed) {
        await removeBrand(brand.id)

        deleteBrand()
      }
    })
  }

  /**
   * Edita una marca seleccionada, permitiendo modificar sus datos
   * a menos que sea la marca por defecto ("Generica").
   * Si la marca es "Generica", muestra una alerta de error e impide la edición.
   *
   * @param brand - Objeto de tipo Brand que representa la marca a editar.
   */
  const edit = (brand: Brand): void => {
    if (brand.description === 'Generica') {
      const options: SweetAlertOptions = {
        icon: 'error',
        title: 'Oops...',
        text: 'Esta registro no se permite modificar ya que es valor por defecto.',
        footer: '<a href="">...</a>',
      }

      showAlert(options)

      return
    }

    setOpenRegister(true)
    setDataSelect(brand)
    setAction('Edit')
  }

  /**
   * Define las columnas para la tabla de marcas.
   *
   * Cada objeto en el arreglo representa una columna con sus propiedades:
   * - `accessorKey`: Clave para acceder al valor correspondiente en los datos.
   * - `header`: Título que se muestra en el encabezado de la columna.
   * - `cell`: Función que renderiza el contenido de la celda.
   * - `enableColumnFilter`: Indica si la columna permite filtrado.
   * - `filterFn`: Función personalizada para filtrar los datos de la columna.
   *
   * La columna "Descripción" permite filtrar por el identificador de estado.
   * La columna "Acciones" muestra botones para editar y eliminar,
   * y también permite filtrado por identificador de estado.
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
      accessorKey: 'actions',
      header: '',
      enableSorting: false,
      cell: (info: any) => (
        <div className="ContentCell">
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
   * @param {Array} brands - Lista de marcas que se mostrarán en la tabla.
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
    data: brands!,
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

  if (brands?.length === 0) {
    return
  }

  return (
    <BrandsTableContainer>
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
    </BrandsTableContainer>
  )
}

export default BrandsTable

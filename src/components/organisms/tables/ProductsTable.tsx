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
import { ProductsTableColorContent, ProductsTableContainer } from './ProductsTableStyles'

import TableActionsContent from './TableActionsContent'

import { Product } from '@/interfaces'
import { removeProduct, showProducts } from '@/services'
import { useProductStore } from '@/store'
import { showAlertWithActions } from '@/utils'

/**
 * Propiedades para el componente ProductsTable.
 *
 * @property {Product[] | null} products - Lista de productos a mostrar en
 * la tabla. Puede ser nulo si no hay datos disponibles.
 * @property {(value: boolean) => void} setOpenRegister - Función
 * para controlar la apertura o cierre del formulario de registro de productos.
 * @property {(value: Product | null) => void} setDataSelect -
 * Función para establecer el producto seleccionado en la tabla.
 * @property {(value: string) => void} setAction - Función para
 * definir la acción actual (por ejemplo, 'editar', 'eliminar', etc.).
 */
interface ProductsTableProps {
  products: Product[] | null
  setOpenRegister: (value: boolean) => void
  setDataSelect: (value: Product | null) => void
  setAction: (value: string) => void
}

/**
 * Componente ProductsTable
 *
 * Renderiza una tabla interactiva de productos con funcionalidades de filtrado, ordenamiento,
 * paginación y edición/eliminación de registros. Permite gestionar los productos existentes.
 *
 * @component
 * @param {Object} props - Propiedades del componente.
 * @param {Product[]} props.products - Lista de productos a mostrar en la tabla.
 * @param {Dispatch<SetStateAction<boolean>>} props.setOpenRegister - Función
 * para abrir el formulario de registro/edición.
 * @param {Dispatch<SetStateAction<Product | null>>} props.setDataSelect - Función
 * para establecer el producto seleccionado para editar.
 * @param {Dispatch<SetStateAction<string>>} props.setAction - Función
 * para definir la acción actual (por ejemplo, 'Edit').
 *
 * @returns {JSX.Element | undefined} Retorna el JSX de la tabla
 * de productos o `undefined` si no hay productos para mostrar.
 */
const ProductsTable: React.FC<ProductsTableProps> = ({
  products,
  setOpenRegister,
  setDataSelect,
  setAction,
}) => {
  const { deleteProduct } = useProductStore()

  const [, setData] = useState<Product[] | null>(products)
  const [columnFilters] = useState([])

  /**
   * Elimina un producto específico después de confirmar con el usuario.
   * Muestra una alerta de confirmación. Si el usuario confirma,
   * elimina el producto llamando a `removeProduct` y luego ejecuta `deleteProduct`.
   *
   * @param product El producto que se desea eliminar.
   */
  const remove = (product: Product): void => {
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
        await removeProduct(product.id)

        const res = await showProducts(product.companyId)

        deleteProduct(res)
      }
    })
  }

  /**
   * Edita un producto seleccionado, permitiendo modificar sus datos.
   *
   * @param product - Objeto de tipo Product que representa el producto a editar.
   */
  const edit = (product: Product): void => {
    setOpenRegister(true)
    setDataSelect(product)
    setAction('Edit')
  }

  /**
   * Define las columnas para la tabla de productos.
   *
   * Cada objeto en el arreglo representa una columna con sus propiedades:
   * - `accessorKey`: Clave para acceder al valor correspondiente en los datos.
   * - `header`: Título que se muestra en el encabezado de la columna.
   * - `cell`: Función que renderiza el contenido de la celda.
   * - `enableColumnFilter`: Indica si la columna permite filtrado.
   * - `filterFn`: Función personalizada para filtrar los datos de la columna.
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
      accessorKey: 'minStock',
      header: 'Stock Mínimo',
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
      accessorKey: 'barCode',
      header: 'Código de Barras',
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
      accessorKey: 'salePrice',
      header: 'Precio',
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
      accessorKey: 'purchasePrice',
      header: 'Precio Compra',
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
      accessorKey: 'category',
      header: 'Categoría',
      enableSorting: false,
      cell: (info: any) => (
        <div className="contentCell">
          <ProductsTableColorContent
            color={info.row.original.color}
            className="contentCategory"
          >
            {info.getValue()}
          </ProductsTableColorContent>
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
   * @param {Array} products - Lista de productos que se mostrarán en la tabla.
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
    data: products!,
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

  if (products?.length === 0) {
    return
  }

  return (
    <ProductsTableContainer theme={{ bgTotal: '#fff', text: '#000' }}>
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
                <td data-title={cell.column.columnDef.header as string} key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination table={table} />
    </ProductsTableContainer>
  )
}

export default ProductsTable

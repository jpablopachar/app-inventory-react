/* eslint-disable @typescript-eslint/no-explicit-any */

import { create } from 'zustand'

import { Product } from '@/interfaces'

/**
 * Interfaz que define el contrato para el hook de gestión de productos en la aplicación.
 *
 * @property {string} searcher - Cadena utilizada para buscar productos.
 * @property {(searcher: string) => void} setSearcher - Función
 * para actualizar el valor de búsqueda.
 * @property {Product[] | null} productsData - Arreglo que contiene los datos de los productos.
 * @property {Product | null} productItemSelect - Contiene el producto seleccionado.
 * @property {any} parameters - Parámetros utilizados para la búsqueda o filtrado de productos.
 * @property {(parameters: any, products?: any) => any} getProducts -
 * Función para obtener productos según los parámetros y, opcionalmente, un producto específico.
 * @property {(product: any) => void} selectProduct - Función para seleccionar un producto.
 * @property {(products: Product[] | null) => void} insertProduct - Función para insertar un
 * nuevo producto.
 * @property {(products: Product[] | null) => void} deleteProduct - Función para eliminar un
 * producto.
 * @property {(products: Product[] | null) => void} editProduct - Función para editar un
 * producto existente.
 * @property {(products: Product[] | null) => void} searchProduct - Función para buscar un producto
 * específico.
 */
interface ProductStoreHook {
  searcher: string
  setSearcher: (searcher: string) => void
  productsData: Product[] | null
  productItemSelect: Product | null
  parameters: any
  getProducts: (parameters: any, products?: Product[] | null) => any
  selectProduct: (product: any) => void
  insertProduct: (products: Product[] | null) => void
  deleteProduct: (products: Product[] | null) => void
  editProduct: (products: Product[] | null) => void
  searchProduct: (products: Product[] | null) => void
}

/**
 * Hook de estado global para la gestión de productos utilizando Zustand.
 *
 * @remarks
 * Este hook proporciona el estado y las acciones necesarias para manejar la búsqueda, selección,
 * inserción, edición y eliminación de productos dentro de la
 * aplicación. Utiliza un estado centralizado
 * para facilitar la manipulación y acceso a los datos de productos desde cualquier componente.
 *
 * @property {string} searcher - Texto actual de búsqueda de productos.
 * @property {(searcher: string) => void} setSearcher - Actualiza el texto de búsqueda.
 * @property {Product[] | null} productsData - Lista de datos de productos disponibles.
 * @property {Product | null} productItemSelect - Producto seleccionado actualmente.
 * @property {object} parameters - Parámetros utilizados para filtrar o buscar productos.
 * @property getProducts - Obtiene y actualiza la lista de productos y el producto seleccionado.
 * @property {(product: any) => void} selectProduct - Selecciona un producto específico.
 * @property {(products: Product[] | null) => void} insertProduct -
 * Inserta un nuevo producto y actualiza el estado.
 * @property {(products: Product[] | null) => void} deleteProduct -
 * Elimina un producto y actualiza el estado.
 * @property {(products: Product[] | null) => void} editProduct - Edita un producto y actualiza el
 * estado.
 * @property {(products: Product[] | null) => void} searchProduct - Actualiza la lista de productos
 * según
 * la búsqueda.
 */
export const useProductStore = create<ProductStoreHook>((set, get) => ({
  searcher: '',
  setSearcher: (searcher: string) => set({ searcher }),
  productsData: null,
  productItemSelect: null,
  parameters: {},
  getProducts: (parameters: any, products?: Product[] | null) => {
    set({ parameters })
    set({ productsData: products })
    set({ productItemSelect: products?.[0] || null })

    return {
      productsData: products,
      productItemSelect: products?.[0] || null,
      parameters,
    }
  },
  selectProduct: (product: any) => set({ productItemSelect: product }),
  insertProduct: (products) => {
    const { getProducts, parameters } = get()

    set(getProducts(parameters, products))
  },
  deleteProduct: (products) => {
    const { getProducts, parameters } = get()

    set(getProducts(parameters, products))
  },
  editProduct: (products) => {
    const { getProducts, parameters } = get()

    set(getProducts(parameters, products))
  },
  searchProduct: (products: Product[] | null) =>
    set({ productsData: products }),
}))

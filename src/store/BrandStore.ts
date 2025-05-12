/* eslint-disable @typescript-eslint/no-explicit-any */

import { create } from 'zustand'

import { Brand } from '@/interfaces'

/**
 * Interfaz que define el contrato para el hook de gestión de marcas en la aplicación.
 *
 * @property {string} searcher - Cadena utilizada para buscar marcas.
 * @property {(searcher: string) => void} setSearcher - Función
 * para actualizar el valor de búsqueda.
 * @property {Brand[] | null} brandData - Arreglo que contiene los datos de las marcas.
 * @property {Brand | null} brandItemSelect - Contiene la marca seleccionada.
 * @property {any} parameters - Parámetros utilizados para la búsqueda o filtrado de marcas.
 * @property {(parameters: any, brand?: any) => any} getBrand -
 * Función para obtener marcas según los parámetros y, opcionalmente, una marca específica.
 * @property {(brand: any) => void} selectBrand - Función para seleccionar una marca.
 * @property {() => void} insertBrand - Función para insertar una nueva marca.
 * @property {() => void} deleteBrand - Función para eliminar una marca.
 * @property {() => void} editBrand - Función para editar una marca existente.
 * @property {(brand: any) => void} searchBrand - Función para buscar una marca específica.
 */
interface BrandStoreHook {
  searcher: string
  setSearcher: (searcher: string) => void
  brandsData: Brand[] | null
  brandItemSelect: Brand | null
  parameters: any
  getBrands: (parameters: any, brands?: Brand[] | null) => any
  selectBrand: (brand: any) => void
  insertBrand: () => void
  deleteBrand: () => void
  editBrand: () => void
  searchBrand: (brands: Brand[] | null) => void
}

/**
 * Hook de estado global para la gestión de marcas utilizando Zustand.
 *
 * @remarks
 * Este hook proporciona el estado y las acciones necesarias para manejar la búsqueda, selección,
 * inserción, edición y eliminación de marcas dentro de la
 * aplicación. Utiliza un estado centralizado
 * para facilitar la manipulación y acceso a los datos de marcas desde cualquier componente.
 *
 * @property {string} searcher - Texto actual de búsqueda de marcas.
 * @property {(searcher: string) => void} setSearcher - Actualiza el texto de búsqueda.
 * @property {Brand[] | null} brandsData - Lista de datos de marcas disponibles.
 * @property {Brand | null} brandItemSelect - Marca seleccionada actualmente.
 * @property {object} parameters - Parámetros utilizados para filtrar o buscar marcas.
 * @property getBrands - Obtiene y actualiza la lista de marcas y la marca seleccionada.
 * @property {(brand: any) => void} selectBrand - Selecciona una marca específica.
 * @property {() => void} insertBrand - Inserta una nueva marca y actualiza el estado.
 * @property {() => void} deleteBrand - Elimina una marca y actualiza el estado.
 * @property {() => void} editBrand - Edita una marca y actualiza el estado.
 * @property {(brand: any) => void} searchBrand - Actualiza la lista de marcas según la búsqueda.
 */
export const useBrandStore = create<BrandStoreHook>((set, get) => ({
  searcher: '',
  setSearcher: (searcher: string) => set({ searcher }),
  brandsData: null,
  brandItemSelect: null,
  parameters: {},
  getBrands: (parameters: any, brands?: Brand[] | null) => {
    set({ parameters })
    set({ brandsData: brands })
    set({ brandItemSelect: brands?.[0] || null })

    return {
      brandData: brands,
      brandItemSelect: brands?.[0] || null,
      parameters,
    }
  },
  selectBrand: (brand: any) => set({ brandItemSelect: brand }),
  insertBrand: () => {
    const { getBrands, parameters } = get()

    set(getBrands(parameters))
  },
  deleteBrand: () => {
    const { getBrands, parameters } = get()

    set(getBrands(parameters))
  },
  editBrand: () => {
    const { getBrands, parameters } = get()

    set(getBrands(parameters))
  },
  searchBrand: (brands: Brand[] | null) => set({ brandsData: brands }),
}))

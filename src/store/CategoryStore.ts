/* eslint-disable @typescript-eslint/no-explicit-any */

import { create } from 'zustand'

import { Category } from '@/interfaces'

/**
 * Interfaz que define el contrato para el hook de gestión de categorías en la aplicación.
 *
 * @property {string} searcher - Cadena utilizada para buscar categorías.
 * @property {(searcher: string) => void} setSearcher - Función
 * para actualizar el valor de búsqueda.
 * @property {Category[] | null} categoriesData - Arreglo que contiene los datos de las categorías.
 * @property {Category | null} categoryItemSelect - Contiene la categoría seleccionada.
 * @property {any} parameters - Parámetros utilizados para la búsqueda o filtrado de categorías.
 * @property {(parameters: any, category?: any) => any} getCategories -
 * Función para obtener categorías según los parámetros y, opcionalmente, una categoría específica.
 * @property {(category: any) => void} selectCategory - Función para seleccionar una categoría.
 * @property {(categories: Category[] | null) => void} insertCategory - Función para insertar una
 * nueva categoría.
 * @property {(categories: Category[] | null) => void} deleteCategory - Función para eliminar una
 * categoría.
 * @property {(categories: Category[] | null) => void} editCategory - Función para editar una
 * categoría existente.
 * @property {(category: any) => void} searchCategory - Función para buscar una categoría
 * específica.
 */
interface CategoryStoreHook {
  searcher: string
  setSearcher: (searcher: string) => void
  categoriesData: Category[] | null
  categoryItemSelect: Category | null
  parameters: any
  getCategories: (parameters: any, categories?: Category[] | null) => any
  selectCategory: (category: any) => void
  insertCategory: (categories: Category[] | null) => void
  deleteCategory: (categories: Category[] | null) => void
  editCategory: (categories: Category[] | null) => void
  searchCategory: (categories: Category[] | null) => void
}

/**
 * Hook de estado global para la gestión de categorías utilizando Zustand.
 *
 * @remarks
 * Este hook proporciona el estado y las acciones necesarias para manejar la búsqueda, selección,
 * inserción, edición y eliminación de categorías dentro de la
 * aplicación. Utiliza un estado centralizado
 * para facilitar la manipulación y acceso a los datos de categorías desde cualquier componente.
 *
 * @property {string} searcher - Texto actual de búsqueda de categorías.
 * @property {(searcher: string) => void} setSearcher - Actualiza el texto de búsqueda.
 * @property {Category[] | null} categoriesData - Lista de datos de categorías disponibles.
 * @property {Category | null} categoryItemSelect - Categoría seleccionada actualmente.
 * @property {object} parameters - Parámetros utilizados para filtrar o buscar categorías.
 * @property getCategories - Obtiene y actualiza la lista de categorías y la categoría seleccionada.
 * @property {(category: any) => void} selectCategory - Selecciona una categoría específica.
 * @property {(categories: Category[] | null) => void} insertCategory -
 * Inserta una nueva categoría y actualiza el estado.
 * @property {(categories: Category[] | null) => void} deleteCategory -
 * Elimina una categoría y actualiza el estado.
 * @property {(categories: Category[] | null) => void} editCategory - Edita una categoría y
 * actualiza el estado.
 * @property {(category: any) => void} searchCategory - Actualiza la lista de categorías según
 * la búsqueda.
 */
export const useCategoryStore = create<CategoryStoreHook>((set, get) => ({
  searcher: '',
  setSearcher: (searcher: string) => set({ searcher }),
  categoriesData: null,
  categoryItemSelect: null,
  parameters: {},
  getCategories: (parameters: any, categories?: Category[] | null) => {
    set({ parameters })
    set({ categoriesData: categories })
    set({ categoryItemSelect: categories?.[0] || null })

    return {
      categoryData: categories,
      categoryItemSelect: categories?.[0] || null,
      parameters,
    }
  },
  selectCategory: (category: any) => set({ categoryItemSelect: category }),
  insertCategory: (categories) => {
    const { getCategories, parameters } = get()

    set(getCategories(parameters, categories))
  },
  deleteCategory: (categories) => {
    const { getCategories, parameters } = get()

    set(getCategories(parameters, categories))
  },
  editCategory: (categories) => {
    const { getCategories, parameters } = get()

    set(getCategories(parameters, categories))
  },
  searchCategory: (categories: Category[] | null) => set({ categoriesData: categories }),
}))

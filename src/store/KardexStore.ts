/* eslint-disable @typescript-eslint/no-explicit-any */

import { create } from 'zustand'

import { Kardex } from '@/interfaces'

/**
 * Interfaz que define el hook para el manejo del estado de Kardex en la aplicación.
 *
 * @property {string | null} searcher - Valor actual del buscador utilizado para
 * filtrar los datos de Kardex.
 * @property {Kardex[] | null} kardexData - Lista de datos de Kardex obtenidos o filtrados.
 * @property {Kardex | null} kardexItemSelect - Elemento de Kardex seleccionado actualmente.
 * @property {any} parameters - Parámetros utilizados para la búsqueda o consulta de Kardex.
 * @property {(parameters: any, kardex?: Kardex[] | null) => any} getKardex -
 * Función para obtener los datos de Kardex según los parámetros proporcionados.
 * @property {(kardex: Kardex[] | null) => void} searchKardex - Función para
 * buscar o filtrar los datos de Kardex.
 * @property {(kardex: Kardex[] | null) => void} insertKardex - Función para
 * insertar nuevos datos en el Kardex.
 */
interface KardexStoreHook {
  searcher: string | null
  kardexData: Kardex[] | null
  kardexItemSelect: Kardex | null
  parameters: any
  getKardex: (parameters: any, kardex?: Kardex[] | null) => any
  searchKardex: (kardex: Kardex[] | null) => void
  insertKardex: (kardex: Kardex[] | null) => void
}

/**
 * Hook de Zustand para gestionar el estado del Kardex en la aplicación.
 *
 * @remarks
 * Este hook proporciona el estado y las funciones necesarias para manejar la información
 * relacionada con el Kardex, incluyendo la búsqueda, inserción y obtención de datos.
 *
 * @property {any} searcher - Parámetro de búsqueda actual (puede ser nulo).
 * @property {Kardex[] | null} kardexData - Datos actuales del Kardex.
 * @property {any} kardexItemSelect - Elemento seleccionado del Kardex (puede ser nulo).
 * @property {any} parameters - Parámetros utilizados para la consulta del Kardex.
 * @method getKardex - Establece los parámetros y los datos del Kardex.
 * @param parameters - Parámetros para la consulta.
 * @param kardex - Datos del Kardex a establecer (opcional).
 * @method searchKardex - Actualiza los datos del Kardex según la búsqueda.
 * @param kardex - Datos filtrados del Kardex.
 * @method insertKardex - Inserta nuevos datos en el Kardex utilizando los parámetros actuales.
 * @param kardex - Nuevos datos del Kardex a insertar.
 */
export const useKardexStore = create<KardexStoreHook>((set, get) => ({
  searcher: null,
  kardexData: null,
  kardexItemSelect: null,
  parameters: null,
  getKardex: (parameters: any, kardex?: Kardex[] | null) => {
    set({ parameters })
    set({ kardexData: kardex })
  },
  searchKardex: (kardex: Kardex[] | null) => {
    set({ kardexData: kardex })
  },
  insertKardex: (kardex: Kardex[] | null) => {
    const { getKardex } = get()
    const { parameters } = get()

    set(getKardex(parameters, kardex))
  },
}))

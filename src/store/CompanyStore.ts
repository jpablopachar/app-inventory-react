/* eslint-disable @typescript-eslint/no-explicit-any */

import { create } from 'zustand'

/**
 * Interfaz que define el hook para el manejo del estado de la compañía.
 *
 * @interface CompanyStoreHook
 *
 * @property {any} userCounter - Almacena el conteo de usuarios por compañía.
 * @property {any} companyData - Contiene los datos de las compañías.
 * @property {(data: any) => void} showCompany - Función para mostrar los datos de
 * una compañía específica.
 * @property {(data: any) => void} countUsersByCompany - Función para contar los
 * usuarios asociados a una compañía específica.
 */
interface CompanyStoreHook {
  userCounter: any
  companyData: any
  showCompany: (data: any) => void
  countUsersByCompany: (data: any) => void
}

/**
 * Hook de Zustand para gestionar el estado relacionado con la compañía.
 *
 * @typedef {Object} CompanyStoreHook
 * @property {any} userCounter - Almacena el conteo de usuarios por compañía.
 * @property {any} companyData - Almacena los datos de la compañía seleccionada.
 * @property {(data: any) => void} showCompany - Actualiza los datos de la compañía en el estado.
 * @property {(data: any) => void} countUsersByCompany - Actualiza el conteo de
 * usuarios por compañía en el estado.
 *
 * @returns {CompanyStoreHook} Estado y acciones relacionadas con la compañía.
 */
export const useCompanyStore = create<CompanyStoreHook>((set) => ({
  userCounter: null,
  companyData: null,
  showCompany: (data: any) => set({ companyData: data }),
  countUsersByCompany: (data: any) => set({ userCounter: data }),
}))

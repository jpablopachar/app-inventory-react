/* eslint-disable @typescript-eslint/no-explicit-any */

import { create } from 'zustand'

import { Company } from '@/interfaces'

/**
 * Interfaz que define el hook para el manejo del estado de la compañía.
 *
 * @interface CompanyStoreHook
 *
 * @property {any} userCounter - Almacena el conteo de usuarios por compañía.
 * @property {Company | null} companyData - Contiene los datos de
 * la compañía o null si no se encuentra.
 * @property {(data: Company | null) => void} getCompany - Función para
 * obtener los datos de una compañía específica.
 * @property {(data: any) => void} countUsersByCompany - Función para contar los
 * usuarios asociados a una compañía específica.
 */
interface CompanyStoreHook {
  userCounter: any
  companyData: Company | null
  getCompany: (data: Company | null) => void
  countUsersByCompany: (data: any) => void
}

/**
 * Hook de Zustand para gestionar el estado relacionado con la compañía.
 *
 * @typedef {Object} CompanyStoreHook
 * @property {any} userCounter - Almacena el conteo de usuarios por compañía.
 * @property {any} companyData - Almacena los datos de la compañía seleccionada.
 * @property {(data: any) => void} getCompany - Obtiene los datos de la compañía en el estado.
 * @property {(data: any) => void} countUsersByCompany - Actualiza el conteo de
 * usuarios por compañía en el estado.
 *
 * @returns {CompanyStoreHook} Estado y acciones relacionadas con la compañía.
 */
export const useCompanyStore = create<CompanyStoreHook>((set) => ({
  userCounter: null,
  companyData: null,
  getCompany: (data: Company | null) => set({ companyData: data }),
  countUsersByCompany: (data: any) => set({ userCounter: data }),
}))

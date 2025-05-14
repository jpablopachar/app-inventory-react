/* eslint-disable @typescript-eslint/no-explicit-any */

import { create } from 'zustand'

import { Permissions } from '@/interfaces'

/**
 * Interfaz que define el hook para el manejo del estado global
 * relacionado con los módulos y permisos.
 *
 * @property {any[]} modulesCheckData - Arreglo que contiene los
 * datos de verificación de los módulos.
 * @property {Permissions[] | null} modulesData - Lista de permisos
 * de los módulos, o null si no se ha cargado.
 * @property {(data: any) => void} setModulesCheckData - Función
 * para establecer los datos de verificación de los módulos.
 * @property {(data: Permissions[]) => void} getModules - Función
 * para obtener y establecer los módulos a partir de una lista de permisos.
 */
interface GlobalStoreHook {
  modulesCheckData: any[]
  modulesData: Permissions[] | null
  setModulesCheckData: (data: any) => void
  getModules: (data: Permissions[]) => void
}

/**
 * Hook de estado global para la gestión de módulos en la aplicación.
 *
 * @function useGlobalStore
 * @returns {GlobalStoreHook} Instancia del store global con los siguientes estados y acciones:
 * @property {any[]} modulesCheckData - Lista de datos para verificación de módulos.
 * @property {any | null} modulesData - Datos de los módulos, puede ser nulo si no se han cargado.
 * @property {(data: any) => void} setModulesCheckData - Función para actualizar `modulesCheckData`.
 * @property {(data: any) => void} getModules - Función para
 * establecer los datos de los módulos en `modulesData`.
 */
export const useGlobalStore = create<GlobalStoreHook>((set) => ({
  modulesCheckData: [],
  modulesData: null,
  setModulesCheckData: (data: any) => set({ modulesCheckData: data }),
  getModules: (data) => set({ modulesData: data }),
}))

/* eslint-disable @typescript-eslint/no-explicit-any */

import { create } from 'zustand'

/**
 * Interfaz que define el contrato para el manejo del estado de permisos en la aplicación.
 *
 * @property {any[]} permissionsData - Lista de permisos obtenidos o almacenados.
 * @property {any[]} permissionsEditData - Lista de permisos en modo edición.
 * @property {(permissions: any) => void} getPermissions - Función
 * para establecer o actualizar la lista de permisos.
 * @property {(permissions: any) => void} getPermissionsEdit -
 * Función para establecer o actualizar la lista de permisos en edición.
 */
interface PermissionsStoreHook {
  permissionsData: any[]
  permissionsEditData: any[]
  getPermissions: (permissions: any) => void
  getPermissionsEdit: (permissions: any) => void
}

/**
 * Hook de Zustand para gestionar el estado relacionado con los permisos en la aplicación.
 *
 * @returns Un objeto con los siguientes estados y funciones:
 * - `permissionsData`: Arreglo que contiene los datos de permisos actuales.
 * - `permissionsEditData`: Arreglo que contiene los datos de permisos en modo edición.
 * - `getPermissions`: Función para actualizar el estado de
 * `permissionsData` con una nueva lista de permisos.
 * - `getPermissionsEdit`: Función para actualizar el estado de
 * `permissionsEditData` con una nueva lista de permisos para edición.
 */
export const usePermissionsStore = create<PermissionsStoreHook>((set) => ({
  permissionsData: [],
  permissionsEditData: [],
  getPermissions: (permissions: any) => set({ permissionsData: permissions }),
  getPermissionsEdit: (permissions: any) =>
    set({ permissionsEditData: permissions }),
}))

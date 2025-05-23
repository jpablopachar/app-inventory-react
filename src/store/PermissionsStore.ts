/* eslint-disable @typescript-eslint/no-explicit-any */

import { create } from 'zustand'

import { Permission } from '@/interfaces'

/**
 * Interfaz que define el contrato para el manejo del estado de permisos en la aplicación.
 *
 * @property {Permission[]} permissionsData - Lista de permisos obtenidos o almacenados.
 * @property {Permission[] | null} permissionsEditData - Lista de permisos en modo edición.
 * @property {(permissions: Permission[]) => void} getPermissions - Función
 * para establecer o actualizar la lista de permisos.
 * @property {(permissions: Permission[] | null) => void} getPermissionsEdit -
 * Función para establecer o actualizar la lista de permisos en edición.
 */
interface PermissionsStoreHook {
  permissionsData: Permission[]
  permissionsEditData: Permission[] | null
  getPermissions: (permissions: any) => void
  getPermissionsEdit: (permissions: Permission[] | null) => void
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
  getPermissions: (permissions: Permission[]) => set({ permissionsData: permissions }),
  getPermissionsEdit: (permissions: Permission[] | null) =>
    set({ permissionsEditData: permissions }),
}))

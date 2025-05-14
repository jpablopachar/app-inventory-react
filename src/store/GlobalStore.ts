/* eslint-disable @typescript-eslint/no-explicit-any */

import { create } from 'zustand'

interface GlobalStoreHook {
  modulesCheckData: any[]
  modulesData: any[]
  setModulesCheckData: (data: any) => void
  getModules: (data: any) => void
}

export const useGlobalStore = create<GlobalStoreHook>((set) => ({
  modulesCheckData: [],
  modulesData: [],
  setModulesCheckData: (data: any) => set({ modulesCheckData: data }),
  getModules: (data: any) => set({ modulesData: data }),
}))

import { create } from 'zustand'

import { Movement } from '@/interfaces'
import { iconsAndVars } from '@/styles'

/**
 * Interfaz que define las propiedades y métodos para el hook de operaciones en la tienda.
 *
 * @property {string} type - Tipo de operación seleccionada.
 * @property {string} titleBtnDes - Texto del botón de descripción.
 * @property {string} titleBtnDesMovements - Texto del botón de descripción de movimientos.
 * @property {string} categoryColor - Color asociado a la categoría seleccionada.
 * @property {string} bgCategory - Color de fondo de la categoría seleccionada.
 * @property {number} year - Año seleccionado.
 * @property {number} month - Mes seleccionado.
 * @property {(month: number) => void} setMonth - Función para actualizar el mes seleccionado.
 * @property {(year: number) => void} setYear - Función para actualizar el año seleccionado.
 * @property {(movementsType: Movement) => void} setMovementsType - Función para actualizar el tipo de movimientos.
 * @property {(movement: Movement) => void} setType - Función para actualizar el tipo de operación.
 */
interface OperationsStoreHook {
  type: string
  titleBtnDes: string
  titleBtnDesMovements: string
  categoryColor: string
  bgCategory: string
  year: number
  month: number
  setMonth: (month: number) => void
  setYear: (year: number) => void
  setMovementsType: (movementsType: Movement) => void
  setType: (movement: Movement) => void
}

/**
 * Hook de Zustand para gestionar el estado relacionado con operaciones financieras.
 *
 * @remarks
 * Este hook proporciona el estado y las funciones necesarias para manejar
 * la selección de tipo de operación (ingresos, egresos, etc.), el año y mes actual,
 * así como los colores y textos asociados a las categorías seleccionadas.
 *
 * @returns {OperationsStoreHook} Objeto con el estado y las funciones para modificarlo.
 *
 * @property {string} type - Tipo de operación actual ('i' para ingresos, etc.).
 * @property {string} titleBtnDes - Texto descriptivo del botón de categoría.
 * @property {string} titleBtnDesMovements - Texto descriptivo del botón de movimientos.
 * @property {string} categoryColor - Color asociado a la categoría seleccionada.
 * @property {string} bgCategory - Color de fondo de la categoría seleccionada.
 * @property {number} year - Año seleccionado.
 * @property {number} month - Mes seleccionado (1-12).
 * @method setMonth - Cambia el mes seleccionado.
 * @method setYear - Cambia el año seleccionado.
 * @method setMovementsType - Cambia el tipo de movimiento y
 * actualiza los textos y colores asociados.
 * @method setType - Cambia el tipo de operación y actualiza los textos y colores asociados.
 */
export const useOperationsStore = create<OperationsStoreHook>((set) => ({
  type: 'i',
  titleBtnDes: 'Categorias Ingresos',
  titleBtnDesMovements: 'Ingresos',
  categoryColor: iconsAndVars.incomeColor,
  bgCategory: iconsAndVars.incomeBgColor,
  year: new Date().getFullYear(),
  month: new Date().getMonth() + 1,
  setMonth: (month: number) => set({ month }),
  setYear: (year: number) => set({ year }),
  setMovementsType: (movement: Movement) => {
    set({ type: movement.type })
    set({ titleBtnDesMovements: movement.text })
    set({ categoryColor: movement.color })
    set({ bgCategory: movement.bgColor })
  },
  setType: (movement: Movement) => {
    set({ type: movement.type })
    set({ titleBtnDes: movement.text })
    set({ categoryColor: movement.color })
    set({ bgCategory: movement.bgColor })
  },
}))

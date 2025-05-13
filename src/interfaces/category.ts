/**
 * Representa una categoría dentro del sistema de inventario.
 *
 * @property {number} id - Identificador único de la categoría.
 * @property {string} description - Descripción de la categoría.
 * @property {string} color - Color asociado a la categoría, usualmente en formato hexadecimal.
 * @property {number} companyId - Identificador de la empresa a la que pertenece la categoría.
 */
export interface Category {
  id: number
  description: string
  color: string
  companyId: number
}

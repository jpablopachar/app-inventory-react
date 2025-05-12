/**
 * Representa una marca dentro del sistema.
 *
 * @property {number} id - Identificador único de la marca.
 * @property {string} description - Descripción o nombre de la marca.
 * @property {number} companyId - Identificador de la empresa asociada a la marca.
 */
export interface Brand {
  id: number
  description: string
  companyId: number
}

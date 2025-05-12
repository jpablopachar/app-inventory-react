/**
 * Representa una empresa dentro del sistema.
 *
 * @property {number} id - Identificador único de la empresa.
 * @property {string} name - Nombre de la empresa.
 * @property {string} currencySymbol - Símbolo de la moneda utilizada por la empresa.
 * @property {number} userId - Identificador del usuario asociado a la empresa.
 */
export interface Company {
  id: number
  name: string
  currencySymbol: string
  userId: number
}

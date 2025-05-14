/**
 * Representa una solicitud de Kardex para registrar movimientos de inventario.
 *
 * @property {number} id - Identificador único de la solicitud.
 * @property {Date} day - Fecha del movimiento en el Kardex.
 * @property {string} type - Tipo de movimiento (por ejemplo, entrada o salida).
 * @property {number} userId - Identificador del usuario que realiza la acción.
 * @property {number} productId - Identificador del producto involucrado.
 * @property {number} cant - Cantidad de producto en el movimiento.
 * @property {number} companyId - Identificador de la empresa asociada.
 * @property {string} detail - Detalle o descripción del movimiento.
 * @property {number} state - Estado actual de la solicitud.
 */
export interface KardexRequest {
  id: number
  day: Date
  type: string
  userId: number
  productId: number
  cant: number
  companyId: number
  detail: string
  state: number
}

/**
 * Representa un registro en el kardex de inventario.
 *
 * @property {number} id - Identificador único del registro.
 * @property {string} description - Descripción del movimiento o transacción.
 * @property {Date} day - Fecha en la que se realizó el movimiento.
 * @property {number} cant - Cantidad involucrada en el movimiento.
 * @property {string} type - Tipo de movimiento (por ejemplo, entrada o salida).
 * @property {string} detail - Detalle adicional sobre el movimiento.
 * @property {string} fullname - Nombre completo del usuario o responsable.
 * @property {number} stock - Stock resultante después del movimiento.
 * @property {number} state - Estado del registro (por ejemplo, activo o inactivo).
 */
export interface Kardex {
  id: number
  description: string
  day: Date
  cant: number
  type: string
  detail: string
  fullname: string
  stock: number
  state: number
}

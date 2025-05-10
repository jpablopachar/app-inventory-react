/**
 * Representa un movimiento dentro del sistema de inventario.
 *
 * @property type - El tipo de movimiento (por ejemplo, entrada, salida, transferencia).
 * @property text - Descripción o texto asociado al movimiento.
 * @property color - Color representativo del movimiento (usado para UI).
 * @property bgColor - Color de fondo asociado al movimiento (usado para UI).
 */
export interface Movement {
  type: string
  text: string
  color: string
  bgColor: string
}

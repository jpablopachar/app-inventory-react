/**
 * Representa los permisos asignados a un usuario.
 * 
 * @property {number} id - Identificador único del permiso.
 * @property {string} name - Nombre descriptivo del permiso.
 * @property {boolean} check - Indica si el permiso está habilitado (true) o no (false).
 */
export interface Permissions {
  id: number
  name: string
  check: boolean
}

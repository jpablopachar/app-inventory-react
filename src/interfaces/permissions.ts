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

/**
 * Representa un permiso asignado a un usuario para un módulo específico.
 *
 * @property {number} id - Identificador único del permiso.
 * @property {number} moduleId - Identificador del módulo al que pertenece el permiso.
 * @property {{ name: string }} modules - Objeto que contiene el nombre del módulo.
 * @property {number} userId - Identificador del usuario al que se le asigna el permiso.
 */
export interface Permission {
  id: number
  moduleId: number
  modules: { name: string }
  userId: number
}

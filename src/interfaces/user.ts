/**
 * Representa los datos de un usuario en el sistema.
 *
 * @property {number} id - Identificador único del usuario.
 * @property {string} fullname - Nombre completo del usuario.
 * @property {string} numDoc - Número de documento de identidad del usuario.
 * @property {string} phone - Número de teléfono del usuario.
 * @property {string} address - Dirección física del usuario.
 * @property {Date} registrationDate - Fecha de registro del usuario en el sistema.
 * @property {string} status - Estado actual del usuario (por ejemplo, activo, inactivo).
 * @property {string} authId - Identificador de autenticación asociado al usuario.
 * @property {string} userType - Tipo de usuario (por ejemplo, administrador, cliente).
 * @property {string} docType - Tipo de documento de identidad del usuario.
 * @property {string} companyId - Identificador de la empresa a la que pertenece el usuario.
 */
export interface UserData {
  id: number
  fullname: string
  numDoc: string
  phone: string
  address: string
  registrationDate: Date
  status: string
  authId: string
  userType: string
  docType: string
  companyId: string
}

/**
 * Representa la información personal de un usuario en el sistema.
 *
 * @property id - Identificador único del usuario.
 * @property fullname - Nombre completo del usuario.
 * @property userType - Tipo de usuario (por ejemplo, administrador, empleado, etc.).
 * @property state - Estado actual del usuario (activo, inactivo, etc.).
 * @property email - Correo electrónico del usuario.
 * @property numDoc - Número de documento de identificación del usuario.
 * @property phone - Número de teléfono del usuario.
 * @property address - Dirección física del usuario.
 * @property docType - Tipo de documento de identificación (DNI, pasaporte, etc.).
 */
export interface Personal {
  id: number
  fullname: string
  userType: string
  state: string
  email: string
  numDoc: string
  phone: string
  address: string
  docType: string
}

import Swal, { SweetAlertOptions, SweetAlertResult } from 'sweetalert2'

/**
 * Muestra una alerta utilizando SweetAlert con las opciones proporcionadas.
 *
 * @param options - Opciones de configuración para la alerta de SweetAlert.
 */
export const showAlert = (options: SweetAlertOptions): void => {
  Swal.fire(options)
}

/**
 * Muestra una alerta utilizando SweetAlert2 con las opciones proporcionadas y retorna una promesa
 * que se resuelve con el resultado de la interacción del usuario.
 *
 * @param options - Opciones de configuración para la alerta de SweetAlert2.
 * @returns Una promesa que se resuelve con el resultado de la alerta.
 */
export const showAlertWithActions = (
  options: SweetAlertOptions,
// eslint-disable-next-line @typescript-eslint/no-explicit-any
): Promise<SweetAlertResult<any>> => {
  return Swal.fire(options)
}

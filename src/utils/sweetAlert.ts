import Swal, { SweetAlertOptions } from 'sweetalert2'

/**
 * Muestra una alerta utilizando SweetAlert con las opciones proporcionadas.
 *
 * @param options - Opciones de configuración para la alerta de SweetAlert.
 */
export const showAlert = (options: SweetAlertOptions): void => {
  Swal.fire(options)
}

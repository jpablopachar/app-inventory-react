/* eslint-disable no-console */

import {
  SignInWithPasswordCredentials,
  SignUpWithPasswordCredentials,
  User
} from '@supabase/supabase-js'

import { SweetAlertOptions } from 'sweetalert2'

import { supabase } from '@/supabase'
import { showAlert } from '@/utils'

/**
 * Inicia sesión de un usuario utilizando las credenciales proporcionadas.
 *
 * Esta función utiliza Supabase para autenticar al usuario con su correo electrónico y contraseña.
 *
 * @param credentials - Credenciales del usuario para iniciar
 * sesión (correo electrónico y contraseña).
 * @returns El usuario autenticado (`User`) si el inicio de sesión
 * es exitoso, o `null` si ocurre un error.
 */
export const signIn = async (
  credentials: SignInWithPasswordCredentials,
): Promise<User | null> => {
  console.log('Iniciando sesión con credenciales: ', credentials)
  
  const { data, error } = await supabase.auth.signInWithPassword(credentials)

  if (error) {
    console.error('Error al iniciar sesión: ', error)

    const options: SweetAlertOptions = {
      icon: 'error',
      title: 'Oops...',
      text: `Error al iniciar sesión: ${error.message}`,
      footer: '<a href="">error</a>',
    }

    showAlert(options)

    return null
  }

  console.log('Inicio de sesión exitoso: ', data)

  return data.user
}

/**
 * Cierra la sesión del usuario actual utilizando el servicio de autenticación de Supabase.
 *
 * @throws {Error} Lanza un error si ocurre algún problema al cerrar la sesión.
 * @returns {Promise<void>} Una promesa que se resuelve cuando la
 * sesión se ha cerrado correctamente.
 */
export const logOut = async (): Promise<void> => {
  const { error } = await supabase.auth.signOut()

  if (error) {
    throw new Error('Ha ocurrido un error al cerrar sesión: ' + error)
  }
}

/**
 * Registra un nuevo usuario utilizando las credenciales proporcionadas.
 *
 * @param credentials - Credenciales necesarias para el registro del usuario.
 * @returns Una promesa que resuelve con el usuario registrado si
 * el proceso es exitoso, o `null` si ocurre un error.
 */
export const signUp = async (
  credentials: SignUpWithPasswordCredentials,
): Promise<User | null> => {
  console.log('Registrando usuario con credenciales: ', credentials)

  const { data, error } = await supabase.auth.signUp(credentials)

  if (error) {
    console.error('Error al registrar el usuario: ', error)

    const options: SweetAlertOptions = {
      icon: 'error',
      title: 'Oops...',
      text: `Error al registrar el usuario: ${error.message}`,
      footer: '<a href="">error</a>',
    }

    showAlert(options)

    return null
  }

  console.log('Usuario registrado: ', data)

  return data.user
}

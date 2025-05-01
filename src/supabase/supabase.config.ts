import { createClient } from '@supabase/supabase-js'

/**
 * Configuración del cliente de Supabase
 * @constant {object} supabase - Instancia del cliente de Supabase.
 * @description
 * Este objeto contiene la configuración para el cliente de Supabase.
 * Se crea utilizando la función `createClient` de la biblioteca de Supabase.
 */
export const supabase = createClient(
  import.meta.env.VITE_APP_SUPABASE_URL,
  import.meta.env.VITE_APP_SUPABASE_ANON_KEY
)

/* eslint-disable @typescript-eslint/no-explicit-any */

import { getModules } from '@/supabase'

export const showModules = async (): Promise<any[] | null> => {
  const res = await getModules()

  return res
}

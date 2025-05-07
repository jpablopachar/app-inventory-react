import { signUp, signIn, insertUsers } from '@/supabase'

export const addUser = async (data: FieldValues): Promise<null | undefined> => {
  await signUp({ email: data.email, password: data.password })

  const res = await signIn({ email: data.email, password: data.password })

  if (!res) {
    return null
  }

  await insertUsers({
    authId: res.id,
    registrationDate: new Date(),
    userType: data.userType,
  })
}

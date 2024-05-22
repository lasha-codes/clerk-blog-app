'use server'
import { currentUser } from '@clerk/nextjs/server'

export const checkUserValidated = async () => {
  const user = await currentUser()
  return user
}

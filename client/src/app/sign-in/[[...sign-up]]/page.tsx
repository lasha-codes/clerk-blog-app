import { SignIn } from '@clerk/nextjs'

const SignInPage = () => {
  return (
    <main className='w-full bg-bgColor h-screen flex items-center justify-center'>
      <SignIn />
    </main>
  )
}

export default SignInPage

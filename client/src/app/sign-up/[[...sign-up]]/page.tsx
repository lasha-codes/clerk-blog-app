import { SignUp } from '@clerk/nextjs'

const SignUpPage = () => {
  return (
    <main className='w-full bg-bgColor h-screen flex items-center justify-center'>
      <SignUp />
    </main>
  )
}

export default SignUpPage

import Link from 'next/link'
import { useAuth } from '@clerk/nextjs'
import { UserButton } from '@clerk/nextjs'

const Header = () => {
  const { isLoaded, sessionId } = useAuth()

  return (
    <header className='flex w-full items-center fixed justify-between bg-main text-white px-10 py-4'>
      <Link href='/' className='text-xl font-medium'>
        Home
      </Link>
      <nav className='flex items-center gap-5'>
        {isLoaded && sessionId ? (
          <div className='flex items-center gap-3'>
            <Link href='/profile'>Profile</Link>
            <Link href='/add-blog'>Add Blog</Link>
            <UserButton />
          </div>
        ) : (
          <div className='flex items-center gap-5'>
            <Link href='/sign-up'>Sign Up</Link>
            <Link href='/sign-in'>Sign In</Link>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header

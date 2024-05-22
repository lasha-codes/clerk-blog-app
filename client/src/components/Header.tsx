import Link from 'next/link'

const Header = () => {
  return (
    <header className='flex w-full items-center justify-between bg-main text-white px-10 py-4'>
      <Link href='/' className='text-xl font-medium'>
        Home
      </Link>
      <nav className='flex items-center gap-5'>
        <Link href='/sign-up'>Sign Up</Link>
        <Link href='/sign-in'>Sign In</Link>
      </nav>
    </header>
  )
}

export default Header

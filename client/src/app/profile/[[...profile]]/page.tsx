import { UserProfile } from '@clerk/nextjs'

const UserProfilePage = () => {
  return (
    <div className='w-full h-screen flex items-center justify-center bg-bgColor'>
      <UserProfile />
    </div>
  )
}

export default UserProfilePage

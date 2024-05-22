import { blogsType } from '@/types'

const Blog = ({ blog }: { blog: blogsType }) => {
  return (
    <div className='w-[350px] h-[380px] mt-20 rounded-xl overflow-hidden border bg-bgColor border-white shadow-sm shadow-white'>
      <div className='w-full flex flex-col items-start gap-5'>
        <div className='w-full h-[200px]'>
          <img src={blog.image} alt='' className='object-cover h-full w-full' />
        </div>
        <div className='flex flex-col items-start gap-3'>
          <h2>{blog.title}</h2>
        </div>
      </div>
    </div>
  )
}

export default Blog

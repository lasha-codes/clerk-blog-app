import { blogsType } from '@/types'
import { format } from 'date-fns'

const truncateDescription = (desc: string) => {
  if (desc.length > 80) {
    return `${desc.slice(0, 80)}...`
  } else {
    return desc
  }
}

const truncateTitle = (title: string) => {
  if (title.length > 20) {
    return title.slice(0, 20) + '...'
  } else {
    return title
  }
}

const Blog = ({ blog }: { blog: blogsType }) => {
  return (
    <div className='relative w-fit'>
      <div className='w-[330px] h-[370px] rounded-xl overflow-hidden border bg-white border-white shadow-sm shadow-white'>
        <div className='w-full flex flex-col items-start gap-5'>
          <div className='w-full h-[190px]'>
            <img
              src={blog.image}
              alt=''
              className='object-cover h-full w-full'
            />
          </div>
          <div className='flex flex-col items-start w-full gap-3 px-5 text-bgColor'>
            <h2 className='capitalize text-lg font-medium'>
              {truncateTitle(blog.title)}
            </h2>
            <p className='opacity-80 max-w-[90%]'>
              {truncateDescription(blog.description)}
            </p>
            <span className='flex items-center gap-0.5 font-medium'>
              <span>@</span>
              {blog.author}
            </span>
          </div>
        </div>
      </div>
      <span className='text-white absolute -right-[85px] rotate-90 top-[47%]'>
        {format(blog.date, 'yyyy-MM-dd')}
      </span>
    </div>
  )
}

export default Blog

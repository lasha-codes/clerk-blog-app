'use client'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import { useEffect } from 'react'
import { blogsType } from '@/types'
import Blog from './Blog'

const Blogs = () => {
  const { blogs } = useSelector((state: any) => state.blog)
  const [blogsCopy, setBlogsCopy] = useState<blogsType[] | []>([])

  useEffect(() => {
    setBlogsCopy(blogs)
  }, [blogs])

  console.log(blogsCopy)

  return (
    <section className='mt-20 flex items-center gap-24 flex-wrap px-5 justify-center'>
      {blogsCopy
        ? blogsCopy.map((blog: blogsType, idx: number) => {
            return <Blog blog={blog} key={idx} />
          })
        : ''}
    </section>
  )
}

export default Blogs

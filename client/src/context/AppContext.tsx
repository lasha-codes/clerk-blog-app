'use client'

import { getBlogs } from '@/lib/slices/blogSlice'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

const Context = ({ children }: { children: React.ReactNode }) => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getBlogs() as any)
  }, [])

  return <>{children}</>
}

export default Context

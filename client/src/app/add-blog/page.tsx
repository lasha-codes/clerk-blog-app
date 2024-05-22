'use client'

import { useDispatch } from 'react-redux'
import { useState } from 'react'

const AddProductPage = () => {
  const dispatch = useDispatch()
  const [imageAddress, setImageAddress] = useState<string>('')
  const [title, setTitle] = useState<string>('')
  const [description, setDescription] = useState<string>('')
  const [finalImage, setFinalImage] = useState<string>('')

  const addImage = () => {
    if (imageAddress.length === 0) {
      return alert('image must not be empty')
    }
    setFinalImage(imageAddress)
    setImageAddress('')
  }

  return (
    <main className='w-full min-h-[100vh] bg-bgColor text-white'>
      <form className='pt-32 px-10 flex flex-col gap-6 items-start mx-auto w-[800px]'>
        <h2 className='text-2xl font-medium mb-12'>Add your blog</h2>
        <div className='w-full flex flex-col items-start gap-8 mb-6'>
          <div className='w-1/2 h-[300px] overflow-hidden border rounded-xl flex items-center justify-center'>
            {finalImage ? (
              <img src={finalImage} className='w-full h-full object-cover' />
            ) : (
              'Your Image'
            )}
          </div>
          <input
            value={imageAddress}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setImageAddress(e.target.value)
            }
            type='text'
            placeholder='Image address'
            className='w-full bg-bgColor border border-white rounded py-2 px-5 placeholder:text-white'
          />
          <button
            onClick={addImage}
            type='button'
            className='bg-white text-black px-5 py-1 rounded hover:opacity-80 transition-all duration-300 ease-linear'
          >
            Add
          </button>
        </div>
        <div className='flex flex-col items-start gap-2 w-full'>
          <label htmlFor='title' className='text-lg cursor-pointer'>
            Title
          </label>
          <input
            value={title}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setTitle(e.target.value)
            }
            placeholder='Title for your blog'
            type='text'
            id='title'
            className='bg-bgColor border-white placeholder:text-white border rounded outline-none px-5 placeholder:opacity-90 py-1.5 w-full'
          />
        </div>
        <div className='flex flex-col items-start gap-2 w-full'>
          <label htmlFor='description' className='text-lg cursor-pointer'>
            Description
          </label>
          <textarea
            value={description}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
              setDescription(e.target.value)
            }
            placeholder='Description for your blog'
            id='description'
            className='bg-bgColor border-white placeholder:text-white border rounded outline-none px-5 placeholder:opacity-90 py-1.5 w-full'
          />
        </div>
      </form>
    </main>
  )
}

export default AddProductPage

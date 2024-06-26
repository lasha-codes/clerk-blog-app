'use client'

import { useDispatch } from 'react-redux'
import { useUser } from '@clerk/nextjs'
import { useState } from 'react'
import axios from 'axios'
import { revalidatePath } from 'next/cache'

const AddProductPage = () => {
  const { user } = useUser()
  const [imageAddress, setImageAddress] = useState<string>('')
  const [title, setTitle] = useState<string>('')
  const [description, setDescription] = useState<string>('')
  const [finalImage, setFinalImage] = useState<string>('')
  const [selectedTypes, setSelectedTypes] = useState<string[]>([])

  console.log(user?.fullName)

  const addImage = () => {
    if (imageAddress.length === 0) {
      return alert('image must not be empty')
    }
    setFinalImage(imageAddress)
    setImageAddress('')
  }

  const toggleType = (type: string) => {
    let selectedTypesCopy = [...selectedTypes]
    if (selectedTypes.includes(type)) {
      selectedTypesCopy = selectedTypesCopy.filter((selectedType: string) => {
        return selectedType !== type
      })
    } else {
      selectedTypesCopy = [...selectedTypes, type]
    }
    setSelectedTypes(selectedTypesCopy)
  }

  const checkIfSelected = (type: string) => {
    if (selectedTypes.includes(type)) {
      return true
    } else {
      return false
    }
  }

  const types = [
    'GLOBAL',
    'SPORTS',
    'NATURE',
    'BEAUTY',
    'ADVERTISEMENT',
    'POLITICS',
  ]

  const addBlog = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      if (!title || !description) {
        return alert('All of the fields are required')
      }
      if (!finalImage) {
        return alert('Image is required')
      }
      await axios.post('/blogs/add-blog', {
        title,
        image: finalImage,
        description,
        author: user?.fullName,
      })

      setTitle('')
      setDescription('')
      setImageAddress('')
      setFinalImage('')
      setSelectedTypes([])
      window.location.reload()
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <main className='w-full min-h-[100vh] pb-8 bg-bgColor text-white'>
      <form
        onSubmit={addBlog}
        className='pt-32 px-10 flex flex-col gap-6 items-start mx-auto w-[760px] max-md:w-[600px] max-sm:w-[400px]'
      >
        <h2 className='text-2xl font-medium mb-12'>Add your blog</h2>
        <div className='w-full flex flex-col items-start gap-8 mb-6'>
          <div className='w-1/2 h-[300px] max-md:h-[260px] max-sm:h-[180px] overflow-hidden border rounded-xl flex items-center justify-center'>
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
            className='w-full bg-bgColor border outline-none border-white rounded py-2 px-5 placeholder:text-white'
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
        <div className='w-full'>
          <div className='flex flex-col items-start gap-2 w-full'>
            <h2 className='text-lg font-medium'>Select types</h2>
            <div className='max-w-full  flex items-center gap-3 flex-wrap'>
              {types.map((type: string, idx: number) => {
                return (
                  <button
                    onClick={() => toggleType(type)}
                    type='button'
                    key={idx}
                    className={`text-black border border-white bg-white rounded-full px-4 py-1.5 transition-all duration-300 ease-linear ${
                      checkIfSelected(type) && '!bg-bgColor !text-white'
                    }`}
                  >
                    {type}
                  </button>
                )
              })}
            </div>
          </div>
          <div className='max-w-full border-b mt-5 border-white py-5 flex items-center gap-4 flex-wrap'>
            {selectedTypes.map((type: string, idx: number) => {
              return (
                <button
                  type='button'
                  key={idx}
                  className='bg-white text-black px-4 py-1.5 rounded-full'
                >
                  {type}
                </button>
              )
            })}
          </div>
        </div>
        <button className='w-full py-4 flex hover:opacity-80 transition-all duration-300 ease-out items-center justify-center bg-main rounded-xl'>
          Create
        </button>
      </form>
    </main>
  )
}

export default AddProductPage

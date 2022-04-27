import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className='m-5'>
      <div className='grid grid-cols-3 gap-4'>
        <div className='rounded-md col-span-2'>
          <h1>Welcome, Michael</h1>
          <p className='text-gray-accent text-[10px]'>Apr. 26, 2020</p>
          <div className='bg-dark-primary mt-6 rounded-lg p-4 w-full min-h-[200px]'>
           
          </div>
        </div>
        <div className='rounded-md'>
          <input className='bg-dark-est border-b border-b-gray-accent text-xs w-full h-8 outline-0 focus:border-dashed' placeholder='Search...' type='text'></input>
          <div className='bg-dark-primary mt-6 rounded-lg p-4 w-full min-h-[200px]'>
           
          </div>
        </div>
        <div className='bg-pink-300 rounded-md p-3'>03</div>
        <div className='bg-pink-300 rounded-md p-3'>04</div>
        <div className='bg-pink-300 rounded-md p-3'>05</div>
      </div>
      <div className='grid grid-cols-2 mt-4 gap-4'>
        <div className='bg-pink-300 rounded-md p-3'>06</div>
        <div className='bg-pink-300 rounded-md p-3'>07</div>
      </div>
    </div>
  )
}

export default Home
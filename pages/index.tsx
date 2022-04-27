import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className='m-5'>
      <div className='grid grid-cols-3 gap-4'>
        <div className='bg-pink-300 rounded-md p-3 col-span-2'>01</div>
        <div className='bg-pink-300 rounded-md p-3'>02</div>
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
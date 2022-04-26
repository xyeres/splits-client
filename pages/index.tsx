import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return <h1 className='dark:text-white dark:bg-black text-3xl font-bold border-dashed border-4 bg-blue-200 p-3'>
    Hello there!
  </h1>
}

export default Home

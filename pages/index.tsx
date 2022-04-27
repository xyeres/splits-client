import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilter, faFileInvoice, faPlus, faEllipsis, faMusic, faIcons, faCompactDisc, faArrowRightLong, faSquare, faSquareMinus, faSquareCheck, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faSpotify } from '@fortawesome/free-brands-svg-icons'
import { useState } from 'react'
import LoadingWithIcon from '../components/Loading/LoadingWithIcon'
import { VertBarChart } from '../components/Charts/VertBarChart'
import { DoughnutChart } from '../components/Charts/DoughnutChart'

const Home: NextPage = () => {
  const [hovering, setHovering] = useState(false)

  return (
    <div className='m-5 cursor-default'>
      <div className='grid grid-cols-3 gap-4'>
        <div className='rounded-md col-span-2'>
          <h1>Welcome, Michael</h1>
          <p className='text-gray-accent text-[10px]'>Apr. 26, 2020</p>
        </div>
        <div className='rounded-md flex flex-row mb-4 relative'>
          <div className='relative w-full mr-4 group'>
            <input className='bg-dark-est border-b border-b-gray-accent text-xs w-full h-8 outline-0 focus:border-dashed' placeholder='Search...' type='text' />
            <div className='absolute right-1 top-1 group-focus:text-gray-accent hover:text-gray-accent text-dark-active'>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </div>
          </div>
          {/* <div className='bg-dark-active flex items-center justify-center rounded-lg w-10 h-10 aspect-square'>
            <button>
              <FontAwesomeIcon icon={faEllipsis} />
            </button>
          </div> */}
        </div>

        <div className='rounded-md col-span-2'>
          <div className='bg-dark-primary rounded-lg p-4 h-full'>
            <VertBarChart />
          </div>
        </div>
        <div className='rounded-md'>
          <div className='flex justify-between items-center'>
            <h2>Recent reports</h2>
            <button onMouseEnter={() => setHovering(true)} onMouseLeave={() => setHovering(false)} className='text-xs active:bg-blue-800 bg-blue-600 py-2 px-5 rounded-md'>
              New report
              <span className='ml-2'><FontAwesomeIcon style={{ animationIterationCount: 1 }} shake={hovering} icon={faPlus} /></span>
            </button>
          </div>
          <div className='bg-dark-primary rounded-lg p-4 mt-4 w-full min-h-[200px]'>

            {/* reports go here */}
            <ul className='space-y-4'>
              <li className='flex flex-row items-center rounded-md group hover:bg-dark-active'>
                <div className='aspect-square text-lg grid group-hover:bg-gray-highlight bg-dark-active rounded-lg place-items-center w-10 h-10 mr-3'>
                  <FontAwesomeIcon icon={faFileInvoice} />
                </div>
                <div className='flex pr-2 flex-row w-full items-center justify-between'>
                  <div>
                    <p className='text-sm'>April 2022</p>
                    <p className='text-xs text-gray-accent'>
                      18 payees
                    </p>
                  </div>
                  <p className='text-yellow-700'>
                    <FontAwesomeIcon icon={faSquareMinus} />
                  </p>
                </div>
              </li>
              <li className='flex flex-row items-center rounded-md group hover:bg-dark-active'>
                <div className='aspect-square grid group-hover:bg-gray-highlight bg-dark-active rounded-lg place-items-center w-10 h-10 mr-3 text-lg'>
                  <FontAwesomeIcon icon={faFileInvoice} />
                </div>
                <div className='flex pr-2 flex-row w-full items-center justify-between'>
                  <div>
                    <p className='text-sm'>March 2022</p>
                    <p className='text-xs text-gray-accent'>
                      18 payees
                    </p>
                  </div>
                  <p className='text-green-700'>
                    <FontAwesomeIcon icon={faSquareCheck} />
                  </p>
                </div>
              </li>
              <li className='flex flex-row items-center rounded-md group hover:bg-dark-active'>
                <div className='aspect-square text-lg grid group-hover:bg-gray-highlight bg-dark-active rounded-lg place-items-center w-10 h-10 mr-3'>
                  <FontAwesomeIcon icon={faFileInvoice} />
                </div>
                <div className='flex pr-2 flex-row w-full items-center justify-between'>
                  <div>
                    <p className='text-sm'>Febuary 2022</p>
                    <p className='text-xs text-gray-accent'>
                      17 payees
                    </p>
                  </div>
                  <p className='text-green-700'>
                    <FontAwesomeIcon icon={faSquareCheck} />
                  </p>
                </div>
              </li>
            </ul>
            <button onMouseEnter={() => setHovering(true)} onMouseLeave={() => setHovering(false)} className='py-4 w-full px-5 text-xs bg-blue-600 active:bg-blue-800 rounded-md mt-3'>
              View more reports
              <span className='ml-2'>
                <FontAwesomeIcon icon={faArrowRightLong} beat={hovering ? true : false} />
              </span>
            </button>
          </div>
        </div>


        <div className='bg-dark-primary rounded-md min-h-[100px] p-3 flex flex-row items-center justify-between'>
          <div>
            <p className='text-gray-accent text-[10px] sm:text-xs'>Earnings</p>
            <div className='flex flex-col'>
              <p className='text-xs sm:text-lg'>$10,234.20</p>
              <span className='text-green-700 text-xs'>+0.45%</span>
            </div>
          </div>
          <div className='w-full ml-2 overflow-hidden max-h-24'>
            <DoughnutChart />
          </div>
        </div>

        <div className='bg-dark-primary rounded-md min-h-[100px] p-3 flex flex-row items-center justify-between'>
          <div>
            <p className='text-gray-accent text-[10px] sm:text-xs'>Earnings</p>
            <div className='flex flex-col'>
              <p className='text-xs sm:text-lg'>$10,234.20</p>
              <span className='text-green-700 text-xs'>+0.45%</span>
            </div>
          </div>
          <div className='w-full ml-2 overflow-hidden max-h-24'>
            <DoughnutChart />
          </div>
        </div>

        <div className='bg-dark-primary rounded-md min-h-[100px] p-3 flex flex-row items-center justify-between'>
          <div>
            <p className='text-gray-accent text-[10px] sm:text-xs'>Earnings</p>
            <div className='flex flex-col'>
              <p className='text-xs sm:text-lg'>$10,234.20</p>
              <span className='text-green-700 text-xs'>+0.45%</span>
            </div>
          </div>
          <div className='w-full ml-2 overflow-hidden max-h-24'>
            <DoughnutChart />
          </div>
        </div>

        
      </div>

      <div className='grid grid-cols-2 mt-4 gap-4'>
        <div>
          <div className='flex justify-between items-center'>
            <h2 className='text-sm'>Top sales channels</h2>
            <button className='text-xs active:bg-blue-800 bg-blue-600 py-2 px-5 rounded-md'>
              <span className='mr-2'><FontAwesomeIcon icon={faFilter} /></span>
              Filters
            </button>
          </div>
          <div className='bg-dark-primary space-y-4 rounded-md mt-4 p-3'>
            {/* Stores */}
            <div className='flex flex-row rounded-md group hover:bg-dark-active'>
              <div className='aspect-square text-xl grid group-hover:bg-gray-highlight bg-dark-active rounded-lg place-items-center w-12 h-12 p-1 mr-2'>
                <FontAwesomeIcon icon={faSpotify} />
              </div>
              <div className='flex pr-3 flex-row w-full items-center justify-between'>
                <p className='text-sm'>Spotify</p>
                <p className='text-xs text-green-700'>$117,452.43</p>
              </div>
            </div>

            <div className='flex flex-row rounded-md group hover:bg-dark-active'>
              <div className='aspect-square text-xl grid group-hover:bg-gray-highlight bg-dark-active rounded-lg place-items-center w-12 h-12 p-1 mr-2'>
                <FontAwesomeIcon icon={faMusic} />
              </div>
              <div className='flex pr-3 flex-row w-full items-center justify-between'>
                <p className='text-sm'>Tunecore</p>
                <p className='text-xs text-green-700'>$82,452.43</p>
              </div>
            </div>

            <div className='flex flex-row rounded-md group hover:bg-dark-active'>
              <div className='aspect-square text-xl grid group-hover:bg-gray-highlight bg-dark-active rounded-lg place-items-center w-12 h-12 p-1 mr-2'>
                <FontAwesomeIcon icon={faCompactDisc} />
              </div>
              <div className='flex pr-3 flex-row w-full items-center justify-between'>
                <p className='text-sm'>All others</p>
                <p className='text-xs text-green-700'>$14,452.43</p>
              </div>
            </div>

          </div>
        </div>
        <div className='bg-dark-primary rounded-md p-3 h-full'>
          <LoadingWithIcon icon={<FontAwesomeIcon icon={faCompactDisc} spin />} />
        </div>
      </div>
    </div>
  )
}

export default Home
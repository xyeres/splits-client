import React from 'react'

function Navbar() {
  return (
    <div className='flex flex-row bg-dark-primary h-full'>
      <div className='flex flex-col justify-between items-center w-16 p-4'>
        <div className='flex flex-col space-y-4'>
          <a>
            <div className='rounded-full bg-gray-200 w-8 h-8'></div>
          </a>
          <a>
            <div className='rounded-full bg-gray-200 w-8 h-8'></div>
          </a>
          <a>
            <div className='rounded-full bg-gray-200 w-8 h-8'></div>
          </a>
        </div>
        <div className='flex flex-col space-y-4'>
          <a>
            <div className='rounded-full bg-gray-200 w-8 h-8'></div>
          </a>
          <a>
            <div className='rounded-full bg-gray-200 w-8 h-8'></div>
          </a>
          <a>
            <div className='rounded-full bg-gray-200 w-8 h-8'></div>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Navbar
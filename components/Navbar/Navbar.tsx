import { faChartLine, faChartPie, faCompactDisc, faGauge, faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import NavBarIcon from './NavBarIcon'

function Navbar() {
  return (
    <div className='flex flex-row bg-dark-primary h-full'>
      <div className='flex flex-col justify-between items-center w-16 p-4'>
        <div className='flex flex-col space-y-5 mt-2 text-xl'>
          <NavBarIcon text="Dashboard" icon={<FontAwesomeIcon icon={faGauge} />} />
          <NavBarIcon text="Reports" icon={<FontAwesomeIcon icon={faChartPie} />} />
          <NavBarIcon text="Sales" icon={<FontAwesomeIcon icon={faChartLine} />} />
          <NavBarIcon text="Assets" icon={<FontAwesomeIcon icon={faCompactDisc} />} />
        </div>
        <div className='flex flex-col'>
          <NavBarIcon text="Logout" icon={<FontAwesomeIcon icon={faRightFromBracket} />} />
        </div>
      </div>
    </div>
  )
}

export default Navbar
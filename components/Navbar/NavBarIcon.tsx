import React, { ReactNode } from 'react'

interface NavBarIconProps {
    icon: ReactNode,
    text?: String,
}

const NavBarIcon: React.FC<NavBarIconProps> = ({ icon, text }) => {
    return (
        <a className='navbar-icon group'>
            {icon}
            {text && (
                <span className='navbar-tooltip group-hover:scale-100'>
                    {text}
                </span>
            )}
        </a>
    )
}

export default NavBarIcon
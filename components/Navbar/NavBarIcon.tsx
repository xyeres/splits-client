import Link from 'next/link'
import React, { ReactNode } from 'react'

const NavBarIcon = ({ icon, text, href = '#' }: { icon: ReactNode, text: string, href: string }) => {
    return (
        <Link href={href}>
            <a className='navbar-icon group'>
                {icon}
                {text && (
                    <span className='navbar-tooltip group-hover:scale-100'>
                        {text}
                    </span>
                )}
            </a>
        </Link>
    )
}

export default NavBarIcon
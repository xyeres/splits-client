import React from 'react'

type Props = {
    icon: React.ReactNode,
    text?: String,
}

function LoadingWithIcon({icon, text="Loading..."}: Props) {
    return (
        <div className='flex flex-col text-dark-active items-center justify-center h-full gap-5'>
            <span className='text-9xl'>
                {icon}
            </span>
            <p>{text}</p>
        </div>
    )
}

export default LoadingWithIcon
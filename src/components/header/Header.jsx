import React from 'react'

export const Header = () => {
 
    return (
        <div className='p-1 w-full flex items-end gap-5 bg-gray-100'>
            <button className='h-10 w-10 bg-fondo border-2 border-fondo rounded-full'
            ></button>
            <h1 className='text-fondo text-2xl font-bold'>Portafolio</h1>
        </div>
    )
}

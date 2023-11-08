import React from 'react'
import ravekh from '../seccionOne/PR2.png';
export default function SeccionTwo() {
    return (
        <div className='viewport flex flex-wrap flex-col justify-center gap-2 items-center md:flex-row md:justify-around'>
            <div className='md:w-2/4 md:order-3'>
                <p className='text-texto-vino font-bold text-5xl text-center uppercase mt-5 md:text-7xl'>RAVEKH</p>
                <p className='text-gray-200 w-10/12 m-auto font-bold mt-5 md:text-2xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel hic, tenetur debitis assumenda dolore ullam libero esse quasi </p>
                <p className='text-gray-300 w-10/12 m-auto mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora voluptate numquam aperiam odit quidem facere dolor saepe asperiores recusandae assumenda ipsam accusantium quas, ea labore unde cumque ad? Accusantium, qui.</p>

            </div>
            <img
                src={ravekh}
                className='h-1/4 w-1/2 object-cover rounded-lg md:order-1 md:h-2/4 md:w-1/4 '
            />

        </div >
    )
}

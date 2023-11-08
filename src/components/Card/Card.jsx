import React from 'react'
import './Card.css';
export const Card = (props) => {
    const {title, content, image, url} = props;
    return (
        <div className='border-borde-morado border-2 rounded-md h-64 lg:h-72 w-10/12 md:w-4/12 lg:w-4/12 relative card-conteiner'>
            <div className='card-inner h-full w-full shadow-card'>
                <div className='card-front'>
                    <div className='header-card'>
                        <span className="actual-text">&nbsp;{title}&nbsp;</span>
                    </div>
                    <div className='w-full p-5 flex flex-wrap flex-col'>
                        <p className='text-left text-gray-200 text-3xl'>
                            {content}
                        </p>
                    </div>
                    <div className='border-2 border-borde-morado h-16 w-16 rounded-full absolute right-2 bottom-4 bg-fondo-morado card'></div>
                </div>
                <div className='card-back h-full w-full flex flex-wrap justify-around overflow-hidden p-1 '>
                    <img src={image} alt='login' className='h-full w-full object-cover rounded-md' />

                    <a target={'_blank'}
                        href={url}
                        className='absolute bg-pink-700 bottom-1/4 left-1/2 w-32 -translate-x-1/2 text-gray-200 shadow-xl rounded-md text-center'>
                        Ver</a>
                </div>
            </div>
        </div>
    )
}

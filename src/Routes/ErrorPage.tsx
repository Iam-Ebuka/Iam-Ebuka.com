import React from 'react'

const ErrorPage: React.FC = () => {
  return (
    <div className='bg-black h-screen w-screen flex flex-col justify-center items-center'>
        <h1 className='text-white text-[90px] animate-bounce'>404</h1>
        <p className='text-white'>Check the url and make corrections</p>
    </div>
  )
}

export default ErrorPage
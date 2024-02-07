import React, { useEffect, useState } from 'react'
import "../App.css"


const Intro: React.FC = () => {
    const [showWelcome, setShowWelcome] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setShowWelcome(true);
        }, 12000);
        return () => clearTimeout(timeout);
    }, []) 
    
  return (
    <div className='bg-[#4286ca] w-full h-screen backWall'>
        <div className="wall bg-black text-white h-full w-full">
            <div className=" language-container h-full w-full relative">
                <div className="language flex flex-col items-center top-[20%] left-[40%] transform -translate-x-1/2 -translate-y-1/2 absolute">
                    <h1 className='font-extrabold text-[20px] lg:text-[30px]'>Ekabo</h1>
                    <p className='text-[15px]'>YORUBA</p>
                </div>
                <div className="language  flex flex-col absolute items-center top-[70%] left-[60%] transform -translate-x-1/2 -translate-y-1/2">
                    <h1 className='font-extrabold text-[20px] lg:text-[30px]'>Nnoo</h1>
                    <p className='text-[15px]'>IGBO</p>
                </div>
                <div className="language w-full flex flex-col absolute items-center top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2">
                    <h1 className='font-extrabold text-[20px] lg:text-[30px]'>Sannu da zuwa</h1>
                    <p className='text-[15px]'>HAUSA</p>
                </div>
                <div className="language flex flex-col absolute items-center top-[70%] left-[30%] transform -translate-x-1/2 -translate-y-1/2">
                    <h1 className='font-extrabold text-[20px] lg:text-[30px]'>Bienvenido</h1>
                    <p className='text-[15px]'>SPANISH</p>
                </div>       
                <div className="language flex flex-col absolute items-center top-[10%] left-[70%] transform -translate-x-1/2 -translate-y-1/2">
                    <h1 className='font-extrabold text-[20px] lg:text-[30px]'>Bienvenu</h1>
                    <p className='text-[15px]'>FRENCH</p>
                </div>
                <div className="language absolute items-center top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2">
                    <h1 className='font-extrabold text-[20px] lg:text-[30px]'>Welcome</h1>
                </div>   
            </div>
            {showWelcome && (
            <div className='absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2' >
                <h1 className='font-extrabold text-[20px] lg:text-[30px]'>Welcome</h1>
            </div> )}
        </div>
    </div>
  )
}

export default Intro
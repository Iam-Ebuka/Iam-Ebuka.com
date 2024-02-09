import React from 'react'
import myReactSvg from "../assets/react.svg"
import mySqlSvg from "../assets/mysql-logo-svgrepo-com.svg"
import myJavaScript from "../assets/javascript-logo-svgrepo-com.svg"
import myTypeScript from "../assets/typescript-svgrepo-com.svg"
import myTailwind from "../assets/tailwindcss-icon-svgrepo-com.svg"
import myNodejs from "../assets/nodejs01-svgrepo-com.svg"
import myNextjs from "../assets/nextjs-svgrepo-com.svg"


const Mytools: React.FC = () => {
  return (
        <div className="mt-[50px] mx z-20">
            <h4 className="bg-[#3498db] font-bold text-[12px] pb-2 text-center">MY TOOLS</h4>
            <div className="mt-[20px] max-w-[400px] mx-auto grid grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="flex flex-col items-center font-bold space-y-1 text-[12px] text-gray-800"><img src={myJavaScript} alt="javaScript svg" className="w-[50px]" /><p>JavaScript</p></div>
              <div className="flex flex-col items-center font-bold space-y-1 text-[12px] text-gray-800"><img src={myTypeScript} alt="typeScript" className="w-[50px]" /><p>TypeScript</p></div>
              <div className="flex flex-col items-center font-bold space-y-2 text-[12px] text-gray-800"><img src={myReactSvg} alt="React svg" className="w-[50px]"/><p>React.js</p></div>
              <div className="flex flex-col items-center font-bold space-y-1 text-[12px] text-gray-800"><img src={myNextjs} alt="Nextjs svg" className="w-[50px]"/><p>Nextjs</p></div>
              <div className="flex flex-col items-center font-bold space-y-1 text-[12px] text-gray-800"><img src={mySqlSvg} alt="MySql svg" className="w-[50px]"/><p>MySQL</p></div>
              <div className="flex flex-col items-center font-bold space-y-1 text-[12px] text-gray-800"><img src={myTailwind} alt="Tailwind svg" className="w-[50px]"/><p>TailwindCSS</p></div>
              <div className="flex flex-col items-center font-bold space-y-2 text-[12px] text-gray-800"><img src={myReactSvg} alt="React Native svg" className="w-[50px]"/><p>React Native</p></div>
              <div className="flex flex-col items-center font-bold space-y-1 text-[12px] text-gray-800"><img src={myNodejs} alt="Nodejs svg" className="w-[50px]"/><p>Node.js</p></div>
              
            </div>
        </div>
  )
}

export default Mytools
import React, { useEffect, useRef, useState } from "react"
import Navbar from "./component/Navbar"
import Intro from "./component/Intro"
import "./App.css"
import myReactSvg from "./assets/react.svg"
import mySqlSvg from "./assets/mysql-logo-svgrepo-com.svg"
import myJavaScript from "./assets/javascript-logo-svgrepo-com.svg"
import myTypeScript from "./assets/typescript-svgrepo-com.svg"
import myTailwind from "./assets/tailwindcss-icon-svgrepo-com.svg"
import myNodejs from "./assets/nodejs01-svgrepo-com.svg"
import myNextjs from "./assets/nextjs-svgrepo-com.svg"


const App: React.FC = () => {
  const [intro, setIntro] = useState<boolean>(true)
  const myNameRef = useRef<HTMLHeadingElement>(null)
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIntro(false);
    }, 13995)
    return ()=> clearTimeout(timeout)
  }, [])

   useEffect(() =>{
    window.onscroll = () => {
      let pos: string | number = window.scrollY - 400;
      const nameElement = myNameRef.current;
      if (nameElement) {
        nameElement.style.left = `${pos}px`
      }
    }
   }, [])


  return (
    <> 
      { intro ? 
    ( 
      <Intro />
    ) : (
      <div className="h-[500vh] container mx-auto"> 
        <Navbar />
        <div className="flex relative flex-col items-center w-full pt-[50px] bg-green-200 h-screen overflow-hidden">
          <h4 className="text-[16px] text-gray-800 font-bold z-10">Hello, I am</h4>
          <h2 className="lg:text-[30px] text-[20px] text-green-800 font-bold z-10">ChukwuEbuka Odiah</h2>
          <h2 ref={myNameRef} className="Isaac text-[50px] lg:text-[100px] z-0 text-[#ffffff] font-extrabold">Hire Me!</h2>
          <h1 className='font-extrabold text-gray-800 z-10 text-[16px]'>SOFTWARE DEVELOPER</h1>
          {/* <h2 className="font-bold">Let's build it together</h2> */}
          <div className="mt-[50px] z-20">
            <h4 className="font-bold text-[12px] pb-2 text-center">MY TOOLS</h4>
            <div className="mt-[20px] grid grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="flex flex-col items-center font-bold space-y-1 text-[12px] text-gray-800"><img src={myJavaScript} alt="javaScript svg" className="w-[50px]" /><p>JavaScript</p></div>
              <div className="flex flex-col items-center font-bold space-y-1 text-[12px] text-gray-800"><img src={myTypeScript} alt="typeScript" className="w-[50px]" /><p>TypeScript</p></div>
              <div className="flex flex-col items-center font-bold space-y-2 text-[12px] text-gray-800"><img src={myReactSvg} alt="React svg" className="w-[50px]"/><p>React.js</p></div>
              <div className="flex flex-col items-center font-bold space-y-1 text-[12px] text-gray-800"><img src={myNextjs} alt="Nextjs svg" className="w-[50px]"/><p>Node.js</p></div>
              <div className="flex flex-col items-center font-bold space-y-1 text-[12px] text-gray-800"><img src={mySqlSvg} alt="MySql svg" className="w-[50px]"/><p>MySQL</p></div>
              <div className="flex flex-col items-center font-bold space-y-1 text-[12px] text-gray-800"><img src={myTailwind} alt="Tailwind svg" className="w-[50px]"/><p>TailwindCSS</p></div>
              <div className="flex flex-col items-center font-bold space-y-2 text-[12px] text-gray-800"><img src={myReactSvg} alt="React Native svg" className="w-[50px]"/><p>React Native</p></div>
              <div className="flex flex-col items-center font-bold space-y-1 text-[12px] text-gray-800"><img src={myNodejs} alt="Nodejs svg" className="w-[50px]"/><p>Node.js</p></div>
              
            </div>
          </div>
        </div> 
      </div> 
    )}
    </>
  )
}

export default App

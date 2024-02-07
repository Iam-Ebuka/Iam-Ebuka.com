import React, { useEffect, useRef, useState } from "react"
import Navbar from "./component/Navbar"
import Intro from "./component/Intro"
import "./App.css"


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
        <div className="flex relative flex-col items-center w-full bg-green-200 h-screen overflow-hidden">
          <h2 className="text-[16px] mt-[180px] font-bold">Hello, I am <span className="text-[30px]">ChukwuEbuka Odiah</span></h2>
          <h2 ref={myNameRef} className="Isaac text-[50px] lg:text-[100px] text-[#ffffff] font-extrabold">You can call me "Isaac"</h2>
          <h1 className='font-extrabold text-[16px] mt-[15px]'>SOFTWARE DEVELOPER</h1>
          <h2 className="font-bold">Let's build it together</h2>
        </div> 
      </div> 
    )}
    </>
  )
}

export default App

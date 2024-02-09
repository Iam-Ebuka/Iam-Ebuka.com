import React, { useEffect, useRef, useState } from "react"
import Navbar from "./component/Navbar"
import Intro from "./component/Intro"
import "./App.css"
import Lottie from "lottie-react"
import Github from "./assets/github.json"
import Linkedin from "./assets/linkedin-2.json"
import Twitter from "./assets/twitter (1).json"
import Mytools from "./component/Mytools"
import Projects from "./Projects"



const App: React.FC = () => {
  const [intro, setIntro] = useState<boolean>(true)
  const myNameRef = useRef<HTMLHeadingElement>(null)
  const mySecondRef = useRef<HTMLHeadingElement>(null)
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIntro(false);
    }, 13995)
    return ()=> clearTimeout(timeout)
  }, [])

   useEffect(() =>{
    window.onscroll = () => {
      let pos: string | number = window.scrollY - 40;
      const leftElement = myNameRef.current;
      const rightScroll = mySecondRef.current;
      if (leftElement && rightScroll) {
        leftElement.style.left = `${pos}px`
        rightScroll.style.right = `${pos}px`
      }
      
    }
   }, [])


  return (
    <> 
      { intro ? 
    ( 
      <Intro />
    ) : (
      <div className="container mx-auto"> 
        <Navbar />
        <div className="relative max-w-[1000px] mx-auto ">
          <div className="mt-[50px] grid lg:grid-cols-2 grid-cols-1 grid-rows-2 lg:grid-rows-1">
            <div className="flex flex-col items-center lg:items-start overflow-hidden justify-center">
              <h4 className="absolute text-[100px] lg:-left-[40px] left-1 top-[-60px] -rotate-12 text-[#dddddd] font-extrabold">Hi</h4>
              <h4 className="text-[16px] text-gray-800 lg:hidden font-bold z-10">I am</h4>
              <h2 className="lg:text-[60px] text-[30px] text-[#3498db] lg:pl-[50px] leading-[60px] font-bold z-10">ChukwuEbuka Odiah</h2>
              {/*<h2 ref={myNameRef} className="Isaac text-[50px] lg:text-[100px] top-[20%] lg:top-[10%] z-0 text-[#bcbcbc] font-extrabold">Let's build it!</h2>
              <h2 ref={mySecondRef} className="Ebuka text-[50px] lg:text-[100px] top-[30%] lg:top-[23%] z-0 text-[#bcbcbc] font-extrabold">Shall we!</h2>*/}
              <h1 className='font-extrabold tracking-widest mb-[20px] text-[#585858] z-10 lg:pl-[50px] lg:pt-[20px] text-[16px]'>A super hero FRONT-END DEVELOPER</h1>
              <div className="flex items-center gap-5 mx-auto lg:ml-[50px]">
                <div className="w-[50px]">
                  <Lottie loop={true} animationData={Github} />
                </div>
                <div className="w-[40px]">
                  <Lottie loop={true} animationData={Linkedin} />
                </div>
                <div className="w-[50px]">
                  <Lottie loop={true} animationData={Twitter} />
                </div>
              </div>
              {/* <h2 className="font-bold">Let's build it together</h2> */}
            </div>
            <div className="myImage">

            </div>
          </div> 
          <div className="bg-[#ede9e9] pt-7 pb-7 text-[16px] mx-auto px-[50px] font-[500] space-y-5 z-30 rounded-lg shadow-lg mt-[100px] max-w-[700px]">
            <h1 className="text-center font-bold text-[#3498db]">ABOUT ME</h1>
            <p className="text-center">Hey there, I'm Odiah ChukwuEbuka, but you can simply call me Isaac. I thrive in the world of web development, specializing in frontend development, I also do backend development.</p>
            <p className="text-center">My expertise lies in crafting captivating user experiences using the React library with Next.js for frontend development. Meanwhile, on the backend, I harness the power of Node.js, leveraging my strong grasp of JavaScript and TypeScript.</p>
            
          </div>
        </div>
          <Mytools />
          <Projects />
        
      </div> 
    )}
    </>
  )
}

export default App

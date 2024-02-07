import React, { useEffect, useState } from "react"
import Navbar from "./component/Navbar"
import Intro from "./component/Intro"


const App: React.FC = () => {
  const [intro, setIntro] = useState<boolean>(true)
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIntro(false);
    }, 13998)
    return ()=> clearTimeout(timeout)
  }, [])

  return (
    <> 
    { intro ? 
    ( 
      <Intro />
    ) : (
      <div className="h-screen "> 
        <Navbar />
        <div className=" flex flex-col items-center mt-[200px] container mx-auto">
          <h1 className='font-extrabold text-[30px]'>FRONT-END DEVELOPER</h1>
          <h2 className="">Let's build from here</h2>
        </div> 
      </div> 
    )}
    </>
  )
}

export default App

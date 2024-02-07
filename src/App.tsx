import React, { useEffect, useState } from "react"
import Navbar from "./component/Navbar"
import Intro from "./component/Intro"


const App: React.FC = () => {
  const [intro, setIntro] = useState<boolean>(true)
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIntro(false);
    }, 14000)
    return ()=> clearTimeout(timeout)
  }, [])

  return (
    <> 
    { intro ? 
    ( 
      <Intro />
    ) : (
      <div className="bg-[#0e0b0b]"> 
        <Navbar />
        <div>
          <h1 className='text-[#fff] font-extrabold text-[30px]'>FRONT-END DEVELOPER</h1>
          <h2>Let's build from here</h2>
        </div> 
      </div> 
    )}
    </>
  )
}

export default App

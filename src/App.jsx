import React from 'react'
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import LoadingPage from './Components/LoadingPage'

function App() {

  useGSAP(() => {
    let t1 = gsap.timeline();

    t1.to(".box",{
      x:30,
      duration:1,
      repeat:1,
      yoyo:true,
      delay:0.5,
      stagger:{
        amount:1.5,
        from:"start"
      }
    });
    t1.to(".container",{
      rotate:"-405deg",
      scale:0,
      duration:1
    });
    t1.to(".wrapper",{
      opacity:0,
      display:"none"
    })
  })

  return (
    <>
    <LoadingPage />
    <div className='h-screen bg-black flex justify-center items-center'>
      <h1 className="text-white font-bold text-8xl">
        Hello world!
      </h1>

    </div>
    </>
  )
}

export default App
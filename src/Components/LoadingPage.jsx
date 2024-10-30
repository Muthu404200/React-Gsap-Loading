import React from 'react'


function LoadingPage() {
  return (
    <>
    <div className="wrapper absolute top-0 left-0 bg-black h-screen w-screen flex items-center justify-center">
        <div className="container rotate-45 w-24  grid grid-cols-3 gap-x-1 gap-y-1">
            <div className="box w-7 h-7 bg-[#65cdef]"></div>
            <div className="box w-7 h-7 bg-[#65cdef]"></div>
            <div className="box w-7 h-7 bg-[#65cdef]"></div>
            <div className="box w-7 h-7 bg-[#65cdef]"></div>
            <div className="box w-7 h-7 bg-[#65cdef]"></div>
            <div className="box w-7 h-7 bg-[#65cdef]"></div>
            <div className="box w-7 h-7 bg-[#65cdef]"></div>
            <div className="box w-7 h-7 bg-[#65cdef]"></div>
            <div className="box w-7 h-7 bg-[#65cdef]"></div>
        </div>

    </div>
    </>
  )
}


export default LoadingPage
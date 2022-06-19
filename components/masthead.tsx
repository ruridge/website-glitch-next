import React from 'react'
import Image from 'next/image'

const Masthead: React.FC = () => {
  return (
    <div className="sticky top-0 flex flex-col items-center justify-center min-h-screen bg-black -z-10">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute object-cover w-full h-full"
      >
        {/* todo: remove this */}
        <source src="/assets/masthead-bg.mp4" type="video/mp4" />
        {/* create thee videos: */}
        <source src="/assets/masthead-bg.m4v" type="video/mp4; codecs=hvc1" />
        <source src="/assets/masthead-bg.webm" type="video/webm; codecs=vp9" />
      </video>
      <div className="p-12 font-bold z-10 text-white drop-shadow-[0_5px_3px_rgba(0,0,0,0.4)] text-center flex flex-col items-center justify-center">
        <h1 className="mb-6 text-4xl">Robert Uirdge</h1>
        <h2 className="mb-2 text-2xl tracking-tight">Web developer</h2>
      </div>
    </div>
  )
}

export { Masthead }

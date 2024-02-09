'use client'
import Image from 'next/image'
import Carousel from './components/Carousel'
import Carousel2 from './components/Carousel2';
import Schedule from './components/Schedule';
import { motion } from 'framer-motion';
import { commissioner, peach } from './fonts'

//TODO: this will be homepage, 
//TODO: may add video background in hero component instead

export default function Home() {
  return (
    <main className="flex flex-col items-center bg-primary" data-theme="mytheme">
      {/* <div className="flex h-96 w-screen justify-center items-center bg-black overflow-hidden">
        <video
          autoPlay
          loop
          muted
          className="object-contain"
          style={{ transform: 'translateY(-25%)' }} // Adjust this value to shift the video up or down
        >
          <source
            src="/assets/videos/VGR_Drone_020424_v2.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        {/* <div className="absolute inset-0 h-96 top-20 bg-black bg-opacity-50 z-1"></div>  */}

      {/* </div> } */}


      <div className="hero "
        style={{ backgroundImage: 'url(assets/images/R6II9580.jpg)' }}
      >


        <div className="hero-overlay bg-opacity-60"></div>

        <div className="hero-content w-full h-full flex-col justify-start text-center text-neutral-content mt-12 md:mt-48">
          <div className='flex justify-center w-9/12 h-auto '>
            <h1 className={`tracking-wider text-4xl md:text-8xl lg:text-9xl italic font-bold ${commissioner.variable} font-sans`}>ValleyGrlsRun</h1>
          </div>

          <div className="max-w-lg mt-20 h-80">
            <p className="mb-5 text-lg ">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          </div>
        </div>
      </div>
      {/* <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          ease: "linear",
          duration: .5,
          x: { duration: 1 }
        }}        > */}
      <Schedule />
      {/* </motion.div> */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          ease: "linear",
          duration: 1,
          x: { duration: 1 }
        }}        >
        <Carousel/>
      </motion.div>

    </main>
  )
}

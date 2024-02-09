import React from 'react'
import { peach, commissioner } from '../fonts'


const Schedule = () => {
  return (

    <div className="hero-content bg-primary bg-cover min-w-full flex flex-col justify-center items-center py-16  ">
      {/* <div className="hero-overlay bg-opacity-90"></div> */}

      <div className=''>
        <h1 className={`tracking-wide text-neutral text-4xl md:text-6xl lg:text-7xl ${peach.className} font-bold `}>Schedule</h1>
        {/* <hr class="border-t-2 border-black" /> */}
      </div>

      <div className="flex  w-full justify-center mt-10">
        <div className="w-full sm:w-auto flex flex-wrap justify-center gap-4">
          <div className="grid w-64 h-20 card bg-neutral shadow-lg rounded-box place-items-center m-2">
            <h3 className={`text-lg text-white font-bold ${commissioner.className}`}>Wednesdays</h3>
            <p className={`text-lg  text-white italic font-medium ${commissioner.className}`}>6:00pm</p>
          </div>
          {/* <div className="divider divider-horizontal"></div> */}
          <div className="grid w-64 h-20 card bg-neutral shadow-lg rounded-box place-items-center m-2">
            <h3 className={`text-lg text-white font-bold ${commissioner.className}`}>Saturdays</h3>
            <p className={`text-lg  text-white italic font-medium ${commissioner.className}`}>7:00am</p>
          </div>
        </div>
      </div>

    </div>

  )
}

export default Schedule
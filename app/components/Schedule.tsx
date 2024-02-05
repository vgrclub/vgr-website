import React from 'react'
import { commissioner } from '../fonts'

const Schedule = () => {
  return (
    <div className="hero-content bg-primary min-w-full flex flex-col justify-center items-center mt-5 mb-10">
      <div className=''>
        <h1 className={`tracking-wider text-4xl md:text-6xl lg:text-7xl italic font-bold ${commissioner.variable} font-sans`}>Schedule</h1>
        <hr class="border-t-2 border-black" />
      </div>

      <div className="flex  w-full justify-center mt-10">
        <div className="w-full sm:w-auto flex flex-wrap justify-center gap-4">
          <div className="grid w-64 card bg-base-300 rounded-box place-items-center m-2">
            <h3 className="text-lg font-bold">Wednesdays</h3>
            <p className="text-lg">5:30pm</p>
          </div>
          {/* <div className="divider divider-horizontal"></div> */}
          <div className="grid w-64 card bg-base-300 rounded-box place-items-center m-2">
            <h3 className="text-lg font-bold">Saturdays</h3>
            <p className="text-lg">7:00am</p>
          </div>
        </div>
      </div>

    </div>

  )
}

export default Schedule
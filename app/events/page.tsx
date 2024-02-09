import React from 'react'
import { getEvent } from '@/sanity/sanity.query'
import type { EventType } from '@/types'
import Image from 'next/image'
import { formatDateString } from '../utils'
import { commissioner } from '../fonts'

//TODO: this is the events page, uses sanity query getEvent to fetch latest event posts

const EventsPage = async () => {

  const events: EventType[] = await getEvent();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between pl-10 pr-10 bg-primary" data-theme="mytheme">
      <div className='flex justify-center w-9/12 h-auto '>
        <h1 className={`tracking-wider text-5xl md:text-7xl lg:text-8xl italic font-bold pt-8 pb-8 md:pb-10 ${commissioner.variable} font-sans`}>Events</h1>
      </div>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-10">
        {events
          .sort((a, b) => new Date(a.date) - new Date(b.date))
          .map((data) => (
            <div key={data._id} className="flex flex-col justify-start h-full lg:h-5/6 max-w-md rounded-xl overflow-hidden shadow-lg bg-white">
              {/* image container */}
              <div className='flex h-2/4'>
                <Image
                  src={data.eventImage.image}
                  alt={data.eventName}
                  width={400}
                  height={400}
                  className="w-full object-cover"
                />
              </div>
              {/* content container */}
              <div className="px-6 py-4 mt-5">
                <div className="font-bold text-xl mb-2">{data.eventName}</div>
                <p className="text-gray-700 text-base">
                  {data.location}
                </p>
                <p className="text-gray-500 text-sm">
                  {formatDateString(data.date)}
                </p>
                <p className="text-gray-700 text-base mt-4">
                  {data.summary}
                </p>
              </div>
            </div>
          ))}
      </section>
    </main>
  )
}

export default EventsPage;
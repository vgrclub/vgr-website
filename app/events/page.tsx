import React from 'react'
import { getEvent } from '@/sanity/sanity.query'
import type { EventType } from '@/types'
import Image from 'next/image'
//TODO: this is the events page
const EventsPage = async () => {

  const events: EventType[] = await getEvent();

  return (
    // <main className="flex flex-col items-center bg-primary" data-theme="mytheme">
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-primary" data-theme="mytheme">
      <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12">
        {events.map((data) => (
          <div key={data._id} className="max-w-md rounded-xl overflow-hidden shadow-lg">
            <Image
              src={data.eventImage.image}
              alt={data.eventName}
              width={400}
              height={250}
              className="w-full object-cover"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{data.eventName}</div>
              <p className="text-gray-700 text-base">
                {data.location}
              </p>
              <p className="text-gray-500 text-sm">
                {data.date}
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
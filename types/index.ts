import { PortableTextBlock } from "sanity";

export type EventType = {
  _id: string,
  eventName: string,
  location: string,
  date: number,
  eventImage: {
    alt: string,
    image: string
  },
  summary: PortableTextBlock[],
};
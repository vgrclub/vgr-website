import { groq } from "next-sanity";
import client from "./sanity.client";

export async function getEvent() {
  return client.fetch(
    groq`*[_type == "events"]{
      _id,
      eventName,
      location,
      date,
      eventImage {alt, "image": asset->url},
      summary,
    }`,
    { next: { revalidate: 300 } }
  );
}
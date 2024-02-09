import { defineField } from "sanity";

const events = {
  name: "events",
  title: "Events",
  type: "document",
  fields: [defineField({
    name: "eventName",
    title: "Event Name",
    type: "string",
    validation: (rule) => rule.required(),
  }),
  defineField({
    name: "location",
    title: "Location",
    type: "string",
  }),
  {
    name: "date",
    title: "Date",
    type: "datetime",
    description: "Date of the event",
  },
  {
    name: "eventImage",
    title: "Event Image",
    type: "image",
    description: "Upload a event image",
    options: { hotspot: true },
    fields: [
      {
        name: "alt",
        title: "Alt",
        type: "string",
      },
    ],
  },
  {
    name: "summary",
    title: "Summary",
    type: "text",
    description: "Write about the event",
    rows: 4,
  },
],
};

export default events;
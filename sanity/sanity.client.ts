import { createClient, type ClientConfig } from "@sanity/client";

const config: ClientConfig = {
  projectId: "f93z8jtb",
  dataset: "production",
  apiVersion: "2024-02-04",
  useCdn: false,
};

const client = createClient(config);

export default client;
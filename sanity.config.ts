import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'VGR Club',

  projectId: 'f93z8jtb',
  dataset: 'production',
  basePath: "/studio",
  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})

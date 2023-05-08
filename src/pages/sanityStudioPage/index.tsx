// SanityStudio.js
import {  defineConfig, Studio } from "sanity";
import { deskTool } from "sanity/desk";

const config = defineConfig({
  plugins: [deskTool()],
  name: "jobbsoknader_studio",
  projectId: "b43q5kwz",
  dataset: "production",
  schema: {
    types: [
      {
        type: "document",
        name: "post",
        title: "Post",
        fields: [
          {
            type: "string",
            name: "title",
            title: "Title"
          }
        ]
      }
    ]
  }
});

const SanityStudio = () => {

  return (
    <>
        <div>
            <div className="h-[80px]"></div>
            <Studio config={config} />
        </div>
    </>
  ) 
  
};

export default SanityStudio;

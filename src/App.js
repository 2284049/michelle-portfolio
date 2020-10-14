import React from "react";
import "./style/master.scss";
import Project from "./components/Project";
import { projects, greeting } from "./data/projects";

console.log(projects);
console.log(greeting);

function App() {
   return (
      <>
         <h1 className="text-info">Hello World Team</h1>
         {/* COMMENTS */}
         {projects.map((project) => {
            return <Project project={project} key={project.id} />; // COMMENTS only work inside curly braces
         })}
      </>
   );
}

export default App;

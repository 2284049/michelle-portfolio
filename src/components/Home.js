import React from "react";
import "../style/master.scss";
import Project from "./Project";
import { projects, greeting } from "../data/projects";

import Bio from "./Bio";

console.log(projects);
console.log(greeting);

export default function Home() {
   return (
      <div className="container">
         <div className="row">
            <div className="col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2 col-xl-8 offset-xl-2">
               <div className="row">
                  <Bio />
                  <div className="col-sm-12 col-md-8">
                     <input
                        className="form-control"
                        type="text"
                        placeholder="Search projects"
                     />
                  </div>
                  <div className="col-sm-12 col-md-4 mb-4 mb-sm-0">
                     <div className="custom-control custom-checkbox float-right mt-1">
                        <input
                           type="checkbox"
                           className="custom-control-input"
                           id="advanced-view-checkbox"
                        />
                        <label
                           className="custom-control-label"
                           htmlFor="advanced-view-checkbox"
                        >
                           Advanced view
                        </label>
                     </div>
                  </div>

                  <div className="col-12 mb-5">
                     <div className="custom-control custom-radio custom-control-inline">
                        <input
                           type="radio"
                           id="most-recent-radio"
                           name="search-projects-radios"
                           className="custom-control-input"
                        />
                        <label
                           className="custom-control-label"
                           htmlFor="most-recent-radio"
                        >
                           Most recent
                        </label>
                     </div>
                     <div className="custom-control custom-radio custom-control-inline">
                        <input
                           type="radio"
                           id="most-popular-radio"
                           name="search-projects-radios"
                           className="custom-control-input"
                        />
                        <label
                           className="custom-control-label"
                           htmlFor="most-popular-radio"
                        >
                           Most popular
                        </label>
                     </div>
                  </div>
                  {projects.map((project) => {
                     return <Project projectProp={project} key={project.id} />;
                  })}
               </div>
            </div>
         </div>
      </div>
   );
}

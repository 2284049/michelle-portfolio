import React from "react";
import "../style/master.scss";
import Project from "./Project";
import { projects, greeting } from "../data/projects";

import Bio from "./Bio";

console.log(projects);
console.log(greeting);

export default class Home extends React.Component {
   // once we've change the function to a class, we have access to constructor
   constructor(props) {
      super(props);
      const activeProjects = projects.filter((project) => {
         return project.isActive; // imagine we are returning the filtered results from an API
      });
      this.state = {
         activeProjects: activeProjects,
         isAdvancedView: false, // now Home has an initial state
         displayedProjects: activeProjects, // starts as the activeProjects and then changes based on state changes from setSearchInput
         searchInput: "",
      };
   }

   setIsAdvancedView() {
      this.setState({ isAdvancedView: !this.state.isAdvancedView });

      // ANOTHER WAY TO WRITE THIS:
      // if (this.state.isAdvancedView) {
      //    // if it's already true, when it changes, we are going to set it to false (toggle)
      //    this.setState({ isAdvancedView: false });
      // } else {
      //    this.setState({ isAdvancedView: true });
      // }
   }

   setSearchInput(e) {
      const searchInput = e.target.value;
      this.setState((prevState) => {
         return {
            searchInput: searchInput,
            displayedProjects: prevState.activeProjects.filter((project) => {
               const lowerCasedInput = searchInput.toLowerCase();
               const projectTitle = project.title.toLowerCase();
               const projectDesc = project.desc.toLowerCase();
               return (
                  projectTitle.includes(lowerCasedInput) ||
                  projectDesc.includes(lowerCasedInput)
               );
            }),
         };
      });
   }

   render() {
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
                           value={this.state.searchInput}
                           onChange={(e) => {
                              // when the element changes, change the state
                              this.setSearchInput(e);
                           }}
                        />
                     </div>
                     <div className="col-sm-12 col-md-4 mb-4 mb-sm-0">
                        <div className="custom-control custom-checkbox float-right mt-1">
                           <input
                              type="checkbox"
                              className="custom-control-input"
                              id="advanced-view-checkbox"
                              checked={this.state.isAdvancedView} //check the isAdvancedView object
                              onChange={() => {
                                 // when the element changes, change the state
                                 this.setIsAdvancedView();
                              }}
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
                     {this.state.displayedProjects.map((project) => {
                        return (
                           <Project
                              projectProp={project}
                              key={project.id}
                              isAdvancedView={this.state.isAdvancedView}
                           />
                        );
                     })}
                  </div>
               </div>
            </div>
         </div>
      );
   }
}

import React from "react";
import starIcon from "../icon/star.svg";
import linkIcon from "../icon/link.svg";
import { truncate as truncateString } from "../utils/helpers";
import formatDate from "date-fns/format";
import getCssClasses from "classnames";

export default class Project extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         // local state = just the state of THIS component
         isHoveredOver: false,
      };
   }

   setIsHoveredOver(isHoveredOver) {
      this.setState({ isHoveredOver: isHoveredOver }); // If you're assigning the same property / value, you can just say the one thing {isHoveredOver}
   }

   displayStars() {
      const rating = this.props.projectProp.rating;
      let stars = [];
      for (let i = 0; i < rating; i++) {
         stars = stars.concat(
            <img src={starIcon} width="15px" alt="rating star" key={i} />
         );
      }
      return stars;
   }

   // When Advanced view checkbox has a checked state, display github link
   // REPLACED THIS CODE WITH SHORTER CONDITIONAL RENDERING AT THE BOTTOM OF PAGE
   // displayAdvancedLink() {
   //    if (this.props.isAdvancedView === true) {
   //       return (
   //          <a
   //             href={this.props.projectProp.githubUrl}
   //             className="advanced-view-link"
   //          >
   //             <img src={linkIcon} className="mr-2" width="15px" alt="" />
   //             {truncateString(this.props.projectProp.githubUrl, 33)}
   //          </a>
   //       );
   //    }
   // }

   render() {
      // Project.render()
      return (
         <div className="row">
            <div
               className="col-12 mt-5"
               onMouseEnter={() => {
                  this.setIsHoveredOver(true);
               }}
               onMouseLeave={() => {
                  this.setIsHoveredOver(false);
               }}
            >
               <a
                  href={this.props.projectProp.youtubeURL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={getCssClasses("text-reset text-decoration-none", {
                     "text-underline": this.state.isHoveredOver,
                     "text-danger": this.state.isHoveredOver, // the true/false depends on the state we check for here
                  })}
               >
                  <h3 className="font-weight-normal">
                     {this.props.projectProp.title}
                  </h3>
               </a>
            </div>
            <div
               className="col-12 col-md-5"
               onMouseEnter={() => {
                  this.setIsHoveredOver(true);
               }}
               onMouseLeave={() => {
                  this.setIsHoveredOver(false);
               }}
            >
               <a
                  href={this.props.projectProp.youtubeURL}
                  target="_blank"
                  rel="noopener noreferrer"
               >
                  <img
                     id="prototypevidthumb"
                     src={require("../image/" + this.props.projectProp.image)}
                     className="img-fluid"
                     //  style="border: 1px solid #a9a9a9"
                     alt={this.props.projectProp.title}
                  />
               </a>
            </div>
            <div className="col-12 col-md-7 video-one mt-2 mt-md-n1 mb-5">
               <a
                  href={this.props.projectProp.youtubeURL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-reset text-decoration-none"
               >
                  <p
                     onMouseEnter={() => {
                        this.setIsHoveredOver(true);
                     }}
                     onMouseLeave={() => {
                        this.setIsHoveredOver(false);
                     }}
                  >
                     {this.displayStars()}
                     {/* <img src={starIcon} width="15px" alt="rating star" /> */}

                     <span className="ml-2">
                        {this.props.projectProp.desc} (
                        {this.props.projectProp.totalMinutes} min.)
                     </span>
                  </p>
                  <p>
                     {formatDate(
                        this.props.projectProp.postedAt,
                        "MMM. d, yyyy"
                     )}
                  </p>
                  {/* Go to date-fns.org to see date format options.*/}
               </a>

               {/* {this.displayAdvancedLink()} */}
               {/* CONDITIONAL RENDERING Elements (only display under certain conditions) (above one way and below another way) running this function when the page is rendered; use "this" to put it inside the component */}

               {this.props.isAdvancedView && ( // if this is true, do the stuff after &&
                  <a
                     href={this.props.projectProp.githubUrl}
                     className="advanced-view-link"
                     target="_blank"
                     rel="noopener noreferrer"
                  >
                     <img src={linkIcon} className="mr-2" width="15px" alt="" />
                     {truncateString(this.props.projectProp.githubUrl, 33)}
                  </a>
               )}
            </div>
         </div>
      );
   }
}

{
   /* Go to date-fns.org to see date format options.*/
}

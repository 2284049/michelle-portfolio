import React from "react";

function Project(props) {
   console.log(props);
   return (
      <>
         <h4 className="text-primary">
            {props.project.title} ({props.project.rating})
         </h4>
      </>
   );
}

export default Project;

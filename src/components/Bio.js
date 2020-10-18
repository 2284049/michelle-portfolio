import React from "react";
import githubLogo from "../icon/github.svg";
import linkedInLogo from "../icon/linkedin.svg";
import youTubeLogo from "../icon/youtube.svg";

export default function Bio() {
   return (
      <>
         <div className="col-12 justify-content-center d-flex">
            <h1 className="display-3 font-weight-light title">
               Michelle Rohde
            </h1>
         </div>
         <div className="col-12 justify-content-center d-flex">
            <p className="lead">Full stack developer</p>
         </div>
         <div className="col-12 text-center mb-5">
            <a
               className="d-inline-block"
               href="https://github.com/2284049"
               target="_blank"
               rel="noopener noreferrer"
            >
               <img
                  src={githubLogo}
                  className="mr-2 mb-1"
                  width="20px"
                  alt="Github logo"
               />
               <span></span>Github
            </a>
            <a
               className="d-inline-block"
               href="www.linkedin.com/in/michelle-the-dev
            "
               target="_blank"
               rel="noopener noreferrer"
            >
               <img
                  src={linkedInLogo}
                  className="ml-4 mr-2 mb-1"
                  width="20px"
                  alt="LinkedIn logo"
               />
               LinkedIn
            </a>
            <a
               className="d-inline-block"
               href="https://youtube.com/channel/UCo7rYMnc8hcK4sPI_O9XyvQ"
            >
               <img
                  src={youTubeLogo}
                  className="ml-4 mr-2"
                  width="22px"
                  alt="YouTube logo"
               />
               YouTube
            </a>
         </div>
      </>
   );
}

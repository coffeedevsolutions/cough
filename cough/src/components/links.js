import React from "react";
import Header from "./header";
import "./links.css";

function Links() {
  const links = [
    { 
      name: "paulgraham.com", 
      url: "http://paulgraham.com",
      description: "Paul Graham, and more specifically his essays, are what inspired this site altogether. His insights into life, entrepreneurship, and meaning strike a chord with me in a way that very few authors manage. I highly recommend his essays on Superlinear Returns, Earnestness, and Writing and Speaking."
    },
    { 
      name: "Farnam Street", 
      url: "https://fs.blog/",
      description: "Description for Link 2."
    },
    // Add more links as needed
  ];

  return (
    <div>
        <Header />
        <div className="linkContent">
            <div className="linkHeaderContainer">
                <h1 className="linkHeader">Links</h1>
            </div>
            <div className="linkSubHeaderContainer">
                <p className="linkSubHeader">Sites that I frequent.</p>
            </div>
            <div className="linkGrid">
                {links.map((link, index) => (
                  <a 
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="linkBox"
                  >
                    <div className="linkTitle">
                        {link.name}
                    </div>
                    <div className="linkUrl">
                        {link.url}
                    </div>
                    <div className="linkDescription">
                        {link.description}
                    </div>
                  </a>
                ))}
            </div>
        </div>  
    </div>
  );
}

export default Links;
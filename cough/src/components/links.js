import React from "react";
import Header from "./header";
import "./links.css";

function Links() {
  const links = [
    { 
      name: "Paul Graham", 
      url: "http://paulgraham.com",
      description: "Paul Graham, and more specifically his essays, are what inspired this site altogether. His insights into life, entrepreneurship, and meaning strike a chord with me in a way that very few authors manage. I highly recommend his essays on Superlinear Returns, Earnestness, and Writing and Speaking."
    },
    { 
      name: "Farnam Street", 
      url: "https://fs.blog/",
      description: "Solid newsletter with a great archive of articles and essays on different heuristics and mental models. You can easily find yourself binging through articles and hyperlinking to another deeper artcile, before you know it you'll be six articles deep looking for more. Farnam Street's Great Mental Model hardcovers are also a great gift."
    },
    {
      name: "My Goodreads",
      url: "https://www.goodreads.com/review/list/24202988?shelf=",
      description: "As a way to keep track of my reading and hold myself accountable to my reading goals I am going to be keeping my Goodreads up to date. This will track the books that I have read, am reading, and want to read. I may do the occasional book review essay if I'm really feeling a certain author. Time will tell."
    }
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
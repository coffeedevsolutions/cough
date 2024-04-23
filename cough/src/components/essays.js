import React from "react";
import Header from "./header";
import "./essays.css";
import { useNavigate } from "react-router-dom";

const Essays = () => {
    const navigate = useNavigate();

  return (
    <div className="essays">
        <Header />
        <div className="essayFiller">
            <div className="essayHeaderContainer">
                <h1 className="essayHeader">Essays</h1>
            </div>
            <div className="essaySubHeaderContainer">
                <p className="essaySubHeader">Taking a crack at it.</p>
            </div>
            <div className="essayGrid">
                {/* <div 
                    className="essayBox"
                    onClick={() => navigate('/essays/work-life-balance')}
                    >
                    <div className="essayTitle">
                        'Work-Life Balance' for Your Life Outside of Work
                    </div>
                    <div className="essaySubTitle">
                        <p>Changing my view of productivity outside of the workplace.</p>
                    </div>
                    <div className="essayDate">
                        <p className="essayDateText">April 2024</p>
                    </div>
                </div> */}
                <div 
                    className="essayBox"
                    onClick={() => navigate('/essays/chatgpt-coding')}
                    >
                    <div className="essayTitle">
                        ChatGPT as a Way to Learn to Code
                    </div>
                    <div className="essaySubTitle">
                        <p>The brute force and patience required to learn software development as a complete amateur from a LLM.</p>
                    </div>
                    <div className="essayDate">
                        <p className="essayDateText">April 2024</p>
                    </div>
                </div>
                {/* <div className="essayBox">Essay 3</div>
                <div className="essayBox">Essay 4</div>
                <div className="essayBox">Essay 5</div> */}
            </div>
        </div>  
    </div>
  );
};

export default Essays;
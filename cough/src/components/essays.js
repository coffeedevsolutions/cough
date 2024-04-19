import React from "react";
import Header from "./header";
import "./essays.css";
import { useNavigate } from "react-router-dom";

const Essays = () => {
    const navigate = useNavigate();

  return (
    <div className="essays">
        <Header />
        <div className="essayContent">
            <div className="essayHeaderContainer">
                <h1 className="essayHeader">Essays</h1>
            </div>
            <div className="essaySubHeaderContainer">
                <p className="essaySubHeader">Taking a crack at it.</p>
            </div>
            <div className="essayGrid">
                <div 
                    className="essayBox"
                    onClick={() => navigate('/essays/work-life-balance')}
                    >
                    <div className="essayTitle">
                        The 'Work-Life Balance' of Your 'Work-Life Balance'
                    </div>
                    <div className="essaySubTitle">
                        <p>Changing my view of productivity outside of the workplace.</p>
                    </div>
                </div>
                <div className="essayBox">Essay 2</div>
                <div className="essayBox">Essay 3</div>
                <div className="essayBox">Essay 4</div>
                <div className="essayBox">Essay 5</div>
            </div>
        </div>  
    </div>
  );
};

export default Essays;
import React from "react";
import Header from "../header";
import "./work-life-balance.css";
import BackButton from "../backButton";

const WorkLifeBalance = () => {
    return (
        <div>
            <Header />
            <BackButton />
            <div className="essayText">
                <div className="essayTitle">
                    The 'Work-Life Balance' of Your 'Work-Life Balance'
                </div>
                <div className="essaySubTitle">
                    <p>April 2024</p>
                </div>
            </div>
        </div>
    )
}

export default WorkLifeBalance;
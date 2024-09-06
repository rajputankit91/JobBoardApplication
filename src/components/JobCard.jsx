import React, { useState } from "react";
import "./jobcard.css";
import { AiFillClockCircle } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import { AiFillCalendar } from "react-icons/ai";
import { GiSkills } from "react-icons/gi";

const JobCard = ({ job, onIndexChange }) => {

    const handleClick = (e) => {
        e.preventDefault()
        onIndexChange(e.target.id);
        console.log(e.target.id)

    }

    return (
        <>
            <div onClick={handleClick} className="wrapper" id={job.id}>
                <div className="cartHeder">
                    <h4>{job.jobTitle}</h4>
                    <p>{job.company}</p>
                </div>
                <div className="cartbody">
                    <div className="bodyRow">
                        <div className="icon">
                            <AiFillClockCircle />
                        </div>
                        <div className="details">
                            {job.jobtype}
                        </div>
                    </div>

                    <div className="bodyRow">
                        <div className="icon">
                            <CiLocationOn />
                        </div>
                        <div className="details">
                            {job.location}
                        </div>
                    </div>
                    <div className="bodyRow">
                        <div className="icon">
                            <AiFillCalendar />
                        </div>
                        <div className="details">
                            {job.experince}
                        </div>
                    </div>
                    <div className="bodyRow">
                        <div className="icon">
                            <GiSkills />
                        </div>
                        <div className="details">
                            {
                                job.skills.map((skill, index) => {
                                    return (
                                        <div key={index} className="skill">{skill}</div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
                <div className="cartFooter"></div>
            </div>
        </>
    )
}

export default JobCard;




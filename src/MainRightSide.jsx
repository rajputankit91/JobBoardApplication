
import React, { useState } from "react"
import "./mainRightSide.css";
import { CiLocationOn } from "react-icons/ci";
import { GoBriefcase } from "react-icons/go";
import { MdOutlineCurrencyRupee } from "react-icons/md";

const MainRightSide = ({ jobsdata }) => {
    const [focus, setFocus] = useState(false);

    const handleClick = () => {
        setFocus(true);
    }

    return (
        <>
            {
                jobsdata ? (
                    <div className="main-right-wrapper">
                        <div className="jobHeader">
                            <div className="leftHeader">
                                <h4 className="jobTitle">
                                    {
                                        jobsdata && jobsdata.jobTitle
                                    }
                                </h4>
                                <p className="companyName">
                                    {
                                        jobsdata && jobsdata.company
                                    }

                                </p>
                            </div>
                            <div className="rightHeader">
                                <button className="quickApplyBtn">Quick apply</button>
                            </div>
                        </div>
                        <div className="jobDetail">
                            <ul>
                                <li className="selectedTab" >
                                    <a href="#jobHightLight" className={`${focus ? "focus" : ""}`} onClick={handleClick} >
                                        Highlights
                                    </a>
                                </li>
                                <li className="">
                                    <a href="#jobDescription" >
                                        Job Description
                                    </a>
                                </li>
                                <li className="">
                                    <a href="#jobDetails">
                                        More Info
                                    </a>
                                </li>
                                <li className="">
                                    <a href="#jobCompany">
                                        Recruiter Information
                                    </a>
                                </li>
                            </ul>
                        </div>
                        {/* jobBody */}
                        <div className="jobBody">
                            <div className="jobHightLight section" id="jobHightLight">
                                <div className="jobHighlightContent">
                                    <p className="jobHighlightLocation">
                                        <CiLocationOn />
                                        {
                                            jobsdata && jobsdata.location
                                        }
                                    </p>
                                    <p className="jobHighlightExperience">
                                        <GoBriefcase />
                                        {
                                            jobsdata && jobsdata.experince
                                        }
                                    </p>
                                    <p className="jobHighlightSalary">
                                        <MdOutlineCurrencyRupee />
                                        {
                                            jobsdata && jobsdata.salary
                                        }
                                    </p>
                                </div>
                            </div>
                            <div className="jobDescription section" id="jobDescription">
                                <div className="jobDescriptionContent">
                                    <h3>Job Description</h3>
                                    {
                                        jobsdata && jobsdata.jobDestription.map((item, index) => {
                                            return (
                                                <li key={index}>{item}</li>
                                            )
                                        })
                                    }

                                </div>
                            </div>
                            <div className="jobDetails section" id="jobDetails">
                                <h3>More info</h3>
                            </div>
                            <div className="jobCompany section" id="jobCompany">
                                <h3>Recruiter action</h3>

                            </div>

                        </div>
                    </div>

                ) :
                    (
                        <div className="noJobs">No Jobs Found</div>
                    )
            }
        </>
    )
}

export default MainRightSide;
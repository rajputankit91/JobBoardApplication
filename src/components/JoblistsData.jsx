
import React, { useState } from "react";
import JobCard from "../components/JobCard";

const Joblists = ({ jobs, filterText, onIndexChange }) => {
    // console.log(jobs)

    // const [active,setActive] =useState(false);

    // console.log(jobs,"000000000000")

    // const handleClick = (id) =>{
    //     console.log(id);
    //     console.log("clicked")
    // }

    // console.log(jobs, "00000000000000")
    // console.log(filterText, "00000000000000")

    const filteredData = jobs.filter((item) => (
        item.location.toLowerCase().includes(filterText) || item.jobTitle.toLowerCase().includes(filterText) ||
        item.jobtype.toLowerCase().includes(filterText)
    ))
    // rows.push(filteredData);

    // console.log(filteredData);

    return (
        <div className="jobv=card-list">
            {
                filteredData.map(job => (
                    <JobCard key={job.id} job={job} onIndexChange ={onIndexChange}/>
                ))
            }
        </div>
    )
}

export default Joblists;

import React, { useState } from "react";
import JobCard from "../components/JobCard";

const Joblists = ({ jobs, filterText, onIndexChange }) => {

    const filteredData = jobs.filter((item) => (
        item.location.toLowerCase().includes(filterText) || item.jobTitle.toLowerCase().includes(filterText) ||
        item.jobtype.toLowerCase().includes(filterText)
    ))

    return (
        <div className="jobv=card-list">
            {
                filteredData.map(job => (
                    <JobCard key={job.id} job={job} onIndexChange={onIndexChange} />
                ))
            }
        </div>
    )
}

export default Joblists;
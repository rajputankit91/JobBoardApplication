import React from "react";
import "./filtrContainer.css";
import CustomMultiSelect from "./CustomMultiSelect";

const FilterPanels = ({ filters, onChange }) => {

    const handleLocatonChange = (newLocation) => {
        console.log(newLocation);
        onChange('location', newLocation);
    };
    
    const handleFunctionChange = (newFunction) => {
        console.log(newFunction);
        onChange ('function', newFunction);
    };

    const handleExperianceChange = (newExperiance) => {
        console.log(newExperiance);
        onChange ('function', newExperiance);
    };

    return (
        <div className="filter-panel">
            <CustomMultiSelect
                options={["Delhi", "Pune", "Chennai"]}
                selectedOptions={filters.location}
                onChange={handleLocatonChange}
                label="Location"
            />

            <CustomMultiSelect
                options={["0 - 1 Years", "1 - 2 Years", "2 - 5 years"]}
                selectedOptions={filters.function}
                onChange={handleExperianceChange}
                label="Experince"
            />

            <CustomMultiSelect
                options={["IT", "sales", "Finance"]}
                selectedOptions={filters.function}
                onChange={handleFunctionChange}
                label="Functions"
            />

            <CustomMultiSelect
                options={["0 - 1 Lakhs", "1 - 2 Lakhs", "2 - 5 Lakhs"]}
                selectedOptions={filters.function}
                onChange={handleFunctionChange}
                label="Salary"
            />

            <CustomMultiSelect
                options={["IT / Computers - Software", "Real Estate", "Banking"]}
                selectedOptions={filters.function}
                onChange={handleFunctionChange}
                label="Industries"
            />

            <CustomMultiSelect
                options={["Fresher", "Accountant", "Accountant"]}
                selectedOptions={filters.function}
                onChange={handleFunctionChange}
                label="Role"
            />

            <CustomMultiSelect
                options={["in last 30 days", "in last 15 days", "in last 7 days"]}
                selectedOptions={filters.function}
                onChange={handleFunctionChange}
                label="Job Freshness"
            />

        </div>
    )
}

export default FilterPanels;

import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { SiSimplelogin } from "react-icons/si";
import { LiaRegistered } from "react-icons/lia";
import "./header.css";
const Header = ({ onFilterTextChange }) => {

    return (
        <div className="headerContainer">
            <div className="left-header">
                <a href="">
                    <img src="https://media.foundit.in/trex/public/theme_3/src/assets/images/header/companyLogo.svg" alt="logo" />
                </a>

                <a href="" className="jobsBtn" >
                    Jobs
                </a>

                <a href="" className="servicesBtn" >
                    Services
                </a>
            </div>
            {/* middle-header */}
            <div className="middle-header">
                <CiSearch />
                <input type="text" placeholder="Search by jobs, company or skills" onChange={(e) => onFilterTextChange(e.target.value)} />
            </div>
            {/* right-header */}
            <div className="right-header">
                <a href="" >
                    
                    <button>
                    <SiSimplelogin />
                    Login
                    </button>
                </a>

                <a href="" className="registerBtnWrapper" >
                    
                    <button>
                    <LiaRegistered />
                    Register
                    </button>
                </a>

                <div className="line"></div>

                <a href="" >
                    <button>Employers Login</button>
                </a>
            </div>

        </div>
    )
}
export default Header;




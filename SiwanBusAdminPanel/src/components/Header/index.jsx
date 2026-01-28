import React from "react";
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/SiwanBus.webp';
import SearchBox from "../SearchBox";

import Button from '@mui/material/Button';
import { MdMenuOpen } from "react-icons/md";
import { MdOutlineMenu } from "react-icons/md";
import { CiLight } from "react-icons/ci";
import { MdMessage } from "react-icons/md";
import { IoNotifications } from "react-icons/io5";
import { FaUserAlt } from "react-icons/fa";
import { MdDarkMode } from "react-icons/md";


const Header = () => {
    return (
        <>
            <header className="d-flex align-items-center">
                <div className="container-fluid">
                    <div className="row align-items-center">

                        {/* Logo */}
                        <div className="col-auto d-flex align-items-center">
                            <Link to="/dashboard" className="d-flex align-items-center logoWrapper">
                                <img src={Logo} alt="Logo" />
                                <span className="ms-1 brand-name">SIWANBUS</span>
                            </Link>
                        </div>

                        {/* Search */}
                        <div className="col d-flex align-items-center">
                            <Button className="rounded-circle">
                                <MdMenuOpen />
                            </Button>
                            <SearchBox />
                        </div>

                        {/* Right Icons */}
                        <div className="col-auto d-flex align-items-center justify-content-end gap-2">
                            <Button className="rounded-circle"><CiLight /></Button>
                            <Button className="rounded-circle"><MdMessage /></Button>
                            <Button className="rounded-circle"><IoNotifications /></Button>
                            <Button className="rounded-circle"><FaUserAlt /></Button>
                        </div>

                    </div>
                </div>
            </header>

        </>
    )
}

export default Header;
import React from "react";
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/SiwanBus.webp';
import SearchBox from "../SearchBox";

import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import { MdMenuOpen } from "react-icons/md";
import { MdOutlineMenu } from "react-icons/md";
import { CiLight } from "react-icons/ci";
import { MdMessage } from "react-icons/md";
import { IoNotifications } from "react-icons/io5";
import { FaUserAlt } from "react-icons/fa";
import { MdDarkMode } from "react-icons/md";
import { FaSortDown } from "react-icons/fa";
import Icon from "@mui/material/Icon";


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
                            <Tooltip title="More Options" arrow>
                                <Box
                                    sx={{
                                        px: 1.5,
                                        py: 0.5,
                                        cursor: "pointer",
                                        borderRadius: "6px",
                                        display: "flex",
                                        alignItems: "center",
                                        "&:hover": {
                                            backgroundColor: "#F6B58F",
                                        },
                                    }}
                                >
                                    <div className="my-account-wrapper">
                                        <button className="my-account d-flex align-items-center">
                                            <span className="user-image">
                                                <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="User" />
                                            </span>
                                            <div className="user-info">
                                                <h4>Sultan Ashraf</h4>
                                                <p className="mb-0">@sultan</p>
                                            </div>
                                        </button>
                                    </div>
                                    <FaSortDown />
                                </Box>
                            </Tooltip>
                        </div>
                    </div>
                </div>
            </header >

        </>
    )
}

export default Header;
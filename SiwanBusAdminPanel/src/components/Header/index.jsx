import React from "react";
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/SiwanBus.webp';
import SearchBox from "../SearchBox";

import Button from '@mui/material/Button';
import { MdMenuOpen } from "react-icons/md";
import { MdOutlineMenu } from "react-icons/md";



const Header = () => {
    return (
        <>
            <header className="d-flex align-items-center">
                <div className="container-fluid w-100">
                    <div className="row d-flex align-items-center w-100">
                        {/**Logo Wrapper */}
                        <div className="col-sm-2 section-1">
                            <Link to="/dashboard" className="d-flex align-items-center logoWrapper">
                                <img src={Logo} alt="Logo" />
                                <span className="ms-1 brand-name">
                                    SIWANBUS
                                </span>
                            </Link>
                        </div>
                        <div className="col-sm-3 d-flex align-items-center section-2">
                            <Button className="rounded-circle"><MdMenuOpen /></Button>
                            <SearchBox />
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header;
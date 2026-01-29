import React from "react";
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/SiwanBus.webp';
import SearchBox from "../SearchBox";

import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { MdMenuOpen } from "react-icons/md";
import { MdOutlineMenu } from "react-icons/md";
import { CiLight } from "react-icons/ci";
import { MdMessage } from "react-icons/md";
import { IoNotifications } from "react-icons/io5";
import { FaUserAlt } from "react-icons/fa";
import { MdDarkMode } from "react-icons/md";
import { FaSortDown } from "react-icons/fa";
import Icon from "@mui/material/Icon";
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';


const Header = () => {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

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
                            {/* <Tooltip title="More Options" arrow>
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
                            </Tooltip> */}

                            <React.Fragment>
                                <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                                    <Tooltip title="Account settings">
                                        <IconButton
                                            onClick={handleClick}
                                            size="small"
                                            sx={{ ml: 2 }}
                                            aria-controls={open ? 'account-menu' : undefined}
                                            aria-haspopup="true"
                                            aria-expanded={open ? 'true' : undefined}
                                        >
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
                                        </IconButton>
                                    </Tooltip>
                                </Box>
                                <Menu
                                    anchorEl={anchorEl}
                                    id="account-menu"
                                    open={open}
                                    onClose={handleClose}
                                    onClick={handleClose}
                                    slotProps={{
                                        paper: {
                                            elevation: 0,
                                            sx: {
                                                overflow: 'visible',
                                                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                                mt: 1.5,
                                                '& .MuiAvatar-root': {
                                                    width: 32,
                                                    height: 32,
                                                    ml: -0.5,
                                                    mr: 1,
                                                },
                                                '&::before': {
                                                    content: '""',
                                                    display: 'block',
                                                    position: 'absolute',
                                                    top: 0,
                                                    right: 14,
                                                    width: 10,
                                                    height: 10,
                                                    bgcolor: 'background.paper',
                                                    transform: 'translateY(-50%) rotate(45deg)',
                                                    zIndex: 0,
                                                },
                                            },
                                        },
                                    }}
                                    transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                    anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                                >
                                    <MenuItem onClick={handleClose}>
                                        <Avatar /> Profile
                                    </MenuItem>
                                    <MenuItem onClick={handleClose}>
                                        <Avatar /> My account
                                    </MenuItem>
                                    <Divider />
                                    <MenuItem onClick={handleClose}>
                                        <ListItemIcon>
                                            <PersonAdd fontSize="small" />
                                        </ListItemIcon>
                                        Add another account
                                    </MenuItem>
                                    <MenuItem onClick={handleClose}>
                                        <ListItemIcon>
                                            <Settings fontSize="small" />
                                        </ListItemIcon>
                                        Settings
                                    </MenuItem>
                                    <MenuItem onClick={handleClose}>
                                        <ListItemIcon>
                                            <Logout fontSize="small" />
                                        </ListItemIcon>
                                        Logout
                                    </MenuItem>
                                </Menu>
                            </React.Fragment>
                        </div>
                    </div>
                </div>
            </header >

        </>
    )
}

export default Header;
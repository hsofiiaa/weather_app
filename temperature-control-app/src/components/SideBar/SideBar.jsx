import React from "react";
import cn from "classnames";
import { Link, useLocation } from 'react-router-dom';
import Home from "./icons/home.svg?react";
import Logo from './icons/logo.svg?react';
import Weather from "./icons/weather.svg?react";

import './SideBar.scss'

const SideBar = () => {
    const {pathname} = useLocation();

    return (
        <div className="g-sidebar ">
            <Link to='/' className="sidebar-logo">
                <Logo/>
            </Link>
            <ul className="nav">
                <li className="nav-item">
                    <Link to="/home" className={cn("nav-link", {"active": pathname === '/home'})}>
                        <Home/>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/weather" className={cn("nav-link", {"active": pathname === '/weather'})}>
                        <Weather/>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default SideBar;
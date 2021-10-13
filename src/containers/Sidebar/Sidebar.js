import { NavLink } from 'react-router-dom'
import './sidebar.scss'
import Logo from '../../assets/icons/Logo.svg'

import {
    HomeIcon,
    Discount,
    Mail,
    Settings,
    Log,
    Notification,
    Chart
}from '../../assets/icons/icons'

const Sidebar = ()=>{
    return (
        <div className="sidebar-wrapper">
            <div className="site-logo">
                <img src={Logo} alt="" />
            </div>
            <div className="inner-sidebar">
                <NavLink className="route-link" to="/">
                    <div className="link"><div className="icon"><HomeIcon/></div></div>
                </NavLink>
                <NavLink className="route-link" to="/discount">
                    <div className="link"><div className="icon"><Discount /></div></div>
                </NavLink>
                <NavLink className="route-link" to="/charts">
                    <div className="link"><div className="icon"><Chart /></div></div>
                </NavLink>
                <NavLink className="route-link" to="/mail">
                    <div className="link"><div className="icon"><Mail /></div></div>
                </NavLink>
                <NavLink className="route-link" to="/notifaction">
                    <div className="link"><div className="icon"><Notification /></div></div>
                </NavLink>
                <NavLink className="route-link" to="/settings">
                    <div className="link"><div className="icon"><Settings /></div></div>
                </NavLink>
                <NavLink className="route-link" to="/log">
                    <div className="link"><div className="icon"><Log /></div></div>
                </NavLink>
            </div>
        </div>
    )
}

export default Sidebar
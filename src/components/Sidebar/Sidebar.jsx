import React, { useContext } from 'react'
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import ListAltIcon from '@mui/icons-material/ListAlt';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import { Link , Navigate } from "react-router-dom";
import { DarkModeContext } from '../../Context/darkModeContext';
const Sidebar = () => {

  const {dispatch} = useContext(DarkModeContext)

  const handleLogout = () => {
    return(
      <Navigate to="/login"/>
    )
  }

  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{textDecoration : "none"}}>
        <div className="logo">Db-Admin</div>
        </Link>       
      </div>
      {/* <hr /> */}
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <DashboardIcon className="icon"/>
            <span>Dashboard</span>
          </li>
          <p className="title">LISTS</p>
          <Link to="/users" style={{textDecoration : "none"}}>
            <li>
              <PersonOutlineIcon className="icon"/>
              <span>Users</span>
            </li>
          </Link>
          <Link to="/products" style={{textDecoration : "none"}}>
            <li>
              <ProductionQuantityLimitsIcon className="icon"/>
              <span>Products</span>
            </li>
          </Link>
          <li>
            <ListAltIcon className="icon"/>
            <span>Orders</span>
          </li>
          <p className="title">USEFUL</p>
          <li>
            <QueryStatsIcon className="icon"/>
            <span>Stats</span>
          </li>
          <li>
            <LocalShippingIcon className="icon"/>
            <span>Delivery</span>
          </li>
          <li>
            <NotificationsNoneIcon className="icon"/>
            <span>Notifications</span>
          </li>
          <p className="title">SERVICE</p>
          <li>
            <HealthAndSafetyIcon className="icon"/>
            <span>System Health</span>
          </li>
          <li>
            <PsychologyOutlinedIcon className="icon"/>
            <span>Logs</span>
          </li>
          <li>
            <SettingsIcon className="icon"/>
            <span>Setting</span>
          </li>
          <p className="title">USER</p>
          <li>
            <AccountCircleOutlinedIcon className="icon"/>
            <span>Profile</span>
          </li>
          <li>
            <LogoutOutlinedIcon className="icon" onClick={handleLogout}/>
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="colorOption" onClick={() => dispatch({type:"LIGHT"})}></div>
        <div className="colorOption" onClick={() => dispatch({type:"DARK"})}></div>      
      </div>
    </div>
  )
}

export default Sidebar
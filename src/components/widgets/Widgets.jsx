import React from 'react'
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';
const Widgets = ({type}) => {
    let data;
    const amount = 100;
    const diff = 20;
    switch(type){
        case "user" :
            data = {
                title : "USERS",
                isMoney : false,
                link : "See all user",
                icon : <PersonOutlineOutlinedIcon className="icon" style={{color : "crimson" , backgroundColor: "rgba(255,0,0,0.2)",}}/>
            };
            break;
        
            case "order" :
                data = {
                    title : "ORDER",
                    isMoney : false,
                    link : "See all order",
                    icon : <ShoppingCartOutlinedIcon className="icon" style={{color : "yellow" , backgroundColor: "rgba(214, 214, 153, 0.9)rgba(214, 214, 153, 0.9)",}}/>
                };
            break;

            case "earning" :
                data = {
                    title : "EARNING",
                    isMoney : true,
                    link : "See net earning",
                    icon : <MonetizationOnOutlinedIcon className="icon" style={{color : "green" , backgroundColor: "rgba(125, 211, 125, 0.9)",}}/>
                };
            break;

            case "balance" :
                data = {
                    title : "BALANCE",
                    isMoney : true,
                    link : "See details",
                    icon : <AccountBalanceOutlinedIcon className="icon" style={{color : "purple" , backgroundColor: "rgba(214, 125, 214, 0.927)",}}/>
                };
            break;
            
            
            
        default:
            break;
    }
  return (
    <div className="widget">
        <div className="left">
            <div className="title">{data.title}</div>
            <div className="counter">{data.isMoney && "$"} {amount}</div>
            <div className="link">{data.link}</div>
        </div>
        <div className="right">
            <div className="percentage positive">
                <KeyboardArrowUpOutlinedIcon/>
                {diff} %
            </div>
            <div className="icon">
                {data.icon}
            </div>
        </div>
    </div>
  )
}

export default Widgets
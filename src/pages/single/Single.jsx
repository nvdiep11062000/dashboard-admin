import React from 'react'
import Sidebar from "../../components/Sidebar/Sidebar"
import Navbar from "../../components/Navbar/Navbar"
import Chart from "../../components/Charts/Chart"
import List from "../../components/Table/Table"
import { Link } from 'react-router-dom'
const Single = () => {
  return (
    <div className="single">
      <Sidebar/>
      <div className="singleContainer">
        <Navbar/>
        <div className="top">
          <div className="left">
            <Link to="new">
              <div className="editButton">Edit</div>
            </Link>
            <h1 className="title">Information</h1>
            <div className="item">
                <img 
                src="https://voi.img.pmdstatic.net/fit/~1~voi~2022~03~10~21aa8dcb-9dc2-4528-809a-ecc2f15525b1.png/753x565/cr/wqkgSW5zdGFncmFtIEBqZW5uaWVydWJ5amFuZSAvIFZvaWNp/focus-point/1054%2C385/photo-kim-jennie-de-blackpink-en-crop-top-et-jupe-sirene-au-defile-jacquemus-la-rappeuse-enflamme-la-toile.jpg" 
                alt="" 
                className="itemImg"
                />
              <div className="information">
                <h1 className="name">Jennie Rubyjane</h1>
                <div className="detail_infor">
                  <span className="detail_key">Email:</span>
                  <span className="detail_value">jennie@gmail.com</span>
                </div>
                <div className="detail_infor">
                  <span className="detail_key">Phone:</span>
                  <span className="detail_value">0375050478</span>
                </div>
                <div className="detail_infor">
                  <span className="detail_key">Address:</span>
                  <span className="detail_value">Etton St. 234 Garden Yd Seoul</span>
                </div>
                <div className="detail_infor">
                  <span className="detail_key">Country:</span>
                  <span className="detail_value">Korea</span>
                </div>

              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={ 3 / 1} title="User Spending ( Last 6 Months )"/>
          </div>
        </div>
        <div className="bottom">
          <h1 className="title">Last Transactions</h1>
          <List/>
        </div>
      </div>
    </div>
  )
}

export default Single
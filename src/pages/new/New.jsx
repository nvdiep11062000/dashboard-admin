import React from 'react'
import Sidebar from "../../components/Sidebar/Sidebar"
import Navbar from "../../components/Navbar/Navbar"
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import { useState } from 'react';
import { doc, serverTimestamp, setDoc  } from "firebase/firestore"; 
import { db , auth } from '../../firebase';
import {createUserWithEmailAndPassword } from "firebase/auth";

const New = ({inputs , title}) => {
  
  const [file , setFile] = useState("");
  const [data , setData] = useState({});
  console.log(file)

  const handleInput = (e) => {
    const id = e.target.id
    const value = e.target.value

    setData({...data,[id]:value})
  }
    // console.log(data)
  const handleAdd = async(e) => {
    e.preventDefault()
    // Add a new document in collection "cities"
    try {
      const res = await createUserWithEmailAndPassword(auth,data.email,data.password)
       await setDoc(doc(db, "users",res.user.uid), {
        ...data,
        timeStamp: serverTimestamp()
      });
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="new">
      <Sidebar/>
      <div className="newContainer">
        <Navbar/>
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img src={file ? URL.createObjectURL(file) : "https://i.etsystatic.com/24262013/r/il/18d662/2805563941/il_fullxfull.2805563941_5ywc.jpg"} alt="" />
          </div>
          <div className="right">
            <form onSubmit={handleAdd}>
              <div className="formInput">
                <label htmlFor="file">Image : <DriveFolderUploadIcon className="icon"/></label>
                <input type="file" id="file" onChange={e => setFile(e.target.files[0]) } style={{display : "none"}}/>
              </div>
              {inputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input id={input.id} type={input.type} placeholder={input.placeholder} onChange={handleInput}/>
                </div>
              ))}

              <button type="submit">Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default New
import React from 'react'
import { useState, useEffect } from "react";
import { Button } from "../components/Button";
import { Modal } from "../components/Modal";
import {getDownloadURL, ref} from 'firebase/storage'
import storage from '../config/firebase'

const Home = () => {

  const [modal, setModal]=useState(false);
  const [resume, setResume]=useState(null);
 

  useEffect(()=>{
    getDownloadURL(ref(storage, 'FMSB2002.pdf')).then((url)=>{
      setResume(url);
    })
  },[])


  return (
    <div className="container">
    <br></br>

    <Button setModal={setModal}/>

    {modal===true&&(
      <Modal setModal={setModal} resume={resume}/>
    )}


  </div>

  
  
  )
}

export default Home

// import React from 'react'

// const Home = () => {
//   return (
//     <div>Home</div>
//   )
// }

// export default Home
import React from 'react'
import { MdOutlineMessage } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import Contact from '../../public/images/service.png'
const Form = () => {
  return (
    <div className='main'>
      <div className='content-form'>
      <div className='buttons'>
         <button className='cnt'> <MdOutlineMessage /> VIA SUPPORT CHAT </button>
         <button className='cnt'> <IoCallOutline /> VIA CALL</button><br />  
         <button className='email-btn'> <MdOutlineMessage /> VIA EMAIL</button>
      </div>
      <div className='form'>
        <form>
          
            <input type="text" name="name" id="name" placeholder='Name' /><br />
            <input type="email" name="email" id="email" placeholder='Email' /><br />
            <textarea name="text" id="text" placeholder='Entre text...'></textarea>
            <button className='form-btn'>Submit</button>
        </form>
      </div>
      </div>
      <div className='app-pic'>
        <img src={Contact} alt="" />
      </div>
    </div>
  )
}

export default Form

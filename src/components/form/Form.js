import React from 'react'
import './Form.css'

const Form = () => {
  return (
    <div className='form'>
        <form>
            <label>Your Name</label>
            <input type='text'></input>
            <label>Email</label>
            <input type='email'></input>
            <label>Subject</label>
            <input type='text'></input>
            <label>Details</label>
            <textarea placeholder='Type a short messege...' type='text'></textarea>
            <button className='btn'>Submit</button>
        </form>
    </div>
  )
}

export default Form
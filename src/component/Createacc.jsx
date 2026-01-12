import React from 'react'

export default function Createacc() {
  return (
    <div>
      
      <h2>Welcome to Expence Tracker</h2>
      <div>
      <label>Enter Name : </label>
      <input type='text' placeholder='Enter your name'></input>
      </div>
      <div>
      <label>Enter Mobile Number : </label>
      <input type='text' placeholder='Enter your Mobile no.'></input> 
      </div>
      <div>
      <label> Enter Email id : </label>
     <input type='text' placeholder='Enter your Email id'></input>
     </div>
     <div>
     <label>Enter Password : </label>
      <input type='text' placeholder='Enter your password'></input>
      </div>

      <div style={{ display: "flex",marginTop:"20px",gap: "20px", justifyContent: "center" }}>
        <button>Reset</button>
        <button>Submit</button>
        <button>Already have an Account</button>
      </div>

    </div>
  )
}

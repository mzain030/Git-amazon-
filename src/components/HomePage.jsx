import React from 'react'

const HomePage = () => {
  return (
    <div>
      <div style={{display:"flex", justifyContent:'space-around',marginTop:"10px"}}> 
        <h1>User Details</h1>
        <div class="input-group mb-3" style={{width:"200px"}}>
        <input type="text" class="form-control" placeholder="Search"/>
       </div>
       <button type="button" class="btn btn-primary">Add New User</button>
      </div>
    </div>
  )
}

export default HomePage

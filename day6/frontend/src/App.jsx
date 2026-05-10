import React from 'react'
import  axios from 'axios'


const App = () => {
  const handleSubmit =()=>{
    axios.post('http://localhost:3000/getData', {
    name:"arman",
    email:"arman@gmail.com" ,
     password:"123456789",
     mobile:1234567,
    
  }).then(res => console.log(res))
  .catch(err => console.log(err))
  }

  return (
    <div>
      <h1>Intigriation</h1>

      <button onClick={handleSubmit}>call api</button>
    </div>
  )
}

export default App
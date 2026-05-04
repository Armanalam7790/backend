import React from 'react'
import { useState } from 'react'
import axios   from 'axios'

const App = () => {
  const [formdata, setformdata] = useState({})
  const handleformsubmit  = async (e)=>{
       try {
         e.preventDefault()
        console.log(formdata);

        let res  =  axios.post('http://localhost:3000/create-product', formdata)
        console.log(res);
       } catch (error) {
        console.log(error, 'error in post api');
        
       }
        
  }
  return (
    <div>
      <h1>product creation form</h1>

      <form onSubmit={handleformsubmit}>
        <fieldset>
          <legend>product Details</legend><br />
          {/* name  */}
          <label htmlFor="">product Name</label><br />
          <input onChange={(e)=>{
              setformdata({...formdata, name:e.target.value})
          }} type="text"  placeholder='enter product name'/> <br /> <br />

         

            {/* description  */}
          <label htmlFor="">product Description</label><br />
          <input
           onChange={(e)=>{
              setformdata({...formdata, description:e.target.value})
          }}
          type="text"  placeholder='enter product Description'/> <br /> <br />

            {/* category  */}
          <label htmlFor="">product Category</label><br />
          <select  onChange={(e)=>{
              setformdata({...formdata, category:e.target.value})
          }}>
            <option value="MEN">MEN</option>
            <option value="WOMEN">WOMEN</option>
            <option value="KIDS">KIDS</option>
          </select>
        </fieldset>

        <br /><br />


        <fieldset>
          <legend>price</legend>
          <br />
          <label htmlFor="">amount</label>
          <input
           onChange={(e)=>{
              setformdata({...formdata, amount:Number(e.target.value)})
          }}
          type="number" placeholder='ammount' /> <br /><br />

           <label htmlFor=""> select currency</label>
          <select  onChange={(e)=>{
              setformdata({...formdata, currency:e.target.value})
          }} >
            <option value="INR">INR</option>
            <option value="USD">USD</option>
          </select>

        </fieldset>

        <label htmlFor="">stock</label> <br />
        <input  onChange={(e)=>{
              setformdata({...formdata, stock:Number(e.target.value)})
          }} type="number" placeholder='stock' /> <br /><br />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App
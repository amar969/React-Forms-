import React from 'react'

const initialState = {
  name: "",
  age: "", 
  address: "",
  department: "",
  salary: "",
  isMarried: "",
}
export const FormInput = ({getData}) => {
  const [data, setData] = React.useState(initialState)

  

  const handleChange = (e) => {
    let {name, value, checked, type} = e.target
    value = type === "checkbox" ? checked : value

    setData({...data, [name]: value})

  }

  const handleClick = () => {
    console.log(data)
  }

  const {name, age, address, department, salary, isMarried} = data


  const handleSubmit = async(e) => {
    e.preventDefault()
    console.log(data)
    try {
      fetch("http://localhost:3000/emp-data", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "content-type": "application/json"
        }
      })
      
    } catch (error) {
      console.log(error)
    }

    return getData()
  }

  return ( 
    <>
    <form onSubmit={handleSubmit}>
    Name : 
    <input type="text" value={name} name="name" onChange={handleChange} />
    <br />
    <br /> 

    Age :
    <input type="text" value={age} name="age" onChange={handleChange} />
    <br/>
    <br />

    Address : 
    <input type="text" value={address} name="address" onChange={handleChange} />
    <br />  
    <br />

    Salary : 
    <input type="text" value={salary} name="salary" onChange={handleChange} />

    <br />
    <br /> 

    Department : 
    <select value={department} name="department" onChange={handleChange} >
      <option> HR </option>
      <option> Software Developer </option>
      <option> Customer Support </option>
      <option> Marketing </option>  
    </select> 

    <br /> 
    <br /> 

    Married : 
    <input type="checkbox" name="isMarried" checked={isMarried} onChange={handleChange} />

    <button onClick={handleClick}> Submit </button>
    </form>
    </>
  )

}
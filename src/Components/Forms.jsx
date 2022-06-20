import React from 'react'
import { FormInput } from './FormsInput'

export const Forms = () => {

    const [form, setForm] = React.useState([])
    const [page, setPage] = React.useState(1) 

    const getData = async() => {
        let res = await fetch(`http://localhost:3000/emp-data?_page=${page}&_limit=3`)
        let data = await res.json()
        setForm(data)
        console.log(data)
      }
    
      React.useEffect(() => {
        getData()
      }, [page])

      console.log(page)

    return(
        <>
        <h1>Employee Forms</h1>
        <FormInput getData={getData} />
        {form.map((item) => {
            return(
                <>
                <p>
                        <span>{item.id}</span>
                        <span>{item.name}</span>
                        <span>{item.age}</span>
                        <span>{item.address}</span>
                        <span>{item.department}</span>
                        <span>{item.salary}</span>
                        <span>{item.isMarried ? "Yes" : "No"}</span>
                        </p>
                </>

            )
        })}
        <button onClick={() => setPage(page - 1)} disabled={page===1} > Prev </button>
        <button onClick={() => setPage(page + 1)} > Next </button>
        </>
    )
}
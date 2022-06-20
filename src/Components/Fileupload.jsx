import React from 'react'

export const Fileupload = () => {

    const ref = React.useRef()

    React.useEffect(() => {}, [])

    const onSubmit = () => {
        console.log(ref.current.files[0])
    }


    return (

        <div ref={ref}>
            <input type="file" ref={ref} />
            <button onClick={onSubmit}>SUBMIT</button>
        </div>
    )
}
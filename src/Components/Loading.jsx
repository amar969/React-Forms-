import React from 'react'

export const Loading = () => {

    const [isLoading, setIsLoading] = React.useState(false)
    const [Error, setError] = React.useState(false)
    const [show, setShow] = React.useState(false)

    const handleLoading = () => {
        setIsLoading(true)
        setError(false)

        setTimeout(() => {
            setIsLoading(false)
        }, 2000)
    }

    const handleError = () => {
        setIsLoading(true)
        setError(false)

        setTimeout(() => {
            setIsLoading(false)
            setError(true)
        }, 2000)
    }

        return isLoading ?(
            <>
            <h1>Loading</h1>
            </>
        ) : Error ?(
            <>
            <h1>Error</h1>
            <button onClick={handleLoading}>Fetch data again</button>
            </>
        ) : (
        <>
        <h1>Hello world</h1>
        <button onClick={() => setShow( (prev) => !prev)}> { show ? "hide" : "show"} </button>
        
        {
            show && new Date().toLocaleDateString()
        }

        <button onClick={handleLoading}>Change</button>
        <button onClick={handleError}> Fetch data </button>
        </>
    )
}
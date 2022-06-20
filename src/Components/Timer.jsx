import React from 'react'

export const Timer = () => {

    const [time, setTime] = React.useState(0)
    const [isRunnning, setIsRunnning] = React.useState(false)
    const timer = React.useRef()

    React.useEffect(() => {
        startTimer()

        return stopTimer
    }, [])

    const startTimer = () => {

        if(isRunnning){
            return
        }

        timer.current = setInterval( () => {
            setTime((prev) => prev + 1)
        }, 1000)

        setIsRunnning(true)
    }

    const stopTimer = () => {
        clearInterval(timer.current)
        setIsRunnning(false)

    }

    return(
        <>
        <h1>Timer</h1>
        <h3>{time}</h3>
        <button onClick={startTimer}> start </button>
        <button onClick={stopTimer}> stop </button>
        </>
    )
}
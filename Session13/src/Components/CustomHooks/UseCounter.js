import { useState } from "react"


const UseCounter = () => {


    const [count,setCount] = useState(0)

    const [decrementCount,setDecrementCount] = useState(0)
    const handleIncrement = () => {
        return (
            setCount(prevCount => prevCount + 5)
        )
    }

    const handleDecrement = () => {
        return (
            setDecrementCount(prevCount => prevCount - 1)
        )
    }


    return (

       [count,decrementCount,handleIncrement,handleDecrement]

    )
}

export default UseCounter
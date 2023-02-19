import { useState } from "react"


const UseCounter = () => {


    const [count,setCount] = useState(0)

    const handleIncrement = () => {
        return (
            setCount(prevCount => prevCount + 5)
        )
    }

    const handleDecrement = () => {
        return (
            setCount(prevCount => prevCount - 1)
        )
    }


    return (

       [count,handleIncrement,handleDecrement]

    )
}

export default UseCounter
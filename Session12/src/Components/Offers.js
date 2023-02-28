import { Button } from "react-bootstrap"
import UseCounter from "./CustomHooks/UseCounter"

const Offers = () => {

    const [count,decrementCount,handleIncrement,handleDecrement] = UseCounter()

    return (
        <>
        <p> This is Offer page</p>

        <div>

            <h3> Increase counter by 5 </h3>
            <Button onClick={handleIncrement}> Count </Button>
            <p> {count}</p>
        </div>
 
        <div>
            <h3> Decrease counter by 1 </h3>
            <Button onClick={handleDecrement}> Count </Button>
            <p> {decrementCount}</p>
        </div>
        </>
    )
}

export default Offers
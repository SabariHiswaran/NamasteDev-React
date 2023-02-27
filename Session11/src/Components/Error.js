
import { useRouteError } from "react-router-dom"

const Error = () => {

    const routeError= useRouteError()
   
   const {status,statusText}  = routeError


    return(
        <div>
            <h2>{status + statusText}</h2>
            <h4> Unexpected Error has been Occurred!</h4>
            <p>Please try again after some time</p>
        </div>
    )
}

export default Error
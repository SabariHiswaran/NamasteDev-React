import { Button } from "react-bootstrap"
import { Link, Outlet } from 'react-router-dom'



// const About = () => {
//     return(
//         <>
//         <p> About Us Page </p>

//         <Link to="About1">
//         <Button> About 1 Page </Button>
//         </Link>

//         <Link to="About2">
//         <Button> About 2 Page </Button>
//         </Link>

//         <Outlet/>
//         </>
//     )
// }

import React from 'react'
import About1 from "./Aboutone";
import About2 from "./Abouttwo";
import LoginContext from "./utils/LoginContext";

class About extends React.Component {
    constructor(props) {
        super(props);

        console.log("constructor rendered")
    }

    componentDidMount(){
        console.log("ComponentDId Mount rendered")
    }

    componentDidUpdate() {
        console.log("ComponentDid Update")
    }

    render() {
        console.log("Component rendered")
        return (
            <LoginContext.Consumer>
                {(value) =>( 
                    <>
                <h1>{value.user.name} </h1>
                <p> About Us Page </p>
                <About1 Counternumber={3} />

                <About2/>
                </>
               ) }
                </LoginContext.Consumer>
        )
    }


}



export default About
// const About1 = () => {
//     return (
//         <p> This is About 1 page </p>



//     )
// }

import React from "react";
import { Button } from "react-bootstrap";

class About1 extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            Count: 10,

            Name: "Sabari"
        }

        console.log("About One Constructopr")
    }

    async componentDidMount() {
        const name = await this.state.Count
        console.log("ComponentDidMount ABout1")
        this.timer = setInterval(() => console.log("Namaste React Unmount"), 1000)
    }


    componentDidUpdate() {
        console.log("ComponentDid Update About1")
    }

    componentWillUnmount() {
        clearInterval(this.timer)
        console.log("About One COmponent Unmounted")
    }


    render() {

        console.log("About One render")
        const handleClick = () => {

            return (
                this.setState(prevState => {
                    return (
                        {
                            Count: prevState.Count === 10 ? this.state.Count + this.props.Counternumber : this.state.Count + 5
                        }
                    )
                }
                )
            )
        }


        const handleOver = () => {

            return (
                this.setState({ Name: "Hovered" })
            )
        }


        return (
            <>
                <p> This is About 1 Page</p>
                <Button onClick={handleClick}>Count the props and give final Value </Button>
                <p> Count Value is :  {this.state.Count} </p>
                <h3 onMouseOver={handleOver}> {this.state.Name}</h3>
            </>
        )
    }

}

export default About1
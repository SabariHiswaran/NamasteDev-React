import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";

import { Button, Container } from "react-bootstrap";

import { Link } from 'react-router-dom'
import LoginContext from "./utils/LoginContext";

const Header = () => {

    const {user} = useContext(LoginContext)

    return (

        <Container className="mt-3">
            <div className="alignNavBar">

                <h4 className="title">
                    <Link to="/">
                    <FontAwesomeIcon icon="hamburger" style={{ marginRight: "10px" }} />
                    Food Mania
                    </Link>
                </h4>
                <Link to="/">
                <h6
                    className="home-name"
                >
                    HOME
                </h6>
                </Link>

                <span
                    className="address-text"
                >
                    No.15,Sekar street, colony-1st stree,Chennai-600098
                </span>

                <FontAwesomeIcon icon="chevron-down" style={{ marginRight: "auto", marginLeft: "15px", color: "#fc8019" }} />

                <ul className="listOfNavs">
                    <li>

                        <FontAwesomeIcon icon="percentage" style={{ marginRight: "10px" }} />
                        <Link to="/Offers">
                            Offers
                        </Link>
                    </li>
                    <li>
                        <FontAwesomeIcon icon="question-circle" style={{ marginRight: "10px" }} />
                        <Link to="/About">
                            About-us
                        </Link>
                    </li>
                    
                    <li>
                        <FontAwesomeIcon icon="user" style={{ marginRight: "10px" }} />
                        <Link to="/Instamart">
                        Instamart
                        </Link>
                    </li>

                    <li>
                        <FontAwesomeIcon icon="shopping-cart" style={{ marginRight: "10px" }} />
                        Cart
                    </li>
                </ul>
                <Link to="/Login">
                <Button variant="dark">Login </Button>
                </Link>
                <h1> {user.name}</h1>
            </div>
        </Container>
    )
}

export default Header;
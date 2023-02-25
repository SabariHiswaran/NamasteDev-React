import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Button, Container } from "react-bootstrap";

import { Link } from 'react-router-dom'

const Header = () => {


    return (

        <Container className="mt-3">
            <div className="d-flex justify-between items-center p-2">

                <h4 className="font-bold">
                    <Link to="/" className="no-underline text-black">
                    <FontAwesomeIcon icon="hamburger" />
                 Food Mania
                    </Link>
                </h4>

                <span
                    className="text-black ml-5"
                >
                    No.15,Sekar street, colony-1st stree,Chennai-600098
                </span>

                <FontAwesomeIcon icon="chevron-down" style={{ marginRight: "auto", marginLeft: "15px", color: "#fc8019" }} />

                <ul className="d-flex flex-row justify-evenly items-center mr-5 mt-3">
                    <li className="mr-5">

                        <FontAwesomeIcon icon="percentage" style={{ marginRight: "10px" }} />
                        <Link to="/Offers" className="no-underline text-black">
                            Offers
                        </Link>
                    </li>
                    <li  className="mr-5">
                        <FontAwesomeIcon icon="question-circle" style={{ marginRight: "10px" }} />
                        <Link to="/About" className="no-underline text-black">
                            About-us
                        </Link>
                    </li>
                    <li className="mr-5">
                        <FontAwesomeIcon icon="user" style={{ marginRight: "10px" }} />
                        Profile
                    </li>
                    <li className="mr-5">
                        <FontAwesomeIcon icon="shopping-cart" style={{ marginRight: "10px" }} />
                        Cart
                    </li>
                </ul>
                <Link to="/Login">
                <Button variant="dark">Login </Button>
                </Link>
            </div>
        </Container>
    )
}

export default Header;
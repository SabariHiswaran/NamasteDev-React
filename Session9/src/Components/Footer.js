import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Container } from "react-bootstrap";


import {faGithub,faLinkedin} from "@fortawesome/free-brands-svg-icons"
import UseCounter from "./CustomHooks/UseCounter";

const Footer = () => {

    const [count,decrementCount,handleIncrement,handleDecrement] = UseCounter()

    return (
   <Container>
    <Button onClick={handleDecrement}> Counter </Button>
    <p> {decrementCount}</p>
        <hr/>
        <div className="footerStyle">
        <h4 className="footer-title">
                <FontAwesomeIcon icon="hamburger" style={{  marginRight: "10px" }} />
                Food Mania
            </h4>

        <p style={{margin:"0px !important"}}> © 2023 Food Mania</p>

        <p className="footer-icons">

        <a href="https://github.com/OliverSabari" target="_blank" className="footer-icon-link">

        <FontAwesomeIcon icon={faGithub}  style={{  marginRight: "20px"}} />

        </a>
        <a href="https://www.linkedin.com/in/sabari-hiswaran-4bba52166/" target="_blank"  className="footer-icon-link">

        <FontAwesomeIcon icon={faLinkedin}  style={{  marginRight: "20px" }} />

        </a>
        </p>

        </div>
    </Container>
)}


export default Footer





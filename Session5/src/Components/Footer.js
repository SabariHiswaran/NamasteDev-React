import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container } from "react-bootstrap";


import {faFacebook,faPinterest,faInstagram ,faTwitter} from "@fortawesome/free-brands-svg-icons"

const Footer = () => (
   <Container>
        <hr/>
        <div className="footerStyle">
        <h4 className="footer-title">
                <FontAwesomeIcon icon="hamburger" style={{  marginRight: "10px" }} />
                Food Mania
            </h4>

        <p> © 2023 Food Mania</p>

        <p className="footer-icons">
        <FontAwesomeIcon icon={faFacebook}  style={{  marginRight: "20px" }} />
        <FontAwesomeIcon icon={faPinterest}  style={{  marginRight: "20px" }} />
        <FontAwesomeIcon icon={faInstagram} style={{  marginRight: "20px" }}  />
        <FontAwesomeIcon icon={faTwitter} style={{  marginRight: "20px" }} />
        </p>

        </div>
    </Container>
)


export default Footer





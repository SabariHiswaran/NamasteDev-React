import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container } from "react-bootstrap";



const Header = () => (
    <Container className="mt-3">
        <div className="alignNavBar">
            <h4 className="title">
                <FontAwesomeIcon icon="hamburger" style={{  marginRight: "10px" }} />
                Food Mania
            </h4>

            <h6
             className="home-name"
             > 
             HOME 
             </h6>

            <span
             className="address-text"
             > 
             No.15,Sekar street, colony-1st stree,Chennai-600098
             </span>

             <FontAwesomeIcon icon="chevron-down" style={{ marginRight: "auto" , marginLeft : "15px" , color:"#fc8019" }} />

            <ul className="listOfNavs">
                <li>

                    <FontAwesomeIcon icon="percentage" style={{ marginRight: "10px" }} />

                    Offers
                </li>
                <li>
                    <FontAwesomeIcon icon="question-circle" style={{marginRight: "10px" }} />
                    Help
                </li>
                <li>
                    <FontAwesomeIcon icon="user" style={{  marginRight: "10px" }} />
                    Profile
                </li>
                <li>
                    <FontAwesomeIcon icon="shopping-cart" style={{  marginRight: "10px" }} />
                    Cart
                </li>
            </ul>

        </div>
    </Container>
)


export default Header;
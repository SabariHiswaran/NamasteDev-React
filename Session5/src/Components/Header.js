import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container } from "react-bootstrap";



const Header = () => (
    <Container className="mt-3">
        <div className="alignNavBar">
            <h4 className="title">
                <FontAwesomeIcon icon="hamburger" style={{  marginRight: "10px" }} />
                Food Mania
            </h4>

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
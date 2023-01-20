import { Container } from "react-bootstrap"

import { IMAGE_URL } from "../Config"

const Offers = () => {

    return (
        <Container className="mt-3" fluid style={{ backgroundColor: "black", height: "340px" }}>
            <Container className="offerImage">
                <img
                    width="260"
                    height="260"
                    src={`${IMAGE_URL}ef3i0k1ilhdsistcykog`}
                />
                <img
                    width="260"
                    height="260"
                    src={`${IMAGE_URL}awurei8ypqkafoqay9ym`}
                />
                <img
                    width="260"
                    height="260"
                    src={`${IMAGE_URL}zpkkdkmvlj5cuvqbc50t`}
                />
                <img
                    width="260"
                    height="260"
                    src={`${IMAGE_URL}s5ug2key6e2sptaxku5v`}
                />
            </Container>
        </Container>
    )
}

export default Offers
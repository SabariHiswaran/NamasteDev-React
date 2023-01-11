
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Card } from "react-bootstrap"
import { RES_IMAGE_URL } from "../Config"


const RestaurantCard = (
    {
        cloudinaryImageId,
        name,
        cuisines,
        avgRating,
        slaString,
        costForTwoString,
        aggregatedDiscountInfo
    }
    ) => {

    return (


        <Card style={{ width: '260px' , border: "none" }}>

            <Card.Img
                className="cardImg"
                variant="top"
                src={RES_IMAGE_URL + cloudinaryImageId}
                // src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${RES_IMAGE_URL}`}
                alt="SShyderabad"
            />

            <Card.Body>
                <Card.Title>
                    {name}
                </Card.Title>

                <Card.Text className="cuisinesStyle">
                    {cuisines.join(", ")}
                </Card.Text>

                    <div className="ratingStyle" style={{ display: "flex", justifyContent: "space-between " }}>

                        <span>
                            <FontAwesomeIcon icon="star" />
                            {avgRating}
                        </span>
                        <span>
                            &#8729;
                        </span>
                        <span>
                            {slaString}
                        </span>
                        <span>
                            &#8729;
                        </span>
                        <span>
                            {costForTwoString}
                        </span>

                    </div>


                <hr />

                <Card.Text className="discountInfo">
                    <FontAwesomeIcon icon="tags" />
                    {aggregatedDiscountInfo.shortDescriptionList[0].meta}
                </Card.Text>
            </Card.Body>
        </Card>


    )
}

export default RestaurantCard

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Card } from "react-bootstrap"
import { RES_IMAGE_URL } from "../Config"

import {Link} from 'react-router-dom'

const RestaurantCard = (
    {
        id,
        cloudinaryImageId,
        name,
        cuisines,
        avgRating,
        slaString,
        costForTwoString,
        aggregatedDiscountInfo,
        promoted
    }
    ) => {

    return (

        <Link to={`/RestaurantDetails/${id}`}>
        <Card style={{ width: '260px' , border: "none" }}>
            
            <Card.Img
                className="cardImg"
                variant="top"
                src={RES_IMAGE_URL + cloudinaryImageId}
                // src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${RES_IMAGE_URL}`}
                alt="SShyderabad"
            />

           { promoted ? <div className="promoted-div"> PROMOTED </div> : null }

            <Card.Body>
                <Card.Title>
                    {name}
                </Card.Title>

                <Card.Text className="cuisinesStyle">
                    {cuisines.join(", ")}
                </Card.Text>

                    <div className="ratingStyle" style={{ display: "flex", justifyContent: "space-between " }}>

                        <span className={ avgRating >= 4.0 ? "rating-green" : "rating-orange"}>
                            <FontAwesomeIcon icon="star" className="rating-star" />
                           <span className="rating-number"> {avgRating}</span>
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
        </Link>

    )
}

export default RestaurantCard
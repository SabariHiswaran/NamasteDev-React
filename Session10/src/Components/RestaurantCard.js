
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

        <Link to={`/RestaurantDetails/${id}`} className="text-black no-underline ">
        <Card  className="w-64 border-0 ml-10 mt-5">
            
            <Card.Img
                className="relative"
                variant="top"
                src={RES_IMAGE_URL + cloudinaryImageId}
                // src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${RES_IMAGE_URL}`}
                alt="SShyderabad"
            />

           { promoted ? <div className="absolute bg-black text-white"> PROMOTED </div> : null }

            <Card.Body>
                <Card.Text className="text-base font-bold">
                    {name}
                </Card.Text>

                <Card.Text className="text-xs">
                    {cuisines.join(", ")}
                </Card.Text>

                    <div className="d-flex justify-between items-center text-xs">

                        <span className={ avgRating >= 4.0 ? "bg-rating-green text-white pl-1.5 pr-1.5" : "bg-rating-orange text-white pl-1.5 pr-1.5"}>
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

                <Card.Text className="text-sm text-offer-color">
                    <FontAwesomeIcon icon="tags" />
                    {aggregatedDiscountInfo.shortDescriptionList[0].meta}
                    
                </Card.Text>
            </Card.Body>
        </Card>
        </Link>

    )
}

export default RestaurantCard
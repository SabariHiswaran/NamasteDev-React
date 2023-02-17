import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useEffect, useState } from "react"
import { Container } from "react-bootstrap"

import { RES_IMAGE_URL } from "../Config"

const MenuHeader = ({ restaurantId }) => {


    const [menuDetails, setMenuDetails] = useState([])

    useEffect(() => {
        getMenuData()
    }, [])

    async function getMenuData() {
        const menuData = await fetch(`https://www.swiggy.com/dapi/menu/v4/full?lat=12.938585&lng=80.134426&menuId=${restaurantId}`)
        const menu = await menuData.json()
        setMenuDetails(menu)
    }

    return (

        <Container fluid className="menu-header-container mt-4">
            <Container >
                <div className="menu-header-div">
                    <div>
                        <img
                            src={`${RES_IMAGE_URL}${menuDetails?.data?.cloudinaryImageId}`}
                            alt="restaurant-image"
                            className="restaurant-menu-image"
                        />
                    </div>
                    <div>
                        <h1>
                            {menuDetails?.data?.name}
                        </h1>   

                        <p>
                        {menuDetails?.data?.cuisines}
                        </p>

                        <p>
                        {`${menuDetails?.data?.locality} ${menuDetails?.data?.area}`}
                        </p>

                        <div className="menu-details-div">

                            <div className="menu-details-rating">

                                <p>
                                <FontAwesomeIcon icon="star" />
                                <span> {menuDetails?.data?.avgRating}</span>
                                </p>

                                <p>
                                    {menuDetails?.data?.totalRatingsString}
                                </p>

                            </div>

                            <div>
                                <p>
                                    {menuDetails?.data?.sla?.slaString}
                                </p>

                                <p>
                                    Delivery Time
                                </p>
                            </div>

                            <div>
                                <p>
                                    {menuDetails?.data?.costForTwoMsg}
                                </p>
                            </div>

                        </div>
                    </div>

                    <div>
                        <p>
                        {menuDetails?.data?.aggregatedDiscountInfo.descriptionList[0].meta}
                        </p>

                        <p>
                        {menuDetails?.data?.aggregatedDiscountInfo.descriptionList[1].meta}
                        </p>
                    </div>

                </div>
            </Container>
        </Container>
    )
}

export default MenuHeader
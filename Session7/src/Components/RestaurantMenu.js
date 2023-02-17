
import { useParams } from "react-router-dom"
import MenuHeader from "./MenuHeader"

const RestaurantMenu = () => {

    const {id} = useParams()

 
    return (
        <>
        <MenuHeader restaurantId = {id}/>
        </>
    )
}

export default RestaurantMenu

import { useParams } from "react-router-dom"
import MenuHeader from "./MenuHeader"
import MenuItems from "./MenuItems"

const RestaurantMenu = () => {

    const {id} = useParams()

 
    return (
        <>
        <MenuHeader restaurantId = {id}/>
        <MenuItems/>
        </>
    )
}

export default RestaurantMenu
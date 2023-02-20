import { useEffect,useState } from "react"


const UseRestaurantMenu = (resId) => {

    const [menuDetails, setMenuDetails] = useState([])


    useEffect(() => {
            getMenuData()
    }, [resId])

     async function getMenuData() {
        const menuData = await fetch(`https://www.swiggy.com/dapi/menu/v4/full?lat=12.938585&lng=80.134426&menuId=${resId}`)
        const menu = await menuData.json()
        setMenuDetails(menu)
     }


    return (

            [menuDetails]

    )
}

export default UseRestaurantMenu
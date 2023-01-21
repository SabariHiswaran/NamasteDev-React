import { Button, Container } from "react-bootstrap"
import RestaurantCard from "./RestaurantCard"

import { useEffect, useState } from "react"
import Shimmer from "./Shimmer"

const Body = () => {

    const [restaurants, setRestaurants] = useState([])

    const [filteredRes, setFilteredRes] = useState([])

    const [searchText, setSearchText] = useState("")

    const [errorMsg, setErrorMsg] = useState("")

    const filterData = (searchText, restaurants) => {

        if (searchText) {
            return (
                restaurants.filter((restaurant) => (
                    restaurant.data.name.toLowerCase().includes(searchText.toLowerCase())
                ))
            )
        }

    }

    useEffect(() => {
        getApiData()
    }, [])

    async function getApiData() {
        const apiData = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.938585&lng=80.134426&page_type=DESKTOP_WEB_LISTING")
        const jsonData = await apiData.json()
        setRestaurants(jsonData?.data?.cards[2]?.data?.data?.cards)
        setFilteredRes(jsonData?.data?.cards[2]?.data?.data?.cards)
    }


    //Conditional Rendering 
    //While data fething from API we can display shimmer effect using conditional rendering

    return (

        <Container className="mt-4">
            <input
                type="text"
                placeholder="&#128269; Search"
                className="searchbar"
                value={searchText}
                onChange={
                    (e) => {
                        setSearchText(e.target.value)
                    }
                }
            />

            <Button
                variant="danger"
                style={{ marginLeft: "10px" }}
                onClick={
                    () => {

                        //filter the data

                        const data = filterData(searchText, restaurants)

                        //Three possible outcomes of data above from the filterData function
                        //1) undefined - when empty search
                        //2) empty Array - when no data present
                        //3) Filtered Data - when data present

                        data ? setFilteredRes(data) : setFilteredRes(restaurants)   // This is for filtered data and undefined 

                        //Below i am doing optional Chaining. Suppose data is undefined then it will not execute the below line.
                        //If no optional chaining then it will throw error as "Cannot read property length of undefined"

                        data?.length == 0 ? setErrorMsg("Restaurant does not exists") : setErrorMsg("")   //This is for empty array
                    }
                }
            >
                Search
            </Button>
            <hr />
            <p
                style={
                    { color: "red", marginLeft: "35px" }
                }>
                {errorMsg}
            </p>
            <div className="restaurant-list">

                {
                    (filteredRes?.length === 0 && errorMsg?.length ===0)
                        ?
                        <Shimmer />
                        :
                        filteredRes?.map(restaurant => (
                            <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
                        ))
                }

            </div>

        </Container>
    )
}


export default Body
import { Button, Container } from "react-bootstrap"
import RestaurantCard from "./RestaurantCard"

import { restaurantlist } from "../Config"

import { useState } from "react"

const Body = () => {

    const [restaurants, setRestaurants] = useState(restaurantlist)

    const [searchText, setSearchText] = useState("")

    const [errorMsg,setErrorMsg] = useState("")

    const filterData = (searchText, restaurantsList) => {

        if (searchText) {
            return (
                restaurantsList.filter((restaurant) => (
                    restaurant.data.name.includes(searchText)
                ))
            )
        }

    }

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

                        const data = filterData(searchText, restaurantlist)

                        //Three possible outcomes of data above from the filterData function
                        //1) undefined - when empty search
                        //2) empty Array - when no data present
                        //3) Filtered Data - when data present

                         data ? setRestaurants(data) : setRestaurants(restaurantlist)

                         //Below i am doing optional Chaining. Suppose data is undefined then it will not execute the below line.
                         //If no optional chaining then it will throw error as "Cannot read property length of undefined"

                          data?.length==0 ? setErrorMsg("Restaurant does not exists") : setErrorMsg("")
                    }
                }
            >
                Search
            </Button>
            <hr />
            <p
             style={
                {color : "red" ,  marginLeft: "35px"}
                }>
                {errorMsg}
             </p>
            <div className="restaurant-list">
               
                {   
                    restaurants.map(restaurant => (
                        <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
                    ))
                }

            </div>

        </Container>
    )
}


export default Body
import { Button } from "react-bootstrap"

import { useState } from "react"
import { useDispatch } from "react-redux"
import { addItems } from "./utils/cartSlice"

const MenuItems = () => {


    const [items , setItems ] = useState(["Chicken Biriyani","Chicken Fried Rice"])

    const dispatch = useDispatch()

    const handleItemClick = (selectedItem) => {
        dispatch(addItems(selectedItem))
    }

    return( 
        <>
            {items.map( item =>{
                            return (
                                <div>
                                <p> {item} </p>
                                <Button onClick={() => handleItemClick(item)}> Additem </Button>
                                </div>
                            )

            } )}
        </>
    )
}

export default MenuItems
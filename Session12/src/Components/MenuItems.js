import { Button } from "react-bootstrap"

import { useState } from "react"

const MenuItems = () => {


    const [items , setItems ] = useState(["Chicken Biriyani","Chicken Fried Rice"])

    return( 
        <>
            {items.map( item =>{
                            return (
                                <div>
                                <p> {item} </p>
                                <Button> Additem </Button>
                                </div>
                            )

            } )}
        </>
    )
}

export default MenuItems
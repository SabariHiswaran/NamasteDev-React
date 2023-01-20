import React from "react"
import ReactDOM from "react-dom/client"

//Font-Awesome-Icons Folder
import "../FontAwesomeIcons/Icons"

import "bootstrap/dist/css/bootstrap.min.css"

import Header from "./Components/Header"
import Offers from "./Components/Offers"
import Body from "./Components/Body"
import Footer from "./Components/Footer"

const AppLayout = () => {
    return (
        <>
            <Header />
            <Offers />
            <Body />
            <Footer/>
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<AppLayout />)

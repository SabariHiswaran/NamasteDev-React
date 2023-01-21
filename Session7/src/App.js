import React from "react"
import ReactDOM from "react-dom/client"

//Font-Awesome-Icons Folder
import "../FontAwesomeIcons/Icons"

import "bootstrap/dist/css/bootstrap.min.css"

import Header from "./Components/Header"
import CarouselComponent from "./Components/CarouselComponent"
import Body from "./Components/Body"
import Footer from "./Components/Footer"

import { createBrowserRouter , RouterProvider, Outlet } from "react-router-dom"
import Error from "./Components/Error"
import About from "./Components/About"
import Offers from "./Components/Offers"

const AppLayout = () => {
    return (
        <>
            <Header />
            <Outlet/>
            <Footer/>
        </>
    )
}

const appRouter = createBrowserRouter([
    {
        path : "/",
        element:<AppLayout/>,
        errorElement:<Error/>,
        children: [
            {
                path:"/",
                element:<> <CarouselComponent/> <Body/> </> ,
                errorElement:<Error/>
            },
            {
                path:"/",
                element:<Body/>,
                errorElement:<Error/>
            },
            {
                path : "/About",
                element:<About/>
            },
            {
                path:"/Offers",
                element:<Offers/>
            }
        ]
    },
   
])

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<RouterProvider router={appRouter} />)

import React,{lazy, Suspense} from "react"
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
// import About from "./Components/About"
// import Offers from "./Components/Offers"
import RestaurantMenu from "./Components/RestaurantMenu"
import Loginpage from "./Components/Loginpage"
import Shimmer from "./Components/Shimmer"
import Instamart from "./Components/Instamart"
import LoginContext from "./Components/utils/LoginContext"
import { useState } from "react"
import Cart from "./Components/Cart"
import { Provider } from "react-redux"
import store from "./Components/Store"


const About = lazy(() => import("./Components/About"))
const Offers = lazy(() => import("./Components/Offers"))



const AppLayout = () => {

    const [user,setUserDetails] = useState( {name : "Oliver" , email:"oliver@gmail.com"})

    return (
        <Provider store={store}>
        <LoginContext.Provider value={ {user:user,setUserDetails :  setUserDetails }}>
            <Header />
            <Outlet/>
            <LoginContext.Provider value={ {user : {name :"Sab" , email : "Sabb@email.com"}}}>
            <Footer/>
            </LoginContext.Provider>
        </LoginContext.Provider>
        </Provider>
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
                path : "/About",
                element:<Suspense fallback={<p> Loading .......</p>}><About/></Suspense>
            },
            {
                path:"/Offers",
                element:<Suspense fallback={<Shimmer/>}><Offers/></Suspense>
            },
            {
                 path: "/Instamart",
                 element:<Instamart/>
            },
            {
                path:"/cart",
                element:<Cart/>
            },
            {
                path:"/RestaurantDetails/:id",
                element:<RestaurantMenu/>
            },{
                path:"/Login",
                element: <Loginpage />
            }
        ]
    },
   
])

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<RouterProvider router={appRouter} />)

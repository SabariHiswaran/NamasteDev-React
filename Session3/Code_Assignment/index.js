
import React from "react";

import ReactDOM from "react-dom/client"


// Create a nested header Element using React.createElement (h1,h2,h3 inside a div with class "title")


// const page = React.createElement
// (
//  "div" ,
//  { className : "title" } ,
// [
//   React.createElement("h1" , {id : "Heading1"} , "Heading1") , 
//   React.createElement("h2" , {id : "Heading2"} , "Heading2"),
//   React.createElement("h3" , {id : "Heading3"} , "Heading3")
// ]
// )


//Same using JSX

// const page = (
//     <div className="titleinjsx">
//         <h1> Heading1</h1>
//         <h2> Heading2</h2>
//         <h3> Heading3</h3>
//     </div>
// )


//Create a Functional Components of the same using JSX and pass attributs into the tag in JSX

const Page = ({ name }) => (  //For multiline JSX we can use parenthesis ()
   
    <div className="headingdiv">
         <HeaderComponent/>
        <h1> Heading1</h1>
        <h2> Heading2</h2>
        <h3> {name} </h3>
        <Subpage />                                 {/* this is know as composition of component */}
        <FindDifference />
    </div>
)

const Subpage = () => (
    <p> Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since t </p>
)

const TitleComponent = (props) => {
    console.log(props)
    return (
        <>
            <p> Inside Title Component </p>
            {props.children}
        </>
    )
}


const FindDifference = () => {

    const Title = "Title variable"

    return (
        <React.Fragment>

            <p> {Title}</p>

            <TitleComponent />

            <TitleComponent> hello I am Children </TitleComponent>

        </React.Fragment>
    )
}

const HeaderComponent = () => {
    return (
        <div className="headerdiv">
            <img src="https://img.freepik.com/free-vector/flat-design-mc-logo-design_23-2149482035.jpg?w=2000" className="logoimage" alt="logo"/>

            <input type="text" placeholder="Search Bar" name="search" />

            <p> Profile Icon </p>
        </div>
    )
}


const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<Page name="Sabari" />)


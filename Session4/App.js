import React from "react"
import  ReactDOM  from "react-dom/client"

const Page = ({ name }) => (  //For multiline JSX we can use parenthesis ()
   
<div className="headingdiv">
  
    <h1> Heading1</h1>
    <h2> Heading2</h2>
    <h3> {name} </h3>
   
</div>
)


const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<Page name="Sabari" />)

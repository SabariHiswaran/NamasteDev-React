import React from "react"
import ReactDOM from "react-dom/client"

const heading1 = React.createElement(
    "h1",
    { id: "heading1" },
    "Heading 1"
  );

  const heading2 = React.createElement(
    "h2",
    { id: "heading2" },
    "Heading 2"
  );

  const heading = React.createElement("div", { id: "div1" }, [
    heading1,
    heading2,
  ]);

  const root = ReactDOM.createRoot(document.getElementById("root"));

  root.render(heading);
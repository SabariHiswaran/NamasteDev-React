import { useState } from "react"

const Section = ({ name, description, isVisible, setIsVisible }) => {

    const buttonText = isVisible === true ? "Hide" : "Show"
    return (
        <div style={{ border: "2px solid black", padding: "2px 2px" }}>
            <h2>{name} </h2>
            <button onClick={() => setIsVisible(() => isVisible ? "" : name)}> {buttonText} </button>
            {isVisible && <p>{description} </p>}
        </div>
    )
}

const Instamart = () => {

    const [isVisible, setIsVisible] = useState("About")

    return (
        <>
            <Section
                name="About"
                description="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature 
        from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked 
        up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through
         the cites of the word in classical literature, discovered the undoubtable source.
          Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero"
                isVisible={isVisible === "About" ? true : false}
                setIsVisible={setIsVisible}
            />

            <Section
                name="Contact"
                description="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature 
    from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked 
    up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through
     the cites of the word in classical literature, discovered the undoubtable source.
      Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero"
                isVisible={isVisible === "Contact" ? true : false}
                setIsVisible={setIsVisible}
            />

            <Section
                name="Email"
                description="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature 
from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked 
up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through
 the cites of the word in classical literature, discovered the undoubtable source.
  Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero"
                isVisible={isVisible === "Email" ? true : false}
                setIsVisible={setIsVisible}
            />

        </>
    )
}

export default Instamart
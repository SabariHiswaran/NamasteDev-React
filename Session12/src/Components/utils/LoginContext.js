import { createContext } from "react";

const LoginContext = createContext({
    user : {
    name : 'sabari',
    email : "sabari@gmail.com"
}
})

LoginContext.displayName = "LoginContext"

export default LoginContext
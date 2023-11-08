import {createContext } from "react";

 const UserContext = createContext({
    user: {
        name: "Suraj Kushwaha",
        email: "surajkushwaha120@gmail.com",
    },
 });


UserContext.displayName = "UserContext";
 export default UserContext;
import { createContext } from "react";
//creare context
const usernamecontext= createContext();
// create costume provider
export const usernameprovider= ({childern})=>{

return(
    <usernamecontext.Provider>
        {childern}
    </usernamecontext.Provider>
)
}
export default usernamecontext

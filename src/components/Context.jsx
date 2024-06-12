import React, { useState } from "react";

const ContextApi = React.createContext({


});


export const ContextProvider = (props)=> {
    const initialToken = localStorage.getItem('token')
    const [token, setToken] = useState(initialToken);
    const userIsLoggedIn = !!token;

    const loginHandler = (tok)=> {
        setToken(tok);
        localStorage.setItem('token', tok);

        setTimeout(()=>{
            logouthandler();
            
        }, 5000)
       
    };

    const logouthandler = ()=> {
        setToken(null)
        localStorage.removeItem('token')
    };


    const init = {
            token: token,
            isLoggedIn: userIsLoggedIn,
            login: loginHandler,
            logout: logouthandler,

    }
    return <ContextApi.Provider value={init}>
        {props.children}
    </ContextApi.Provider>
}

export default ContextApi;
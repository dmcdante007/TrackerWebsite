import React, { useState } from "react";
import { redirect, useNavigate } from "react-router-dom";

const ContextApi = React.createContext({


});


export const ContextProvider = (props)=> {
    const initialToken = localStorage.getItem('token')
    const [token, setToken] = useState(initialToken);
    const userIsLoggedIn = !!token;
    const [expense, setExpense] = useState(0);
    const [arrOfExpenses, setArrofExpenses] = useState([])

    const arrofExp = (e)=> {
        setArrofExpenses(e + arrOfExpenses)
    }

    const totalExpenseis = (e)=> {
        setExpense(Number(e) + expense) 
    }

    const loginHandler = (tok)=> {
        setToken(tok);
        localStorage.setItem('token', tok);

        // setTimeout(()=>{
        //     logouthandler();
            
        // }, 5000)
       
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
            totalExpense : totalExpenseis,
            totalIs: expense,
            pushObj: arrofExp,
            arrIs: arrOfExpenses


    }
    return <ContextApi.Provider value={init}>
        {props.children}
    </ContextApi.Provider>
}

export default ContextApi;
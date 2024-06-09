import React from "react";

const ContextApi = React.createContext({


});


export const ContextProvider = (props)=> {



    const init = {


    }
    return <ContextApi.Provider value={{init}}>
        {props.children}
    </ContextApi.Provider>
}

export default ContextApi;
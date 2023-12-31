import React, { useState, useContext, useEffect } from "react";
import { useCallback } from "react";

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
    const [loading,setLoading] = useState(true);
    const [searchTerm,setSearchTerm] = useState('a');
    const [cocktails,setCocktails] = useState([]);
    return (
        <AppContext.Provider
            value={{loading,searchTerm,cocktails,setSearchTerm}}
        >
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppContext, AppProvider }
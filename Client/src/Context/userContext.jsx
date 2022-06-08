import React, {useState, useContext, createContext} from "react";

export const UserContext = createContext();

export const UserContextProvider = ({children}) => {
    const [user, setUser] = useState({
        isAuthenticated: false,
        user: null
    });
    
    return (
        <UserContext.Provider value={[user, setUser]}>
        {children}
        </UserContext.Provider>
    );
}

export const useUserContext = () => {
    const context = useContext(UserContext);
    if (context === undefined) {
        throw new Error("useUserContext must be used within a UserContextProvider");
    }
    return context;
}
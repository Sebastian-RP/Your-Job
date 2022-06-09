import React, {useState, useContext, createContext} from "react";

export const CarritoContex = createContext();

export const CarritoContextProvider = ({children}) => {
    const [carrito, setCarrito] = useState([]);	
    
    return (
        <CarritoContex.Provider value={{carrito, setCarrito}}>
            {children}
        </CarritoContex.Provider>
    );
}

export const useCarritoContext = () => {
    const context = useContext(CarritoContex);
    if (context === undefined) {
        throw new Error("useCarritoContext must be used within a CarritoContextProvider");
    }
    return context;
}
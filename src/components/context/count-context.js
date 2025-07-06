import { createContext, useContext, useState } from "react";
const initialState = {
    count: 0
}
const CountContext = createContext(initialState);
// Provider
console.log(CountContext)
const CountProvider = ({ children }) => {
    const [count, setCount] = useState(0);

    return (
        <CountContext.Provider value={{ count, setCount }}>
            {children}
        </CountContext.Provider>
    )
}

// Consumer
const useCount = () => {
    return useContext(CountContext)
}

export { CountProvider, useCount }

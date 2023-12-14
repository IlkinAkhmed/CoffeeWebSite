import { createContext, useState } from "react";


export const detailsContext = createContext()

function DetailsProvider({children}){
    const [inputValue, setInputValue] = useState('')

    const data = {
        inputValue,
        setInputValue
    }
    return(
        <detailsContext.Provider value={data}>
            {children}
        </detailsContext.Provider>
    )
}

export default DetailsProvider
import { createContext, useState } from "react";


export const searchContext = createContext()

function SearchProvider({children}) {
    const [inputValue, setInputValue] = useState('')
    const [category, setCategory] = useState('All')
    const [sliderValue, setSliderValue] = useState(50);
    const [isFull, setIsFull] = useState(false)
  
    const handleSliderChange = (event) => {
      setSliderValue(event.target.value);
    };

    const data = {
        inputValue,
        setInputValue,
        category,
        setCategory,
        handleSliderChange,
        sliderValue,
        sliderValue,
        isFull,
        setIsFull
    }
    return (
        <searchContext.Provider value={data}>
            {children}
        </searchContext.Provider>
    )
}
export default SearchProvider
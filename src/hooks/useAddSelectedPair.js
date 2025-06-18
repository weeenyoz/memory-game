import { useState } from "react"

const useAddSelectedPair = () => {
    const [selectedPair, setSelected] = useState([])
    
    const addSelectedHandler = (selected) => {
        setSelected(prevSelected => [...prevSelected, selected])
    }

    return [selectedPair, addSelectedHandler]
}

export default useAddSelectedPair
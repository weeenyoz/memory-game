import { useState } from "react"

const useFlipCardHook = () => {
    const [isFlipped, setIsFlipped] = useState(false)

    const flipOpen = (isOpen) => {
        setIsFlipped(isOpen)
    }

    return [isFlipped, flipOpen];
}

export default useFlipCardHook
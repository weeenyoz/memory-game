import { useState } from "react"
import useEffectOnMismatched from "./useEffectOnMismatched"

const useIsMatched = () => {
    const [isMatched, setIsMatched] = useState(false)

    const handleMatched = (matched) => {
        setIsMatched(matched)
    }

    // useEffectOnMismatched(flipOpen, [isMatched])


    return [isMatched, handleMatched]
}

export default useIsMatched
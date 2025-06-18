import { useEffect, useRef } from "react";

const useEffectOnMatched = (removeCard, deps) => {
    const firstRender = useRef(true)

    useEffect(() => {
        if (firstRender.current === true) {
            firstRender.current = false
        } else if (firstRender.current === false) {
            removeCard()
        }
    }, deps)
}

export default useEffectOnMatched
import { useEffect, useRef } from "react"

const useEffectOnMismatched = (openCard, deps) => {
    const firstRender = useRef(true)

    useEffect(() => {
        if (firstRender.current === true) {
            firstRender.current = false
        } else if (firstRender.current === false) {
            openCard(false)
        }
    }, deps)
}

export default useEffectOnMismatched
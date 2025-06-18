import React from "react"
import Box from "../components/Box/Box"
import useCardHook from "../hooks/useFlipCardHook"

const Card = () => {

    const [isFlipped, flipOpen] = useCardHook()

    

    return (
        <>
            <Box />
        </>
    )
}

export default Card
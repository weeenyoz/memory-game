import React, { useContext } from "react"
import { FaCode } from "react-icons/fa6";
import "./Box.css"
import useFlipCardHook from "../../hooks/useFlipCardHook";
import useIsMatched from "../../hooks/useIsMatched";
import { MemoryGameContext } from "../../pages/MemoryGame";


const Box = (props) => {
    const { number, ref } = props

    const [isFlipped, flipOpen] = useFlipCardHook()
    const [isMatched] = useIsMatched()

    const {selectedPair, addSelectedHandler} = useContext(MemoryGameContext)
    

    const handleClick = () => {
        flipOpen(!isFlipped)
        addSelectedHandler(number)
    }

  
    return (
        <>
            <div
                ref={ref}
                className={isFlipped ? "Box Selected" : "Box"}
                onClick={handleClick}
            >            
                { isFlipped ? <h2>{number}</h2> : <FaCode size={30} />}
            </div>

        </>
    )
  
}

export default Box
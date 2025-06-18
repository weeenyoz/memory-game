import React, { createContext, useEffect, useRef, useState } from "react"
import { NavLink } from "react-router-dom"

import Box from "../components/Box/Box"
import Board from "../components/Board/Board"
import "../components/Box/Box.css"
import useAddSelectedPair from "../hooks/useAddSelectedPair"

const numbers = [...Array(18)].map((_, i) => i + 1);
for (let i = numbers.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
}

export const MemoryGameContext = createContext()

const MemoryGame = () => {
    console.log("memory game rendered")
    const [selectedPair, addSelectedHandler] = useAddSelectedPair()


    return (
        <MemoryGameContext.Provider value={{selectedPair, addSelectedHandler}}>

            <Board>
                {
                    numbers.map((number) => <Box key={number} number={number}/>)
                }
                {
                    numbers.map((number) => <Box key={number} number={number}/>)
                } 
            </Board>

            <NavLink to="/">Back</NavLink>
        </MemoryGameContext.Provider>
    )
}

export default MemoryGame
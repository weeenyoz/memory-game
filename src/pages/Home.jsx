import React from "react"
import { NavLink } from "react-router-dom"

const Home = () => {
    return (
        <>
            <h1>Home page</h1>
            <NavLink to="/memorygame">Play Memory Game</NavLink><br/>
            <NavLink to="/card">Go to Sammple Card</NavLink>
        </>
    )
}

export default Home
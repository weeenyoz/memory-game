import './App.css'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from "./pages/Home.jsx"
import MemoryGame from "./pages/MemoryGame.jsx"
import Card from "./pages/Card.jsx"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path='/memorygame' element={<MemoryGame />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

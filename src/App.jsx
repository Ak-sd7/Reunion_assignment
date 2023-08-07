import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Header from "./Components/Header"
import Rent from "./Pages/Rent"

function App() {

  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Rent/>}/>
      </Routes>
    </Router>
  )
}

export default App

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from "./Components/Footer"
import Header from "./Components/Header"
import Home from "./Components/Home"
import User from "./Components/User/User"
import Login from "./Components/Login/Login"
import './App.css'
import { UserStorage } from './userContext'
import ProtectedRouter from './Components/Helper/ProtectedRouter'


function App() {

  return (
    <div>
      <BrowserRouter>
        <UserStorage>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="login/*" element={<Login />} />
            <Route path="conta/*" element={<ProtectedRouter> <User /> </ProtectedRouter>} />
          </Routes>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  )
}

export default App

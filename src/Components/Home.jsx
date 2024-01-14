import { useContext } from "react"
import { UserContext } from "../userContext"
import { Navigate } from "react-router-dom";


const Home = () => {

  const { login } = useContext(UserContext);

  if (!login) return <Navigate to="/login" />

  return (
    <div>
      <h1>Home</h1>
    </div>
  )
}

export default Home
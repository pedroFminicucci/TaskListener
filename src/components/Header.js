import { Link } from "react-router-dom"
import LogIn from "./LogIn"

const Header = () => {
  return (
    <>
    <header className="header"> 
      <Link to="/"> 
        <h1 className="header_title">TaskListener</h1>
      </Link>
      <nav className="header_nav">
        <Link to="/LogIn" className="link">Ingrese</Link>
      </nav>
    </header>
    </>
  )
}

export default Header

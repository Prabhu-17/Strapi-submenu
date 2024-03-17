import { useGlobalContext } from "./Context"
import {FaBars} from 'react-icons/fa'
import NavLinks from "./NavLinks"

const Navbar = () => {
    const {openSideBar,setPageId}=useGlobalContext()
    const handleSubmenu=(e)=>{
        if(!e.target.classList.contains('nav-link')){
          setPageId(null)
        }
    }
  return (
    <nav onMouseOver={handleSubmenu}>
        <div className="nav-center">

        <h3 className="logo">Strapi</h3>
        <button className="toggle-btn" onClick={openSideBar}>
            <FaBars/>
        </button>
        <NavLinks/>
        </div>
    </nav>
  )
}
export default Navbar
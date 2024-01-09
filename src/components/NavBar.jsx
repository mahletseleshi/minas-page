import { SiWebmoney } from "react-icons/si";

const NavBar = () => {
  return (
    <div>
     <div>
      <div>
        <h1>Minas</h1>
      </div>
      <div>
        <ul>
          <li>Overvie</li>
          <li>Features</li>
          <li>About</li>
          <li>Pricing</li>
        </ul>
      </div>
     </div>
     <div>
      <div>   
        <SiWebmoney />
        <h3>Languages</h3>
      </div> 
      <button>
        Sign Up
      </button> 
     </div>
    </div>
  )
}

export default NavBar

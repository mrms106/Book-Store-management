import './navbar.css'
import logo from './logo.png'
import { useNavigate } from 'react-router-dom';
export default function Navbar({isloggedIn}){
  console.log(isloggedIn)
  const navigate=useNavigate()
    return(
        <>
          <nav className="navbar navbar-expand-lg bg-body-tertiary navMain">
  <div className="container-fluid">
    <span ><img src={logo} alt="logo"></img></span>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <span className="nav-link active" aria-current="page" onClick={()=>navigate("/")}>Home</span>
        <span className="nav-link active"onClick={()=>navigate("/addbook")} >Add Books</span>
        {isloggedIn ? <span className="nav-link active" >Log-Out</span>
        :<span className="nav-link active" onClick={()=>navigate("/login")}>Log-In</span>
        }
        
      </div>
    </div>
  </div>
</nav>
<hr></hr>
        </>
    )
}
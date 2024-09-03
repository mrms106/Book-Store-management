import './navbar.css'
import logo from './logo.png'
import { useNavigate } from 'react-router-dom';
export default function Navbar({isloggedIn}){
  
const logout=async()=>{
  try{
  const responce=await fetch("http://localhost:8080/api/auth/logout",{
    credentials:"include"
  })
  if(responce.ok){
    alert("logout success")
    navigate("/login")
  }else{
    alert("sommething went wrong try again")
  }
}catch(err){
  console.log(err)
}
}

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
        <span className="nav-link active"onClick={()=>navigate("/receipts")} >Show sells</span>
        <span className="nav-link active"onClick={()=>navigate("/buybasket")} >Buy-Basket</span>
        {isloggedIn ? <span className="nav-link active" onClick={logout}>Log-Out</span>
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
import './footer.css'
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import FacebookIcon from '@mui/icons-material/Facebook';
import CopyrightIcon from '@mui/icons-material/Copyright';
import { useNavigate } from 'react-router-dom';
export default function Footer(){
  const navigate=useNavigate()
  const style={
    cursor:"pointer"
  }
    return(
        <>
        
            <footer>
                 <div style={{marginTop:"20px"}}>
                      &nbsp; &nbsp; &nbsp;<b>University Book-Shop</b>
                    <p>all types of books available here</p>
                 </div>
                 <div>
                 <span style={style} onClick={()=>navigate("/terms")}>  terms </span>|| 
                 <span style={style}  onClick={()=>navigate("/privacy")}>privacy</span>  || 
                 <span style={style}  onClick={()=>navigate("/help")}>help</span>
                 </div>
                 <div className='icons'>
                   <InstagramIcon style={style} />&nbsp;&nbsp;
                   <XIcon style={style} />&nbsp;&nbsp;
                   <FacebookIcon style={style} />&nbsp;&nbsp;

                 </div>
                 <div>
                 <p style={{marginTop:"20px"}}><i>&copy; 2024 Your University Books. All rights reserved.</i></p>
                 <p style={{marginLeft:"20px"}}>Designed And Developed By <i>Makardhwaj</i></p>
                 </div>
                
            </footer>
        </>
    )
}
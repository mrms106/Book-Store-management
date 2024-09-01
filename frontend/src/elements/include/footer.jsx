import './footer.css'
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import FacebookIcon from '@mui/icons-material/Facebook';
import CopyrightIcon from '@mui/icons-material/Copyright';
export default function Footer(){
    return(
        <>
        
            <footer>
                 <div style={{marginTop:"20px"}}>
                      &nbsp; &nbsp; &nbsp;<b>University Book-Shop</b>
                    <p>all types of books available here</p>
                 </div>
                 <div>
                    terms || privacy || contact || help
                 </div>
                 <div className='icons'>
                   <InstagramIcon/>&nbsp;&nbsp;
                   <XIcon/>&nbsp;&nbsp;
                   <FacebookIcon/>&nbsp;&nbsp;

                 </div>
                 <div>
                 <p style={{marginTop:"20px"}}><i>&copy; 2024 Your University Books. All rights reserved.</i></p>
                 </div>
                
            </footer>
        </>
    )
}
import { generateReceipt } from './receipt';
import './sellcard.css'
import DeleteIcon from '@mui/icons-material/Delete';
import PrintIcon from '@mui/icons-material/Print';

export default function ShowSellcard({sell,sellData}){

  const deleteReceipt=async()=>{
    const responce=await fetch(`http://localhost:8080/api/books/receipt/${sell._id}`,{
      method:"DELETE"
    })
    if(!responce.ok){
      alert("problem in delete the receipt")
      return;
    }
    alert("receipt is deleted")
    sellData()
  }
    return(
        <>
    <div className="col-sm-6 sell-show">
    <div className="card ">
      <div className="card-body">
        <h5 className="card-title">Buyer-Name: {sell.name}</h5>
        <p className="card-text">Buy-Date:{sell.date}</p>
        
        <button href="#" className="btn btn-primary"  onClick={() => generateReceipt(sell)}>Print receipt <PrintIcon/></button>
        <button className="btn btn-secondary" onClick={deleteReceipt}>Delete receipt<DeleteIcon fontSize="small" /> </button>
        
      </div>
    </div>
    </div>
        </>
    )
}
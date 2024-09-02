import { generateReceipt } from './receipt';
import './sellcard.css'
export default function ShowSellcard({sell}){
    return(
        <>
    <div className="col-sm-6 sell-show">
    <div className="card ">
      <div className="card-body">
        <h5 className="card-title">Buyer-Name: {sell.name}</h5>
        <p className="card-text">Buy-Date:{sell.date}</p>
        <button href="#" class="btn btn-primary"  onClick={() => generateReceipt(sell)}>Download receipt</button>
      </div>
    </div>
    </div>
        </>
    )
}
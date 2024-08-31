export default function Bookcard({bookdata,idx}){
    return(
        <>
    <div className="card maincard" style={{width: "18rem"}}  >
  <img src={bookdata.image} className="card-img-top" alt="Book Image"/>
  <div className="card-body">
    <p>Name: <b className="card-title">{bookdata.title}</b></p>
    <p>author: <b className="card-title">{bookdata.author}</b></p>
    <p className="card-text">About : {bookdata.description}</p>
 <p>
 <span className="card-text">Stock: {bookdata.stock}</span> &nbsp; &nbsp;
 <span className="card-text">price: ₹{bookdata.price}</span>
 </p>
    <p>
    <button className="btn btn-primary">remove</button>&nbsp;
    <button className="btn btn-primary">&nbsp;&nbsp;Sell&nbsp;&nbsp;</button>&nbsp;
    <button className="btn btn-primary">Update</button>
    </p>
    
  </div>
</div>
        </>
    )
}
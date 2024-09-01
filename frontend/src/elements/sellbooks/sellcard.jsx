import './sellcard.css'
export default function SellCard({form}){
    return(
        <>
         <div className='book-details'>
            <div className="sell-card">
            <div className="sell-card-img"><img src={form.image}></img></div>
            <div className="sell-card-info">
                <p className="sell-text-title">Name: {form.title} </p>
                <p className="sell-text-body">Author:{form.author}</p>
                <p className="sell-text-body"><b>About:</b> &nbsp;{form.description}</p>
            </div>
            <div className="sell-card-footer">
            <span className="sell-text-title">₹{form.price}</span>
            <span className="sell-text-title">stock: {form.stock}</span>
            </div></div>
        </div>
        </>
    )
}
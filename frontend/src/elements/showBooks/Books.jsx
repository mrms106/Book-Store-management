import { useEffect, useState } from "react"
import Bookcard from "./bookcard"
import './Book.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';

export default function GetBooks(){
let [book,setbook]=useState([])
const [search, setSearch] = useState("");
    const fetchData=async()=>{
        try{
        const responce=await fetch("http://localhost:8080/api/books/book",{
            credentials:"include"
        })
        if(!responce.ok){
            throw new Error(`HTTP error! Status: ${responce.status}`); 
        }
        const data= await responce.json()
        setbook(data.data)
        
        }catch(err){
            console.log(err)
        }
    }
    console.log(book)
    useEffect(()=>{
        fetchData()
    },[])
    const filteredBooks = book.filter((bookdata) =>
        bookdata.title.toLowerCase().includes(search.toLowerCase()) ||
        bookdata.author.toLowerCase().includes(search.toLowerCase())
    );
    return(
        <>
        <div className="Main-Book">
        <h1> Available Books </h1>
        <div className="book-span"></div>
        
        <div className="book-search">
            <div>
                <TextField id="outlined-basic" label="Search-Book" variant="outlined"  onChange={(e) => setSearch(e.target.value)} />
                <Button variant="contained" style={{margin: "5px 0px 0px 5px",height:"50px", width:"10px"}} >
                <SearchIcon style={{fontSize:"30px"}}/>
                </Button>
            </div>
            <div>
                <div className="form-check form-switch switch" >
                    Show Recentlly Add
                    <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                </div>
          </div>
        </div>
        
        <div className="bookcard">
       
        {
            filteredBooks.map((bookdata,idx)=>(
               
                <Bookcard bookdata={bookdata} key={idx} fetchData={fetchData}/>
               
            ))
        } </div>
       </div>
        </>
    )
}
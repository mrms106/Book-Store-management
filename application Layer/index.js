const express=require("express")
const app=express()
const mongoose= require("mongoose")
const path=require("path")
const cors=require("cors")
const bookRoute=require("./routes/book")

const coreOptions={
  origin:"",
  methods:"GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials:true
}

app.use(express.json());
app.use(cors(coreOptions))

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/bookstore');
  console.log("the database is connected")
}

app.get("/",(req,res)=>{
  res.send("working ")
})

app.use("/api/books",bookRoute)

app.listen("8080",()=>{
  console.log("port is running on 8080")
})
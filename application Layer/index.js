const express=require("express")
const app=express()
const mongoose= require("mongoose")
const path=require("path")
const cors=require("cors")
const bookRoute=require("./routes/book")
const UserRoute=require("./routes/user")
const passport=require("passport")
const session=require("express-session")
const User=require("./modules/user")
const MongoStore = require('connect-mongo');


const coreOptions={
  origin:"http://localhost:5173",
  methods:"GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials:true
}
const dburl='mongodb://127.0.0.1:27017/bookstore'
const store=MongoStore.create({
  mongoUrl:dburl,
  crypto:{
    secret:"secret"
  },
  touchAfter:24*3600
})

const sessionOptions={
  store,
  secret:"secret",
  resave:false,
  saveUninitialized:false,
  cookie:{
    expires:Date.now()+ 2*24*60*60*1000,
    maxAge: 2 * 24 * 60 * 60 * 1000,
    // httpOnly:true,
}
}

app.use(express.json());
app.use(cors(coreOptions))
app.use(session(sessionOptions))

app.use(passport.initialize())
app.use(passport.session())

passport.use(User.createStrategy())
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser())

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/bookstore');
  console.log("the database is connected")
}

app.get("/",(req,res)=>{
  res.send("working ")
})

app.use("/api/books",bookRoute)
app.use("/api/auth",UserRoute)

app.listen("8080",()=>{
  console.log("port is running on 8080")
})
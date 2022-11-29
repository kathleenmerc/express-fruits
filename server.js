require("dotenv").config()
const express = require("express")
const app = express()
const PORT = 3000
const reactViews = require("express-react-views")
const mongoose = require("mongoose")
const methodOverride = require("method-override")
const fruitsController = require("./controllers/fruitController")
const veggiesController = require("./controllers/vegController")

//this is to check if your env file is connected:
//in env file, make sure you use no spaces and replace "<password>"" with your mongo cluster password
//console.log(process.env.MONGO_URI)

// ===== CONNECTION TO DATABASE ===== //

//latest options to include to get rid of the deprecation warnings:
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

mongoose.connection.once("open", () => {
  console.log("Connected to mongoDB")
})

// ===== SET UP ENGINE =====//
app.set("view engine", "jsx")
app.engine("jsx", reactViews.createEngine())

// ===== MIDDLEWARE ===== //
app.use((req, res, next) => {
  console.log("I'm running for all routes")
  console.log("1. middleware")
  next()
})

app.use(express.urlencoded({extended:false})) // Returns middleware that only parses URL-encoded data
app.use(methodOverride('_method')) // allows us to use other methods on jsx pages
app.use(express.static('public')) //tells express to try to match requests with files in the directory called 'public'


// ===== FRUITS ROUTES ===== //
app.use("/fruits", fruitsController)


// ===== VEGETABLE ROUTES ===== //
app.use("/vegetables", veggiesController)



app.listen(PORT, () => { 
  console.log(`Listening on port: ${PORT}`)
}) 
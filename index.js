const express = require("express")
const app = express()

require('dotenv').config()

app.use(express.urlencoded({extended: false}))
app.use(express.json())


const cors = require("cors")
app.use(cors())

const productRouter = require('./routes/product.router')
const supplierRouter = require('./routes/supplier.router')
const categoryRouter = require('./routes/category.router')

app.use("/api/products", productRouter)
app.use("/api/categories", categoryRouter)
app.use("/api/supplies", supplierRouter)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log("Server is running....")
})
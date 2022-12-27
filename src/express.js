
// this line will be run !
import express from "express"
import cors from "cors"
import bcrypt from "bcrypt"
import http from "http"

const PORT = process.env.PORT || 3000
const HOST = process.env.HOST

const ExpressApp = express()
const httpServer = http.createServer(ExpressApp)
const corsOption = {
  origin:"*",
}

// express middlewarex
ExpressApp.use(cors(corsOption))
ExpressApp.use(express.json());

 
// routes
ExpressApp.use("/con/:uuid",async (req,res)=>{
  res.setHeader('content-type', 'text/html');
  res.send(
    generate_cinfig_page(req.params.uuid)
   )
})


// error handler
ExpressApp.use((err, req, res, next) => {
    if (res.headerSet) {
        return next(err)
    } 
    console.log(err)
    res.status(err.code || 500)
    res.json({message: err.message || "unknown Error!"})
})

export {corsOption,httpServer}
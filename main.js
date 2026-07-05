import {a,b}  from "./module.js"
console.log(a)
import ash from "./module.js"
console.log(ash)
let a=require("./module.js")
console.log(a,__dirname,__filename)
//------------------------------------------
const fs= require('fs')
console.log('Starting')
fs.writeFile('Ash2.txt','how are you2',()=>{
    console.log('done')
    fs.readFile('Ash2.txt',(error,data)=>{
        console.log(data.toString())
    })
})
fs.appendFile('Ash.txt','Ashish')
console.log('Ending')
//----------------------------------------
import fs from "fs/promises"
let a=await fs.readFile("Ash.txt")
console.log(a.toString())
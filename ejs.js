import express from 'express'
let app=express()
const port=process.env.PORT;
app.set("view engine","ejs")
app.get('/',(req,res)=>{
    let siteName="Ashish"
    let searchText="gangsta"
    res.render("index",{siteName:siteName,searchText:searchText})
})
app.listen(port,()=>{
    console.log(`Server running on http://localhost:${port}`)
})
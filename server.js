const express = require('express');
const app = express();
const port = process.env.PORT || 4444;
const path = require('path');

app.use(express.static(path.join(__dirname,"views")));

//register the view engine,
app.set('view engine','ejs');

app.get('/',(req,res)=>{
 res.render('index',{title:"Tonny's Executive | Barbershop & Spa"});
})

app.get('/about',(req,res)=>{
  res.render('about');
})

app.get('/shop',(req,res)=>{
   res.render('shop');
})
app.listen(port,()=>{
    console.log(`Listening for connections on port: ${port}`);
})
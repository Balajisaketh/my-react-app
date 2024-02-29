const express = require('express')
const app = express()
const port = 3001
const cors = require('cors')
const {Client}=require("pg")
const pgp = require("pg-promise")();
app.use(cors())
const uuid = require('uuid').v4;
const bodyParser = require('body-parser')
app.use(bodyParser.json());

const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'blogs',
    password: '1234',
    port: 5432, 
  });
  const db = pgp(client);

  client.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });
  app.post("/posts",(req,res)=>{
    
    const date=req.body.dateofpub;
    console.log("i am pub data",date);
    const author=req.body.author;
    const content=req.body.blogcontent;
    const title=req.body.title
    const [day, month, year] = date.split('-');
const postgresqlDateStr = `${year}-${month}-${day}`;
    const insertquery= {
      text: `INSERT INTO blog (title,blogcontent,author,published_date) 
                        VALUES($1,$2,$3,$4) RETURNING *`,
      values : [title,content,author,postgresqlDateStr]
    }
    client.query(insertquery).then((data) => {
      console.log(data,"i m done")
      res.send({status:true, message:"insert successfully"});
  
    } ).catch((err) => {
      console.error(err,"i m error")
      res.json({status:false,message:"insert failed"})
    });
  })
  app.delete('/deletepost/:id',(req,res)=>{
    console.log("i am entered")
       const postid=req.params.id;
       console.log(postid,"i am prod id")
       
  
         const qry={
          text:"delete from blog where uid=$1",
          values:[postid]
         }
         client.query(qry).then((resp)=>{
  
          res.json({status:true,message:"deleted succesfully"})
         }).catch((err)=>{
          console.log(err,"i am failed error")
            res.json({status:false,message:"delete failed"})
         })
  })

    
  app.get('/getposts',(req,res) => {
    const getqury=`SELECT * FROM blog`  
      
  client.query(getqury).then((data) => {

    res.json(data)

  } ).catch((err) => {
    console.error(err,"i m error")
    res.json({status:false,message:"failed"})
  });
  

  
})
app.get('/getposts/:id',(req,res) => {
    const postid=req.params.id;
    const qry={
        text:"select * from blog where uid=$1",
        values:[postid]
       }
      
  client.query(qry).then((data) => {

    res.json(data)

  } ).catch((err) => {
    res.json({status:false,message:"failed"})

  });
  

  
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
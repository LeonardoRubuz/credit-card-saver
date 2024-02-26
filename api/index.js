const datas = require('./datas.json') 
const express = require("express")
const app = express()
// Settings

// CORS
if (!process.env.DISABLE_XORIGIN) {
    app.use((req, res, next) => {
      const allowedOrigins = ['http://localhost:5173', 'http://localhost:5000'];
      const origin = req.headers.origin || '*';
      if(!process.env.XORIG_RESTRICT || allowedOrigins.indexOf(origin) > -1){
           console.log(origin);
           res.setHeader('Access-Control-Allow-Origin', origin);
           res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      }
      next();
    });
  }


// Routes 
app.get("/cards",(req, res) => {
    res.send(datas.cards)
    console.log(req);
})

app.post("/card", (req, res) => {
  if (!req.body) {
    res.status(403)
    res.send("Données Invalides")
  }
  const newCard = req.body
  datas.cards.push(newCard)
  res.status(200).send('Données enregistrées')
})


app.listen(5000)
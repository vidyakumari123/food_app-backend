const express = require('express')
const app = express()
const port = 5000
const mongoDB= require("./db")

mongoDB()

app.use((req,res,next)=>{
  res.setHeader('Access-Control-Allow-Origin',"http://localhost:3000")
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With,Content-Type,Accept"
    // 'Access-Control-Allow-Credentials', 'true'
  )
  next()
})



// const cors = require("cors");

// const corsOptions = {
//   origin: 'http://locahost:3000'
// };


// app.use(cors(corsOptions));




app.use(express.json())
app.use('/api',require("./Routes/CreatUser"))
app.use('/api',require("./Routes/DisplayData"))
app.use('/api',require("./Routes/OrderData"))
app.get('/', (req, res) => {
  res.send('Hello World!')
})

// app.post('/api/createuser', (req, res) => {
//   const { name, email, password, location } = req.body;
//   res.json({ success: true, message: 'User created successfully' });
// });
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
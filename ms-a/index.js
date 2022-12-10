const express = require('express')
const axios = require("axios")
const app = express()
const port = 3000

const msbHost = process.env.MSB_HOST || "localhost";
const msbPort = parseInt(process.env.MSB_PORT) || 3000;

console.log(msbHost)
console.log(msbPort)


app.get('/', (req, res) => {
  res.send('Hello World , from microservice A : v2')
})



app.get('/ms-b', (req, res) => {
  axios.get(`http://${msbHost}:${msbPort}`).then((response) => {
      res.send(response.data);}
  );
});



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
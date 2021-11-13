const express = require('express')
const app = express()
const port = 3000

app.use(express.static(__dirname + '/public'));

app.get('*', function(req, res){
  res.sendfile(__dirname + '/public/index.html');
});

/*
app.get('/', (req, res) => {
  res.send("")
})
*/
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})


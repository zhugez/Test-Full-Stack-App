const express = require("express");
const app = express();
const path = require('path');

const PORT = process.env.PORT || 2002;

app.use(express.static(path.resolve(__dirname, './client/build')));
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, './client/build', 'index.html'));
  });  

app.get('/api', (req, res) => {
    res.json({mess: "Welcome to Zhuge's World! x2"})
  })


//Start the server
app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
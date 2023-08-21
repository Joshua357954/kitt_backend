const express = require('express');

const app = express();
const port = process.env.PORT || 4000;
const ApiRoute = require("./API/MainRouter.js")

app.use('/api', ApiRoute)


app.get('/', (req, res) => {
  res.send('Welcome to Qitt Api V1.0');
});




// Server Running
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

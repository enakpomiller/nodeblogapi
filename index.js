
const express = require('express');
const apiRoutes = require('./routes');
const body_parser = require('body-parser');
const {Sequelize,connectToDB} = require('./db');




// creating our server
const app = express();

// this will enable the display of result on our body
app.use(express.json());
// url routing to work
app.use('/api', apiRoutes);




const PORT = 1101;
app.listen(PORT, async () =>{
  console.log(`server running at http://localhost:${PORT}`);
  await connectToDB();
})

// importing our sequelize
const {Sequelize} = require('sequelize');
// instance of sequelize to connect to DB
const sequelize = new Sequelize(
      'todo app',
      'root',
       '',{
            dialect:'mysql',
            'host':'localhost'
          }
 );


 const connectToDB = async () =>{
      try{
        await sequelize.authenticate();
        console.log(" database  successfully connected");
      }catch(error){
       console.log({message:error});

      }

 }


 module.exports = {sequelize, connectToDB}

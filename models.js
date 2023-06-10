const {sequelize} = require('./db')
// importing our datatype class from sequelize
const {DataTypes} = require('sequelize');



// creating table with sequelize
   const task =  sequelize.define('task',{
        // id: {
        //   type:DataTypes.INTEGER,
        //   primaryKey: true
        // },
        content:{
        type:DataTypes.STRING,
        validate:{
            max:15
        }
        },
        description:{
        type:DataTypes.TEXT
        },
        Is_complete:{
        type:DataTypes.BOOLEAN,
        defaultValue:false
        }


    })

    sequelize.define('user',{
      firstname:{
      type:DataTypes.STRING,
      validate:{
          max:15
      }
      },
      othernames:{
      type:DataTypes.TEXT
      },
      phone_number:{
      type:DataTypes.BOOLEAN
      }


  })

   // sequelize.sync() // this sync is to sync the tables into the database


module.exports = task;

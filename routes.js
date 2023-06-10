 const express = require('express');
 const router = express.Router();
 const task = require('./models');


 router.get("/getalltask", async (req,res) => {

      try{
         const displaytask = await task.findAll();
         console.log(displaytask);
         res.status(200).json(displaytask)
      }catch(error){
         console.log(error);
      }

 })

router.post("/createtask", async (req,res) => {
   const {content,description} = req.body;
   try{
      const createteask =  task.build(
         {
           content,
           description
        }
      );
      await createteask.save();
      res.status(201).json(createteask);
   }catch(error){
    res.json({messag:error}); 
   }


})




router.get("/getsingletask/:id", async (req,res) => {
   const id = req.params.id;
    try{
      const getsingletask = await task.findOne({
          where:{
            id:req.params.id
          }
         });
         if(getsingletask){
            res.status(200).json(getsingletask);
         }else{
         res.status(404).json({message:" record not found "});
         }

   }catch(error){
    console.log(error);   
   }

})


 // update a single record
router.patch("/updatesinglerec/:id",async (req,res) => {
     try{
      const id = req.params.id;
      const gettask = await task.findOne({
         where:{
         id:id
         }
      });
      if(gettask){
            // const{is_complete} = req.body;
            const update = await gettask.set({
               Is_complete:req.body.is_complete
            });
             if(update){
               console.log(" record "+update)
               await update.save();
            }else{

            }
          res.status(200).json(gettask);
      }else{
         res.status(404).json({message:" record not found "});
      }

   }catch(error){
    console.log(error);
   }

})

// update multiple rows
router.put("/updaterecords/:id",(req,res) => {
    try{
         const {content,description} = req.body;
         const updaterows = task.update({
            content,
            description
         },
         {where:{id:req.params.id
         }
      })
      if(updaterows){
       res.status(201).json({message:" record updated"});
      }else{
       res.send('cannot update');
      }
    }catch(error){
    console.log(error);
   }
})


router.delete("/deleterec/:id",async(req,res) => {
     try{
       const id = req.params.id;
       const delrec = await task.destroy({where:{id:id}})
       if(delrec){
        res.status(204).json({message:" record deleted"})
       }else{
       res.status(400).json({message:" unable to delete record "})
      }
   }catch(error){
    console.log(error)
   }

})


// exporting our router to index file
module.exports = router;

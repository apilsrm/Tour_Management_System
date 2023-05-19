import User from '../models/User.js'


// //create  new User
//  export  const createUser = async(req,res ) => {
//    const newUser = new User(req.body);
//    try {
//      const savedUser = await newUser.save();
//      res
//        .status(200)
//        .json({
//          success: true,
//          message: " Sucessfully created",
//          data: savedUser,
//        });
//    } catch (err) {
//      res
//        .status(500)
//        .json({
//          success: fail,
//          message: " Failed  to create . Try again ",
//        });
//    }
//  };

//update User
  export const updateUser = async(req,res)=> {
    const id = req.params.id
    try {
       const updateUser = await Tour.findByIdAndUpdate(id,{
        $set : req.body
       }, {new : true}) 

       res
       .status(200)
       .json({
         success: true,
         message: " Sucessfully Updated",
         data: updateUser,
       });
        
    } catch (err) {
        res
        .status(500)
        .json({
          success: fail,
          message: " Failed  to update . Try again ",
        });
    }
  }

  
//delete User
 export const deleteUser = async(req,res)=> {
    const id = req.params.id;
    try {
        await User.findByIdAndDelete(id);
         res
           .status(200)
           .json({
             success: true,
             message: " Sucessfully deleted",
            
           });
          
    } catch (err) {
        res
        .status(500)
        .json({
          success: fail,
          message: " Failed  delete . Try again ",
        });
    }
  }

  
//GetSingle User
 export const getSinglUser = async(req,res)=> {
    const id = req.params.id;
    try {
         const getSingleUser = await Tour.findById(id);

         res
         .status(200)
         .json({
           success: true,
           message: " Sucessfully get ",
          data : getSingleUser,
         });

        
    } catch (err) {
        res
        .status(404)
        .json({
          success: fail,
          message: " Failed  to get tour . Try again ",
        });
    }
  }


  
//getALL User
 export const getAllUser = async(req,res)=> {
    try {
        
        const getAllUser = await User.find({})
        res
         .status(200)
         .json({
           success: true,
           message: " Sucessfully get ",
          data : getAllUser,
         });

    } catch (err) {
        res
        .status(404)
        .json({
          success: fail,
          message: " Not found  . Try again ",
        });
    }
  }

 


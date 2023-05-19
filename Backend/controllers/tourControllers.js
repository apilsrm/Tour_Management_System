import Tour from '../models/Tour.js'


//create new tour
 export  const createTour = async(req,res ) => {
   const newTour = new Tour(req.body);
   try {
     const savedTour = await newTour.save();
     res
       .status(200)
       .json({
         success: true,
         message: " Sucessfully created",
         data: savedTour,
       });
   } catch (err) {
     res
       .status(500)
       .json({
         success: fail,
         message: " Failed  to create . Try again ",
       });
   }
 };

//update tour
  export const updateTour = async(req,res)=> {
    const id = req.params.id
    try {
       const updateTour = await Tour.findByIdAndUpdate(id,{
        $set : req.body
       }, {new : true}) 

       res
       .status(200)
       .json({
         success: true,
         message: " Sucessfully Updated",
         data: updateTour,
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

  
//delete tour
 export const deleteTour = async(req,res)=> {
    const id = req.params.id;
    try {
        await Tour.findByIdAndDelete(id);
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

  
//GetSingle tour
 export const getSingleTour = async(req,res)=> {
    const id = req.params.id;
    try {
         const getSingleTour = await Tour.findById(id);

         res
         .status(200)
         .json({
           success: true,
           message: " Sucessfully get ",
          data : getSingleTour,
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


  
//getALL tour
 export const  getAllTour = async(req,res)=> {
    //for pagination
    const page = parseInt(req.query.page)
    console.log(page); //connected on which page //https://localhost:4000/getAllTour?page=1




    try {
        
        const getAllTour = await Tour.find({})
         .skip(page * 8 )
         .limit(8); /// page limit kati ota show garni 


        res
         .status(200)
         .json({
           success: true,
           count : getAllTour.length, //It counts how many pages are shown
           message: " Sucessfully get ",
          data : getAllTour,
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

 


//Get tours by search
  export const getTourBySearch = async (req,res) =>{
         // i means case sensative
    const city = new RegExp (req.query.city, "i");
    const distance = parseInt(req.query.distance);
    const maxGroupSzies = parseInt(req.query.maxGroupSzies);
     
    try {
        //greater tha equal = gte

        const tours = await Tour.find({
            city,
            distance :{ $gte : distance },
            maxGroupSzies :{$gte : maxGroupSzies},
        })
         .


        res
         .status(200)
         .json({
           success: true,
           message: " Sucessfully get ",
          data : tours,
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

//get featured  tour
 export const  getFeaturedTour = async(req,res)=> {
 
    try {
        
        const getFeaturedTour = await Tour.find({ featured : true }).limit(8);
        res
         .status(200)
         .json({
           success: true,
           count : getAllTour.length, //It counts how many pages are shown
           message: " Sucessfully get ",
          data : getAllTour,
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


  //get toour count
  export const getTourCount = async(req,res)=> {
    try {
        const tourCount = await Tour.estimatedDocumentCount;
        res
         .status(200)
         .json({
           success: true,
           message: " Sucessfully get ",
          data : tourCount,
         });
    } catch (error) {
        res
        .status(500)
        .json({
          success: fail,
          message: " failed to count/fetch ",
        });
        
    }
  }
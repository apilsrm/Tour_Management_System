import express  from 'express';
import { deleteUser, getAllUser, getSinglUser, updateUser } from "../controllers/userContollers";
const router = express.Router();


import { verifyAdmin, verifyUser } from "../utils/verifyToken";


//update User
router.put('/:id', verifyUser ,updateUser);


//delete User
router.delete('/:id', verifyUser ,deleteUser);

//GetSingleUser
//router.get('/:id', getSinglUser);//before using authentication
router.get('/:id',verifyUser , getSinglUser);   



//GetALL User
router.get('/', verifyAdmin,getAllUser);

export default router;

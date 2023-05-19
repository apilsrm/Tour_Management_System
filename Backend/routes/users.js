import { express } from "express";
import { deleteUser, getAllUser, getSinglUser, updateUser } from "../controllers/userContollers";
const router = express.Router();



//create new User
// router.post('/', cre);

//update User
router.put('/:id', updateUser);


//delete User
router.delete('/:id', deleteUser);

//GetSingleUser
router.get('/:id', getSinglUser);

//GetALL User
router.get('/', getAllUser);

export default router;

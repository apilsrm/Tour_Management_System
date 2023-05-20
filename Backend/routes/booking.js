import express from 'express';
import { createBooking, getAllBooking, getBooking } from '../controllers/bookingControllers';

import { verifyAdmin, verifyUser } from '../utils/verifyToken';


const router = express.Router();

router.post('/',verifyUser , createBooking);
router.get('/:id',verifyUser , getBooking);
router.get('/',verifyAdmin , getAllBooking);


export default router;
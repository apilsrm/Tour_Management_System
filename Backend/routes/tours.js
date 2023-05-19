import express from 'express';
import { createTour, deleteTour, getAllTour, getFeaturedTour, getSingleTour, getTourBySearch, getTourCount, updateTour } from '../controllers/tourControllers.js';

const router = express.Router();

//create new tour
router.post('/', createTour);

//update tour
router.put('/:id', updateTour);

//delete tour
router.delete('/:id', deleteTour);

//GetSingletour
router.get('/:id', getSingleTour);

//GetALL tour
router.get('/', getAllTour);

//get Tour By search 
router.get("/search/",getTourBySearch);


//get featured tours
router.get("/search/featured/",getFeaturedTour);

//get tour count
router.get("/search/count/",getTourCount);
export default router;

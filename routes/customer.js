import express from 'express'
import { depositAPI, withdrawAPI } from '../controllers/customerCont.js'
import { isAuthenticated } from '../utils/isAuthenticated.js';

const router = express.Router()

router.post('/withdraw',isAuthenticated, withdrawAPI);
router.post('/deposit',isAuthenticated, depositAPI);


export default router

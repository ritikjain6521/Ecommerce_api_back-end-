import express from 'express'
const  router =express.Router();
import { checkout,verify,userOrder,allOrders} from '../controllers/payment.js';
import { Authenticated } from '../Middlewares/auth.js';

//checkout

router.post('/checkout',checkout)

router.post('/verify-payment',verify)

router.get("/orders",userOrder,Authenticated)

router.get("/allorders",allOrders)


export default router

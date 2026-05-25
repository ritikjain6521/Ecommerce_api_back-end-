import express, { Router } from 'express'
import mongoose from 'mongoose';
import userrouter from './routers/User.js'
import bodyParser from 'express'
import productrouter from './routers/product.js'
import cartrouter from './routers/ritik.js'
import Addressrouter from './routers/Address.js';
import cors from 'cors';
import { addProduct } from './controllers/product.js';
import paymentrouter from './routers/payment.js'



const app = express();


app.use(bodyParser.json())
app.use(cors({
  origin:true,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
 credentials:true


}))

//home testing route
app.get('/',(req,res)=>

   res.json({message:'mahendra rajurkar'})
)
//user Router
app.use('/api/user',userrouter)     

//productrouter
app.use('/api/product',productrouter)

// add to cart j
app.use('/api/cart',cartrouter)  // /api/cart/user

app.use('/api/address',Addressrouter)

//payment getway
app.use('/api/payment',paymentrouter)





mongoose.connect(
    "mongodb+srv://ritikjain6224:qJvYokUpFBZr3sub@cluster0.z6rba.mongodb.net/",{
       dbName:"MERN_E_Commerce"
    }
).then(()=> console.log("mongodb connected Succesfully")).catch((err)=> console.log('err'));

const port = 1000;

app.listen(port, () => {
    console.log(`listening to the port no at ${port}`);
})


/* eslint-disable prettier/prettier */
import { Router } from 'express';
import { productController } from '@controllers/index';
import { validateUserRefreshToken } from '@middleware/index';
import { authRouter } from '@routes/auth';
import { userSignup, userLogin } from '@validations/user';
import { createProd, getCurrentProduct } from '@controllers/product';



const prodRouter = Router();

prodRouter.post('/postprod', createProd, productController.createProd);

prodRouter.get('/getprod', getCurrentProduct, productController.getCurrentProduct);





export { prodRouter };
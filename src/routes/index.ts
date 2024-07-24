import { Router } from 'express';
import { authRouter } from './auth';
import { userRouter } from './user';
import { productController } from '@controllers/index';
import { prodRouter } from './product';

const v1Router = Router();

v1Router.use('/auth', authRouter);
v1Router.use('/user', userRouter);
v1Router.use('/product', prodRouter);
// All routes go here

export { v1Router };

/* eslint-disable prettier/prettier */
// /* eslint-disable prettier/prettier */
// import { Request, Response } from 'express';
// import bcrypt from 'bcrypt';
// import { controller } from '@config/controller/controller';
// import { StatusError } from '@config/statusError/statusError';
// import { ICreateProductRequest } from '@modules/product/model';
// import { productService } from '@services/index';
// import { envs } from '@config/env';

// export const createProd = controller(async (req: Request, res: Response): Promise<void> => {
//     const { body }: { body: ICreateProductRequest } = req.body;
//   // get user details by email
//   const newProduct = await productService.saveProduct(body);
//   res.status(201).send({ product: newProduct });
// });

/* eslint-disable prettier/prettier */
import { Request, Response } from 'express';
import { controller } from '@config/controller/controller';
import { StatusError } from '@config/statusError/statusError';
import { ICreateProductRequest } from '@modules/product/model';
import { productService } from '@services/index';

export const createProd = controller(async (req: Request, res: Response): Promise<void> => {
  const body: ICreateProductRequest = req.body;
  
  if (!body.pname) {
    throw StatusError.badRequest('Product name is required');
  }

  const existingProduct = await productService.getproductDetailsByName(body.pname);
  if (existingProduct) {
    throw StatusError.badRequest('Product with this name already exists');
  }

  const savedProduct = await productService.saveProduct(body);
  res.status(201).json(savedProduct);
});

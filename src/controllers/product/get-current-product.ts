/* eslint-disable prettier/prettier */
import { Request, Response } from 'express';
import { controller } from '@config/controller/controller';
import { IProductRequestObject } from '@modules/product/model';

/**
 * This function is used to get the current product details
 * @param req
 * @param res
 */
export const getCurrentProduct = controller(async (req: Request, res: Response): Promise<void> => {
  const { productDetails }: { productDetails: IProductRequestObject } = req.body;
  
 

  res.status(200).send(productDetails);
});
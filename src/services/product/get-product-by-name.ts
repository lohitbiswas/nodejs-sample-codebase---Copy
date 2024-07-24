/* eslint-disable prettier/prettier */
import mongoose from 'mongoose';
import ProductModel from '@modules/product/schema';

import { ICreateProductRequest } from '@modules/product/model';

export const getproductDetailsByName = async (pname: string): Promise<ICreateProductRequest | null> => {
  const condition = {
    
  };
  const selection = {
    __v: 0,
  };
  const productDetails = await ProductModel.findOne(condition, selection);
  return productDetails;
};

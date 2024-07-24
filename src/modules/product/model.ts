/* eslint-disable prettier/prettier */
import { Document, Types } from 'mongoose';

export interface IProduct extends Document {
  pname: string;
  description: string;
  type: string;
  colour:string;
}

// export interface IUserName {
//   first: string;
//   last: string;
// }

export interface ICreateProductRequest {
    [x: string]: any;
    pname: string;
    description: string;
    colour:string;
    type: string;
}


export interface IUserTokens {
  pname: string;
  description: string;
  accessToken: string;
  accessTokenExpiry: number;
  refreshToken: string;
  refreshTokenExpiry: number;
}

export interface IProductRequestObject {
    pname: string;
    description: string;
    type: string;
    colour:string;
  
}

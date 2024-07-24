/* eslint-disable prettier/prettier */
// /* eslint-disable prettier/prettier */
// import productModel from '@modules/product/schema';
// import { ICreateProductRequest,IProduct } from '@modules/product/model';
// /**
//  * Save new user into db
//  * @param productDetails
//     @returns
//     */
// // export const saveProduct = async (productDetails: ICreateProductRequest): Promise<IProduct> => {
// //   const newProduct: ICreateProductRequest = new productModel({
// //     pname: productDetails.pname,
// //     description: productDetails.description,
// //     type:productDetails.type,
// //     colour:productDetails.colour,
// //   });

// //   await newProduct.save();
// //   return newProduct;
// // };

// export const saveProduct = async (productDetails: ICreateProductRequest): Promise<IProduct> => {
//     try {
//       // Create a new product instance with the provided details
//       const newProduct = new productModel({
//         pname: productDetails.pname,
//         description: productDetails.description,
//         type: productDetails.type,
//         colour: productDetails.colour,
//       });
  
//       // Save the new product to the database
//       await newProduct.save();
  
//       // Return the saved product details
//       return newProduct;
//     } catch (error) {
//       // Handle any errors that occur during the save operation
//       // eslint-disable-next-line no-console
//       console.error("Error saving product:", error);
//       throw new Error("Failed to save product");
//     }
//   };


/* eslint-disable prettier/prettier */
import productModel from '@modules/product/schema';
import { ICreateProductRequest, IProduct } from '@modules/product/model';

export const saveProduct = async (productDetails: ICreateProductRequest): Promise<IProduct> => {
  if (!productDetails || !productDetails.pname) {
    throw new Error('Product details are incomplete');
  }

  const newProduct = new productModel({
    pname: productDetails.pname,
    description: productDetails.description,
    colour: productDetails.colour,
    type: productDetails.type,
  });

  await newProduct.save();
  return newProduct;
};

/* eslint-disable prettier/prettier */
import mongoose, { Schema, Document } from 'mongoose';

// Define the IProduct interface to describe the shape of the product document
export interface IProduct extends Document {
  pname: string;
  description: string;
  colour: string;
  type: string;
}

// Define the schema for the product collection
const ProductSchema: Schema<IProduct> = new Schema(
  {
    pname: { type: String, required: true, trim: true },
    description: { type: String, required: true, unique: true, trim: true },
    colour: { type: String, required: true, trim: true },
    type: { type: String, required: true, trim: true },
  },
  {
    timestamps: true, // Automatically manage createdAt and updatedAt fields
  }
);

// Export the model
export default mongoose.model<IProduct>('Product', ProductSchema, 'products');

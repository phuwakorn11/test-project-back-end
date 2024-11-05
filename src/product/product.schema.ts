// src/product/product.schema.ts

import { Schema } from 'mongoose';

export class Product {
  name: string;
  price: number;
}

export const ProductSchema = new Schema<Product>({
  name: { type: String, required: true },
  price: { type: Number, required: true },
});

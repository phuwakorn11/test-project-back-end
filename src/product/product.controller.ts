import { Product } from './product.schema';
import { ProductService } from './product.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}
  @Get()
  async getAllProducts(): Promise<Product[]> {
    return this.productService.getAllProducts();
  }

  @Get(':id')
  async getProductById(@Param('id') id: string): Promise<Product> {
    return this.productService.getProductById(id);
  }

  @Delete(':id')
  async deleteProduct(@Param('id') id: string): Promise<Product> {
    return this.productService.deleteProduct(id);
  }

  @Post()
  async addProduct(
    @Body() createProductDto: { name: string; price: number },
  ): Promise<Product> {
    return this.productService.addProduct(
      createProductDto.name,
      createProductDto.price,
    );
  }

  @Put(':id')
  async updateProduct(
    @Param('id') id: string,
    @Body() updateProductDto: { name: string; price: number },
  ): Promise<Product> {
    const updatedProduct = await this.productService.updateProduct(
      id,
      updateProductDto,
    );

    return updatedProduct;
  }
}

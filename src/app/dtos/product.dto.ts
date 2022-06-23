
import { Product } from '../models/product.model';
import { Category } from '../models/category.model';

export interface CreateProductDto extends Omit<Product, 'id' | 'category'>{
  // Category['id'] use the strict typing assinged to the ID
  // id changes its type, here is changed dinamically
  categoryId: Category['id'];
}

export interface UpdateProductDto extends Partial<CreateProductDto> {}

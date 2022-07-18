import axios from "axios";
import { UpdateProductDto } from "../dtos/product.dto";

import { Category } from './../models/category.model'
import { Product } from './../models/product.model'

export class BaseHttpService<T> {
  // data: T[] = [];

  constructor(
    private url: string
  ) {}

  async getAll() {
    const { data } = await axios.get<T[]>(this.url);
    return data;
  }

  // this generic name must be different from the class name
  async update<ID, DTO>(id: ID, changes: DTO) {
    const { data } = await axios.put(`${this.url}/${id}`, changes);
    return data;
  }
}

// const service = new BaseHttpService<string>();
// service.getAll();

// const service2 = new BaseHttpService<number>();
// service2.getAll();

// const service3 = new BaseHttpService<Category>();
// service3.getAll();

(async ()=> {
  const url1 = 'https://api.escuelajs.co/api/v1/products'
  const productService = new BaseHttpService<Product>(url1);

  const rta = await productService.getAll();
  console.log('products', rta.length);

  // here we are saying what is the that must infer/use
  productService.update<Product['id'], UpdateProductDto>(1, {
    title: 'nuevo titulo',
    description: 'nueva descripcion',
  });

  const url2 = 'https://api.escuelajs.co/api/v1/categories'
  const categoryService = new BaseHttpService<Category>(url2);

  const rtaCategories = await categoryService.getAll();
  console.log('categories', rtaCategories.length);
})();

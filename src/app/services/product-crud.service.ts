import { UpdateProductDto } from "../dtos/product.dto";
import { Product } from "../models/product.model";
import { BaseHttpService } from "./base-http.service";

export class ProductCRUDService {
  private url = 'https://api.escuelajs.co/api/v1/products';
  private http = new BaseHttpService<Product>(this.url);

  async update(id: Product['id'], dto: UpdateProductDto) {

    // here can add more logic to update the product
    // the request is sent to the BaseHttpService and reused
    return this.http.update(id, dto);
  }
}
import { UpdateProductDto } from "../dtos/product.dto";
import { Product } from "../models/product.model";
import { ProductHttpService } from "./product-http2-inheritance.service";

export class ProductCRUDService {
  private url = 'https://api.escuelajs.co/api/v1/products';
  private http = new ProductHttpService(this.url);

  async update(id: Product['id'], dto: UpdateProductDto) {
    this.http.newRequest(); // I can use now the methods ProductHttpService
    // here can add more logic to update the product
    // the request is sent to the BaseHttpService and reused
    return this.http.update(id, dto);
  }
}
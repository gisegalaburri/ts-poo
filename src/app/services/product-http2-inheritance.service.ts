import { Product } from "../models/product.model";
import { BaseHttpService } from "./base-http.service";

export class ProductHttpService extends BaseHttpService<Product> {

  newRequest() {
    this.url = 'some url';
    // more code here
  }

}
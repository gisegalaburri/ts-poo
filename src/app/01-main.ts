import axios from 'axios';
import { Product } from './models/product.model'

let anyVar: any = 12;
let boolVar: boolean = anyVar;

(async () => {
  // Set the Promise strong typing in the function, says to the outside that the result is an array of Products
  // syntax: async function getProductsAsync(): Promise<Product[]> {
  async function getProductsAsync() {
    // to work with `data` inside:
    // still data is any, but we can set the type to `<Product[]>` in axios.get(),
    //  and typing the Promise is no longer needed
    const { data } = await axios.get<Product[]>('https://api.escuelajs.co/api/v1/products');
    // Now we can use data
    // data.map(item => item.title);
    return data;


    // Forcing strong typing example code:
    // const response = await axios.get('https://api.escuelajs.co/api/v1/products');
    // const data = response.data as Product[]; // <-- this is a cast to Product[]
    // return data;

  }

  const products = await getProductsAsync();
  console.log(products.map(item => `${item.id} - ${item.title}`));
})();

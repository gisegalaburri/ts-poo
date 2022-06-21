import axios from 'axios';

// basic promises without axios
// anonymous function
(async () => {

  function delay(time: number) {
    // Promise has a generic type, similar to Java, by default it is `<unknown>`
    const promise = new Promise<boolean>((resolve) => {
      setTimeout(() => {
        resolve(true);
      }, time);
    });

    return promise;
  }

  function getProducts() {
    const promise = axios.get('https://api.escuelajs.co/api/v1/products');
    // If we use `promise.data` here, it shows this error message:
    // Property 'data' does not exist on type 'Promise<AxiosResponse<any, any>>'. Did you forget to use 'await'?
    return promise;
  }

  // if the function is async, i can add await directly in the promise
  async function getProductsAsync() {
    const promise = await axios.get('https://api.escuelajs.co/api/v1/products');
    // with await I can access to the data directly, without the request information
    return promise.data;
  }

  console.log('---'.repeat(10));
  const result = await delay(3000);
  console.log(result);

  console.log('---'.repeat(10));
  const products = await getProducts(); // this meth returns all the http response
  console.log(products.data);

  console.log('---'.repeat(10));
  const productsAsync = await getProductsAsync();
  console.log(productsAsync);
})();

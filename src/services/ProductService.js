import api from '../utils/api';

const getAll = () => {
   return api.get('/products')
      .then(({ data }) => {
         return data.products;
      })
      .catch(err => console.log(err));
}

const getProduct = (id) => {
   return api.get(`/products/${id}`)
      .then(({ data }) => {
         return data.product;
      });
}

const productsService = {
   getAll,
   getProduct
}

export default productsService;

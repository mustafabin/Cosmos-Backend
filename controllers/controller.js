import ProductModel from '../models/productModel.js';
//import UserModel from '../models/productModel.js';


export const productController = {
  create(request, response) {
    ProductModel
      .create(request.body)
      .then(data => response.json(data))
  },
  //define get route
  get(request, response) {
    ProductModel
      .find({})
      .then(data => response.json(data))

  },
  //define delete route
  delete(request, response) {
    ProductModel
      .deleteOne(request.params.id)
  },

  update(request, response) {
    ProductModel
      .findOneAndUpdate(request.params.id, request.body)
      .then(data => response.json(data))

  },
  getProductById(request, response) {
    ProductModel
      .findById(request.params.id)
      .then(data => response.json(data))

  }
};


export const userController = {
  create(request, response) {
    UserModel
      .create(request.body)
      .then(data => response.json(data))
  },

  //define delete route
  delete(request, response) {
    UserModel
      .deleteOne(request.params.id)
  },

  update(request, response) {
    UserModel
      .findOneAndUpdate(request.params.id, request.body)
      .then(data => response.json(data))

  },

  getUserById(request, response) {
    UserModel
      .findById(request.params.id)
      .then(data => response.json(data))

  }
};



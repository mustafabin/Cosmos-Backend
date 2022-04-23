import ProductModel from "../models/productModel.js";

export const productController = {
  create(request, response) {
    ProductModel.create(request.body)
      .then((data) => response.json(data))
      .catch((error) => console.error(error));
  },
  get(request, response) {
    ProductModel.find({})
      .then((data) => response.json(data))
      .catch((error) => console.error(error));
  },
  delete(request, response) {
    ProductModel.deleteOne(request.params.id).catch((error) =>
      console.error(error)
    );
  },

  update(request, response) {
    ProductModel.findOneAndUpdate(request.params.id, request.body)
      .then((data) => response.json(data))
      .catch((error) => console.error(error));
  },

  getProductById(request, response) {
    ProductModel.findById(request.params.id)
      .then((data) => response.json(data))
      .catch((error) => console.error(error));
  },
};

import model from ('../models/productModel.js');
import express from ('express');


let controller = {
  create(request, response) {
    model
      .create(request.body)
      .then(data => response.json(data))
  },
  //define get route
  get(request, response) {
    model
      .find({})
      .then(data => response.json(data))

  },
  //define delete route
  delete(request, response) {
    model
      .deleteOne(request.params.id)
  },

  update(request, response) {
    model
      .findOneAndUpdate(request.params.id, request.body)
      .then(data => response.json(data))

  },
  getIncidentById(request, response) {
    model
      .findById(request.params.id)
      .then(data => response.json(data))

  }
};


export default controller
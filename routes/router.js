import express from 'express';
import controller from '../controller.js';

let router = new express.Router();

// router.get('/', controller.get);
router.post('/', controller.create);
router.get('/', controller.get);
router.get('//:id', controller.getIncidentById);
router.delete('//:id', controller.delete);
router.put('//:id', controller.update);

export default router;
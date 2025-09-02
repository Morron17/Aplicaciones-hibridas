const express = require('express');
const { body } = require('express-validator');
const router = express.Router();
const locationController = require('../controllers/locationController');
const auth = require('../middlewares/auth');


router.get('/', locationController.list);


router.get('/:id', locationController.getById);


router.post('/', auth, [
  body('name').notEmpty().withMessage('El nombre es obligatorio')
], locationController.create);


router.put('/:id', auth, locationController.update);


router.delete('/:id', auth, locationController.remove);

module.exports = router;
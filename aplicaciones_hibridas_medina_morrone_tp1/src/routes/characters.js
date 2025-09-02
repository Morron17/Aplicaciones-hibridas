const express = require('express');
const { body, query } = require('express-validator');
const router = express.Router();
const characterController = require('../controllers/characterController');
const auth = require('../middlewares/auth');


router.get('/', [
  query('name').optional().isString(),
  query('race').optional().isString(),
  query('faction').optional().isString(),
  query('page').optional().toInt(),
  query('limit').optional().toInt()
], characterController.list);


router.get('/:id', characterController.getById);


router.post('/', auth, [
  body('name').notEmpty().withMessage('El nombre es obligatorio')
], characterController.create);


router.put('/:id', auth, characterController.update);


router.delete('/:id', auth, characterController.remove);

module.exports = router;
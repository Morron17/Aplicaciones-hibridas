const express = require('express');
const { body } = require('express-validator');
const router = express.Router();
const authController = require('../controllers/authController');


router.post('/register', [
  body('name').notEmpty().withMessage('El nombre es obligatorio'),
  body('email').isEmail().withMessage('Debe ser un email válido'),
  body('password').isLength({ min: 6 }).withMessage('Mínimo 6 caracteres')
], authController.register);


router.post('/login', [
  body('email').isEmail().withMessage('Debe ser un email válido'),
  body('password').exists().withMessage('La contraseña es obligatoria')
], authController.login);

module.exports = router;
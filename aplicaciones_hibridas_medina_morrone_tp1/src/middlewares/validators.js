import { body, param } from "express-validator";

export const validateRegister = [
  body("username")
    .notEmpty().withMessage("El nombre de usuario es obligatorio")
    .isLength({ min: 3 }).withMessage("El nombre de usuario debe tener al menos 3 caracteres"),
  body("email")
    .isEmail().withMessage("Debe ser un email válido"),
  body("password")
    .isLength({ min: 6 }).withMessage("La contraseña debe tener al menos 6 caracteres"),
];

export const validateLogin = [
  body("email")
    .isEmail().withMessage("Debe ser un email válido"),
  body("password")
    .notEmpty().withMessage("La contraseña es obligatoria"),
];

export const validateCharacter = [
  body("name")
    .notEmpty().withMessage("El nombre es obligatorio"),
  body("age")
    .isInt({ min: 0 }).withMessage("La edad debe ser un número positivo"),
  body("race")
    .notEmpty().withMessage("La raza es obligatoria"),
  body("faction")
    .notEmpty().withMessage("La facción es obligatoria"),
  body("description")
    .isLength({ min: 10 }).withMessage("La descripción debe tener al menos 10 caracteres"),
  body("image")
    .optional()
    .isURL().withMessage("La imagen debe ser una URL válida"),
];

export const validateLocation = [
  body("name")
    .notEmpty().withMessage("El nombre es obligatorio"),
  body("type")
    .notEmpty().withMessage("El tipo es obligatorio"),
  body("description")
    .isLength({ min: 10 }).withMessage("La descripción debe tener al menos 10 caracteres"),
  body("image")
    .optional()
    .isURL().withMessage("La imagen debe ser una URL válida"),
];

export const validateId = [
  param("id")
    .isMongoId().withMessage("El ID debe ser un ObjectId válido de MongoDB"),
];
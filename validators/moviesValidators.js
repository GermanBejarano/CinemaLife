const { check } = require("express-validator");
const { validateResult } = require("../utils/handleValidator");

const validateObjDataCreateMovie = [
  check('name').exists().notEmpty(),
  check('description').exists().notEmpty(),
  check('summary').exists().notEmpty(),
  check('image').exists().notEmpty(),
  check('date_publication').exists().notEmpty().isDate(),
  check('active').exists().notEmpty().isBoolean(),
  (req, res, next) => {
    validateResult(req, res, next);
  },
];

const validateObjDataUpdateMovie = [
  check("id").exists().isUUID(),
  check('name').exists().notEmpty(),
  check('description').exists().notEmpty(),
  check('summary').exists().notEmpty(),
  check('image').exists().notEmpty(),
  check('date_publication').exists().notEmpty().isDate(),
  check('active').exists().notEmpty().isBoolean(),
  (req, res, next) => {
    validateResult(req, res, next);
  },
];

const validateId = [
  check("id").exists().isUUID(),
  (req, res, next) => {
    validateResult(req, res, next);
  },
];

module.exports = { validateObjDataCreateMovie, validateObjDataUpdateMovie, validateId };
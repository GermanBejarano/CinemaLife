const express = require("express");
const router = express.Router();
const { validateObjDataCreateMovie, validateObjDataUpdateMovie, validateId } = require("../validators/moviesValidators");
const { getMovies, getMovie, createMovie, updateMovie, deleteMovie } = require("../controllers/moviesController");

router.get('/', getMovies);
router.get('/:id', validateId, getMovie);
router.post('/', validateObjDataCreateMovie, createMovie);
router.put('/:id', validateObjDataUpdateMovie, updateMovie);
router.delete('/:id', validateId, deleteMovie);

module.exports = router;
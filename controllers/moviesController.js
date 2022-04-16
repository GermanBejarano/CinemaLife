const response = require('../utils/handleResponses');
const { matchedData } = require("express-validator");
const { moviesModel } = require('../models');

// Consultar todas las peliculas
const getMovies = async (req, res) => {
    try {
        const data = await moviesModel.findAll({
            attributes: { exclude: ['createdAt', 'updatedAt'] },
            order: [['name', 'DESC']]
        });

        const result = {
            state: true,
            movies: data
        };

        response.success(req, res, result, 201, '¡Success!');
    } catch (error) {
        const result = {
            state: false,
            error: error.message
        };
        response.error(req, res, result, 400, 'Error!');
    }
};

// Consultar una pelicula por id
const getMovie = async (req, res) => {
    try {
        req = matchedData(req);
        const id = req.id;

        const data = await moviesModel.findByPk(id,
            {
                attributes: { exclude: ['createdAt', 'updatedAt'] },
            }
        );
        const result = {
            state: true,
            movies: data
        };

        response.success(req, res, result, 201, '¡Success!');
    } catch (error) {
        const result = {
            state: false,
            error: error.message
        };
        response.error(req, res, result, 400, 'Error!');
    }
};

// Crear un registro
const createMovie = async (req, res) => {
    try {
        req = matchedData(req);
        const data = await moviesModel.create(req);
        const result = {
            state: true,
            id_movie: data.id_movie
        };

        response.success(req, res, result, 201, '¡Success!');
    } catch (error) {
        const result = {
            state: false,
            error: error.message
        };
        response.error(req, res, result, 400, 'Error!');
    }

};

// Actualizar un registro
const updateMovie = async (req, res) => {
    try {
        req = matchedData(req);
        const { id, ...body } = req;

        const data = await moviesModel.update(
            body,
            { where: { id_movie: id } }
        );
        const result = {
            state: true,
            updated_records: data.length
        };

        response.success(req, res, result, 201, '¡Success!');
    } catch (error) {
        const result = {
            state: false,
            error: error.message
        };
        response.error(req, res, result, 400, 'Error!');
    }
};

// Eliminar un registro
const deleteMovie = async (req, res) => {
    try {
        req = matchedData(req);
        const id = req.id;

        const data = await moviesModel.destroy({
            where: { id_movie: id }
        });
        const result = {
            state: true,
            deleted_records: data
        };

        response.success(req, res, result, 201, '¡Success!');
    } catch (error) {
        const result = {
            state: false,
            error: error.message
        };
        response.error(req, res, result, 400, 'Error!');
    }
};

module.exports = { getMovies, getMovie, createMovie, updateMovie, deleteMovie }
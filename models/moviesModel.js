const { sequelize } = require("../config/mysql");
const { DataTypes } = require("sequelize");

const movies = sequelize.define(
    "movies",
    {
        id_movie: {
            type: DataTypes.UUID,
            allowNull: false,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.TEXT,
        },
        summary: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        image:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        date_publication: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        active: {
            type: DataTypes.BOOLEAN,
            allowNull:false,
        },
    },
    {
        timestamps: true,
    }
);

module.exports = movies;

/**id_movie BINARY(16) PRIMARY KEY,
    name VARCHAR(50),
    description VARCHAR(200),
    summary TEXT,
    date_publication DATE,
    image VARCHAR(200) */
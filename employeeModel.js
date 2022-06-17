/*
** Author: Fuad
** github.com/FuadHy
** To: addissoftwares
*/
const sequelize = require('./db')
const { Sequelize, DataTypes } = require('sequelize');

module.exports = sequelize.define('Employee', {
    _id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
    },
    first_name: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    last_name: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    age: {
        type: DataTypes.NUMBER,
        allowNull: false
    },
    gender: {
        type: DataTypes.CHAR,
        allowNull: false
    },
    height: {
        type: DataTypes.NUMBER,
        allowNull: false
    },
})
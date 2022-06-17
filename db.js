/*
** Author: Fuad
** github.com/FuadHy
** To: addissoftwares
*/
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: require('path').join(__dirname + 'db.sqlite')
})

module.exports = sequelize
const Sequelize = require('sequelize');



let sequelize = new Sequelize({
  dialect: 'mssql',
  dialectModulePath: 'sequelize-msnodesqlv8',
  dialectOptions: {
    instanceName: 'LAPTOP-7QFI8UV/josem',
    trustedConnection: true
  },
  host: 'localhost',
  database: 'TIENDA_ONLINE'
});
module.exports = sequelize;
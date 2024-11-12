const fs = require('fs');
const path = require('path');
const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('database', 'username', 'password', {
  host: 'localhost',
  dialect: 'sqlite' // hoặc database dialect bạn đang sử dụng
});

const db = {};

fs.readdirSync(__dirname)
  .filter(file => file.endsWith('.js') && file !== 'index.js') // Lọc các file model
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes); // Import model
    db[model.name] = model;
  });

// Thiết lập các mối quan hệ (associations) nếu có
Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;

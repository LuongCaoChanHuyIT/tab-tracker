module.exports = (sequelize, DataType) => 
  sequelize.define('User', {
    email:{
      type: DataType.STRING,
      unique: true
    },
    password: DataType.STRING
  })
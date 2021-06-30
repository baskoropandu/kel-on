'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserClass extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  UserClass.init({
    ClassId:  DataTypes.INTEGER,     
    UserId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'UserClass',
  });
  return UserClass;
};
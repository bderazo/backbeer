const { UserModel, UserSchema } = require('./user.model');
const { Customer, CustomerSchema } = require('./customer.model');

function setupModels(sequelize) {
  UserModel.init(UserSchema, UserModel.config(sequelize));
  UserModel.init(CustomerSchema, Customer.config(sequelize));
}

module.exports = setupModels;

const User = require('../models/User');

module.exports = {
  Query: {
    users: () => User.find(),
    user: (_, { id }) => User.findById(id)
  },

  Mutation: {
    createUser: (_, { username, first_name, last_name, email, password }) =>
    User.create({ username, first_name, last_name, email, password })
  }
};
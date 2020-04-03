const User = require('../models/User');

module.exports = {
  Query: {
    users: () => User.find(),
    user: (_, { id }) => User.findById(id)
  },

  Mutation: {
    createUser: async (_, { username, first_name, last_name, email, password }) =>
    await User.create({ username, first_name, last_name, email, password }),
    updateUser: async (_, args) => 
    await User.findByIdAndUpdate({_id: args.id}, args, {new: true}),
    removeUser: async (_, { id }) =>
    await User.findOneAndRemove(id)
  }
};
import { getUsers, createUser } from "../../services/users.mjs";

const resolvers = {
  Query: {
    hello: () => "world",
    getUser: async () => {
      try {
        const users = await getUsers();
        if (users) return users;
        return false;
      } catch (error) {
        console.log(error.message);
        return false;
      }
    },
  },

  Mutation: {
    register: async (parent, { data }, context, info) => {
      try {
        const userRegistered = await createUser(data);
        return userRegistered ? { userName: data.userName, email: data.email } : false;
      } catch (error) {
        console.log(error.name);
        throw error;
      }
    },
  },
};

export default resolvers;

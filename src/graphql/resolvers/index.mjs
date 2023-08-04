import { getUsers } from "../../services/users.mjs";

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
};

export default resolvers;

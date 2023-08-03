const resolvers = {
  Query: {
    hello: () => "world",
    getUser: () => {
      const users = [
        {
          userName: "John",
          email: "john@doe.com",
        },
        {
          userName: "Jane",
          email: "jane@doe.com",
        },
      ];
      return users;
    },
  },
};

export default resolvers;

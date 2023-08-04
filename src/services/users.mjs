import { db } from "./../db/config.mjs";

const getUsers = async () => {
  try {
    const users = await db.user.findAll({ raw: true });
    users.forEach((user) => (user.userName = user.name));
    return users;
  } catch (error) {
    console.log(error.name);
    return false;
  }
};

const createUser = async (data) => {
  try {
    //TODO: Validate Input and encrypt password

    const { id } = await db.user.create({
      ...data,
      name: data.userName,
    });

    return id ?? false;
  } catch (error) {
    console.log(error.name);
    throw error;
  }
};

export { getUsers, createUser };

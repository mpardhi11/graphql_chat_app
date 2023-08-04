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

export { getUsers };

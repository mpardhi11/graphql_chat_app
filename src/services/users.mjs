import { db } from "./../db/config.mjs";
import bcrypt from "bcryptjs";
import { GraphQLError } from "graphql";

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

const createUser = async ({ conformPassword, email, password, userName }) => {
  let error = {};
  try {
    //TODO: Validate Input and encrypt password
    if (email.trim() === "") error.email = "email must not be empty";
    if (userName.trim() === "") error.userName = "userName must not be empty";
    if (password.trim() === "") error.password = "password must not be empty";
    if (conformPassword.trim() === "") error.conformPassword = "conformPassword must not be empty";
    if (password !== conformPassword) error.pass = "conformPassword and password must be same";
    if (password !== conformPassword) error.pass = "conformPassword and password must be same";

    const userByUserName = await db.user.findOne({ where: { name: userName } });
    if (userByUserName) error.userName = "username is taken";
    const userByEmail = await db.user.findOne({ where: { email } });
    if (userByEmail) error.email = "email is taken";

    if (Object.keys(error).length) throw error;

    password = await bcrypt.hash(password, 6);

    const { id } = await db.user.create({
      email,
      password,
      name: userName,
    });

    return id ?? false;
  } catch (error) {
    console.log(error.name);
    if (error.name === "SequelizeUniqueConstraintError") {
      error.errors.forEach((e) => (error[e.path] = `${e.path} is already taken`));
    } else if (error.name === "SequelizeValidationError") {
      error.errors.forEach((e) => (error[e.path] = e.message));
    }

    throw new GraphQLError("BAD_USER_INPUT", {
      extensions: { code: "BAD_USER_INPUT", error },
    });
  }
};

export { getUsers, createUser };

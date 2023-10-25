import { v4 as uuidv4 } from "uuid";

//Creating array for storing user data with parameters
let users = [];

// All routes in here are starting with /users
// This chunk will fetch/get current data for users
export const getUsers = (req, res) => {
  res.send(users);
};

// Adding Unique ID to all user
// This chunk will create/add raw data in json format with uuidv4 api
export const createUser = (req, res) => {
  const user = req.body;
  users.push({ ...user, id: uuidv4() });
  res.send(`User with the name ${user.firstName} added to database!!`);
};

// This chunk will fetch/get user's data once it's updated from above chunk with {firstName, lastName, age}
//-----  "/:id" ----- is main for navigation with api's as it serve's as placeholder for requested/given parameters
//for single user fetching data
export const getUser = (req, res) => {
  const { id } = req.params;
  const foundUser = users.find((user) => user.id === id);
  res.send(foundUser);
};

// This chunk will remove/delete/filter user data from database with the ID given in the request
export const deleteUser = (req, res) => {
  const { id } = req.params;
  users = users.filter((user) => user.id !== id);
  res.send(`User with the id ${id} deleted from database`);
};

// This chunk will update user data as per given parameters {firstName, lastName, age}
export const updateUser = (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, age } = req.body;

  const user = users.find((user) => user.id === id);

  if (firstName) user.firstName = firstName;
  if (lastName) user.lastName = lastName;
  if (age) user.age = age;

  res.send(`User with the id${id} is updated`);
};

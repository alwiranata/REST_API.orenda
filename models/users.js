const dbPool = require("../config/database.js");
const getAllUsers = () => {
  const SQLQuery = "SELECT * FROM users";

  return dbPool.execute(SQLQuery);
};

const createNewUser = (body) => {
  const SQLQuery = ` INSERT INTO users (name,email,address) VALUES ('${body.name}','${body.email}' ,'${body.address}')`;
  return dbPool.execute(SQLQuery);
};

const updateUsers = (body, idUser) => {
  const SQLQuery = `UPDATE users SET name='${body.name}' , email='${body.email} ', address='${body.address}' WHERE idusers='${idUser}'`;
  return dbPool.execute(SQLQuery);
};

const deleteUsers = (body, idUser) => {
  const SQLQuery = `DELETE FROM users WHERE idusers='${idUser}'`;
  return dbPool.execute(SQLQuery);
};

module.exports = {
  getAllUsers,
  createNewUser,
  updateUsers,
  deleteUsers,
};

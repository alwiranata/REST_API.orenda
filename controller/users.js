const userModel = require("../models/users.js");

const getAllUsers = async (req, res) => {
  try {
    const [data] = await userModel.getAllUsers();
    res.json({
      message: "Get all users success",
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      serverMessage: error,
    });
  }
};

const createNewUser = async (req, res) => {
  const { body } = req;
  try {
    await userModel.createNewUser(body);
    res.json({
      message: "Create new users success",
      data: req.body,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      serverMessage: error,
    });
  }
};

const updateUsers = async (req, res) => {
  const { idUser } = req.params;
  const { body } = req;
  try {
    await userModel.updateUsers(body, idUser);
    res.json({
      message: "Update user success",
      data: {
        id: idUser,
        ...body,
      },
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      serverMessage: error,
    });
  }
};

const deleteUsers =async (req, res) => {
  const { idUser } = req.params;
  const { body } = req;
  try {
    await userModel.deleteUsers(body,idUser)
    res.json({
      message: "Delete user success",
      data: null,
      
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
      serverMessage: "error",
    });
  }
};

module.exports = {
  getAllUsers,
  createNewUser,
  updateUsers,
  deleteUsers,
};

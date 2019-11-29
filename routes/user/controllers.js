const mongoose = require("mongoose");
const User = require("../../models/user");
// const objectId = mongoose.Schema.Types.ObjectId;

module.exports = {
  addUser: (req, res) => {
    User.create(req.body)
      .then(result =>
        res.send({
          message: "user created",
          result
        })
      )
      .catch(error =>
        res.send({
          message: "user failed to add",
          error: error.stack
        })
      );
  },
  getUserById: (req, res) => {
    User.findById({
      _id: req.params.id
    })
      .then(result =>
        res.send({
          message: "your user with the ID",
          result
        })
      )
      .catch(error =>
        res.send({
          message: "error when get user ID",
          error: error.stack
        })
      );
  },
  deleteUser: (req, res) => {
    User.findOneAndDelete(
      { _id: req.params.id },
      {
        rawResult: false
      }
    )

      .then(result =>
        res.send({
          message: "user deleted",
          result
        })
      )
      .catch(error =>
        res.send({
          message: "delete user failed",
          error: error.catch
        })
      );
  },
  updateUser: (req, res) => {
    User.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
      .then(result => res.send({ message: "user updated", result }))
      .catch(error => res.send({ message: "failed update user", error: error.stack }));
  },
  getUser: (req, res) => {
    User.find()
      .then(result =>
        res.send({
          message: "All user",
          result
        })
      )
      .catch(error =>
        res.send({
          mesage: "error when get all user",
          error
        })
      );
  }
};

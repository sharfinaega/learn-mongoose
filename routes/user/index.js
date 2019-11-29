var express = require("express");
var router = express.Router();

const { addUser, getUser, updateUser, deleteUser, getUserById } = require("./controllers");

/* GET users listing. */
router.post("/", addUser);
router.get("/:id", getUserById);
router.get("/", getUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

module.exports = router;

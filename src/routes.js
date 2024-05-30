const { Router } = require("express");
const verifyToken = require("./middlewares/AuthMiddleware");

const {
  health,
  createUser,
  listUsers,
  detailUser,
  deleteUser,
  updatedUser,
} = require("./controllers/users");

const routes = Router();

routes.get("/", health);
routes.post("/users", verifyToken, createUser);
routes.get("/users", listUsers);
routes.get("/users/:id", detailUser);
routes.delete("/users/:id", deleteUser);
routes.put("/users/:id", updatedUser);

module.exports = routes;

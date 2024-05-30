const { json } = require("express");

let users = [];
function health(req, res) {
  return res.status(200).json("Api está rodando");
}

function createUser(req, res) {
  const { name, age } = req.body;
  const newUser = {
    id: users.length ? users[users.length - 1].id + 1 : 1,
    name,
    age,
  };
  users.push(newUser);
  res.status(201).json("Usuário criado");
}

function listUsers(req, res) {
  res.send(users);
}

function detailUser(req, res) {
  const currentUser = users.find((item) => item.id === parseInt(req.params.id));
  if (!currentUser) {
    return res.status(404).json("Usuário não econtrado");
  }
  return res.send(currentUser);
}

function deleteUser(req, res) {
  const index = users.findIndex((item) => item.id === parseInt(req.params.id));
  if (index === -1) {
    return res.status(404).json("Usuário não encontrado");
  }
  users.splice(index, 1);
  res.status(200).json("Usuário deletado com sucesso!");
}

function updatedUser(req, res) {
  const { name, age } = req.body;
  const index = users.findIndex((item) => item.id === parseInt(req.params.id));
  if (index === -1) {
    res.status(404).json("Usuário não encontrado!");
  }
  const updatedUser = {
    id: users[index].id,
    name,
    age,
  };
  users[index] = updatedUser;
  res.status(200).json(updatedUser);
}

module.exports = {
  health,
  createUser,
  listUsers,
  detailUser,
  deleteUser,
  updatedUser,
};

//This file is given for developement purpose, do not change anything here if not needed!!!!!!!!!!!
const bcrypt = require("bcryptjs");

const password = "";
const hashedPassword = bcrypt.hashSync(password, 8);

console.log("Hashed Password:", hashedPassword);

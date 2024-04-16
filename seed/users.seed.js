const bcrypt = require("bcryptjs");
require("../db/index.js");
const User = require("../models/User.model.js");

//create data to seed
const password = "azerty";
const safePassword = bcrypt.hashSync(password);
const users = [
  {
    firstName: "Alex",
    lastName: "BeauGosse",
    email: "alex@beaugosse.mail",
    password: safePassword,
  },
  {
    firstName: "Emma",
    lastName: "Smith",
    email: "emma.smith@example.com",
    password: safePassword,
  },
  {
    firstName: "Max",
    lastName: "Johnson",
    email: "max.johnson@example.com",
    password: safePassword,
  },
  {
    firstName: "Sophie",
    lastName: "Taylor",
    email: "sophie.taylor@example.com",
    password: safePassword,
  },
  {
    firstName: "Liam",
    lastName: "Martinez",
    email: "liam.martinez@example.com",
    password: safePassword,
  },
  {
    firstName: "Ava",
    lastName: "Gonzalez",
    email: "ava.gonzalez@example.com",
    password: safePassword,
  },
  {
    firstName: "Noah",
    lastName: "Lopez",
    email: "noah.lopez@example.com",
    password: safePassword,
  },
  {
    firstName: "Olivia",
    lastName: "Harris",
    email: "olivia.harris@example.com",
    password: safePassword,
  },
  {
    firstName: "Charlie",
    lastName: "Brown",
    email: "charlie.brown@example.com",
    password: safePassword,
  },
];

//insert data into collection

async function seed() {
  try {
    await User.deleteMany();
    const createdUser = await User.create(users);
  } catch (error) {
    console.log(error);
  } finally {
    process.exit();
  }
}
seed();

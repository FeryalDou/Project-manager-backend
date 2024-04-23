const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User.model.js");
const isAuthenticated = require("../middlewares/isAuthenticated.js");

const SALT = 13;

router.post("/signup", async (req, res, next) => {
  try {
    const { firstName, lastName, email, password } = req.body;
    console.log(firstName, lastName, email, password);
    // Vérifier si l'utilisateur existe déjà
    const foundUser = await User.findOne({ email });
    if (foundUser) {
      console.log("No user found with email:", email);

      return res.status(400).json({ message: "This email is already used" });
    }

    // Hasher le mot de passe
    const hashedPassword = await bcrypt.hash(password, SALT);

    // Créer un nouvel utilisateur
    const createdUser = await User.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
    });

    res.status(201).json({
      message: "User created",
      id: createdUser._id,
    });
  } catch (error) {
    next(error);
  }
});

router.post("/login", async (req, res, next) => {
  try {
    const { email, password } = req.body;

    // Trouver l'utilisateur dans la base de données

    const foundUser = await User.findOne({ email }, { password: 1, email: 1 });
    if (!foundUser) {
      return res.status(400).json({ message: "Wrong credentials" });
    }

    // Vérifier le mot de passe
    const correctPassword = await bcrypt.compare(password, foundUser.password);
    if (!correctPassword) {
      return res.status(400).json({ message: "Wrong credentials" });
    }

    // Générer le token JWT
    const token = jwt.sign({ id: foundUser._id }, process.env.TOKEN_SECRET, {
      algorithm: "HS256",
      expiresIn: "7d",
    });

    res.json({ authToken: token });
  } catch (error) {
    next(error);
  }
});

router.get("/verify", isAuthenticated, async (req, res, next) => {
  try {
    // Récupérer les informations de l'utilisateur à partir du token JWT
    const user = await User.findById(req.currentUserId);
    res.json(user);
  } catch (error) {
    next(error);
  }
});

module.exports = router;

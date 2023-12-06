import jwt from "jsonwebtoken";
import db from "../models/index.js";

export const verifyToken = (req, res, next) => {
  //get accessToken from cookies
  const token = req.cookies && req.cookies.accessToken;
  if (!token) return res.status(401).json("Not logged in!");

  //verify the token
  jwt.verify(token, "secretkey", (err, decodedData) => {
    if (err) return res.status(403).json("Token is not valid!");
    req.userId = decodedData.id;
    next();
  });
};

export const verifyAdmin = (req, res, next) => {
  // get the userId, because it was set by ( req.userId = decodedData.id ) in the previous verifying step
  // get the user from database, and see whether the role of current user is 'Admin'
  const userId = req.userId;

  const q = "select * from users where id = ?";
  return db.query(q, [userId], (err, data) => {
    if (err) return res.status(500).json(err);

    if (!data.length) return res.status(404).json("User not found");

    const user = data[0];

    if (user.role === "Admin") {
      next();
    } else {
      res.status(403).send({
        message: "Require Admin Role!",
      });
    }
  });
};

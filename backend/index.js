import express from "express";
import cookieParser from "cookie-parser";
import userRoutes from "./routes/user-routes.js";
import authRoutes from "./routes/auth-routes.js";
import cors from "cors";

const app = express();

//Parsing the JSON data in HTTP，and apply the data to (request.body)
app.use(express.json());

//Parsing Cookies in HTTP Requests，and apply the cookie info to (request.cookies)
app.use(cookieParser());

// allow the Cross-Origin request from this origin
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Credentials", true);
  next();
});

app.use(
  cors({
    origin: "http://127.0.0.1:5173",
  })
);

// test api
app.get("/test", (req, res) => {
  res.json("test url 11");
});

app.use(authRoutes);

userRoutes(app);

app.listen(3003);

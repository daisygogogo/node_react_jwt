import { verifyToken, verifyAdmin } from "../middleware/authJwt.js";

const userRoutes = (app) => {
  app.get("/user/getCommonUserContent", [verifyToken], async (req, res) => {
    res.status(200).json({ commonUserContent: 1111 });
  });

  app.get(
    "/user/getAdminContent",
    [verifyToken, verifyAdmin],
    async (req, res) => {
      res.status(200).json({ adminContent: [1, 2, 3] });
    }
  );
};

export default userRoutes;

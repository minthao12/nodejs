import { Router } from "express";
import mobileRouter from "./mobile";
import authRouter from "./auth";

const router = Router();
router.get("/", (req, res) => {
    res.render("hlw");
});
router.use("/mobile", mobileRouter);
router.use("/auth",authRouter );
export default router;
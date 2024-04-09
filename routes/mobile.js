import { Router } from "express";
import MobileController from "../controllers/mobile";
const mobileRouter = Router();
const mobileCOntroller = new MobileController();

mobileRouter.get("/", mobileCOntroller.getAllMobile);
mobileRouter.get("/:id", mobileCOntroller.getMobileDetail);
mobileRouter.post("/", mobileCOntroller.createMobile);
mobileRouter.put("/:id", mobileCOntroller.updateMobile);
mobileRouter.delete("/:id", mobileCOntroller.deleteMobile);
export default mobileRouter;
import express from "express";
const router = express.Router();

import HomeSecondSectionController from "../Controller/HomeSecondSectionController.js";

router.get('/', HomeSecondSectionController.getHomeSecondSection)
export default router;

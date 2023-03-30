import { Router } from "express";

import newsRouter from "./endpoint/newsEndpoint";
const router = Router();

router.use("/", newsRouter);
export default router;

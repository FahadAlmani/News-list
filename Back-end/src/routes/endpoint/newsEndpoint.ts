import { Router } from "express";
import {
  index,
  searchById,
  searchBySource,
  searchByTitle,
} from "../../handlers/userHandler";

const router = Router();

router.get("/byId/:id", searchById);
router.get("/bySource/:source", searchBySource);
router.get("/index", index);
router.get("/byTitle/:title", searchByTitle);

export default router;

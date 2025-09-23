import { Router } from "express";
import { shorten } from "./controllers/shorten.js";
import { redirect } from "./controllers/redirect.js";
import { getUsers, addUser } from "./controllers/users.js";

const router = new Router();

// router.get("/api/url/shorten", shorten);
// router.get("/s/:hash", redirect);

router.get("/api/users", getUsers);
router.post("/api/user", addUser);

export default router;
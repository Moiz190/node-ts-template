import Express from "express";
import { authRoutes } from "@/routes/v1/auth";

const router = Express.Router();

router.use(authRoutes);

export default router;

export { router as v1Routes };

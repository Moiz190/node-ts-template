import Express from "express";
import { handleLogin } from "@/controller/v1";
const router = Express.Router();
router.post('/login', handleLogin)

export default router
export { router as authRoutes }
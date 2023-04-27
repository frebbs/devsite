import express from 'express';
const router = express.Router();
import userAPI from "../models/userAPI.js";
import UserAPI from "../models/userAPI.js";

router.post('/login', userAPI.login);
router.post('/createUser', UserAPI.createUser)
router.post('/findAllUsers', UserAPI.findAllUsers)
export default router;

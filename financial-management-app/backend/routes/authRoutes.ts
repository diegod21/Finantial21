import express from 'express';
const router = express.Router();
import registerUser from "./authController/registerUser";
import loginUser from "./authController/loginUser";
import { Module } from 'module';

router.post('/register', registerUser);
router.post('/login', loginUser);

module.exports = router;
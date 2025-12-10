import { Router } from 'express';
import User from '../models/User.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { check, validationResult } from 'express-validator';
// import authMiddleware from './middleware/auth.middleware.js';

const router = Router();

router.post(
  '/registration',
  [
    check('email', 'Invalid email format').isEmail(),
    check('password', 'Password must be 3–12 characters long').isLength({ min: 3, max: 12 }),
    check('name', 'Name is required').notEmpty(),
    check('surname', 'Surname is required').notEmpty()
  ],
  async (req, res) => {
    const errors = validationResult(req);

    if( !errors.isEmpty() ) {
      return res.status(400).json({
        message: 'Incorrect request',
        errors: errors.array()
      });
    }

    try {
      const { email, password, name, surname } = req.body;

      const candidate = await User.findOne({ email });
      if( candidate ) {
        return res.status(400).json({
          message: `User with email ${email} already exists`
        });
      }

      // Hash password
      const hashPassword = await bcrypt.hash(password, 8);

      // Create user
      const user = await User.create({
        email,
        password: hashPassword,
        name,
        surname
      });

      return res.status(201).json({
        message: 'User was created successfully',
        userId: user._id
      });

    } catch (error) {
      console.error(error);
      return res.status(500).json({
        message: 'Registration error'
      });
    }
  }
);

export default router;

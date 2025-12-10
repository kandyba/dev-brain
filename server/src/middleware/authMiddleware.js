import jwt from 'jsonwebtoken';

export default function authMiddleware(req, res, next) {
  if (req.method === "OPTIONS") {
    return next();
  }

  try {
    const token = req.headers.authorization?.split(" ")[1];

    if(!token) {
      return res.status(401).json({message: 'No token provided'});
    }

    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);

    req.user = decodedToken;

    next();
  } catch (error) {
    return res.status(401).json({ message: 'Invalid token' });
  }
};


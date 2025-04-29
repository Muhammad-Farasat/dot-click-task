import jwt from 'jsonwebtoken';

export const verifyToken = (req, res, next) => {
    try {
        const token = req.cookies.authorization; // or whatever name you used

        console.log(token);
        

        if (!token) {
            return res.status(401).json({ message: "No token provided" });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET); // make sure JWT_SECRET is set
        req.user = decoded;

        next();
    } catch (error) {
        console.error("Token verification failed", error);
        return res.status(401).json({ message: "Invalid or expired token" });
    }
};

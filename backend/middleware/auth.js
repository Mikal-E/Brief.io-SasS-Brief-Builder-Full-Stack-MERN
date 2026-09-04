import jwt from "jsonwebtoken";

/* Auth middleware to verify the JWT and set req.user. The front end sends Authorization: Bearer <token> on requests to protected routes. Sets req.user.id for use in downstream routes. */

const requireAuth = (req, res, next) => {

    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {

        return res.status(401).json({ message: "You need to be logged in to do that." });

    }

    const token = authHeader.split(" ")[1];

    try {

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = { id: decoded.id };
        next();

    } catch (error) {

        return res.status(401).json({ message: "Your session has expired. Please log in again." });

    }
};

export default requireAuth;
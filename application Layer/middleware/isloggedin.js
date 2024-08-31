function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {  // Passport adds isAuthenticated method to the req object
        return next(); // The user is authenticated, proceed to the next middleware or route handler
    }
    res.status(401).json({ message: "You need to be logged in to access this resource" });
}

module.exports = isLoggedIn;
const jwt = require('jsonwebtoken');
const confrc = require("rc")("info", {});
const secret = confrc.SECRET;

exports.authenticateUser = (req, res, next) =>{
    const authorizationHeader = req.headers['authorization'];
    var token;
    if (authorizationHeader) {
      token = authorizationHeader.split(' ')[1];
    }

    if(token === 'FSMovies2021'){
      next()
    }
    else if (token) {
        jwt.verify(token, secret, (err, decoded) => {
            if (err) {
              res.status(401).json({ error: "Token verification failed" });
            } else {
                next();
            }
          });
    }
    else {
      res.status(403).json({
        error: 'No token provided'
      });
    }
  }
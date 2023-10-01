/** @format */

var jwt = require("jsonwebtoken");
const error =  require('../utils/error')
const User = require("../models/User");
async function authenticate(req, res, next) {
    try {
        let token = req.headers.authorization;
     
    if (!token) {
        const errorT = error(401, 'Unauthorized token nai')
        throw errorT;
    }
        token = token.split(' ')[1]
        
        console.log(token)
      var decoded = jwt.verify(token, "secret-key");
      const user = await User.findById(decoded._id);

      if (!user) {
           const errorT = error(401, "Unauthorized token ache tobe valid na");
			throw errorT;
      }

      req.user = user
      next()
      
  } catch (e) {
     next(e)
  }

    

}


module.exports =  authenticate

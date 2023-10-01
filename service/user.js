const User = require('../models/User')
const findUserByProperty =  ( key, value ) => {
    if (key === "_id") {
        return user =  User.findById({value})
    }
    const user =  User.findOne({ [key]: value })
    return user
}


const creteUser = ({ name, email, password }) => {
    const user = new User({ name, email, password });
    return user.save()
}

module.exports = { findUserByProperty, creteUser };
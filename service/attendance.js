const AdminAttendance =  require('../models/AdminAttendance')

const getStatus = async() => {
    return await AdminAttendance.findOne({status: 'RUNNING'})
}  

module.exports =  {getStatus}
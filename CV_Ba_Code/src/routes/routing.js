const express = require('express');
const Router = express.Router();
const upload = require('../middleware/multerMiddleware');

// Controller imports
const Roles = require('../controllers/rolesController'); 
const Users = require('../controllers/usersController');
const { verifyToken } = require('../middleware/authMiddleware');

const mainStreams = require('../controllers/mainStreamsController');
const SubStreams = require('../controllers/subStreamsController')


// tbl_employee_types routes
Router.post('/AddRole', Roles.create); // Create a new Role
Router.get('/GetAllRoles', Roles.GetAll); // Retrieve all Roles

// Example of a protected route
Router.get('/protected', verifyToken, (req, res) => {
    res.json({ message: 'This is a protected route', userId: req.userId, roleId: req.role_id });
});

// Users Routes
// login OTP verifiation 
Router.post('/sendOTP', Users.sendCode);
Router.post('/verifyOTP', Users.verifyOTP);
Router.post('/login', Users.loginUser);

Router.post('/AddUser', upload.fields([
    { name: 'IdProof',maxCount: 1 },
    { name: 'photo', maxCount: 1 },
    { name: 'sscMarkSheet', maxCount: 1 },
    { name: 'hscMarkSheet', maxCount: 1 },
    { name: 'ugCertificate', maxCount: 1 },
    { name: 'pgCertificate', maxCount: 1 },
    { name: 'phdCertificate', maxCount: 1 },
    { name: 'resume', maxCount: 1 }
]),  Users.CreateUser);

Router.get('/GetAllUsers', Users.GetAllUsers);
Router.get('/GetAllCounsellor', Users.GetAllCounsellors)
Router.get('/User/:id', Users.GetUsersById);
Router.delete('/deleteUser/:id',Users.deleteUserById);
Router.put('/UpdateUser/:id', Users.updateUserById);

// Main Streams Routes
Router.get('/GetAllMainStreams', mainStreams.GetAllMainStreams)

// Sub Streams Routes
Router.get('/GetAllMainStreamWiseSubStreams/:id', SubStreams.GetAllMainStreamWiseSubStreams);

module.exports = Router;

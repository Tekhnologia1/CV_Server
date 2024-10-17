const express = require('express');
const Router = express.Router();

// tbl_employee_types 
const Roles = require('../controllers/rolesController'); 

Router.post('/AddRole', Roles.create); // Create a new Role
Router.get('/GetAllRoles', Roles.GetAll); // Retrieve all Roles

// tbl_users
const Users = require('../controllers/usersController')

const { verifyToken } = require('../middleware/authMiddleware');
// Example of a protected route
Router.get('/protected', verifyToken, (req, res) => {
    res.json({ message: 'This is a protected route', userId: req.userId, roleId: req.role_id });
});

// login OTP verifiation 
Router.post('/sendOTP', Users.sendCode);
Router.post('/verifyOTP', Users.verifyOTP);

Router.post('/AddUser', Users.CreateUser);
Router.post('/login', Users.loginUser);
Router.get('/GetAllUsers', Users.GetAllUsers);
Router.get('/User/:id', Users.GetUsersById);
Router.delete('/deleteUser/:id',Users.deleteUserById);
Router.put('/UpdateUser/:id', Users.updateUserById);


module.exports = Router;

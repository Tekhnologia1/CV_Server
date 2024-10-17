const { query } = require('express');
const sql = require('../config/database');

const create = async (req, res) => {
    if (!req.body) {
        return res.status(400).json({ message: 'Request Body can not be empty' });
    }
    const { roleName, descreption } = req.body;
    if (!roleName) {
        return res.status(400).json({
            message: 'role name must be important',
            received: req.body
        });
    }
    try {
        //call store procedure
        const rows = await sql.query('CALL CreateRoles(?,?)', [
            roleName,
            descreption
        ]);
        const RolesId = rows[0]?.[0]?.role_id;
        if (!RolesId) {
            return res.status(201).json({
                message: 'Role added successfully',
                RolesId: RolesId,
                requestBody: req.body
            });
        }
        return res.status(500).json({
            message: 'An error occurred while adding the new Role',
            requestBody: req.body
        });
    } catch (error) {
        console.error('Error adding Role:', error);
        return res.status(500).json({
            message: 'Server error',
            error: error.message
        });
    }
};

// Get All Roles
const GetAll = async(req, res) =>{
    try{
        const result= await sql.query('CALL GetAllroles()');
        const roles = result[0];
        if (!roles || roles.length === 0) {
            return res.status(404).json({ message: 'No roles found' });
        }
        return res.status(200).json(roles);
    } catch (error) {
        console.error('Error fetching roles:', error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
}

module.exports = {create, GetAll};

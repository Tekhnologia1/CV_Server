const { query } = require('express');
const sql = require('../config/database');

const GetAllMainStreams = async(req, res) =>{
    try{
        const result= await sql.query('CALL GetAllMainStreams()');
        const mainStreams = result[0];
        if (!mainStreams || mainStreams.length === 0) {
            return res.status(404).json({ message: 'No mainStreams found' });
        }
        return res.status(200).json(mainStreams);
    } catch (error) {
        console.error('Error fetching mainStreams:', error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
}

module.exports = {GetAllMainStreams};
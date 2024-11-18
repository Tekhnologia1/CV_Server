const { query } = require('express');
const sql = require('../config/database');

const GetAllMainStreamWiseSubStreams = async(req, res) =>{
      // Get the 'id' parameter from the query string or body
      const { id } = req.params;  // Using params if 'id' is part of the URL, or req.body if coming from the request body

      if (!id) {
          return res.status(400).json({ message: "Main stream id is required" });
      }
  
      try {
          // Call the stored procedure, passing the 'id' as a parameter
          const [rows] = await sql.query('CALL GetAllMainStreamWiseSubStreams(?)', [id]);
  
          // Check if any rows were returned
          if (!rows || rows.length === 0) {
              return res.status(404).json({ message: 'No sub-streams found for the given main stream id' });
          }
  
          // Return the results
          return res.status(200).json(rows);
      } catch (error) {
          console.error('Error fetching sub-streams:', error);
          return res.status(500).json({ message: 'Internal Server Error' });
      }
  
}

module.exports = {GetAllMainStreamWiseSubStreams};
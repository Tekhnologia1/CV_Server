const { query } = require('express');
const sql = require('../config/database');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt'); 
const nodemailer = require('nodemailer');

const CreateUser = async (req, res) => {
    const {
        role_id,
        firstName,
        lastName,
        contact,
        email,
        state,
        city,
        gender,
        instituteName,
        Class,
        education,
        experience,
        jobTime,
        consultingPref,
        IdProof,
        photo,
        sscMarkSheet,
        hscMarkSheet,
        ugCertificate,
        pgCertificate,
        phdCertificate,
        resume,
        password
    } = req.body;

    try {
        const hashedPassword = bcrypt.hashSync(password, 8);
        await sql.query('CALL CreateUser(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', [
            role_id,
            firstName,
            lastName,
            contact,
            email,
            state,
            city,
            gender,
            instituteName,
            Class,
            education,
            experience,
            jobTime,
            consultingPref,
            IdProof,
            photo,
            sscMarkSheet,
            hscMarkSheet,
            ugCertificate,
            pgCertificate,
            phdCertificate,
            resume,
            password
        ]);

        return res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
        console.error('Error creating user:', error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
};

const GetAllUsers = async (req, res) => {
    try {
        const result = await sql.query('CALL GetAllUsers()');
        const users = result[0]; // Assuming the results are in the first element of the array

        if (!users || users.length === 0) {
            return res.status(404).json({ message: 'No users found' });
        }

        return res.status(200).json(users);
    } catch (error) {
        console.error('Error fetching users:', error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
};

const GetUsersById = async (req, res) => {
    const { id } = req.params; // Get the user ID from the request parameters

    try {
        const result = await sql.query('CALL GetUsersById(?)', [id]);
        const user = result[0][0]; // Assuming the user data is in the first element of the array

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        return res.status(200).json(user);
    } catch (error) {
        console.error('Error fetching user by ID:', error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
};

const deleteUserById = async (req, res) => {
    const { id } = req.params; 
    try {
        const result = await sql.query('CALL deleteUserById(?)', [id]);

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'User not found' });
        }

        return res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
        console.error('Error deleting user:', error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
};

const updateUserById = async (req, res) => {
    const { id } = req.params; // Get the user ID from the request parameters
    const {
        role_id,
        firstName,
        lastName,
        contact,
        email,
        state,
        city,
        gender,
        instituteName,
        Class,
        education,
        experience,
        jobTime,
        consultingPref,
        IdProof,
        photo,
        sscMarkSheet,
        hscMarkSheet,
        ugCertificate,
        pgCertificate,
        phdCertificate,
        resume,
        password,
        updated_by
    } = req.body; // Get the updated user data from the request body

    try {
        const hashedPassword = password ? bcrypt.hashSync(password, 8) : undefined;
        const result = await sql.query('CALL UpdateUserById(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', [
            id,
            role_id,
            firstName,
            lastName,
            contact,
            email,
            state,
            city,
            gender,
            instituteName,
            Class,
            education,
            experience,
            jobTime,
            consultingPref,
            IdProof,
            photo,
            sscMarkSheet,
            hscMarkSheet,
            ugCertificate,
            pgCertificate,
            phdCertificate,
            resume,
            password,
            updated_by
        ]);

        // Check if the update was successful (you might need to adjust this based on your stored procedure behavior)
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'User not found or no changes made' });
        }

        return res.status(200).json({ message: 'User updated successfully' });
    } catch (error) {
        console.error('Error updating user:', error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
};

// Login API
const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Call the stored procedure to get the user by email
        const result = await sql.query('CALL LoginUser(?)', [email]);
        const user = result[0][0]; // Assuming results are in the first element of the array

        // console.log(user); // Log user object for debugging
        // console.log(user[0].user_id);
        // console.log(user[0].role_id);


        // Check if user exists
        if (!user) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }
        // Verify the password using bcrypt
        // const passwordMatch = bcrypt.compareSync(password, user.password);
        // if (!passwordMatch) {
        //     return res.status(401).json({ message: 'Invalid email or password' });
        // }

        // Check user role
        const user_id = user[0].user_id
        const role_id = user[0].role_id;

        // Generate JWT token
        const token = jwt.sign(
            { user_id: user_id, role_id: role_id },
            process.env.JWT_SECRET || 'Tekhnologia@99', // Ensure you have a secure secret in production
            { expiresIn: '1h' }
        );

        return res.status(200).json({ message: 'Login successful', token });
    } catch (error) {
        console.error('Error during login:', error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
};


// Function to generate a code
const generateCode = () => {
    return Math.floor(100000 + Math.random() * 900000).toString(); // Generates a 6-digit code
};

 
// In-memory store for codes
const codes = {};
 
// Configure Nodemailer transporter
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'vishalm.tekhnologia@gmail.com',
        pass: 'bsce wkss tsvb zvcg'
    }
});
 
// Function to determine if the input is an email
const isEmail = (input) => /\S+@\S+\.\S+/.test(input);
 
// Function to send SMS via Email to SMS gateway
const sendSMS = async (phone, message) => {
    const smsGatewayEmail = `${phone}@vodafone.com`; // Example for Vodafone India, adjust as needed
    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: smsGatewayEmail,
        subject: '',
        text: message
    };
 
    try {
        await transporter.sendMail(mailOptions);
        return { status: 'success' };
    } catch (error) {
        console.error('Error sending SMS via email to SMS gateway:', error);
        throw error;
    }
};
 
// Endpoint to handle input and send code
const sendCode = async (req, res) => {
    const { email_phone } = req.body;

    // Validate input
    if (!email_phone) {
        return res.status(400).json({ error: 'Email or phone number is required' });
    }

    const code = generateCode(); // Generate a new code for each request
    console.log('otp code is',code)

    // Determine if input is email or phone
    const isEmailInput = isEmail(email_phone);
    const params = isEmailInput ? [email_phone] : [email_phone];

    try {
        // Call the stored procedure
        const result = await sql.query('CALL SendOTPByEmailOrPhone(?)', [params]);
        const user = result[0]; // Assuming the user data is in the first element
        console.log('User data for OTP:', user);

        // Check if result is defined and has expected structure
        if (!result || !Array.isArray(result) || result.length === 0) {
            return res.status(404).json({ error: 'Email or phone number not found in user records' });
        }

        // Send verification code
        if (isEmailInput) {
            const mailOptions = {
                from: process.env.EMAIL_USER,
                to: email_phone,
                subject: 'Your Verification Code',
                text: `Hello dear, Thank You for connecting with Career Vidyalaya. Your verification code is: ${code}`
            };
            await transporter.sendMail(mailOptions);
            codes[email_phone] = code; // Store the code in the in-memory store
            return res.status(200).json({ message: 'Verification code sent to email' });
        } else {
            const smsResponse = await sendSMS(email_phone, `Your verification code is: ${code}`);
            if (smsResponse.status === 'success') {
                codes[email_phone] = code; // Store the code in the in-memory store
                return res.status(200).json({ message: 'Verification code sent to phone via SMS gateway' });
            } else {
                return res.status(500).json({ error: 'Failed to send verification code via SMS', info: smsResponse });
            }
        }
    } catch (error) {
        console.error('Error querying database:', error);
        return res.status(500).json({ error: 'Failed to query database' });
    }
};


// Endpoint to verify the code
const verifyOTP = async (req, res) => {
    const { email_phone, enteredCode } = req.body;

    // Validate input
    if (!email_phone) {
        return res.status(400).json({ error: 'Email or phone number is required' });
    }
    if (!enteredCode) {
        return res.status(400).json({ error: 'Entered code is required' });
    }
    // Check if a code exists for this email or phone number
    const storedCode = codes[email_phone];
    console.log('Stored code for', email_phone, ':', storedCode);
    if (!storedCode) {  
        return res.status(400).json({ error: 'No code found for this email or phone number' });
    }
    // Verify the entered code against the stored code
    if (enteredCode === storedCode) {
        delete codes[email_phone]; // Remove the code from the in-memory store after successful verification
        return res.status(200).json({ message: 'Verification successful' });
    } else {
        return res.status(400).json({ error: 'Verification failed', message: 'Entered code does not match' });
    }
};

 
module.exports = {CreateUser, GetAllUsers, GetUsersById, deleteUserById, updateUserById, loginUser, sendCode, verifyOTP};
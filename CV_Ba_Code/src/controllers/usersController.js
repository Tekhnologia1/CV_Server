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
        password
    } = req.body;

    // Extract file paths from req.files
    const IdProof = req.files['IdProof'] ? req.files['IdProof'][0].path : null;
    const photo = req.files['photo'] ? req.files['photo'][0].path : null;
    const sscMarkSheet = req.files['sscMarkSheet'] ? req.files['sscMarkSheet'][0].path : null;
    const hscMarkSheet = req.files['hscMarkSheet'] ? req.files['hscMarkSheet'][0].path : null;
    const ugCertificate = req.files['ugCertificate'] ? req.files['ugCertificate'][0].path : null;
    const pgCertificate = req.files['pgCertificate'] ? req.files['pgCertificate'][0].path : null;
    const phdCertificate = req.files['phdCertificate'] ? req.files['phdCertificate'][0].path : null;
    const resume = req.files['resume'] ? req.files['resume'][0].path : null;

    try {
        // Hash the password asynchronously with salt rounds (e.g., 10 rounds)
        const hashedPassword = await bcrypt.hash(password, 10);

        // Call the stored procedure with the hashed password
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
            hashedPassword,  // Use the hashed password here
        ]);

        return res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
        console.error('Error creating user:', error);

        // Check for specific error message for duplicate email
        if (error.sqlState === '45000') { // Adjust based on your database's actual error handling
            return res.status(400).json({ message: 'This email already exists.' });
        }
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

const GetAllCounsellors = async (req, res) => {
    try {
        const [rows] = await sql.query('CALL GetAllCounsellor()');

        if (!rows || rows.length === 0) {
            return res.status(404).json({ message: 'No Counsellor found' });
        }

        return res.status(200).json(rows);
    } catch (error) {
        console.error('Error fetching counsellors:', error);
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
    const userId = parseInt(req.params.id, 10); // Get the user ID from request parameters
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
        password, // Consider hashing this if necessary
        updated_by // Capture who is updating
    } = req.body;

    // Validate input
    if (isNaN(userId)) {
        return res.status(400).json({ message: 'Invalid user ID.' });
    }
    if (!firstName || !lastName || !email) {
        return res.status(400).json({ message: 'First name, last name, and email are required.' });
    }

    try {
        // Hash the password if it's provided
        const hashedPassword = password ? bcrypt.hashSync(password, 8) : undefined;

        // Call the stored procedure to update the user
        await sql.query('CALL UpdateUserById(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', [
            userId,
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
            hashedPassword || password, // Use hashed password if provided
            updated_by
        ]);

        return res.status(200).json({ message: 'User updated successfully.' });
    } catch (error) {
        console.error('Error updating user:', error);
        if (error.code === '45000') { // Check for custom SQL error codes
            return res.status(404).json({ message: error.message });
        }
        return res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
};

// Login API
const loginUser = async (req, res) => {
    const { email, password } = req.body;

    // Validate required fields
    if (!email || !password) {
        return res.status(400).json({ message: 'Username and password are required' });
    }
    try {
        // Call the stored procedure to get the user by email
        const result = await sql.query('CALL LoginUser(?)', [email]);
        const user = result[0][0]; // Assuming results are in the first element of the array
        // console.log(user);
        if (!user) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }
        // console.log('User date :', user[0].password)
        // Verify the password using bcrypt
        // console.log(password, user[0].password);
        const passwordMatch = await bcrypt.compare(password, user[0].password);
        // console.log('passwordMatch',passwordMatch)
        // console.log(passwordMatch);
        if (!passwordMatch) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }
        // Check user role
        const { user_id, role_id } = user[0];
        // console.log(user_id, role_id);
        // Generate JWT token
        const token = jwt.sign(
            { user_id: user_id, role_id: role_id },
            process.env.JWT_SECRET || 'Tekhnologia@99', // Ensure you have a secure secret in production
            { expiresIn: '1h' }
        );

        return res.status(200).json({ message: 'Login successful', token });
    } catch (error) {
        console.error('Error during login:', error);
        return res.status(500).json({ message: 'Invalid email or password' });
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
    console.log('otp code is', code)

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
                return res.status(200).json({ message: 'Verification code sent to phone via SMS gateway Your email is not valid' });
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


module.exports = { CreateUser, GetAllUsers, GetAllCounsellors, GetUsersById, deleteUserById, updateUserById, loginUser, sendCode, verifyOTP };
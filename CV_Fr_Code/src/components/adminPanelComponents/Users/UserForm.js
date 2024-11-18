

// UserForm.js
import { useState } from 'react';
import { Box, Input, Button, Stack, Select, Flex } from '@chakra-ui/react';
import Sidebar from "src/components/adminPanelComponents/Sidebar";

const UserForm = ({ initialData = {}, onSubmit, onCancel }) => {
    const [formData, setFormData] = useState({
        userType: initialData?.userType || '',
        firstName: initialData?.firstName || '',
        lastName: initialData?.lastName || '',
        contact: initialData?.contact || '',
        email: initialData?.email || '',
        state: initialData?.state || '',
        city: initialData?.city || '',
        gender: initialData?.gender || '',
        password: initialData?.password || '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData); // Call the onSubmit prop with form data
    };

    return (

        <Flex>
            <Sidebar />
            <Box flex="1" p="5">
                <Box p="5" maxWidth="500px" mx="auto">
                    <form onSubmit={handleSubmit}>
                        <Stack spacing="4">
                            <Select placeholder="User Type" name="userType" value={formData.userType} onChange={handleChange}>
                                <option value="Admin">Admin</option>
                                <option value="User">User</option>
                            </Select>
                            <Input placeholder="First Name" name="firstName" value={formData.firstName} onChange={handleChange} />
                            <Input placeholder="Last Name" name="lastName" value={formData.lastName} onChange={handleChange} />
                            <Input placeholder="Contact" name="contact" value={formData.contact} onChange={handleChange} />
                            <Input placeholder="Email" name="email" value={formData.email} onChange={handleChange} />
                            <Input placeholder="State" name="state" value={formData.state} onChange={handleChange} />
                            <Input placeholder="City" name="city" value={formData.city} onChange={handleChange} />
                            <Select placeholder="Gender" name="gender" value={formData.gender} onChange={handleChange}>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </Select>
                            <Input
                                placeholder="Password"
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                            />
                            <Button type="submit" colorScheme="blue">
                                {Object.keys(initialData).length > 0 ? 'Update User' : 'Create User'}
                            </Button>

                            <Button colorScheme="gray" onClick={onCancel}>
                                Cancel
                            </Button>
                        </Stack>
                    </form>
                </Box>
            </Box>
        </Flex >
    );
};

export default UserForm;

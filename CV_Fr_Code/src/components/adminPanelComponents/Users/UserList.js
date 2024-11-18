import { useState } from 'react';
import { Box, Heading, Button, Text, Table, Tbody, Tr, Td, Th, Thead, Flex } from '@chakra-ui/react';
import Sidebar from "src/components/adminPanelComponents/Sidebar";
import { Link } from 'react-router-dom';
import UserForm from './UserForm';

const UsersList = () => {
    const [showForm, setShowForm] = useState(false);
  const [initialData, setInitialData] = useState({});

  // Dummy data for users
  const users = [
    { id: 1, firstName: 'John', lastName: 'Doe', email: 'john@example.com' },
    { id: 2, firstName: 'Jane', lastName: 'Smith', email: 'jane@example.com' },
  ];

  const handleAddUser = () => {
    setInitialData(null); // No initial data for a new user
    setShowForm(true);
  };

  const handleEditUser = (user) => {
    setInitialData(user); // Pass existing user data as initialData
    setShowForm(true);
  };

  const handleFormSubmit = (data) => {
    if (initialData) {
      console.log('Updating user:', data);
      // Handle update user logic here
    } else {
      console.log('Creating new user:', data);
      // Handle create user logic here
    }
    setShowForm(false); // Return to user list after submission
  };

  if (showForm) {
    return (
        <UserForm
        initialData={initialData || {}} // Provide an empty object if initialData is null
        onSubmit={handleFormSubmit}
        onCancel={() => setShowForm(false)}
    />    
    );
  }

    // const handleDelete = (id) => {
    //     setUsers(users.filter(user => user.id !== id));
    // };

    return (

        <Flex>
            <Sidebar />
            <Box flex="1" p="5">
                {/* <Dashboard />
        <UsersList /> */}

<Box>
      <Heading as="h2" mb="4">Users</Heading>
      <Button colorScheme="blue" mb="4" onClick={handleAddUser}>Add New User</Button>
      <Table variant="striped" colorScheme="blue">
        <Thead>
          <Tr>
            <Th>First Name</Th>
            <Th>Last Name</Th>
            <Th>Email</Th>
            <Th>Actions</Th>
          </Tr>
        </Thead>
        <Tbody>
          {users.map((user) => (
            <Tr key={user.id}>
              <Td>{user.firstName}</Td>
              <Td>{user.lastName}</Td>
              <Td>{user.email}</Td>
              <Td>
                <Button
                  colorScheme="teal"
                  size="sm"
                  mr="2"
                  onClick={() => handleEditUser(user)}
                >
                  Edit
                </Button>
                <Button colorScheme="red" size="sm">Delete</Button>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
            </Box>
        </Flex>

    );
};

export default UsersList;

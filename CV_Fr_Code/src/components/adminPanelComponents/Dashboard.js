import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import Sidebar from "src/components/adminPanelComponents/Sidebar";

const Dashboard = () => (

    <Flex>
        <Sidebar />
        <Box flex="1" p="5">
            <Box p="5">

                <Heading as="h1" mb="4">Dashboard</Heading>
                <Text>Welcome to the admin panel dashboard.</Text>
            </Box>
            {/* <Dashboard />
      <UsersList /> */}
        </Box>
    </Flex>

);

export default Dashboard;

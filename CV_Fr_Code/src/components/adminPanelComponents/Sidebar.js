import { Box, VStack, Link } from '@chakra-ui/react';

const Sidebar = () => (
  <Box w="200px" bg="blue.700" color="white" minH="100vh" p="5">
    <VStack spacing="4" align="stretch">
      <Link href="/adminDashboard">Dashboard</Link>
      <Link href="/adminUsersList">Users Module</Link>
    </VStack>
  </Box>
);

export default Sidebar;

import { Box, Flex } from "@chakra-ui/react";
import Dashboard from "src/components/adminPanelComponents/Dashboard";
import Sidebar from "src/components/adminPanelComponents/Sidebar";
import UsersList from "src/components/adminPanelComponents/Users/UserList";


const AdminPanel = () => (
    <Flex>
      <Sidebar />
      <Box flex="1" p="5">
        {/* <Dashboard />
        <UsersList /> */}
      </Box>
    </Flex>
  );
  
  export default AdminPanel;
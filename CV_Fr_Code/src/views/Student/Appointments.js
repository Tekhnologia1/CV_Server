import { Box, Text, SimpleGrid, Checkbox, Table, Thead, Tbody, Tr, Th, Td, Badge, IconButton, useMediaQuery } from '@chakra-ui/react';
import { DownloadIcon } from '@chakra-ui/icons';

const Appointments = () => {
  const [isLargerThan600] = useMediaQuery("(min-width: 600px)");

  return (
    <Box p={4}>
      {/* Sessions Summary */}
      <SimpleGrid
        bg="#E9FCC9"
        columns={[1, 2]} // Stacks on mobile, two columns on larger screens
        spacing={6}
        mb={6}
        py={3}
        px={3}
        justifyContent="center"
        boxShadow={'lg'}
      >
        <Box
          bg="white"
          p={4}
          borderRadius="md"
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          width={{ base: "100%", md: "60%" }} // Full width on small screens
          height="130px"
          mx="auto"
          mb={{ base: 4, md: 0 }} // Margin bottom on mobile
        >
          <Text fontSize="xl" fontWeight="bold" textAlign="center">
            Sessions Completed
          </Text>
          <Text fontSize="3xl" fontWeight="bold" textAlign="center">
            4
          </Text>
        </Box>
        <Box
          bg="white"
          p={4}
          borderRadius="md"
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          width={{ base: "100%", md: "60%" }}
          height="130px"
          mx="auto"
        >
          <Text fontSize="xl" fontWeight="bold" textAlign="center">
            Total Upcoming Sessions
          </Text>
          <Text fontSize="3xl" fontWeight="bold" textAlign="center">
            4
          </Text>
        </Box>
      </SimpleGrid>

      {/* Appointments Table */}
      <Box
        overflowX={{ base: "scroll", md: "auto" }} // Horizontal scroll on mobile
        borderRadius="md"
        boxShadow="lg"
      >
        <Table variant="simple" size="md" bg="white" borderRadius="md">
          <Thead>
            <Tr>
              <Th>Sr. No.</Th>
              <Th>Student Name</Th>
              <Th>Psychometric Test</Th>
              <Th>DMIT Test</Th>
              <Th>Student Consulting</Th>
              <Th>Parent Consulting</Th>
              <Th>Date and Time</Th>
              <Th>Status</Th>
              <Th>Report</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.map((item, index) => (
              <Tr key={index} bg={item.color} _hover={{ bg: "gray.100" }}>
                <Td>{item.srNo}</Td>
                <Td>{item.studentName}</Td>
                <Td>
                  <Checkbox isChecked={item.psychometricTest} />
                </Td>
                <Td>
                  <Checkbox isChecked={item.dmitTest} />
                </Td>
                <Td>
                  <Checkbox isChecked={item.studentCounseling} />
                </Td>
                <Td>
                  <Checkbox isChecked={item.parentCounseling} />
                </Td>
                <Td>{item.dateAndTime || "-"}</Td>
                <Td>
                  {item.status ? (
                    <Badge colorScheme={item.statusColor}>{item.status}</Badge>
                  ) : (
                    "-"
                  )}
                </Td>
                <Td>
                  <IconButton
                    icon={<DownloadIcon />}
                    variant="ghost"
                    aria-label="Download Report"
                    isDisabled={!item.hasReport}
                  />
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
    </Box>

  );
};

const data = [
  { srNo: 1, studentName: 'Aarush', psychometricTest: false, dmitTest: false, studentCounseling: false, parentCounseling: false, dateAndTime: 'Monday | 10:00 AM', status: 'Scheduled', statusColor: 'green', hasReport: true, color: 'red.100' },
  { srNo: 2, studentName: 'Aditi', psychometricTest: false, dmitTest: false, studentCounseling: false, parentCounseling: false, dateAndTime: 'Tuesday | 11:00 AM', status: 'Scheduled', statusColor: 'green', hasReport: true, color: 'red.100' },
  { srNo: 3, studentName: 'Akanksha', psychometricTest: false, dmitTest: false, studentCounseling: true, parentCounseling: false, dateAndTime: 'Wednesday | 10:00 AM', status: 'Not Confirmed', statusColor: 'yellow', hasReport: false, color: 'yellow.100' },
  { srNo: 4, studentName: 'Bala', psychometricTest: false, dmitTest: false, studentCounseling: true, parentCounseling: false, dateAndTime: 'Thursday | 11:00 AM', status: 'Not Confirmed', statusColor: 'yellow', hasReport: false, color: 'yellow.100' },
  { srNo: 5, studentName: 'Bhavesh', psychometricTest: false, dmitTest: false, studentCounseling: true, parentCounseling: true, dateAndTime: '-', status: '-', hasReport: true, color: 'green.100' },
  { srNo: 6, studentName: 'Chitra', psychometricTest: false, dmitTest: false, studentCounseling: true, parentCounseling: true, dateAndTime: '-', status: '-', hasReport: true, color: 'green.100' },
  { srNo: 7, studentName: 'Chinmay', psychometricTest: false, dmitTest: false, studentCounseling: true, parentCounseling: true, dateAndTime: '-', status: '-', hasReport: true, color: 'green.100' },
  { srNo: 8, studentName: 'Disha', psychometricTest: false, dmitTest: false, studentCounseling: true, parentCounseling: true, dateAndTime: '-', status: '-', hasReport: true, color: 'green.100' },
];

export default Appointments;

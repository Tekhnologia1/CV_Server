import React from 'react';
import {
    Box,
    Button,
    Flex,
    Grid,
    Input,
    Select,
    Text
} from '@chakra-ui/react';

const Par_Dash_Reg_Child = () => {

    const label_bgcolor = 'white';
    const tilecolor_purple = "#4d3acc";
    const _hover_tilecolor_purple = "#8d7dfa";
    const height_input_fields = "50px";
    return (

        <Box
            w={{ base: "95%", md: "95%", lg: "95%" }}  // Adjust width to increase size on larger screens
            bg="#D3F4FF"

            borderRadius="none"
            justifyItems="center"
            align="center"
            justify="center"
            mx={"2.5%"}
            mb={12}
            py={16}
        >
            <Text fontSize="2xl" fontWeight="semibold" textAlign="center" mb={6} color={tilecolor_purple}>
                Enter your child's information
            </Text>
            {/* <Flex
                direction={{ base: "column", md: "row" }}  // Stack vertically on small screens, side-by-side on larger screens
                mb={14}
                w={["35%", "35%", "35%", "35%", "40%", "40%"]}
            > */}
            <Grid
                direction="column"
                templateColumns={{ base: "4fr", md: "6fr 2fr" }}
                gap={[3, 3, 6]}
                w={["60%", "60%", "50%", "50%", "60%", "60%"]}
                mb={14}
            >
                <Input
                    placeholder="Enter your child's Email Address"
                    mr={{ md: 3 }}  // Add margin only on larger screens
                    
                    bg={label_bgcolor}
                    border="none"
                    borderRadius="none"
                    size="lg"
                    fontSize="lg"
                    w="100%"  // Full width in column layout
                    height={{ base: height_input_fields, md: height_input_fields }}  // Fixed height in column layout, auto in row layout
                />
                <Button
                    
                    bgColor={tilecolor_purple}
                    _hover={{ bgColor: _hover_tilecolor_purple }}
                    color="white"
                    borderRadius="none"
                    size="lg"
                    fontSize="lg"
                    mt={{ base: 0, md: 0 }}  // Add top margin only on small screens
                    w={{ base: "100%", md: "auto" }}  // Full width in column layout, auto in row layout
                    height={{ base: height_input_fields, md: height_input_fields }}  // Fixed height in column layout, auto in row layout
                >
                    Validate
                </Button>

            </Grid>

            {/* </Flex> */}

            <Text fontSize="xl" fontWeight="semibold" textAlign="center" color={tilecolor_purple} mb={2}>
                Your child doesn’t have an account? Create one!
            </Text>
            <Text fontSize="md" textAlign="center" color="gray.600" mb={6}>
                Register your child/children for the right career guidance.
            </Text>

            <Grid
                direction="column"
                templateColumns={{ base: "4fr", md: "3fr 3fr" }}
                gap={6}
                w={["60%", "60%", "50%", "50%", "60%", "60%"]}
            >
                <Input
                    placeholder="Enter First Name*"
                    w="100%"  // Make input full width of grid column
                    bg={label_bgcolor}
                    border="none"
                    borderRadius="none"
                    fontSize="lg"
                />
                <Input
                    placeholder="Enter Last Name*"
                    w="100%"  // Make input full width of grid column
                    bg={label_bgcolor}
                    border="none"
                    borderRadius="none"
                    fontSize="lg"
                />
                <Input
                    placeholder="Enter Contact Number*"
                    w="100%"  // Make input full width of grid column
                    bg={label_bgcolor}
                    border="none"
                    borderRadius="none"
                    fontSize="lg"
                />
                <Input
                    placeholder="Enter Email Address*"
                    w="100%"  // Make input full width of grid column
                    bg={label_bgcolor}
                    border="none"
                    borderRadius="none"
                    fontSize="lg"
                />
                <Select
                    placeholder="Select State*"
                    w="100%"  // Make select full width of grid column
                    bg={label_bgcolor}
                    border="none"
                    borderRadius="none"
                    fontSize="lg"
                >
                    {/* Add options for states */}
                </Select>
                <Select
                    placeholder="Select City*"
                    w="100%"  // Make select full width of grid column
                    bg={label_bgcolor}
                    border="none"
                    borderRadius="none"
                    fontSize="lg"
                >
                    {/* Add options for cities */}
                </Select>
                <Select
                    placeholder="Select Institute*"
                    w="100%"  // Make select full width of grid column
                    bg={label_bgcolor}
                    border="none"
                    borderRadius="none"
                    fontSize="lg"
                >
                    {/* Add options for institutes */}
                </Select>
                <Select
                    placeholder="Select Class*"
                    w="100%"  // Make select full width of grid column
                    bg={label_bgcolor}
                    border="none"
                    borderRadius="none"
                    fontSize="lg"
                >
                    {/* Add options for classes */}
                </Select>
            </Grid>

            <Button
                bgColor={tilecolor_purple}
                w={["150px", "150px", "200px", "350px", "450px"]}
                mt={8}
                _hover={{ bgColor: _hover_tilecolor_purple }}
                color="white"
                borderRadius="none"
                fontSize="lg"
                justifySelf="center"
            >
                Get OTP
            </Button>
        </Box>

    );
}

export default Par_Dash_Reg_Child;

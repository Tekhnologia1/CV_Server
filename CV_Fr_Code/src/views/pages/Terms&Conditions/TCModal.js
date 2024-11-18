import React, { useContext, useEffect, useState } from 'react';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    Input,
    Link,
    Box,
    Image,
    Text,
    VStack,
    Spinner, // Import the Spinner component
    Heading

} from '@chakra-ui/react';
import cv_brand_logo from "src/assets/brand/cv_brand_logo.png";
import Student from "src/assets/icons/welcome_icons/student.png";
import Parent from "src/assets/icons/welcome_icons/parent.png";
import { APIRegister } from 'src/services/api/APIRegister';
import SignUpModal from '../signup/Signup';
import { BiUnderline } from 'react-icons/bi';
import { jwtDecode } from 'jwt-decode';
import { Auth } from 'src/auth/AuthUser';
import { UserContext } from 'src/context/UserContextProvider';
import { useNavigate } from 'react-router-dom';
import { api_url } from 'src/services/api/APIURL';
import axios from 'axios';

// import handleRoleClick from "../signup/Signup";

const TCModal = ({ isOpen, onClose }) => {
    const { user, setUser } = useContext(UserContext);
    const navigate = useNavigate();
    const [isSignUpOpen, setIsSignUpOpen] = useState(false);


    const [user_id, setUser_Id] = useState('');
    const [name, setName] = useState('');
    // const [currentModal, setCurrentModal] = React.useState('tc');
    const [currentScreen, setCurrentScreen] = useState('tc');
    const [user_role, setUser_Role] = useState('');

   
    const [isLoading, setIsLoading] = useState(false); // Loading state

    //------------------------
   
    const [errorMessage, setErrorMessage] = useState('');


    const tilecolor_purple = '#4d3acc';
    const subtitle_size = ["xs", "xs", "sm", "sm"];
    const title_size = ["lg", "lg", "xl", "xl"];
    const font_family = 'Poppins, sans-serif'

    useEffect(() => {
        if (user?.userId) {
            console.log(user.userId); // Log userId when user state changes
            console.log(user.email);
            console.log(user.role);
            setUser_Id(user.userId);
            // handleRoleClick(user.role);
            // handleCurrScreen('welcome');

            // if (user.role) {
            //     setCurrentScreen('welcome'); // Navigate to the welcome screen after successful login
            // }

        }
    }, [user]);



    const closeModal = () => {
        onClose();
        // setCurrentModal('signIn');
        setCurrentScreen('tc');
    }

    const handleCurrScreen = (screen_name) => {
        setCurrentScreen(screen_name);
        console.log(currentScreen);

    }


    const handleNext = () => {
        if (currentScreen === 'tc') {
            handleCurrScreen('crefund');
        } else if (currentScreen === 'crefund') {
            handleCurrScreen('paynow');
        }
    }
    return (
        // <>
        <Modal isOpen={isOpen} onClose={() => { closeModal(); }} isCentered>
            <ModalOverlay
                backdropFilter={currentScreen === 'welcome' ? 'blur(10px)' : 'none'} // Apply blur conditionally
            />
            <ModalContent
                p={{ base: 4, md: 6 }}
                borderRadius="15px"
                maxWidth={{ base: "100%", sm: "400px", md: "500px" }}
                mx={{ base: "10px", sm: "20px", md: "auto" }}
                bg={'#FFFFFF'}
            >

                <ModalHeader position="relative">



                    <ModalCloseButton />
                </ModalHeader>


                <ModalBody
                
                    maxHeight="60vh" // Set a maximum height
                    overflowY="scroll" // Enable vertical scrolling
                >
                    {currentScreen === 'tc' && (

                        <Box
                            // p={8}
                            mb={10}
                            // px={['30px', '30px', '30px', '5px', '5px']}
                            justifyItems={'center'}
                            fontFamily={font_family}>
                            <Heading textAlign="center"
                                // mb={5}
                                color={tilecolor_purple} fontSize={title_size}>
                                Terms and Conditions
                            </Heading>
                            {/* <Box height="2px" width={["100%", "100%", "60%"]} bgColor="#3d3d3d" my={14} /> */}
                            <VStack align="start" spacing={4}
                                mt={8}
                                // px={[2, 4, '100px']}
                                mb={10}>
                                <Text fontSize={subtitle_size} fontWeight="500" color="#333">
                                    <strong>1. Acceptance of Terms</strong><br />
                                    By accessing or using the services provided by Career Vidyalaya, you agree to be bound by these Terms & Conditions. If you do not agree with any part of these terms, you may not use our services.
                                </Text>
                                <Text fontSize={subtitle_size} fontWeight="500" color="#333">
                                    <strong>2. Services Provided</strong><br />
                                    Career Vidyalaya offers career counseling services, including psychometric assessments, one-on-one consultations, and other guidance programs. Services are intended to support educational and career development, and results are provided based on individual assessments.
                                </Text>
                                <Text fontSize={subtitle_size} fontWeight="500" color="#333">
                                    <strong>3. User Eligibility</strong><br />
                                    Users must be at least 13 years old or have parental consent to use Career Vidyalaya services. By registering, you confirm that you meet these requirements.
                                </Text>
                                <Text fontSize={subtitle_size} fontWeight="500" color="#333">
                                    <strong>4. Payment and Refund Policy</strong><br />
                                    All fees must be paid in full at the time of purchase. For details on cancellations and refunds, please refer to our Cancellation and Refund Policy section, which is available at the time of purchase or on our website.
                                </Text>
                                <Text fontSize={subtitle_size} fontWeight="500" color="#333">
                                    <strong>5. Limitation of Liability</strong><br />
                                    Career Vidyalaya is not liable for any direct, indirect, incidental, or consequential damages arising from the use of our services. We do not guarantee specific results from our counseling, as outcomes may vary based on individual circumstances.
                                </Text>
                                <Text fontSize={subtitle_size} fontWeight="500" color="#333">
                                    <strong>6. Intellectual Property</strong><br />
                                    All content, tools, and materials provided by Career Vidyalaya are protected by intellectual property laws. Unauthorized copying, distribution, or use of these materials is prohibited.
                                </Text>
                                <Text fontSize={subtitle_size} fontWeight="500" color="#333">
                                    <strong>7. Modification of Terms</strong><br />
                                    Career Vidyalaya reserves the right to update these Terms & Conditions at any time without prior notice. Continued use of our services following any changes indicates acceptance of the new terms.
                                </Text>
                                <Text fontSize={subtitle_size} fontWeight="500" color="#333">
                                    <strong>8. Governing Law</strong><br />
                                    These terms are governed by the laws of India. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts in [City/State].
                                </Text>
                            </VStack>
                            {/* <Box height="2px" width={["100%", "100%", "60%"]} bgColor="#3d3d3d" my={5} /> */}

                        </Box>
                    )}


                    {currentScreen === 'crefund' && (

                        <Box
                            // p={8}
                            mb={10}
                            // px={['30px', '30px', '30px', '5px', '5px']}
                            justifyItems={'center'}
                            fontFamily={font_family}>
                            <Heading textAlign="center"
                                // mb={5}
                                color={tilecolor_purple} fontSize={title_size}>
                                Cancellation and Refund Policy
                            </Heading>
                            {/* <Box height="2px" width={["100%", "100%", "60%"]} bgColor="#3d3d3d" my={14} /> */}
                            <VStack align="start" spacing={4}
                                mt={8}
                                // px={[2, 4, '100px']}
                                mb={10}>
                                <Text fontSize={subtitle_size} fontWeight="500" color="#333">
                                    {/* <strong>1. Acceptance of Terms</strong><br /> */}
                                    Cancellation Requests: Clients may request a cancellation within 48 hours of purchasing a package. Approved cancellations within this period will receive a 90% refund credited to the account details provided at purchase.
                                </Text>
                                <Text fontSize={subtitle_size} fontWeight="500" color="#333">
                                    {/* <strong>2. Services Provided</strong><br /> */}
                                    Post-48-Hour Cancellation: Cancellations are not permitted beyond 48 hours after purchase.
                                </Text>
                                <Text fontSize={subtitle_size} fontWeight="500" color="#333">
                                    {/* <strong>3. User Eligibility</strong><br /> */}
                                    Refund Eligibility: Refunds are not applicable for cancellations requested after the initial 48-hour window.
                                </Text>
                                <Text fontSize={subtitle_size} fontWeight="500" color="#333">
                                    {/* <strong>4. Payment and Refund Policy</strong><br /> */}
                                    Psychometric Test Completion: Once the psychometric test has been attempted, the package is considered fully utilized, and no refunds will be granted under any circumstances                                </Text>

                            </VStack>
                            {/* <Box height="2px" width={["100%", "100%", "60%"]} bgColor="#3d3d3d" my={5} /> */}

                        </Box>
                    )}

                    {currentScreen === 'paynow' && (

                        <Box
                            // p={8}
                            mb={10}
                            // px={['30px', '30px', '30px', '5px', '5px']}
                            justifyItems={'center'}
                            fontFamily={font_family}>
                            <Heading textAlign="center"
                                // mb={5}
                                color={tilecolor_purple} fontSize={title_size}>
                                {/* Payment Process */}
                            </Heading>
                            {/* <Box height="2px" width={["100%", "100%", "60%"]} bgColor="#3d3d3d" my={14} /> */}
                            <VStack align="center" spacing={4}
                                mt={8}
                                // px={[2, 4, '100px']}
                                mb={10}
                                justifyContent="center"
                                >
                                <Button
                                    bgColor={tilecolor_purple}
                                    color={'white'}
                                    size="lg"
                                    width={["85%", "85%", "90%"]}
                                    mb={4}
                                    //  
                                    fontSize={{ base: "sm", md: "md" }}
                                    onClick={() => { handleNext(); }}
                                >

                                    Proceed to pay

                                </Button>
                            </VStack>
                            {/* <Box height="2px" width={["100%", "100%", "60%"]} bgColor="#3d3d3d" my={5} /> */}

                        </Box>
                    )}
                </ModalBody>

                {/* {currentScreen === 'signIn' && ( */}
                <ModalFooter justifyContent="center" flexDirection="column">
                    {!(currentScreen === 'paynow') && (

                        <Button
                            bgColor={tilecolor_purple}
                            color={'white'}
                            size="lg"
                            width={["25%", "25%", "30%"]}
                            mb={4}
                            //  
                            fontSize={{ base: "sm", md: "md" }}
                            onClick={() => { handleNext(); }}
                        >

                            Next

                        </Button>
                    )}
                </ModalFooter>
                {/* )} */}

            </ModalContent>
        </Modal>

        //         {/* <SignUpModal
        //             isOpen={isSignUpOpen}
        //             onClose={closeSignUpModal}

        //         /> */}
        // {/* </> */ }
    );
};

export default TCModal;


{/* <SignUpModal
                isOpen={isSignUpOpen}
                onClose={closeSignUpModal}

            /> */}
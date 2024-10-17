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
    Spinner // Import the Spinner component

} from '@chakra-ui/react';
import cv_brand_logo from "src/assets/brand/cv_brand_logo.png";
import Student from "src/assets/icons/welcome_icons/student.png";
import Parent from "src/assets/icons/welcome_icons/parent.png";
import { APIRegister } from 'src/api/APIRegister';
import SignUpModal from '../signup/Signup';
import { BiUnderline } from 'react-icons/bi';
import { jwtDecode } from 'jwt-decode';
import { Auth } from 'src/auth/AuthUser';
import { UserContext } from 'src/context/UserContextProvider';
import { useNavigate } from 'react-router-dom';

// import handleRoleClick from "../signup/Signup";

const SignInModal = ({ isOpen, onClose }) => {
    const { user, setUser } = useContext(UserContext);
    const navigate = useNavigate();
    const [isSignUpOpen, setIsSignUpOpen] = useState(false);
    const tilecolor_purple = "#4d3acc";
    const font_family = 'Poppins, sans-serif';

    const [currentModal, setCurrentModal] = React.useState('signIn');
    const [currentScreen, setCurrentScreen] = useState('signIn');
    const [user_role, setUser_Role] = useState('');

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false); // Loading state

    useEffect(() => {
        if (user?.userId) {
            console.log(user.userId); // Log userId when user state changes
            console.log(user.email);
            console.log(user.role);

            handleRoleClick(user.role);
            handleCurrScreen('welcome');

            // if (user.role) {
            //     setCurrentScreen('welcome'); // Navigate to the welcome screen after successful login
            // }

        }
    }, [user]);

    // Navigate to appropriate role page after a delay on the welcome screen
    useEffect(() => {
        if (currentScreen === 'welcome') {
            const timer = setTimeout(() => {
                navigate('/'); // Default home or sign-up page

            }, 3000); // 3 seconds delay

            return () => clearTimeout(timer); // Cleanup timeout if component unmounts
        }
    }, [currentScreen, user.role, navigate]);


    const openSignUpModal = () => {
        setIsSignUpOpen(true);
        onClose();
    }

    const closeSignUpModal = () => {
        setIsSignUpOpen(false);
        // handleRoleClick('roleSelection');
    }

    const closeSignIn = () => {
        onClose();
        setCurrentModal('signIn');
        setCurrentScreen('signIn');
    }

    // Navigate role and screen
    const handleRoleClick = (role) => {
        setCurrentModal(role);
        setUser_Role(role);
    };

    const handleCurrScreen = (screen_name) => {
        setCurrentScreen(screen_name);
    }

    const login = () => {
        // if (!validateEmail(email)) {
        //   setErrorMessage('Invalid email');
        //   return;
        // }
        setIsLoading(true); // Set loading to true

        console.log(email);
        console.log(password);


        APIRegister().LOGIN({
            email: email,
            password: password,
        }).then((response) => {
            console.log(response);
            const token = response.token;
            console.log(token);
            const userdata = jwtDecode(token);
            console.log(userdata);

            //----------Set Role
            console.log(userdata.role_id);
            const role = userdata.role_id === 1 ? 'Student' :
                userdata.role_id === 2 ? 'Parent' :
                    userdata.role_id === 3 ? 'Counsellor' :
                        userdata.role_id === 4 ? 'BusinessPartner' : '';

            setUser_Role(role); // Update role first
            console.log(role);
            setUser(prevState => ({
                ...prevState,
                userId: userdata.user_id,
                email: null,
                role: role
            }));


            if (response.status && response.message === 'Login successful') {
                // setSuccessMessage('Logged in successfully!');

                Auth.login(token);
                setIsLoading(false); // Stop loading

                setTimeout(() => {
                    window.location.reload();
                }, 2000);

            } else {
                // setErrorMessage('Unexpected response from server');
                // setSuccessMessage('');
                setIsLoading(false); // Stop loading

            }

        }).catch((error) => {
            console.error("Some error, solve it: ", error);
            //   if (error.response && error.response.data) {
            //     const errorMessage = error.response.data.message;
            //     if (errorMessage === 'Email and password are required') {
            //       setErrorMessage('All fields are required');
            //     } else {
            //       setErrorMessage('Invalid credentials');
            //     }
            //   } else {
            //     setErrorMessage('Something went wrong !!');
            //   }
            //   setSuccessMessage('');
            setIsLoading(false); // Stop loading

        });
    };
    console.log(currentScreen);


    // const handleSignUpClick = () => {
    //     onOpenSignUp();  // Open SignUp modal
    //     onClose();       // Close SignIn modal
    // };

    return (
        <>
            <Modal isOpen={isOpen} onClose={() => { closeSignIn(); }} isCentered>
                <ModalOverlay
                    backdropFilter={currentScreen === 'welcome' ? 'blur(10px)' : 'none'} // Apply blur conditionally
                />
                <ModalContent
                    p={{ base: 4, md: 6 }}
                    borderRadius="15px"
                    maxWidth={{ base: "100%", sm: "400px", md: "500px" }}
                    mx={{ base: "10px", sm: "20px", md: "auto" }}
                    bg={
                        currentModal === 'Student' ? '#FFAD5B' :
                            currentModal === 'Parent' ? '#EABFFF' :
                                currentModal === 'Counsellor' ? '#BFE582' :
                                    currentModal === 'BusinessPartner' ? '#BFDBFE' :
                                        '#D1EEFF'
                    }
                >

                    <ModalHeader position="relative">
                        {/* Back button at top left */}
                        {currentScreen === 'signIn' && (

                            <Button
                                variant="ghost"
                                onClick={onClose}
                                position="absolute"
                                left={{ base: "5px", md: "10px" }}
                                top={{ base: "5px", md: "10px" }}
                                fontSize={{ base: "sm", md: "md" }}
                            >
                                Back
                            </Button>
                        )}
                        {/* Logo centered */}
                        {currentScreen === 'signIn' && (

                            <Box display="flex" justifyContent="center">
                                <Image
                                    src={cv_brand_logo}
                                    alt="Logo"
                                    boxSize={{ base: "50px", md: "70px" }}
                                />
                            </Box>
                        )}
                        {currentScreen === 'welcome' && (

                            <Box display="flex" justifyContent="center">
                                <Image
                                    src={currentModal === 'Student' ? Student :
                                        currentModal === 'Parent' ? Parent :
                                            currentModal === 'Counsellor' ? Parent : Parent
                                    }
                                    alt="Icon"
                                    boxSize={{ base: "50px", md: "200px" }}
                                    mt={'-120px'}
                                />
                            </Box>
                        )}


                        <ModalCloseButton />
                    </ModalHeader>


                    <ModalBody>
                        {currentScreen === 'signIn' && (
                            <VStack spacing={4}>
                                <Input
                                    placeholder="Enter User ID or Contact Number"
                                    size="lg"
                                    focusBorderColor="blue.500"
                                    bg="white"
                                    borderRadius="5px"
                                    fontSize={{ base: "sm", md: "md" }}
                                    onChange={(e) => setEmail(e.target.value)}

                                />
                                <Input
                                    placeholder="Enter Password"
                                    type="password"
                                    size="lg"
                                    focusBorderColor="blue.500"
                                    bg="white"
                                    borderRadius="5px"
                                    fontSize={{ base: "sm", md: "md" }}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <Link href="#" alignSelf="flex-start" color="black" fontSize={{ base: "xs", md: "sm" }} textDecoration={'underline'}>
                                    Forgot Password?
                                </Link>
                            </VStack>
                        )}


                        {/* welcome screen for any role */}
                        {currentScreen === 'welcome' && (
                            <VStack spacing={4} mt={4} alignItems="center">
                                {/* Added consistent spacing and alignment */}
                                <Box display="flex" flexDirection="column" justifyContent="space-between" alignItems="center" width="100%" textAlign={'center'}>



                                    <Text fontSize="2xl">Welcome, Aarush!</Text>
                                    <Text fontSize="lg">
                                        {currentModal === user_role && (user_role)} ID : 0000
                                    </Text>
                                </Box>
                            </VStack>
                        )}

                        {/* Show loading spinner */}
                        {isLoading && (
                            <Box display="flex" justifyContent="center" mt={4}>
                                <Spinner size="lg" />
                            </Box>
                        )}

                    </ModalBody>

                    {currentScreen === 'signIn' && (
                        <ModalFooter justifyContent="center" flexDirection="column">
                            <Button
                                colorScheme="blue"
                                size="lg"
                                width="100%"
                                mb={4}
                                //  
                                fontSize={{ base: "sm", md: "md" }}
                                onClick={() => { login(); }}
                            >
                                Sign In
                            </Button>

                            <Text fontSize={{ base: "sm", md: "md" }}>
                                New here?{' '}
                                <Link
                                    href="#"
                                    color={tilecolor_purple}
                                    fontWeight="bold"
                                    fontSize={{ base: "sm", md: "md" }}
                                    fontFamily={font_family}
                                    onClick={openSignUpModal}  // Open SignUp modal on click
                                >
                                    Sign Up
                                </Link>
                            </Text>
                        </ModalFooter>
                    )}

                </ModalContent>
            </Modal>

            <SignUpModal
                isOpen={isSignUpOpen}
                onClose={closeSignUpModal}

            />
        </>
    );
};

export default SignInModal;

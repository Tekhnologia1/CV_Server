import React from 'react';
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
    VStack
} from '@chakra-ui/react';
import cv_brand_logo from "src/assets/brand/cv_brand_logo.png";

const SignInModal = ({ isOpen, onClose, onOpenSignUp }) => {
    const handleSignUpClick = () => {
        onOpenSignUp();  // Open SignUp modal
        onClose();       // Close SignIn modal
    };

    return (
        <>
            <Modal isOpen={isOpen} onClose={onClose} isCentered>
                <ModalOverlay />
                <ModalContent
                    bg="#D1EEFF"
                    p={{ base: 4, md: 6 }}
                    borderRadius="15px"
                    maxWidth={{ base: "100%", sm: "400px", md: "500px" }}
                    mx={{ base: "10px", sm: "20px", md: "auto" }}
                >
                    <ModalHeader position="relative">
                        {/* Back button at top left */}
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

                        {/* Logo centered */}
                        <Box display="flex" justifyContent="center">
                            <Image 
                                src={cv_brand_logo} 
                                alt="Logo" 
                                boxSize={{ base: "50px", md: "70px" }} 
                            />
                        </Box>

                        <ModalCloseButton />
                    </ModalHeader>

                    <ModalBody>
                        <VStack spacing={4}>
                            <Input
                                placeholder="Enter User ID or Contact Number"
                                size="lg"
                                focusBorderColor="blue.500"
                                bg="white"
                                borderRadius="5px"
                                fontSize={{ base: "sm", md: "md" }}
                            />
                            <Input
                                placeholder="Enter Password"
                                type="password"
                                size="lg"
                                focusBorderColor="blue.500"
                                bg="white"
                                borderRadius="5px"
                                fontSize={{ base: "sm", md: "md" }}
                            />
                            <Link href="#" alignSelf="flex-start" color="blue.600" fontSize={{ base: "xs", md: "sm" }}>
                                Forgot Password?
                            </Link>
                        </VStack>
                    </ModalBody>

                    <ModalFooter justifyContent="center" flexDirection="column">
                        <Button
                            colorScheme="blue"
                            size="lg"
                            width="100%"
                            mb={4}
                            isDisabled={true}
                            fontSize={{ base: "sm", md: "md" }}
                        >
                            Sign In
                        </Button>

                        <Text fontSize={{ base: "sm", md: "md" }}>
                            New here?{' '}
                            <Link
                                href="#"
                                color="blue.600"
                                fontWeight="bold"
                                fontSize={{ base: "sm", md: "md" }}
                                onClick={handleSignUpClick}  // Open SignUp modal on click
                            >
                                Sign Up
                            </Link>
                        </Text>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
};

export default SignInModal;

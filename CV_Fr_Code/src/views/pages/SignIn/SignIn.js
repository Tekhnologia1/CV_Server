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
    VStack,
    useDisclosure
} from '@chakra-ui/react';
import cv_brand_logo from "src/assets/brand/cv_brand_logo.png";
import SignUpModal from 'src/views/pages/signup/Signup';

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
                    p={6}
                    borderRadius="15px"
                    maxWidth="500px"
                >
                    <ModalHeader position="relative">
                        {/* Back button at top left */}
                        <Button
                            variant="ghost"
                            onClick={onClose}
                            position="absolute"
                            left="10px"
                            top="10px"
                        >
                            Back
                        </Button>

                        {/* Logo centered */}
                        <Box display="flex" justifyContent="center">
                            <Image src={cv_brand_logo} alt="Logo" boxSize="70px" />
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
                            />
                            <Input
                                placeholder="Enter Password"
                                type="password"
                                size="lg"
                                focusBorderColor="blue.500"
                                bg="white"
                                borderRadius="5px"
                            />
                            <Link href="#" alignSelf="flex-start" color="blue.600" fontSize="sm">
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
                        >
                            Sign In
                        </Button>

                        <Text fontSize="md">
                            New here?{' '}
                            <Link
                                href="#"
                                color="blue.600"
                                fontWeight="bold"
                                // onClick={handleSignUpClick}  // Open SignUp modal on click
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

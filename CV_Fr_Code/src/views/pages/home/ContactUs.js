import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from 'src/context/UserContextProvider';
import {
    Box, Heading, Text, VStack, FormControl, FormLabel, Input, Textarea, Button, useToast, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalFooter
} from '@chakra-ui/react';
import Navbar from 'src/components/othercomponents/Navbar/Navbar';
import Navbar_with_login from 'src/components/othercomponents/Navbar/Navbar_with_login';
import Footer from 'src/components/othercomponents/Footer';

const ContactUs = () => {
    const { user } = useContext(UserContext);
    const navigate = useNavigate();
    const [role, setRole] = useState('');
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [errors, setErrors] = useState({});
    const { isOpen, onOpen, onClose } = useDisclosure();

    useEffect(() => {
        setRole(user.role);
    }, [user]);

    const tilecolor_purple = '#4d3acc';
    const title_size = ["2xl", "3xl", "4xl", "5xl"];
    const font_family = 'Poppins, sans-serif';

    const contactDetails = {
        email: "info@careervidyalaya.com",
        phone: "+91-8983055973",
        address: "Flat No. 401, Village Residency 3, S.No. 98/1/4, Kasarsai, Pune - 410506, Maharashtra, India"
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.name.trim()) {
            newErrors.name = "Name is required.";
        }
        if (!formData.email.trim()) {
            newErrors.email = "Email is required.";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = "Enter a valid email address.";
        }
        if (!formData.message.trim()) {
            newErrors.message = "Message is required.";
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setErrors({ ...errors, [name]: "" });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            // Form submission logic can be added here
            onOpen(); // Open the modal upon successful validation
        }
    };

    return (
        <div className="wrapper d-flex flex-column min-vh-100 bg-light">
            <Box style={{ boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
                {!(role === 'Student' || role === 'Parent' || role === 'Counsellor' || role === 'B2B') ?
                    <Navbar /> :
                    <Navbar_with_login />
                }
            </Box>
            <Box className="body flex-grow-1" pt={[5, 3]}>
                <Box p={8} mb={10} px={['30px', '30px', '30px', '5px', '5px']} justifyItems={'center'} fontFamily={font_family}>
                    <Heading textAlign="center" mb={5} color={tilecolor_purple} fontSize={title_size}>
                        Contact Us
                    </Heading>
                    <VStack align="start" spacing={6} mt={10} px={[2, 4, '100px']} mb={10}>
                        <Box
                            p={6}
                            borderWidth="1px"
                            borderRadius="lg"
                            boxShadow="lg"
                            bg="white"
                            w="100%"
                        >
                            <Heading fontSize="xl" mb={4} color={tilecolor_purple}>
                                Get in Touch
                            </Heading>
                            <Text fontSize="md" color="gray.700" mb={2}>
                                <strong>Email:</strong> {contactDetails.email}
                            </Text>
                            <Text fontSize="md" color="gray.700" mb={2}>
                                <strong>Phone:</strong> {contactDetails.phone}
                            </Text>
                            <Text fontSize="md" color="gray.700">
                                <strong>Address:</strong> {contactDetails.address}
                            </Text>
                        </Box>
                        <Box
                            p={6}
                            borderWidth="1px"
                            borderRadius="lg"
                            boxShadow="lg"
                            bg="white"
                            w="100%"
                        >
                            <Heading fontSize="xl" mb={4} color={tilecolor_purple} textAlign={'center'}>
                                Send Us a Message
                            </Heading>
                            <form onSubmit={handleSubmit}>
                                <FormControl mb={4} isInvalid={errors.name}>
                                    <FormLabel>Your Name</FormLabel>
                                    <Input
                                        name="name"
                                        placeholder="Enter your name"
                                        size="md"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                    />
                                    {errors.name && <Text color="red.500">{errors.name}</Text>}
                                </FormControl>
                                <FormControl mb={4} isInvalid={errors.email}>
                                    <FormLabel>Email Address</FormLabel>
                                    <Input
                                        name="email"
                                        placeholder="Enter your email"
                                        size="md"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                    />
                                    {errors.email && <Text color="red.500">{errors.email}</Text>}
                                </FormControl>
                                <FormControl mb={4} isInvalid={errors.message}>
                                    <FormLabel>Message</FormLabel>
                                    <Textarea
                                        name="message"
                                        placeholder="Enter your message"
                                        size="md"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                    />
                                    {errors.message && <Text color="red.500">{errors.message}</Text>}
                                </FormControl>
                                <Button
                                    colorScheme="purple"
                                    bg={tilecolor_purple}
                                    color="white"
                                    _hover={{ bg: "#3d2bac" }}
                                    type="submit"
                                >
                                    Submit
                                </Button>
                            </form>
                        </Box>
                    </VStack>
                </Box>
                <Box color="white" textAlign="center">
                    <Footer />
                </Box>
            </Box>

            {/* Modal */}
            <Modal isOpen={isOpen} onClose={onClose} isCentered>
                <ModalOverlay />
                <ModalContent textAlign="center" justifyContent="center" alignItems="center">
                    <ModalHeader color={'green.400'}>Thank You !</ModalHeader>
                    <ModalBody>
                        Our Career Vidyalaya Team will contact you shortly.
                    </ModalBody>
                    <ModalFooter>
                        <Button
                            bg={tilecolor_purple}
                            color="white"
                            onClick={onClose}>
                            Close
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>

        </div>
    );
};

export default ContactUs;

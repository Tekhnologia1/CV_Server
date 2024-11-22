import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from 'src/context/UserContextProvider';
import {
    Box, Heading, Text, VStack
} from '@chakra-ui/react';
import Navbar from 'src/components/othercomponents/Navbar/Navbar';
import Navbar_with_login from 'src/components/othercomponents/Navbar/Navbar_with_login';
import Footer from 'src/components/othercomponents/Footer';

const TermsAndC = () => {

    const { user } = useContext(UserContext);
    const navigate = useNavigate();
    const [role, setRole] = useState('');

    useEffect(() => {
        setRole(user.role);
        console.log(role);
    }, [user]);

    const tilecolor_purple = '#4d3acc';
    const subtitle_size = ["md", "md", "lg", "lg"];
    const title_size = ["2xl", "3xl", "4xl", "5xl"];
    const font_family = 'Poppins, sans-serif'


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
                        Terms and Conditions
                    </Heading>
                    {/* <Box height="2px" width={["100%", "100%", "60%"]} bgColor="#3d3d3d" my={14} /> */}
                    <VStack align="start" spacing={4} mt={16} px={[2, 4, '100px']} mb={10}>
                        <Text fontSize={subtitle_size} fontWeight="500" color="#333">
                            <strong>1. Acceptance of Terms</strong><br />
                            By accessing or using the services provided by Career Vidyalaya, you agree to be bound by these Terms & Conditions. If you do not agree with any part of these terms, you may not use our services.
                        </Text>
                        <Text fontSize={subtitle_size} fontWeight="500" color="#333">
                            <strong>2. Services Provided</strong><br />
                            Career Vidyalaya offers career consulting services, including psychometric assessments, one-on-one consultations, and other guidance programs. Services are intended to support educational and career development, and results are provided based on individual assessments.
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
                            Career Vidyalaya is not liable for any direct, indirect, incidental, or consequential damages arising from the use of our services. We do not guarantee specific results from our consulting, as outcomes may vary based on individual circumstances.
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
                <Box color="white" textAlign="center">
                    <Footer />
                </Box>
            </Box>
        </div>
    );
};

export default TermsAndC;

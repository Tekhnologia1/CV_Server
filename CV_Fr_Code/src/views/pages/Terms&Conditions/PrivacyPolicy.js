import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from 'src/context/UserContextProvider';
import {
    Box, Heading, Link, Text, VStack
} from '@chakra-ui/react';
import Navbar from 'src/components/othercomponents/Navbar/Navbar';
import Navbar_with_login from 'src/components/othercomponents/Navbar/Navbar_with_login';
import Footer from 'src/components/othercomponents/Footer';

const PrivacyPolicy = () => {

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

    const openEmail = () => {
        window.location.href = "mailto:info@careervidyalaya.com";
    }

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
                        Privacy Policy
                    </Heading>
                    {/* <Box height="2px" width={["100%", "100%", "60%"]} bgColor="#3d3d3d" my={14} /> */}
                    <VStack align="start" spacing={4} mt={16} px={[2, 4, '100px']} mb={10}>
                        <Text fontSize={subtitle_size} fontWeight="500" color="#333">
                            <strong>1. Information Collection</strong><br />
                            We collect information you provide during registration, such as name, contact details, and educational background,
                            as well as data generated through assessments. This information helps us deliver and improve our services.
                        </Text>
                        <Text fontSize={subtitle_size} fontWeight="500" color="#333">
                            <strong>2. Use of Information</strong><br />
                            Personal information is used for conducting assessments, customizing guidance, and
                            facilitating counseling sessions. Career Vidyalaya may also use your data for research and statistical analysis, but this will always be anonymized.

                        </Text>
                        <Text fontSize={subtitle_size} fontWeight="500" color="#333">
                            <strong>3. Data Sharing</strong><br />
                            Career Vidyalaya does not sell or rent personal information to third parties. Information
                            may only be shared with trusted partners and service providers to facilitate our services, all of whom
                            are obligated to keep your information secure and confidential.


                        </Text>
                        <Text fontSize={subtitle_size} fontWeight="500" color="#333">
                            <strong>4. Data Security</strong><br />
                            We employ industry-standard security measures to protect your information from unauthorized access,
                            alteration, or disclosure. However, no data transmission over the internet is entirely secure, and we cannot guarantee absolute security.

                        </Text>
                        <Text fontSize={subtitle_size} fontWeight="500" color="#333">
                            <strong>5. Retention of Data</strong><br />
                            Your data will be retained as long as necessary to provide services, comply with legal obligations, or for other legitimate business purposes.

                        </Text>
                        <Text fontSize={subtitle_size} fontWeight="500" color="#333">
                            <strong>6. Cookies</strong><br />
                            Our website uses cookies to improve user experience. You may choose to disable cookies through
                            your browser settings, though this may limit your use of some features on our site.

                        </Text>
                        <Text fontSize={subtitle_size} fontWeight="500" color="#333">
                            <strong>7. Access and Control of Personal Information</strong><br />
                            You may request access to, correction of, or deletion of your personal information by contacting us
                            at [<Link
                                href="mailto:info@careervidyalaya.com"
                                color="blue.500" // Primary color for the link
                                fontWeight="semibold"
                                textDecoration="none"
                                _hover={{ textDecoration: "underline", color: "blue.700" }} // Hover style
                            >
                                info@careervidyalaya.com
                            </Link>
                            ].
                            We will respond to requests within a reasonable timeframe.
                        </Text>
                        <Text fontSize={subtitle_size} fontWeight="500" color="#333">
                            <strong>8. Updates to Privacy Policy</strong><br />
                            Career Vidyalaya reserves the right to modify this Privacy Policy at any time. Changes will be posted on our website,
                            and your continued use of our services implies acceptance of the revised policy.

                        </Text>
                        <Text fontSize={subtitle_size} fontWeight="500" color="#333">
                            <strong>9. Contact Information</strong><br />
                            If you have any questions regarding our Terms & Conditions or Privacy Policy, please contact us at
                            [<Link
                                href="mailto:info@careervidyalaya.com"
                                color="blue.500" // Primary color for the link
                                fontWeight="semibold"
                                textDecoration="none"
                                _hover={{ textDecoration: "underline", color: "blue.700" }} // Hover style
                            >
                                info@careervidyalaya.com
                            </Link>
                            ].
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

export default PrivacyPolicy;

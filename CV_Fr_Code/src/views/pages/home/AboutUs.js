import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from 'src/context/UserContextProvider';
import {
    Box, Heading, Text, VStack
} from '@chakra-ui/react';
import Navbar from 'src/components/othercomponents/Navbar/Navbar';
import Navbar_with_login from 'src/components/othercomponents/Navbar/Navbar_with_login';
import Footer from 'src/components/othercomponents/Footer';

const AboutUs = () => {
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
    const font_family = 'Poppins, sans-serif';

    const aboutDetails = [
        {
            title: "Our Mission",
            description: "At Career Vidyalaya, our mission is to guide students and parents in discovering their true potential and talents. Through innovative DMIT and psychometric tests, we provide insights that help shape informed career decisions, ensuring a brighter future."
        },
        {
            title: "Our Vision",
            description: "Our vision is to become a trusted partner in every student’s journey to achieving a successful and fulfilling career. We strive to create a society where every individual’s career aligns with their passion and aptitude."
        },
        {
            title: "Our Services",
            description: "We offer DMIT (Dermatoglyphics Multiple Intelligence Test) and psychometric tests to uncover a student’s innate abilities. Our expert consultants provide one-on-one career consulting sessions for students and their parents, helping analyze suitable career fields and opportunities for the future."
        },
        {
            title: "Why Choose Us?",
            description: "Career Vidyalaya is committed to empowering students with knowledge and guidance. With our scientific approach and experienced consultants, we ensure that every student receives personalized advice tailored to their strengths and aspirations."
        },
    ];

    const contactDetails = {
        name: "N & M LIFE SOLUTIONS PRIVATE LIMITED",
        email: "info@careervidyalaya.com",
        phone: "+91-8983055973",
        address: "Flat No. 401, Village Residency 3, S.No. 98/1/4, Kasarsai, Pune - 410506, Maharashtra, India"
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
                        About Us
                    </Heading>
                    <VStack align="start" spacing={6} mt={16} px={[2, 4, '100px']} mb={10}>
                        {aboutDetails.map((detail, index) => (
                            <Box
                                key={index}
                                p={6}
                                borderWidth="0px"
                                borderRadius="lg"
                                boxShadow="lg"
                                bg="white"
                                w="100%"
                            >
                                <Heading fontSize="xl" mb={4} color={tilecolor_purple}>
                                    {detail.title}
                                </Heading>
                                <Text fontSize="md" color="gray.700">
                                    {detail.description}
                                </Text>
                            </Box>
                        ))}
                    </VStack>
                    <Box
                        p={6}
                        mt={10}
                        borderWidth="0px"
                        borderRadius="lg"
                        boxShadow="lg"
                        bg="white"
                        textAlign="start"
                        width={['95%','80%','60%','40%','30%']}
                    >
                        <Heading fontSize="xl" mb={4} color={tilecolor_purple} textAlign={'center'}>
                            Contact Us
                        </Heading>
                        <Text fontSize="md" color="gray.700" mb={2}>
                            <strong>Company Name:</strong> {contactDetails.name}
                        </Text>
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
                </Box>
                <Box color="white" textAlign="center">
                    <Footer />
                </Box>
            </Box>
        </div>
    );
};

export default AboutUs;

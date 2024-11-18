


import { Box, Text, Heading, Button, Image, Stack, SimpleGrid, Flex, AccordionIcon, AccordionPanel, Accordion, AccordionButton, AccordionItem } from '@chakra-ui/react';
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar_with_login from 'src/components/othercomponents/Navbar/Navbar_with_login';
import { UserContext } from 'src/context/UserContextProvider';
import image_1 from "src/assets/images/testing_tools/image_1.png";
import image_2 from "src/assets/images/testing_tools/image_2.png";
import image_3 from "src/assets/images/testing_tools/image_3.png";
import Footer from 'src/components/othercomponents/Footer';


const Testing_Tools = () => {

    const { user } = useContext(UserContext);
    const navigate = useNavigate();
    const [role, setRole] = useState('');

    useEffect(() => {
        setRole(user.role);
    }, [user])

    const tilecolor_purple = "#4d3acc";
    const title_size2 = ["1xl", "1xl", "2xl", "3xl"]
    const para_fontweigth = '510'
    const faq_title_size = ["xl", "2xl", "3xl", "4xl"]
    const download_font_size = ["xl", "xl", "2xl", "2xl"]
    const button_bg = "#4d3acc";
    const hover_button_bg = "#8d7dfa";
    const font_family = 'Poppins, sans-serif'
    const font_family1 = 'Montserrat, sans-serif'



    const para_1 = [
        {
            title: 'Introduction',
            content: 'Psychometric tests aim to assess an individual’s cognitive abilities, personality traits, and other pertinent characteristics. Besides, employers can obtain valuable insights about candidates’ suitability for a position by administering these tests during recruitment. Let’s examine some prevalent psychometric test types and their respective functions.'
        },
        {
            title: 'Aptitude Tests',
            content: 'An aptitude test evaluates an individual’s inherent abilities and potential to perform specific tasks or acquire specific skills. Further, these examinations assess numerical reasoning, verbal reasoning, logical reasoning, and problem-solving abilities. In addition, aptitude tests are particularly useful for roles that require specific competencies, such as analytical thinking or critical reasoning.'
        },
        {
            title: 'Personality Tests',
            content: 'Personality tests assess personality traits, preferences, and behavioural patterns. Further, they reveal how candidates will likely interact with others, respond to challenges, and integrate into an organization’s culture. Therefore, employers use personality tests to determine whether a candidate’s disposition matches the job role requirements and the company’s core values.'
        },
        {
            title: 'Cognitive Ability Tests',
            content: 'Cognitive ability tests measure memory, spatial awareness, and verbal and nonverbal reasoning. These tests evaluate a person’s overall cognitive ability and problem-solving abilities. Further, cognitive ability assessments are beneficial for positions requiring a high level of cognitive functioning. This includes managerial positions and positions requiring complex decision-making.'
        }
    ]

    const para_2 = [
        {
            title: 'What is DMIT TEST?',
            content: 'U.S. Patent Dermatoglyphics Multiple Intelligence Test (DMIT) is a biometric test conducted on students for understanding their potential. This test has successfully helped students understand their abilities all across the globe. More than a decade ago, it was introduced in India, and the results have been remarkable since then.'
        },
        {
            title: 'How is the DMIT Test conducted?',
            content: 'A conventional psychometric test like interest test, aptitude test, or a personality test involves a person answering a questionnaire or performing the directed tasks. Here the process is entirely different. DMIT test involves a biometric based profiling which uses the individual’s unique and genetically defined fingerprint patterns. They have to submit the scans of their whole set of fingerprints. DMIT is the study of fingerprints. All the fingers are scanned, and their fingerprints are recorded. We all know that fingerprints are unique and completely distinctive. Based on these fingerprints, a detailed report is generated. This report talks about a childs distinct qualities, traits, capabilities, and abilities. It helps us understand a child’s inborn talents, skills, and potential.'
        }
    ]

    const accordian = [
        {
            title: 'What Is Career Consulting & Career Guidance?',
            description: "Career Consulting: Career consulting and career guidance are two terms often thought to be the same, but they have different purposes. Career consulting primarily involves one-on-one or online sessions with a career guidance consultant who assesses an individual's skills, interests, aspirations, and intelligences, puts together the information, and points students in the right direction",

        },
        // {
        //     title: 'Career Expedition',
        //     description: 'Know more',
        // },
        // {
        //     title: 'Career Talk',
        //     description: 'Know more',
        // },
    ];


    return (
        <div className="wrapper d-flex flex-column min-vh-100 bg-light">
            <Box style={{ boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
                <Navbar_with_login />
            </Box>

            <Box className="body flex-grow-1" pt={[5, 10]}>
                {/* First Section */}

                <Flex
                    direction={['column', 'column', 'row']}  // Stacks vertically on smaller screens, row on larger
                    align="center"
                    justify="space-between"  // Ensures the items are spread out with space between
                    py={[8, 4]}
                    px={[6, 10, 15]}
                    gap={['20px', '30px', '70px']}  // Responsive gap between the boxes
                    mb={16}
                >
                    {/* Left Box: Current Plan */}
                    <Box
                        flex="1"
                        textAlign={['center', 'center', 'start']} // Center text on small screens, align left on larger
                        px={['0', '0', '50px']}
                    >
                        <Heading

                            color="black"
                            fontSize={title_size2}
                            fontWeight={['650', '650', '500']}
                        >
                            Current Plan:{" "}
                            <Text as="span" color="#EB543B" fontWeight="inherit"> {/* Ensuring it inherits the font weight */}
                                Free
                            </Text>
                        </Heading>
                    </Box>

                    {/* Right Box: Download Button */}
                    <Box
                        flex="1"
                        display="flex"
                        justifyContent={['center', 'center', 'flex-end']}  // Centers button on small screens, aligns right on larger
                        alignItems="center"
                    >
                        <Button

                            bgColor="#FF5353"
                            color="#ffffff"
                            _hover={{ bgColor: "#f59a9a" }}
                            size="md"
                            px={[5, 10]}
                            py={[6, 8]}
                            fontSize={download_font_size}
                            fontWeight={['650', '650', '700']}
                        >
                            Download PDF
                        </Button>
                    </Box>
                </Flex>


                <Box textAlign="center" mb={10} px={[4, 6, 10]}>
                    <Heading as="h2" size="xl" mb={4} color={"#FF5353"}>
                        WHAT IS PSYCHOMETRIC TEST?
                    </Heading>
                    {para_1.map((para, i) => (
                        <Box key={i} mb={6}>
                            <Text
                                fontFamily={font_family1}
                                fontSize={["md", "lg", "lg", "lg"]} // Increased font size
                                fontWeight={para_fontweigth}
                                textAlign="left" // Align text to the left
                                mb={3}

                            >
                                {para.title}
                            </Text>
                            <Text
                                fontFamily={font_family1}
                                fontSize={["md", "lg", "lg", "lg"]} // Increased font size
                                fontWeight={para_fontweigth}
                                textAlign="left" // Align text to the left
                                mb={6}
                            >
                                {para.content}
                            </Text>
                        </Box>
                    ))}
                </Box>

                {/* Two Column Image and Text Section */}
                <SimpleGrid columns={[1, null, 2]} spacing={10} mb={10}>
                    {/* Column 1: Left Image */}
                    <Box boxShadow="xl" bgColor={'white'}>
                        <Image src={image_1} alt="Cognitive Tests" />
                    </Box>

                    {/* Column 2: Right Image */}
                    <Box boxShadow="xl" bgColor={'white'}>
                        <Image src={image_2} alt="Benefits of Tests" />
                    </Box>
                </SimpleGrid>

                {/* Button for First Section */}
                <Box textAlign="center" mb={20}>
                    <Button bgColor={button_bg} _hover={{ bgColor: hover_button_bg }} size={["xs","sm","md","lg","lg"]} color={'white'}>
                        Take a Psychometric Test Demo
                    </Button>
                </Box>

                {/* Second Section */}
                <Box textAlign="center" mb={10} px={[4, 6, 10]}>
                    <Heading as="h2" size="xl" mb={4} color={"#FF5353"}>
                        WHAT IS DMIT TEST?
                    </Heading>
                    {para_2.map((para, i) => (
                        <Box key={i} mb={6}>
                            <Text
                                fontFamily={font_family1}
                                fontSize={["md", "lg", "lg", "lg"]} // Increased font size
                                fontWeight={para_fontweigth}
                                textAlign="left" // Align text to the left
                                mb={3}

                            >
                                {para.title}
                            </Text>
                            <Text
                                fontFamily={font_family1}
                                fontSize={["md", "lg", "lg", "lg"]} // Increased font size
                                fontWeight={para_fontweigth}
                                textAlign="left" // Align text to the left
                                mb={6}
                            >
                                {para.content}
                            </Text>
                        </Box>
                    ))}
                </Box>

                {/* Single Image */}
                <Box textAlign="center" justifyItems={'center'} mb={10}>
                    <Image src={image_3} alt="Brain Hemispheres" width={['300px','400px', '550px', '700px', '900px', '1200px', '1500px']} height={'auto'} boxShadow="xl" />
                </Box>

                {/* Button for Second Section */}
                <Box textAlign="center" mb={16}>
                    <Button bgColor={button_bg} _hover={{ bgColor: hover_button_bg }} size={["xs","sm","md","lg","lg"]} color={'white'}>
                        Take a DMIT Test Demo
                    </Button>
                </Box>

                {/* 8th Row - Title and Accordion */}
                <Box mb={10} mx={[4, 8, 12]} px={['20px', '50px', '100px', '100px', '100px', '300px']}>
                    <Heading textAlign="center" mb={5} color={tilecolor_purple} fontSize={faq_title_size}>
                        FAQs: What people usually ask us?
                    </Heading>
                    <Accordion allowToggle>
                        {accordian.map((accord, i) => (
                            <AccordionItem key={i}>
                                <AccordionButton>
                                    <Box flex="1" textAlign="left" textColor={tilecolor_purple} fontSize={['md', 'md', 'lg']} fontWeight={'500'} fontFamily={font_family}>
                                        {accord.title}
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                                <AccordionPanel pb={4}>
                                    {accord.description}
                                </AccordionPanel>
                            </AccordionItem>
                        ))}
                    </Accordion>
                    <Box display="flex" justifyContent="flex-end" mt={3}>
                        <Button variant="link" color={tilecolor_purple} fontFamily={font_family} fontWeight={'500'}>
                            Show More FAQs
                        </Button>
                    </Box>
                </Box>

                {/* 9th Row - Footer */}
                <Box color="white" textAlign="center">
                    <Footer />
                </Box>
            </Box>
        </div>
    );
};

export default Testing_Tools;

import React, { useContext, useEffect, useState } from 'react';
import {
    Box, Heading, Text, SimpleGrid, Grid, Flex, Image, Button,
    UnorderedList, ListItem, Accordion, AccordionItem, Stack,
    AccordionButton, AccordionPanel, AccordionIcon, useColorModeValue,
    Spacer
} from '@chakra-ui/react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Link, useNavigate } from 'react-router-dom';
import Footer from 'src/components/othercomponents/Footer.js';
import Navbar_with_login from 'src/components/othercomponents/Navbar/Navbar_with_login';
import gateway_image1 from "src/assets/images/Home/gateway_image1.png";
import gateway_image2 from "src/assets/images/Home/gateway_image2.png";
import gateway_image3 from "src/assets/images/Home/gateway_image3.png";
import gateway_image4 from "src/assets/images/Home/gateway_image4.png";
import gateway_image5 from "src/assets/images/Home/gateway_image5.png";
import top_image1 from "src/assets/images/Home/top_image1.png";
import top_image2 from "src/assets/images/Home/top_image2.png";
import card_3_image1 from "src/assets/images/Home/3_card_image1.png";
import card_3_image2 from "src/assets/images/Home/3_card_image2.png";
import card_3_image3 from "src/assets/images/Home/3_card_image3.png";
import Triforce from "src/assets/images/Home/Triforce.png";
import Star from "src/assets/images/Home/Star.png";
import Crown from "src/assets/images/Home/Crown.png";
import bg_mask from "src/assets/images/Home/bg_mask.png";
import Testimonial_image from "src/assets/images/Home/Testimonial_image.png";
import banner_image1 from "src/assets/images/Home/banner_image1.png";
import VideoGrid from "src/views/pages/home/VideoGrid";
import TestResult1 from "src/assets/images/dashboard_images/TestResult1.png";
import TestResult2 from "src/assets/images/dashboard_images/TestResult2.png";
import Feedback from "src/assets/images/dashboard_images/Feedback.png";
import image1 from "src/assets/images/b2b_dashboard/image1.png";
import image2 from "src/assets/images/b2b_dashboard/image2.png";
import image3 from "src/assets/images/b2b_dashboard/image3.png";


import { UserContext } from 'src/context/UserContextProvider';
import Appointments from '../Appointments';
import Par_Dash_Reg_Child from './Par_Dash_Reg_Child';
import Navbar from 'src/components/othercomponents/Navbar/Navbar';


const Student_Dashboard = () => {
    const { user } = useContext(UserContext);
    const navigate = useNavigate();
    const [role, setRole] = useState('');

    useEffect(() => {
        setRole(user.role);
    }, [user])

    const cardBg = useColorModeValue('white', 'gray.700');
    const tilecolor_purple = "#4d3acc";
    const title_size = ["2xl", "3xl", "4xl", "5xl"]
    const title_size2 = ["1xl", "1xl", "2xl", "3xl"]
    const demo_title_size = ["2xl", "3xl", "4xl", "5xl"]
    const free_title_size = ["4xl", "5xl", "6xl", "8xl"]
    const faq_title_size = ["xl", "2xl", "3xl", "4xl"]
    const download_font_size = ["xl", "xl", "2xl", "2xl"]

    const subtitle_size = ["xl", "xl", "2xl", "3xl"]
    const font_family = 'Poppins, sans-serif'

    // const title_weight = ""
    const lightGreenBg = "#e0f7e7";
    const testi_bg_color = "#f9f9f9";
    // Data for the 5 cards (images, titles, descriptions)

    //--------------
    const userId = user.userId;

    //-------Navigate to section on another page-------
    // const navigateToSection = () => {
    //     navigate("/services#ourplans-section");
    // };

    const handleNavigate = () => {
        navigate("/services", { state: { scrollToSection: true } });
    };


    const cardData1 = [
        {
            image: gateway_image1,
            title: 'Personalized Psychometric Assessment',
            description: 'See how',

        },
        {
            image: gateway_image2,
            title: 'Empower students ',
            description: 'See how',
        },
        {
            image: gateway_image3,
            title: 'Chat With Real Experts',
            description: 'See how',
        },
        {
            image: gateway_image4,
            title: 'Become a smart Parent',
            description: 'See how',
        },
        {
            image: gateway_image5,
            title: 'A Vidyalaya for choosing the right career!',
            description: 'See how',
        },
    ];

    // Data for the 5 cards (images, titles, descriptions)
    const cardData2 = [
        {
            image: card_3_image1,
            title: 'Career Connect',
            description: 'Know more',

        },
        {
            image: card_3_image2,
            title: 'Career Expedition',
            description: 'Know more',
        },
        {
            image: card_3_image3,
            title: 'Career Talk',
            description: 'Know more',
        },
    ];

    // Data for the 5 cards (images, titles, descriptions)
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

    // Data for the 5 cards (images, titles, descriptions)
    const cardData3 = [
        {
            image: Triforce,
            title: 'Basic',
            description: ['Testing solutions - DMIT and Psychometric tests', 'Personalized report for DMIT and Psychometric tests'],

        },
        {
            image: Star,
            title: 'Advanced',
            description: ['Includes all services from basic package', 'A 30 minutes consulting session with student to finalize the career option'],
        },
        {
            image: Crown,
            title: 'Premium',
            description: ['Includes all services from Basic and Advance package', 'Monthly/quarterly webinars and seminars from industry experts on career scopes'],
        },
    ];



    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3, // Shows 3 cards at a time
        slidesToScroll: 1, // Scrolls one card at a time
        responsive: [
            {
                breakpoint: 1024, // Adjust for tablet and mobile
                settings: {
                    slidesToShow: 1, // Show 1 card on smaller screens
                    slidesToScroll: 1,
                },
            },
        ],
    };

    // Data for the 5 cards (images, titles, descriptions)
    const testimonial_slider = [
        {
            image: Testimonial_image,
            testi_name: 'Sonu',
            description: ['Signing up for Career Vidyalaya, and meeting and interacting with their experienced team was one of the best decisions I made.'],

        },
        {
            image: Testimonial_image,
            testi_name: 'Sonu',
            description: ['Signing up for Career Vidyalaya, and meeting and interacting with their experienced team was one of the best decisions I made.'],
        },
        {
            image: Testimonial_image,
            testi_name: 'Sonu',
            description: ['Signing up for Career Vidyalaya, and meeting and interacting with their experienced team was one of the best decisions I made.'],
        },
    ];


    return (
        <div className="wrapper d-flex flex-column min-vh-100 bg-light">
            <Box style={{ boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
                {!(role === 'Student' || role === 'Parent' || role === 'Counsellor' || role === 'B2B') ?
                    <Navbar /> :
                    <Navbar_with_login />
                }
            </Box>

            <Box className="body flex-grow-1" pt={[5, 10]}>
                {(role === 'Student') && (
                    <Flex
                        direction={['column', 'column', 'row']}  // Stacks vertically on smaller screens, row on larger
                        align="center"
                        justify="space-between"  // Ensures the items are spread out with space between
                        py={[8, 4]}
                        px={[6, 10, 15]}
                        gap={['20px', '30px', '70px']}  // Responsive gap between the boxes
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

                )}

                {(role === 'Student') && (

                    <Box bg="#DEFFFD" p={5}>
                        <Heading
                            textAlign="start"
                            mb={5}
                            color="black"
                            fontSize={title_size2}
                            px={{ base: '20px', md: '30px', lg: '50px' }}
                        >
                            Demo Test Result
                        </Heading>
                        <Flex
                            direction={{ base: 'column', md: 'row' }}
                            align="center"
                            justify="center"
                            py={{ base: 8, md: 4 }}
                            px={{ base: 4, md: 8, lg: 15 }}
                            gap={{ base: '20px', md: '40px', lg: '70px' }}
                        >
                            <Image
                                src={TestResult1}
                                alt="Card Image"
                                // maxW={{ base: '100%', md: '70%', lg: '800px' }}
                                w={["100%", "90%", "55%", "55%"]}
                                h="auto"
                                mb={{ base: 4, md: 6 }}
                                boxShadow="2xl"
                            />
                            <Image
                                src={TestResult2}
                                alt="Card Image"
                                // maxW={{ base: '100%', md: '60%', lg: '615px' }}
                                w={["100%", "90%", "42%", "42%"]}
                                h="auto"
                                mb={{ base: 4, md: 6 }}
                                boxShadow="2xl"
                            />
                        </Flex>
                    </Box>
                )}
                {(role === 'Student') && (

                    <Box bg={'#DBF0FF'} p={5} px={[15, 15, 20]} >
                        <Heading textAlign="start" mb={5} color={'black'} fontSize={title_size2}>
                            Feedback from the Consultant
                        </Heading>

                        <Box display="flex" justifyContent="center" alignItems="center" py={[8, 4]}> {/* Centering the image */}
                            <Image
                                src={Feedback}
                                alt="Card Image"
                                style={{ width: '100%', height: 'auto', maxWidth: '1600px' }} // Increased maxWidth
                                mb={[4, 6]} // Responsive margin-bottom for the image
                                boxShadow="2xl"
                            />
                        </Box>
                    </Box>
                )}

                {(role === 'Student') && (
                    <Box bg='#FFFCAA' py={6} px={4}> {/* Wrapper with background color */}
                        <SimpleGrid columns={[3]} spacing={6} mb={6} justifyContent="space-between" alignItems="center">
                            <Box
                                p={4}
                                borderRadius="md"
                                display="flex"
                                flexDirection="column"
                                alignItems="center"
                                justifyContent="center"
                                width="60%"
                                height="130px"
                                justifySelf="flex-end" // Align the first box to the right
                            >
                                <Text fontSize="5xl" fontWeight="bold" textAlign="center">2</Text>
                                <Text fontSize="lg" fontWeight="bold" textAlign="center">Completed Sessions</Text>
                            </Box>

                            {/* Vertical Line */}
                            <Box
                                height="130px"
                                width="2px"
                                bg="black"
                                mx="auto"
                            />

                            <Box
                                p={4}
                                borderRadius="md"
                                display="flex"
                                flexDirection="column"
                                alignItems="center"
                                justifyContent="center"
                                width="60%"
                                height="130px"
                                justifySelf="flex-start" // Align the second box to the left
                            >
                                <Text fontSize="5xl" fontWeight="bold" textAlign="center">1</Text>
                                <Text fontSize="lg" fontWeight="bold" textAlign="center">Remaining Session</Text>
                            </Box>
                        </SimpleGrid>

                        {/* Button centered below the boxes */}
                        <Box display="flex" justifyContent="center" mt={4}>
                            <Button color="white" bg="#EB543B" _hover={{ bg: "orange.600" }} borderRadius={'none'} fontSize={['xl', '2xl', '4xl']} fontWeight={'bold'} py={['20px', '30px', '30px']} px={['30px', '40px', '40px']}>
                                Finish your Session
                            </Button>
                        </Box>
                    </Box>
                )}



                {(role === 'Parent') && (
                    <>
                        <Par_Dash_Reg_Child />
                        <Flex direction="column" align="center" justify="center" bgColor={'#D9D9D9'} py={[8, 12]} px={[6, 10, 20]} mb={10}>
                            <Grid templateColumns={['1fr', '2fr 2fr']} gap={[10, 20, 40]} alignItems="center" justifyContent="center" >
                                <Heading color="#6A2727" textAlign="center" fontSize={demo_title_size} >
                                    Enroll your child for a
                                    <Text color="#6A2727" fontWeight="inherit" fontSize={free_title_size}> {/* Ensuring it inherits the font weight */}
                                        Demo Test
                                    </Text>
                                </Heading>

                                <Button mt={[0, 5]} bgColor="#4d3acc" color="#ffffff" _hover={{ bgColor: "#8d7dfa" }} size="lg" px={[5, 10]} py={[6, 8]} fontSize={faq_title_size} fontWeight={['650', '650', '700']} borderRadius={'none'}>
                                    Take a Demo
                                </Button>
                            </Grid>
                        </Flex>
                    </>
                )}


                {/* 3rd Row - Title and 3 Cards */}
                {(role === 'Parent') && (
                    < Box mb={10} px={['30px', '30px', '30px', '100px', '200px']}>
                        <Heading textAlign="center" mb={5} color={tilecolor_purple} fontSize={title_size}>
                            Our Online Offerings
                        </Heading>
                        <Box display="flex" justifyContent="center" alignItems="center" mb={5}>
                            <Text fontSize={subtitle_size} fontWeight="500">Shaping your Career</Text>
                        </Box>
                        <SimpleGrid columns={[1, 3]} spacing={8}>
                            {cardData2.slice(0, 3).map((card, i) => (
                                <CardComponent key={i} image={card.image} title={card.title} description={card.description} />
                            ))}
                        </SimpleGrid>
                    </Box>
                )}
                {/* <Appointments /> */}


                {(role === 'Counsellor') && (
                    <Appointments />
                )}




                {!(role === 'Counsellor' || role === 'B2B') && (
                    <Flex direction="column" align="center" justify="center" bgImage={bg_mask} py={[8, 12]} px={[6, 10, 20]}>
                        <Grid templateColumns={['1fr', '2fr 1fr']} gap={[10, 20, 40]} alignItems="center" justifyContent="center" >
                            <Heading color="#ffffff" textAlign="center" fontSize={demo_title_size} >
                                Still not sure about your plans?
                            </Heading>

                            <Button onClick={handleNavigate} mt={[0, 5]} bgColor="#4d3acc" color="#ffffff" _hover={{ bgColor: "#8d7dfa" }} size="lg" px={[5, 10]} py={[6, 8]} fontSize={faq_title_size} fontWeight={['650', '650', '700']}>
                                Subscribe
                            </Button>


                        </Grid>
                    </Flex>
                )}

                {/* 4th Row - Title and 3 Cards + Button with light green background */}
                {!(role === 'Counsellor' || role === 'B2B') && (
                    <Box bg={lightGreenBg} p={5} px={['30px', '30px', '30px', '100px', '200px']} mb={10}>
                        <Heading textAlign="center" mb={5} color={tilecolor_purple} fontSize={title_size}>
                            Our Plans
                        </Heading>
                        <Box display="flex" justifyContent="center" alignItems="center" mb={5}>
                            <Text fontSize={subtitle_size} fontWeight="500" textAlign={'center'}>Get Admission in suitable college, scale the Career to Global Level,<br /> and build a sustainable future</Text>
                        </Box>
                        <SimpleGrid columns={[1, 3]} spacing={12}>
                            {cardData3.slice(0, 3).map((card, i) => (
                                <CardWithButtonComponent key={i} image={card.image} title={card.title} description={card.description} />
                            ))}
                        </SimpleGrid>
                    </Box>
                )}

                {(role === 'B2B') && (
                    <Box py={6} px={5}> {/* Wrapper with background color */}

                        {/* First Row with 1 Box */}
                        <SimpleGrid columns={1} spacing={6} mb={6}>
                            <Box display="flex" justifyContent="center" alignItems="center">
                                <Image src={image1} alt="Image 1" />
                            </Box>
                        </SimpleGrid>

                        {/* Second Row with 2 Boxes in 2 Columns */}
                        <SimpleGrid bg='#FFFFFF' columns={[1, 2]} spacing={6}>
                            <Box display="flex" justifyContent="center" alignItems="center">
                                <Image src={image2} alt="Image 2" />
                            </Box>
                            <Box display="flex" justifyContent="center" alignItems="center">
                                <Image src={image3} alt="Image 3" />
                            </Box>
                        </SimpleGrid>
                    </Box>
                )}



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
        </div >
    );
};

// Card Component
const CardComponent = ({ image, title, description }) => (
    <Box
        bg="white"
        boxShadow="md"
        rounded="lg"
        overflow="hidden"
        p={[4, 6, 8]} // Responsive padding for the entire card
        transition="all 0.2s"
        _hover={{ transform: 'scale(1.05)' }}
    >
        <Flex direction="column" align="center" justify="center" textAlign="center">
            <Image
                src={image}
                alt="Card Image"
                style={{ width: '100%', height: 'auto', maxWidth: '250px' }}
                mb={[4, 6]} // Adding responsive margin-bottom to the image
            />
            <Heading size="lg" mt={2} px={[4, 6, 8]}> {/* Responsive horizontal padding */}
                {title}
            </Heading>
            <Text mt={2} px={[4, 6, 8]} color='#4d3acc' fontWeight={'bold'} fontSize={['15px', '15px', '15px', '18px']}> {/* Responsive padding for description */}
                {description}
            </Text>
        </Flex>
    </Box>
);


// SlicerCard Component (used in the slider)
const SlicerCardComponent = ({ image, testi_name, description }) => (
    <Box bg="white" boxShadow="md" rounded="lg" overflow="hidden" p={5} textAlign="center" mx={3}>
        {/* <Flex direction={['column', 'row']} align="center" justify="space-between">
            <Image src={image} alt="Testimonial Image" style={{ width: '100px', height: '100px', borderRadius: '50%' }} />
            <Box ml={[0, 4]} mt={[4, 0]}>
                <Text fontWeight="bold">{testi_name}</Text>
                <Text>{description}</Text>
            </Box>
        </Flex> */}

        {/* Flexbox with row direction for text on the left and image on the right */}
        <Flex direction="row" align="center" justify="space-between">

            {/* Left side text */}
            <Box flex="1" pr={5}>

                <Text>{description}</Text>
                <Heading size="md" mb={2} color="#24221e">
                    {testi_name}
                </Heading>
            </Box>

            {/* Right side image */}
            <Box flexShrink="0">
                <Image src={image} alt="Card Image" style={{ width: '150px', height: '150px', borderRadius: '8px' }} />
            </Box>
        </Flex>
    </Box>
);

// CardWithButton Component
const CardWithButtonComponent = ({ image, title, description }) => (
    <Box
        bg="white"
        boxShadow="md"
        rounded="lg"
        overflow="hidden"

        py={5}
        textAlign="center" // Center align the text and button
        position='relative'
        transition="all 0.2s"
        _hover={{ transform: 'scale(1.05)' }}
    >

        {/* Recommended Tag */}
        {title === "Premium" && (
            <Box
                position="absolute"
                top={2}
                right={2}
                bg="#1D8A09"
                color="white"
                px={3}
                py={1}
                // rounded="md"
                fontSize="sm"
                fontWeight="bold"
            >
                Recommended
            </Box>
        )}
        <Flex
            direction="column"
            align="center" // Align items to center
            justify="center"
        >
            {/* Responsive image */}
            <Image
                src={image}
                alt="Card Image"
                style={{ width: '10%', maxWidth: '150px', height: 'auto' }} // Set width and height to be responsive
                mb={4} // Add margin below the image
            />

            <Heading size="md" mt={2}>
                {title}
            </Heading>

            {/* List of description points */}
            <UnorderedList mt={2} textAlign="left" width={['90%', '80%', '70%']}>
                {description.map((point, i) => (
                    <ListItem key={i}>{point}</ListItem>
                ))}
            </UnorderedList>

            {/* Button */}
            <Button mt={4} color="white" bgColor="#4d3acc" _hover={{ bgColor: "#8d7dfa" }} width={['80%', '60%', '40%']}>
                <Link to={'/services'}>
                    See Details
                </Link>
            </Button>
        </Flex>
    </Box>
);



export default Student_Dashboard;

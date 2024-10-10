
import {
    Box,
    Button,
    Heading,
    Image,
    Flex,
    Grid,
    Text,
    Stack,
    SimpleGrid,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    useColorModeValue,
    UnorderedList,
    ListItem,
    useBreakpointValue,
} from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import React, { useState } from 'react'

import WithSubnavigation from 'src/components/othercomponents/Navbar'
import Footer from 'src/components/othercomponents/Footer'

import gateway_image1 from "src/assets/images/Home/gateway_image1.png";
import gateway_image2 from "src/assets/images/Home/gateway_image2.png";
import gateway_image3 from "src/assets/images/Home/gateway_image3.png";
import gateway_image4 from "src/assets/images/Home/gateway_image4.png";
import gateway_image5 from "src/assets/images/Home/gateway_image5.png";
import { Link } from 'react-router-dom';
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
import banner_image2 from "src/assets/images/Home/banner_image2.png";
import Cate_1 from "src/assets/images/Services/Cate_1.png";
import Cate_2 from "src/assets/images/Services/Cate_2.png";
import Cate_3 from "src/assets/images/Services/Cate_3.png";



import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Col, Row } from 'react-bootstrap';
import { CButton } from '@coreui/react';


const Services = () => {
    const cardBg = useColorModeValue('white', 'gray.700');
    const lightGreenBg = '#d9ffd2';
    const tilecolor_purple = '#4d3acc';
    const testi_bg_color = '#ffebd2';
    const title_size = ["2xl", "3xl", "4xl", "5xl"]
    const demo_title_size = ["2xl", "3xl", "4xl", "5xl"]
    const faq_title_size = ["xl", "2xl", "3xl", "4xl"]
    const subtitle_size = ["xl", "xl", "2xl", "3xl"]
    const font_family = 'Poppins, sans-serif'

    // Data for the 5 cards (images, titles, descriptions)
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
            title: 'Live Video Counselling',
            description: 'Know more',

        },
        {
            image: card_3_image2,
            title: "Student's cell",
            description: 'Know more',
        },
        {
            image: card_3_image3,
            title: 'Live connect',
            description: 'Know more',
        },
    ];

    // Data for the 5 cards (images, titles, descriptions)
    const accordian = [
        {
            title: 'What Is Career Counselling & Career Guidance?',
            description: "Career Counselling: Career counselling and career guidance are two terms often thought to be the same, but they have different purposes. Career counselling primarily involves one-on-one or online sessions with a career guidance counsellor who assesses an individual's skills, interests, aspirations, and intelligences, puts together the information, and points students in the right direction",

        },
        // {
        //     title: 'Student’s cell',
        //     description: 'Know more',
        // },
        // {
        //     title: 'Live connect',
        //     description: 'Know more',
        // },
    ];

    // Data for the 5 cards (images, titles, descriptions)
    const cardData3 = [
        {
            image: Triforce,
            title: 'Basic',
            description: ['Get enough time to decide the stream', 'Early skill development and mastery in line with the goal'],

        },
        {
            image: Star,
            title: 'Advanced',
            description: ['Informed decision making for your career', 'Early exploration and right stream selection'],
        },
        {
            image: Crown,
            title: 'Premium',
            description: ['Informed decision making for your career', 'Early exploration and right stream selection'],
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

    const [btnBgColor, setbtnBgColor] = useState('#4d3acc');
    const renderLeftColumn = (largeTitle, mediumTitle, points, btnLabel) => (
        <Box>
            <Heading size="lg" mb={5} color={'#4d3acc'} style={{ fontSize: '2.2rem' }}>{largeTitle}</Heading>
            <Heading size="md" mb={4} style={{ fontSize: '1.5rem' }}>{mediumTitle}</Heading>
            <UnorderedList mb={5} style={{ fontSize: '1.2rem', fontWeight: '500', marginTop: '25px', marginLeft: '-2px' }}>
                {points.map((point, index) => (
                    <ListItem key={index} >{point}</ListItem>
                ))}
            </UnorderedList>
            <CButton
                style={{ backgroundColor: btnBgColor, color: '#ffffff', borderColor: btnBgColor, fontSize: '1.2rem', marginTop: '30px' }}
                onMouseEnter={() => setbtnBgColor('#8d7dfa')}
                onMouseLeave={() => setbtnBgColor('#4d3acc')} >
                {btnLabel}
            </CButton>
        </Box>
    );

    const renderRightColumn = (imageSrc) => (
        <Box>
            <img src={imageSrc} alt="Right Column" style={{ width: '80%', height: 'auto' }} />
        </Box>
    );

    return (
        <div className="wrapper d-flex flex-column min-vh-100 bg-light">
            <Box style={{ boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
                <WithSubnavigation />
            </Box>

            <Box className="body flex-grow-1" pt={[0]}>




                {/* 1stth Row - Title and Button Horizontally Centered */}
                <Flex direction="column" align="center" justify="center" mb={10} bgImage={bg_mask} py={[8, 12]} px={[6, 10, 20]}>
                    <Grid templateColumns={['1fr', '2fr 2fr']} gap={[10, 20, 40]} alignItems="center" justifyContent="center" >
                        <Heading color="#ffffff" textAlign="center" fontSize={demo_title_size} >
                            Start your journey with<br /> Career Vidyalaya!
                        </Heading>
                        <Button mt={[0, 5]} bgColor="#4d3acc" color="#ffffff" _hover={{ bgColor: "#8d7dfa" }} size="lg" px={[5, 10]} py={[6, 8]} fontSize={faq_title_size} fontWeight={['650', '650', '700']}>
                            Take a Demo
                        </Button>
                    </Grid>
                </Flex>



                {/* 2nd row Categories */}
                <Box p={useBreakpointValue({ base: 4, md: 8 })} px={{ base: "20px", md: "150px" }}>
                    {/* First Row */}
                    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} mb={10}>
                        <Flex justify={{ base: "center", md: "flex-start" }} align="center">
                            {renderLeftColumn(
                                "Ārambha (आरम्भ)",
                                "Class 7 and 8 – Start early to finish on top",
                                [
                                    "Get enough time to decide the stream",
                                    "Early skill development and mastery in line with the goal",
                                    "Financial plantings in better way to support the dream career",
                                    "Clear direction and confidence with focused approach",
                                ],
                                "Subscribe"
                            )}
                        </Flex>
                        <Flex justify={{ base: "center", md: "flex-start" }} align="center">
                            {renderRightColumn(Cate_1)}
                        </Flex>
                    </SimpleGrid>

                    {/* Second Row */}
                    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} mb={10}>
                        <Flex justify={{ base: "center", md: "flex-start" }} align="center">
                            {renderRightColumn(Cate_2)}
                        </Flex>
                        <Flex justify={{ base: "center", md: "flex-start" }} align="center">
                            {renderLeftColumn(
                                "Madhyam (मध्यम)",
                                "Class 9 and 10 - Get in the first available slot and start the journey",
                                [
                                    "Informed decision making",
                                    "Early exploration and right stream selection",
                                    "Inapt planning of the entrance and preparatory examinations",
                                    "Self-awareness",
                                ],
                                "Subscribe"
                            )}
                        </Flex>
                    </SimpleGrid>

                    {/* Third Row */}
                    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                        <Flex justify={{ base: "center", md: "flex-start" }} align="center">
                            {renderLeftColumn(
                                "Niśchaya (निश्चय)",
                                "Class 11 and 12th - Time to decide your destination",
                                [
                                    "Targeted course selection",
                                    "Appropriate college selection",
                                    "Enhanced and relevant skill acquisition",
                                    "Realistic goal setting with clarity and confidence",
                                ],
                                "Subscribe"
                            )}
                        </Flex>
                        <Flex justify={{ base: "center", md: "flex-start" }} align="center">
                            {renderRightColumn(Cate_3)}
                        </Flex>
                    </SimpleGrid>
                </Box>




                {/* 3th Row - Title and 3 Cards + Button with light green background */}
                <Box bg={lightGreenBg} p={5} mb={10} px={['30px', '30px', '30px', '100px', '200px']}>
                    <Heading textAlign="center" mb={5} color={tilecolor_purple}>
                        Our Plans
                    </Heading>
                    <Box display="flex" justifyContent="center" alignItems="center">
                        <Text>Get Admission in suitable college , scale the Career to Global Level, and build a sustainable future</Text>
                    </Box>
                    <SimpleGrid columns={[1, 3]} spacing={12}>
                        {cardData3.slice(0, 3).map((card, i) => (
                            <CardWithButtonComponent key={i} image={card.image} title={card.title} description={card.description} />
                        ))}
                    </SimpleGrid>
                </Box>

                {/* 4th Row - Title and Button Horizontally Centered */}
                {/* <Flex direction="column" align="center" justify="center" mb={10} bgImage={bg_mask} py={[8, 12]} px={[6, 10, 20]}>
                    <Grid templateColumns={['1fr', '2fr 2fr']} gap={[10, 20, 40]} alignItems="center" justifyContent="center" >
                        <Heading color="#ffffff" textAlign="center" fontSize={demo_title_size} >
                            Start your journey with<br /> Career Vidyalaya!
                        </Heading>
                        <Button mt={[0, 5]} bgColor="#4d3acc" color="#ffffff" _hover={{ bgColor: "#8d7dfa" }} size="lg" px={[5, 10]} py={[6, 8]} fontSize={faq_title_size} fontWeight={['650', '650', '700']}>
                            Take a Demo
                        </Button>
                    </Grid>
                </Flex> */}

                {/* 5rd Row - Title and 4 Cards */}
                <Box mb={10} px={['30px', '30px', '30px', '100px', '200px']}>
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

                {/* 6th Row - Card Slider */}
                <Box mb={6}>
                    <Image src={banner_image2} alt="Card Image" />

                </Box>

                {/* 7th Row - Card Slider */}
                <Box bg={testi_bg_color} pb={10} px={[2, 5]}>
                    <Heading textAlign="center" mb={5} color={tilecolor_purple} fontSize={title_size}>
                        Success Stories
                    </Heading>
                    <Slider {...settings}>
                        {testimonial_slider.map((card, i) => (
                            <SlicerCardComponent key={i} image={card.image} testi_name={card.testi_name} description={card.description} />
                        ))}
                    </Slider>
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
                <Box py={10} pb={0} color="white" textAlign="center">
                    <Footer />
                </Box>
            </Box>
        </div>
    );
};

// Card Component
const CardComponent = ({ image, title, description }) => {
    return (
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
};

// Testimonial Slider Component
const SlicerCardComponent = ({ image, testi_name, description }) => {
    return (
        <Box
            bg="white"
            boxShadow="md"
            rounded="lg"
            overflow="hidden"
            p={5}
            transition="all 0.2s"
            _hover={{ transform: 'scale(1.05)' }}
            marginInline={6}
        >
            {/* Flexbox with row direction for text on the left and image on the right */}
            <Flex direction="row" align="center" justify="space-between">

                {/* Left side text */}
                <Box flex="1" pr={5}>

                    <Text>{description}</Text>
                    <Heading size="md" mb={2}>
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
};


// Card with Button Component
const CardWithButtonComponent = ({ image, title, description }) => {
    return (
        <Box
            bg="white"
            boxShadow="md"
            rounded="lg"
            overflow="hidden"
            p={5}
            transition="all 0.2s"
            _hover={{ transform: 'scale(1.05)' }}
            style={{ paddingTop: "50px", paddingBottom: "50px" }}>

            <Flex direction="column" align="center" justify="center" textAlign="center">
                <Image src={image} alt="Card Image" style={{ width: '35px', height: '35px' }} />
                <Heading size="md" mt={2}>
                    {title}
                </Heading>
                {/* Rendering bullet points in description */}
                <Box mt={3} textAlign="left">
                    <UnorderedList>
                        {description.map((point, index) => (
                            <ListItem key={index}>{point}</ListItem>
                        ))}
                    </UnorderedList>
                </Box>
                <Button mt={3} bgColor="#4d3acc" color="#ffffff" _hover={{ bgColor: "#8d7dfa" }}>
                    See Details
                </Button>
            </Flex>
        </Box>
    );
};


export default Services;

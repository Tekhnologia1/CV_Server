import React from 'react';
import { Box, Heading, Text, SimpleGrid, Grid, Flex, Image, Button, UnorderedList, ListItem, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, useColorModeValue, Stack } from '@chakra-ui/react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';
import Footer from 'src/components/othercomponents/Footer.js';
import WithSubnavigation from 'src/components/othercomponents/Navbar';
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

const Home = () => {
    const cardBg = useColorModeValue('white', 'gray.700');
    const tilecolor_purple = "#4d3acc";
    const lightGreenBg = "#e0f7e7";
    const testi_bg_color = "#f9f9f9";
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
            title: 'Student’s cell',
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
            description: ['Testing solutions - DMIT and Psychometric tests', 'Personalized report for DMIT and Psychometric tests'],

        },
        {
            image: Star,
            title: 'Advanced',
            description: ['Includes all services from basic package', 'A 30 minutes counseling session with student to finalize the career option'],
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
                <WithSubnavigation />
            </Box>

            <Box className="body flex-grow-1" pt={[5, 10]}>
                {/* 1st Row - Two Images */}
                <SimpleGrid columns={[1, 2]} spacing={10} mb={12}>
                    <Box display="flex" justifyContent="center" alignItems="center">
                        <Image src={top_image1} alt="Image 1" style={{ width: '100%', maxWidth: '700px', height: 'auto' }} />
                    </Box>
                    <Box display="flex" justifyContent="center" alignItems="center">
                        <Image src={top_image2} alt="Image 2" style={{ width: '100%', maxWidth: '700px', height: 'auto' }} />
                    </Box>
                </SimpleGrid>

                {/* 2nd Row - Title and 5 Cards */}
                <Box mb={10} px={[4, 8, 12, 20]}>
                    <Heading textAlign="center" mb={5} color={tilecolor_purple}>
                        A gateway for your Bright future
                    </Heading>
                    <Box display="flex" justifyContent="center" alignItems="center" mb={5}>
                        <Text>Here's how</Text>
                    </Box>
                    <Grid
                        templateColumns={['1fr', 'repeat(3, 1fr)']}
                        gap={12}
                        justifyContent="center"
                        mb={5}
                    >
                        {cardData1.slice(0, 3).map((card, i) => (
                            <CardComponent key={i} image={card.image} title={card.title} description={card.description} />
                        ))}
                    </Grid>
                    <Grid
                        templateColumns={['1fr', 'repeat(2, 1fr)']}
                        gap={12}
                        justifyContent="center"
                        px={[4, 6, 8]}
                    >
                        {cardData1.slice(3).map((card, i) => (
                            <CardComponent key={i} image={card.image} title={card.title} description={card.description} />
                        ))}
                    </Grid>
                </Box>

                {/* 3rd Row - Title and 3 Cards */}
                <Box mb={10} px={[4, 8, 12, 16]}>
                    <Heading textAlign="center" mb={5} color={tilecolor_purple}>
                        Our Online Offerings
                    </Heading>
                    <Box display="flex" justifyContent="center" alignItems="center" mb={5}>
                        <Text>Shaping your Career</Text>
                    </Box>
                    <SimpleGrid columns={[1, 3]} spacing={8}>
                        {cardData2.slice(0, 3).map((card, i) => (
                            <CardComponent key={i} image={card.image} title={card.title} description={card.description}/>
                        ))}
                    </SimpleGrid>
                </Box>

                {/* 4th Row - Title and 3 Cards + Button with light green background */}
                <Box bg={lightGreenBg} p={5} px={[4, 8, 12, 20]}>
                    <Heading textAlign="center" mb={5} color={tilecolor_purple}>
                        Our Plans
                    </Heading>
                    <Box display="flex" justifyContent="center" alignItems="center" mb={5}>
                        <Text>Get Admission in suitable college, scale the Career to Global Level, and build a sustainable future</Text>
                    </Box>
                    <SimpleGrid columns={[1, 3]} spacing={12}>
                        {cardData3.slice(0, 3).map((card, i) => (
                            <CardWithButtonComponent key={i} image={card.image} title={card.title} description={card.description} />
                        ))}
                    </SimpleGrid>
                </Box>

                {/* 5th Row - Title and Button Horizontally Centered */}
                <Flex direction="column" align="center" justify="center" mb={10} bgImage={bg_mask} py={[8, 12]}>
                    <Heading color="#ffffff" textAlign="center">
                        Start your journey with Career Vidyalaya!
                    </Heading>
                    <Button mt={5} bgColor="#4d3acc" color="#ffffff" _hover={{ bgColor: "#8d7dfa" }} size="lg" px={10}>
                        Take a Demo
                    </Button>
                </Flex>

                {/* 6th Row - Card Slider */}
                <Box bg={testi_bg_color} pb={10} px={[2, 5]}>
                    <Heading textAlign="center" mb={5} color={tilecolor_purple}>
                        Success Stories
                    </Heading>
                    <Slider {...settings}>
                        {testimonial_slider.map((card, i) => (
                            <SlicerCardComponent key={i} image={card.image} testi_name={card.testi_name} description={card.description} />
                        ))}
                    </Slider>
                </Box>

                {/* 6th Row - Banner Image */}
                <Box mb={10}>
                    <Image src={banner_image1} alt="Card Image" width="100%" />
                </Box>

                {/* 8th Row - Title and Accordion */}
                <Box mb={10} mx={[4, 8, 12]}>
                    <Heading textAlign="center" mb={5} color={tilecolor_purple}>
                        FAQs: What people usually ask us?
                    </Heading>
                    <Accordion allowToggle>
                        {accordian.map((accord, i) => (
                            <AccordionItem key={i}>
                                <AccordionButton>
                                    <Box flex="1" textAlign="left">
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
                    <Button variant="link" mt={3} color={tilecolor_purple}>
                        Show More
                    </Button>
                </Box>

                {/* 9th Row - Footer */}
                <Box color="white" textAlign="center">
                    <Footer />
                </Box>
            </Box>
        </div>
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
            <Heading size="md" mt={2} px={[4, 6, 8]}> {/* Responsive horizontal padding */}
                {title}
            </Heading>
            <Text mt={2} px={[4, 6, 8]}> {/* Responsive padding for description */}
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
    >
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
                See Details
            </Button>
        </Flex>
    </Box>
);



export default Home;

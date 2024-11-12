import React, { useContext, useEffect, useState } from 'react';
import {
    Box, Heading, Text, SimpleGrid, Grid, Flex, Image, Button,
    UnorderedList, ListItem, Accordion, AccordionItem, Stack,
    AccordionButton, AccordionPanel, AccordionIcon, useColorModeValue,
    textDecoration
} from '@chakra-ui/react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Link, useNavigate } from 'react-router-dom';
import Footer from 'src/components/othercomponents/Footer.js';
import Navbar from 'src/components/othercomponents/Navbar/Navbar';
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
import { UserContext } from 'src/context/UserContextProvider';
import AuthModals from "../SignIn/AuthModals";


const Home = () => {

    const { user } = useContext(UserContext);
    const navigate = useNavigate();
    const [role, setRole] = useState('');




    useEffect(() => {
        setTimeout(() => {
            setRole(user.role);
            console.log(role);
        }, 3000); // 3 seconds delay

    }, [user])




    const cardBg = useColorModeValue('white', 'gray.700');
    const tilecolor_purple = "#4d3acc";
    const title_size = ["2xl", "3xl", "4xl", "5xl"]
    const demo_title_size = ["2xl", "3xl", "4xl", "5xl"]
    const faq_title_size = ["xl", "2xl", "3xl", "4xl"]
    const subtitle_size = ["xl", "xl", "2xl", "3xl"]
    const font_family = 'Poppins, sans-serif'

    // const title_weight = ""
    const lightGreenBg = "#e0f7e7";
    const testi_bg_color = "#ffebd2";
    // Data for the 5 cards (images, titles, descriptions)

    //--------------


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
            title: 'What Is Career Counselling & Career Guidance?',
            description: "Career Counselling: Career counselling and career guidance are two terms often thought to be the same, but they have different purposes. Career counselling primarily involves one-on-one or online sessions with a career guidance consultant who assesses an individual's skills, interests, aspirations, and intelligences, puts together the information, and points students in the right direction",

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
            description: ['Includes all services from basic package', 'A 30 minutes counseling session with student to finalize the career option'],
        },
        {
            image: Crown,
            title: 'Premium',
            description: ['Includes all services from Basic and Advance package', 'Monthly/quarterly webinars and seminars from industry experts on career scopes'],
        },
    ];

    const bannerImagePoints = [
        'Should I pursue a Diploma for Vocational Training?',
        'Should I opt for a Bachelors in Traditional Streams?',
        'Is Humanities my true calling?',
        'Is Commerce the path to my future?'
    ]



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

    const [openSignIn, setOpenSignIn] = useState(false);
    const [openSignUp, setOpenSignUp] = useState(false);

    const openSignInf = () => {
        setOpenSignIn(true);
        setOpenSignUp(false);
    }

    const openSignUpf = () => {
        setOpenSignUp(true);
        setOpenSignIn(false);

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
                {/* 1st Row - Two Images */}
                <VideoGrid />
                {/* <SimpleGrid columns={[1, 2]} spacing={10} mb={12}>
                    <Box display="flex" justifyContent="center" alignItems="center">
                        <Image src={top_image1} alt="Image 1" style={{ width: '100%', maxWidth: '700px', height: 'auto' }} />
                    </Box>
                    <Box display="flex" justifyContent="center" alignItems="center">
                        <Image src={top_image2} alt="Image 2" style={{ width: '100%', maxWidth: '700px', height: 'auto' }} />
                    </Box>
                </SimpleGrid> */}

                {/* 2nd Row - Title and 5 Cards */}
                {!(role === 'Student' || role === 'Parent' || role === 'Counsellor' || role === 'B2B') && (

                    <Box mb={10} px={[4, 8, 12, 20]}>
                        <Heading textAlign="center" mb={5} color={tilecolor_purple} fontSize={title_size}>
                            A gateway for your Bright future
                        </Heading>
                        <Box display="flex" justifyContent="center" alignItems="center" mb={5}>
                            <Text fontSize={subtitle_size} fontWeight="500">Here's how</Text>
                        </Box>
                        <Grid
                            templateColumns={['1fr', 'repeat(3, 1fr)']}
                            gap={12}
                            justifyContent="center"
                            mb={10}
                        >
                            {cardData1.slice(0, 3).map((card, i) => (
                                <CardComponent key={i} image={card.image} title={card.title} description={card.description} />
                            ))}
                        </Grid>
                        <Grid
                            templateColumns={['1fr', 'repeat(2, 1fr)']}
                            gap={12}
                            justifyContent="center"
                            px={['0px', '20px', '15px', '50px', '170px', '290px']}
                        >
                            {cardData1.slice(3).map((card, i) => (
                                <CardComponent key={i} image={card.image} title={card.title} description={card.description} />
                            ))}
                        </Grid>
                    </Box>

                )}


                {/* 3rd Row - Title and 3 Cards */}
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

                {/* 4th Row - Title and 3 Cards + Button with light green background */}
                <Box bg={lightGreenBg} p={5} px={['30px', '30px', '30px', '100px', '200px']}>
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

                {/* 5th Row - Title and Button Horizontally Centered */}
                {/* <Flex direction="column" align="center" justify="center" mb={10} bgImage={bg_mask} py={[8, 12]}>
                    <Heading color="#ffffff" textAlign="center">
                        Start your journey with Career Vidyalaya!
                    </Heading>
                    <Button mt={5} bgColor="#4d3acc" color="#ffffff" _hover={{ bgColor: "#8d7dfa" }} size="lg" px={10}>
                        Take a Demo
                    </Button>
                </Flex> */}

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


                {/* 6th Row - Card Slider */}
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

                {/* 6th Row - Banner Image */}
                <Box mb={10}>
                    <Link to={'/'}>
                        <Image src={banner_image1} alt="Card Image" width="100%" />
                    </Link>
                    {/* <Box
                        position="absolute"
                        top={["65%", "53%", "55%", "55%", "80%", "83%"]}
                        right={["10%","10%","10%","22%","22%"]}
                        transform="translate(-50%, -50%)"
                        textAlign="center"

                    >
                        <Button color="black" bgColor="#9d3acc" _hover={{ bgColor: "#8d7dfa" }} width={['70%', '80%', '90%', '100%', '100%', '100%']} height={['100%','100%','100%']} borderRadius={'none'} fontSize={[10, 14, 15, 17, 23, 24]} py={[2, 2, 2, 2, 2, 3]} alignItems={'center'}>
                            <Link to={'/'}>
                                Speak to an Expert
                            </Link>
                        </Button>
                    </Box> */}
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

                        {/* <Button variant="link" color={tilecolor_purple} fontFamily={font_family} fontWeight={'500'}>
                            Show More FAQs
                        </Button> */}
                        <Button variant="link" color={tilecolor_purple} fontFamily={font_family} fontWeight={'500'} onClick={openSignInf}>
                            signin
                        </Button>
                        <Button variant="link" color={tilecolor_purple} fontFamily={font_family} fontWeight={'500'} onClick={openSignUpf}>
                            signup
                        </Button>
                        <AuthModals
                            openSignIn={openSignIn}
                            openSignUp={openSignUp}
                        />
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
                <Link to={'/services'}>
                    {description}
                </Link>

            </Text>
        </Flex>
    </Box>
);


// SlicerCard Component (used in the slider)
const SlicerCardComponent = ({ image, testi_name, description }) => (
    <Box bg="white" boxShadow="md" rounded="lg" overflow="hidden" p={5} textAlign="center" mx={3}
        transition="all 0.2s"
        _hover={{ transform: 'scale(1.05)' }}
    >
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
        textAlign="center"
        position="relative" // Allow absolute positioning for the tag
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




export default Home;

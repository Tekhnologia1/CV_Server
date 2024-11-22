
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
import React, { useContext, useEffect, useState } from 'react'

import Navbar from 'src/components/othercomponents/Navbar/Navbar'
import Navbar_with_login from 'src/components/othercomponents/Navbar/Navbar_with_login'
import Footer from 'src/components/othercomponents/Footer'

import gateway_image1 from "src/assets/images/Home/gateway_image1.png";
import gateway_image2 from "src/assets/images/Home/gateway_image2.png";
import gateway_image3 from "src/assets/images/Home/gateway_image3.png";
import gateway_image4 from "src/assets/images/Home/gateway_image4.png";
import gateway_image5 from "src/assets/images/Home/gateway_image5.png";
import { Link, useNavigate } from 'react-router-dom';
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
import plan1_image from "src/assets/images/Services/plan1_image.png";
import plan2_image from "src/assets/images/Services/plan2_image.png";
import plan3_image from "src/assets/images/Services/plan3_image.png";




import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Col, Row } from 'react-bootstrap';
import { CButton } from '@coreui/react';
import { UserContext } from 'src/context/UserContextProvider';
import TCModal from '../Terms&Conditions/TCModal';


const Services = () => {
    const { user } = useContext(UserContext);
    const navigate = useNavigate();
    const [role, setRole] = useState('');
    useEffect(() => {
        setRole(user.role);
        console.log(role);
    }, [user])

    const cardBg = useColorModeValue('white', 'gray.700');
    const lightGreenBg = '#d9ffd2';
    const tilecolor_purple = '#4d3acc';
    const testi_bg_color = '#ffebd2';
    const demo_title_size = ["2xl", "3xl", "4xl", "5xl"]
    const faq_title_size = ["xl", "2xl", "3xl", "4xl"]
    const subtitle_size = ["xl", "xl", "2xl", "3xl"]
    const font_family = 'Poppins, sans-serif'
    const title_size = ["2xl", "3xl", "4xl", "5xl"]
    const discounted_price_size = ["3xl", "4xl", "5xl", "6xl"]
    const regular_prize_size = ["xl", "xl", "2xl", "2xl"]
    const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);


    const [selectedDiscountPrice, setSelectedDiscountPrice] = React.useState(null);

    const openCheckOutModal = () => {
        setIsCheckoutOpen(true);
    }

    const closeCheckoutModal =()=> {
        setIsCheckoutOpen(false);
    }

    const handleSubscribe = (price) => {
        setSelectedDiscountPrice(price); // Save the discount price
        openCheckOutModal(); // Open the modal
    };
    
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
            title: 'Career Connect',
            description: 'Know more',

        },
        {
            image: card_3_image2,
            title: "Career Expedition",
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
            plan_image: plan1_image,
            image: Triforce,
            title: 'Basic',
            description: ['Testing solutions - DMIT and Psychometric tests', 'Personalized report for DMIT and Psychometric tests', '30 minutes consulting including report reviews and Q & A', 'Limited access to community resources'],
            discountPrice: '2,999',
            regularPrice: '4,999',
            discountText: '40% off',
            buttonText: 'Subscribe',
            isRecommended: false

        },
        {
            plan_image: plan2_image,
            image: Star,
            title: 'Advanced',
            description: ['Includes all services from basic package', 'A 30 minutes consulting session with student to finalize the career option', 'A 30 minutes consulting session with parents/relatives to understand the parents expectations and students capabilities'],
            discountPrice: '4,799',
            regularPrice: '7,999',
            discountText: '40% off',
            buttonText: 'Subscribe',
            isRecommended: false
        },
        {
            plan_image: plan3_image,
            image: Crown,
            title: 'Premium',
            description: ['Includes all services from Basic and Advance package', 'Monthly/quarterly webinars and seminars from industry experts on career scopes', 'Live interactive sessions from previous years toppers in entrance examinations and first year students from different careers', 'Unlimited access to community resources that includes admission process guidance and college selections', 'Financial aid for economocal challenges from govt and semi-govt organization', 'Prevelaged access to choose top rated consultants from Career Vidyalaya certified consultants'],
            discountPrice: '6,599',
            regularPrice: '10,999',
            discountText: '40% off',
            buttonText: 'Subscribe',
            isRecommended: true
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
                {!(role === 'Student' || role === 'Parent' || role === 'Counsellor' || role === 'B2B') ?
                    <Navbar /> :
                    <Navbar_with_login />
                }
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




                {/* Section - Title, Plans (1 card per row) */}
                <Box bg="#E7F9E4" p={5} mb={10} px={['30px', '30px', '30px', '5px', '5px']}>
                    <Heading textAlign="center" mb={5} color={tilecolor_purple} fontSize={title_size}
                    // onClick={openCheckOutModal}
                    >
                        Our Plans
                    </Heading>
                    <Box display="flex" justifyContent="center" alignItems="center">
                        <Text fontSize={subtitle_size} fontWeight="500" textAlign="center" color="#333">
                            Get Admission in suitable college, scale the Career to Global Level,<br />
                            and build a sustainable future
                        </Text>
                    </Box>

                    {/* 1 Card Per Row */}
                    <SimpleGrid columns={[1]} spacing={12} mt={5}>
                        {cardData3.map((card, i) => (
                            <CardWithButtonComponent
                                key={i}
                                image1={card.plan_image}
                                image2={card.image}
                                title={card.title}
                                description={card.description}
                                price={card.price}
                                discountPrice={card.discountPrice}
                                regularPrice={card.regularPrice}
                                discountText={card.discountText}
                                buttonText={card.buttonText}
                                isRecommended={card.isRecommended}
                                onSubscribe={handleSubscribe} // Pass the handler here
                            />
                        ))}
                    </SimpleGrid>
                    <TCModal
                        isOpen={isCheckoutOpen}
                        onClose={closeCheckoutModal}
                        selectedDiscountPrice={selectedDiscountPrice} // Pass the price to the modal

                    />
                    <Text fontSize={regular_prize_size} textAlign="center" mt={5}>
                        Discounted introductory price is for the first three months.
                    </Text>
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
                <Box mb={10} bg={testi_bg_color} pb={10} px={[2, 5]}>
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


const CardWithButtonComponent = ({ image1, image2, title, description, price, discountPrice, regularPrice, discountText, buttonText, isRecommended, onSubscribe  }) => {

    const tilecolor_purple = '#4d3acc';

    // Responsive font sizes using useBreakpointValue
    const title_size = useBreakpointValue({ base: 'lg', sm: 'xl', md: '2xl', lg: '3xl', xl: '4xl' });
    const points_text_size = useBreakpointValue({ base: 'sm', sm: 'md', md: 'lg' });
    const regular_prize_size = useBreakpointValue({ base: 'lg', sm: 'xl', md: '2xl' });
    const discounted_price_size = useBreakpointValue({ base: 'xl', sm: '2xl', md: '3xl', lg: '4xl', xl: '5xl' });

    const font_family = 'Poppins, sans-serif';

    return (
        <Box
            bg="white"
            boxShadow="md"
            rounded="lg"
            overflow="hidden"
            p={5}
            position="relative"
            transition="all 0.2s"
            _hover={{ transform: 'scale(1.05)' }}
            borderLeft={isRecommended ? "5px solid #4CAF50" : "none"} // Add green border for Recommended
            fontFamily={font_family}
            w={{ base: '100%', md: '80%', lg: '60%' }} // Adjust width for different screen sizes
            mx="auto" // Center horizontally
        >
            {/* Recommended Badge */}
            {isRecommended && (
                <Box position="absolute" top="10px" right="10px" bg="#1D8A09" color="white" px={3} py={1} fontSize="12px" fontWeight="bold">
                    Recommended
                </Box>
            )}

            <Flex direction={{ base: 'column', md: 'row' }} align="start" justify="space-between" textAlign="left" alignItems="center"
                justifyContent="center" justifyItems={'center'}>
                {/* Card Image and Title */}
                <Box direction="column" mr={{ base: 0, md: 4 }} mb={{ base: 4, md: 0 }}>
                    <Image src={image1} alt="Card Image" w={{ base: '100%', sm: '150px' }} h="auto" />
                </Box>

                {/* Description and Pricing */}
                <Box direction="column" flex="1" mr={2}>
                    <Flex direction={{ base: 'column', md: 'row' }} width="100%" gap={8} alignItems={'center'}>
                        <Image src={image2} alt="Card Image" w="70px" h="70px" />
                        <Heading size="lg" mt={2} fontSize={title_size}>
                            {title}
                        </Heading>
                    </Flex>

                    {/* Description - Unordered List */}
                    <Box mt={3} fontSize={points_text_size} color={'black'}>
                        <UnorderedList spacing={2}>
                            {description.map((point, index) => (
                                <ListItem key={index}>{point}</ListItem>
                            ))}
                        </UnorderedList>
                    </Box>
                </Box>

                <Box
                    direction="column"
                    justifyItems={'center'}
                    // mt={{ base: 4, md: 0 }}
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    justifyContent="center"
                    mt={title === 'Premium' && '20px'}
                >
                    {/* Pricing Section */}
                    <Box>
                        <Text color={tilecolor_purple} fontSize={title_size} fontWeight="bold">
                            Early Bird Advantage
                        </Text>
                    </Box>
                    <Box justifyItems={'center'}>
                        <Text fontSize={discounted_price_size} fontWeight="bold" color={tilecolor_purple}>
                            {discountPrice}
                            <Text as="span" fontSize={title_size} fontWeight="500" color={'black'} bgColor={'#FFCC00'} ml={2} p={1} px={3}>
                                {discountText}
                            </Text>
                        </Text>
                        <Text fontSize={regular_prize_size} fontWeight="bold" color={'#414042'}>
                            Regular {regularPrice}
                        </Text>
                    </Box>

                    {/* Subscribe Button */}
                    <Button
                        mt={3}
                        bgColor={tilecolor_purple}
                        color="#ffffff"
                        _hover={{ bgColor: "#8d7dfa" }}
                        px={8}
                        py={7}
                        fontSize={regular_prize_size}
                        rounded={'none'}
                        w={{ base: '100%', sm: 'auto' }} // Full width on small screens
                        onClick={() => onSubscribe(discountPrice)} // Pass discountPrice to the parent
                    >
                        {buttonText || 'Subscribe'}
                    </Button>
                </Box>
            </Flex>
        </Box>
    );
};




export default Services;

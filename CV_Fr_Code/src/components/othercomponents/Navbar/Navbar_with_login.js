import {
    Box,
    Flex,
    Text,
    IconButton,
    Stack,
    Collapse,
    Popover,
    PopoverTrigger,
    PopoverContent,
    useColorModeValue,
    useBreakpointValue,
    useDisclosure,
    Image,
    Icon,
    Menu,
    MenuButton,
    Avatar,
} from '@chakra-ui/react'
import {
    HamburgerIcon,
    CloseIcon,
    ChevronDownIcon,
    ChevronRightIcon,
} from '@chakra-ui/icons'

import SignInModal from 'src/views/pages/SignIn/SignIn'; // Assuming SignInModal is correctly imported
import SignUpModal from 'src/views/pages/signup/Signup'; // Assuming SignUpModal is correctly imported
import cv_brand_logo from "src/assets/brand/cv_brand_logo.png"; // Assuming the logo path is correct
import avatarImage from "src/assets/icons/avatar.png"; // Assuming the logo path is correct
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { UserContext } from 'src/context/UserContextProvider';
import { APIRegister } from 'src/services/api/APIRegister';
import { api_url } from 'src/services/api/APIURL';
import Welcome_image from "src/assets/icons/welcome_icons/parent.png";


const Navbar = () => {
    const { user } = useContext(UserContext);
    const navigate = useNavigate();
    const [role, setRole] = useState('');

    const [user_id, setUser_Id] = useState('');
    const [imageFetch, setImageFetch] = useState('');
    const imageBaseUrl = api_url;
    // const [currentModal, setCurrentModal] = React.useState('');
    const [user_role, setUser_Role] = useState('');

    useEffect(() => {
        setRole(user.role);
    }, [user])

    useEffect(() => {
        if (user?.userId) {
            console.log(user.userId); // Log userId when user state changes
            console.log(user.email);
            console.log(user.role);
            setUser_Id(user.userId);
            handleRoleClick(user.role);
            // handleCurrScreen('welcome');

            // if (user.role) {
            //     setCurrentScreen('welcome'); // Navigate to the welcome screen after successful login
            // }

        }
    }, [user]);

    const { isOpen, onToggle } = useDisclosure();
    const linkHoverColor = useColorModeValue('gray.800', 'white');

    // Navigate role and screen
    const handleRoleClick = (role) => {
        // setCurrentModal(role);
        setUser_Role(role);
        console.log(user_role);

    };
    // // Modal state management
    // const [isSignInOpen, setIsSignInOpen] = useState(false);
    // const [isSignUpOpen, setIsSignUpOpen] = useState(false);

    // const openSignInModal = () => setIsSignInOpen(true);
    // const closeSignInModal = () => setIsSignInOpen(false);

    // const openSignUpModal = () => setIsSignUpOpen(true);
    // const closeSignUpModal = () => setIsSignUpOpen(false);
    useEffect(() => {

        if (user_id) {
            APIRegister().GetUserById(user_id).then((response) => {
                console.log(response[0].firstName);
                // setName(response[0].firstName);
                const responseUrl = response[0].photo ? `${response[0].photo.replace(/\\/g, '/')}` : `Uploads/default.jpg`;
                setImageFetch(imageBaseUrl + '/' + responseUrl);
            }).catch((error) => {
                console.error("Some error, solve it: ", error);
            });
        }
    }, [user_id]);

    const NAV_ITEMS = getNavItems(role);

    return (
        <Box>
            <Flex
                bg={useColorModeValue('white', 'gray.800')}
                color={useColorModeValue('gray.600', 'white')}
                minH={'60px'}
                py={{ base: 2 }}
                px={{ base: 4 }}
                borderBottom={1}
                borderStyle={'solid'}
                borderColor={useColorModeValue('gray.200', 'gray.900')}
                align={'center'}
                justify={'space-between'}
            >
                <Flex
                    flex={{ base: 1, md: 'auto' }}
                    ml={{ base: -2 }}
                    display={{ base: 'flex', md: 'none' }}>
                    <IconButton
                        onClick={onToggle}
                        icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />}
                        variant={'ghost'}
                        aria-label={'Toggle Navigation'}
                    />
                </Flex>

                <Flex flex={{ base: 1 }} align="center" justify={{ base: 'center', md: 'start' }}>
                    <Link to={'/'}>
                        <Image
                            src={cv_brand_logo}
                            className='cv_brand_logo'
                            height={useBreakpointValue({ base: '60px', md: '80px', lg: '120px' })}
                            width={useBreakpointValue({ base: '60px', md: '80px', lg: '120px' })}
                        />
                    </Link>

                    <Flex display={{ base: 'none', md: 'flex' }} ml={10} align="center">
                        <DesktopNav NAV_ITEMS={NAV_ITEMS} />
                    </Flex>
                </Flex>

                {/* Avatar with profile menu */}
                <Link to={'/my_profile'}>
                    <Menu>
                        {user_role === 'B2B' ?
                            (
                                <MenuButton as={Box} cursor="pointer">
                                    <Avatar size="lg" src={Welcome_image} />
                                </MenuButton>
                            )
                            :
                            (
                                <Box display="flex" justifyContent="center">
                                    <Box
                                        width={{ base: "35px", md: "60px" }}
                                        height={{ base: "35px", md: "60px" }}
                                        borderRadius="50%"
                                        overflow="hidden"
                                        border={'1px'}
                                        borderColor={'#919190'}
                                    // mt={["-70px", "-60px", "-120px", "-120px", "-120px", "-120px"]}
                                    >
                                        <Image
                                            src={imageFetch}
                                            alt="Icon"
                                            boxSize="100%"
                                            objectFit="cover"
                                        />
                                    </Box>
                                </Box>
                            )
                        }
                    </Menu>


                </Link>
                {/* Add SignIn and SignUp buttons here if needed */}
            </Flex>

            <Collapse in={isOpen} animateOpacity>
                <MobileNav NAV_ITEMS={NAV_ITEMS} />
            </Collapse>

            {/* Sign In Modal */}
            {/* <SignInModal isOpen={isSignInOpen} onClose={closeSignInModal} /> */}

            {/* Sign Up Modal */}
            {/* <SignUpModal isOpen={isSignUpOpen} onClose={closeSignUpModal} /> */}
        </Box>
    );
}

// Function to generate the navigation items based on the user's role
const getNavItems = (role) => [
    {
        label: 'Home',
        href: '/'
    },
    {
        label: 'Dashboard',
        // href: (role === null ? '/' : '/dashboard')
        href: '/dashboard'
    },
    {
        label: 'Services',
        href: '/services'
    },
    {
        label: 'Testing Tools',
        href: '/testing_tools'
    },
    {
        label: 'Consulting',
        href: (role === null ? '/' : '/counselling')
    },
    {
        label: 'Community',
        href: '#'
    },
    {
        label: 'Contact Us',
        href: '/contactus',
    },

    {
        label: 'About Us',
        href: '/aboutus',
    },
];

// Desktop Navigation Component
const DesktopNav = ({ NAV_ITEMS }) => {
    const location = useLocation();
    const linkColor = useColorModeValue('gray.600', 'gray.200');
    const linkHoverColor = useColorModeValue('gray.800', 'white');
    const popoverContentBgColor = useColorModeValue('white', 'gray.800');

    return (
        <Stack direction={'row'} spacing={4}>
            {NAV_ITEMS.map((navItem) => {
                const isActive = location.pathname === navItem.href;
                return (
                    <Box key={navItem.label}>
                        <Popover trigger={'hover'} placement={'bottom-start'}>
                            <PopoverTrigger>
                                <Box
                                    as="a"
                                    p={2}
                                    href={navItem.href ?? '#'}
                                    fontSize={'md'}
                                    fontWeight={500}
                                    color={isActive ? 'pink.400' : linkColor}
                                    borderRadius="md"
                                    _hover={{ textDecoration: 'none', color: linkHoverColor, bg: '#f2f0ed' }}>
                                    {navItem.label}
                                </Box>
                            </PopoverTrigger>
                            {navItem.children && (
                                <PopoverContent
                                    border={0}
                                    boxShadow={'xl'}
                                    bg={popoverContentBgColor}
                                    p={4}
                                    rounded={'xl'}
                                    minW={'sm'}>
                                    <Stack>
                                        {navItem.children.map((child) => (
                                            <DesktopSubNav key={child.label} {...child} />
                                        ))}
                                    </Stack>
                                </PopoverContent>
                            )}
                        </Popover>
                    </Box>
                );
            })}
        </Stack>
    );
}

// Mobile Navigation Component
const MobileNav = ({ NAV_ITEMS }) => {
    const location = useLocation();

    return (
        <Stack bg={useColorModeValue('white', 'gray.800')} p={4} display={{ md: 'none' }}>
            {NAV_ITEMS.map((navItem) => {
                const isActive = location.pathname === navItem.href;
                return <MobileNavItem key={navItem.label} {...navItem} isActive={isActive} />;
            })}
        </Stack>
    );
};

// Mobile Navigation Item Component
const MobileNavItem = ({ label, children, href, isActive }) => {
    const { isOpen, onToggle } = useDisclosure();

    return (
        <Stack spacing={4} onClick={children && onToggle}>
            <Box
                py={2}
                as="a"
                href={href ?? '#'}
                justifyContent="space-between"
                alignItems="center"
                color={isActive ? 'pink.400' : useColorModeValue('gray.600', 'gray.200')}
                _hover={{ textDecoration: 'none' }}>
                <Text fontWeight={600}>{label}</Text>
                {children && (
                    <Icon as={ChevronDownIcon} transition={'all .25s ease-in-out'} transform={isOpen ? 'rotate(180deg)' : ''} w={6} h={6} />
                )}
            </Box>
            <Collapse in={isOpen} animateOpacity>
                <Stack
                    mt={2}
                    pl={4}
                    borderLeft={1}
                    borderStyle={'solid'}
                    borderColor={useColorModeValue('gray.200', 'gray.700')}
                    align={'start'}>
                    {children && children.map((child) => <Box key={child.label} as="a" py={2} href={child.href}>{child.label}</Box>)}
                </Stack>
            </Collapse>
        </Stack>
    );
};

// Desktop Sub Navigation Component
const DesktopSubNav = ({ label, href, subLabel }) => {
    return (
        <Box
            as="a"
            href={href}
            role={'group'}
            display={'block'}
            p={2}
            rounded={'md'}
            _hover={{ bg: useColorModeValue('pink.50', 'gray.900') }}>
            <Stack direction={'row'} align={'center'}>
                <Box>
                    <Text transition={'all .3s ease'} _groupHover={{ color: 'pink.400' }} fontWeight={500}>
                        {label}
                    </Text>
                    <Text fontSize={'sm'}>{subLabel}</Text>
                </Box>
                <Flex
                    transition={'all .3s ease'}
                    transform={'translateX(-10px)'}
                    opacity={0}
                    _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
                    justify={'flex-end'}
                    align={'center'}
                    flex={1}>
                    <Icon color={'pink.400'} w={5} h={5} as={ChevronRightIcon} />
                </Flex>
            </Stack>
        </Box>
    );
};

export default Navbar;

import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Image
} from '@chakra-ui/react'
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from '@chakra-ui/icons'

import SignInModal from '../../views/pages/SignIn/SignIn'; // Assuming SignInModal is correctly imported
import SignUpModal from 'src/views/pages/signup/Signup'; // Assuming SignUpModal is correctly imported
import cv_brand_logo from "src/assets/brand/cv_brand_logo.png"; // Assuming the logo path is correct
import { useLocation } from 'react-router-dom'; // Import useLocation from react-router-dom
import { useState } from 'react';

export default function WithSubnavigation() {
  const { isOpen, onToggle } = useDisclosure();
  const linkHoverColor = useColorModeValue('gray.800', 'white');

  // Modal state management
  const [isSignInOpen, setIsSignInOpen] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);

  // Handlers to open and close modals
  const openSignInModal = () => setIsSignInOpen(true);
  const closeSignInModal = () => setIsSignInOpen(false);

  const openSignUpModal = () => setIsSignUpOpen(true);
  const closeSignUpModal = () => setIsSignUpOpen(false);

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
          <Text
            textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
            fontFamily={'heading'}
            color={useColorModeValue('gray.800', 'white')}>
            <Image
              src={cv_brand_logo}
              className='cv_brand_logo'
              height={useBreakpointValue({ base: '60px', md: '80px', lg: '120px' })}
              width={useBreakpointValue({ base: '60px', md: '80px', lg: '120px' })}
            />          </Text>

          <Flex display={{ base: 'none', md: 'flex' }} ml={10} align="center">
            <DesktopNav />
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={'flex-end'}
          direction={'row'}
          spacing={6}>
          <Button
            fontSize={'sm'}
            fontWeight={400}
            variant={'link'}
            borderRadius="md"
            _hover={{
              textDecoration: 'none',
              color: linkHoverColor,
              bg: '#f2f0ed',
            }}
            onClick={openSignInModal}>
            Sign In
          </Button>
          <Button
            fontSize={'sm'}
            fontWeight={600}
            color={'white'}
            bg={'#f4933c'}
            _hover={{
              bg: '#fcba7e',
            }}
            onClick={openSignUpModal}>
            Sign Up
          </Button>
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>

      {/* Sign In Modal */}
      <SignInModal
        isOpen={isSignInOpen}
        onClose={closeSignInModal}
        isCentered
      />

      {/* Sign Up Modal */}
      <SignUpModal
        isOpen={isSignUpOpen}
        onClose={closeSignUpModal}
        isCentered
      />
    </Box>
  );
}

// Desktop Navigation Component
const DesktopNav = () => {
  const location = useLocation(); // Use location hook to get current URL
  const linkColor = useColorModeValue('gray.600', 'gray.200');
  const linkHoverColor = useColorModeValue('gray.800', 'white');
  const popoverContentBgColor = useColorModeValue('white', 'gray.800');

  return (
    <Stack direction={'row'} spacing={4}>
      {NAV_ITEMS.map((navItem) => {
        const isActive = location.pathname === navItem.href; // Check if the current URL matches the nav item

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
                  color={isActive ? 'pink.400' : linkColor} // Apply active color
                  borderRadius="md"
                  _hover={{
                    textDecoration: 'none',
                    color: linkHoverColor,
                    bg: '#f2f0ed',
                  }}>
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
          <Text
            transition={'all .3s ease'}
            _groupHover={{ color: 'pink.400' }}
            fontWeight={500}>
            {label}
          </Text>
          <Text fontSize={'md'}>{subLabel}</Text>
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
}

// Mobile Navigation Component
const MobileNav = () => {
  const location = useLocation(); // Use location hook to get current URL

  return (
    <Stack bg={useColorModeValue('white', 'gray.800')} p={4} display={{ md: 'none' }}>
      {NAV_ITEMS.map((navItem) => {
        const isActive = location.pathname === navItem.href; // Check if the current URL matches the nav item

        return (
          <MobileNavItem
            key={navItem.label}
            {...navItem}
            isActive={isActive} // Pass isActive prop
          />
        );
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
        color={isActive ? 'pink.400' : useColorModeValue('gray.600', 'gray.200')} // Apply active color
        _hover={{
          textDecoration: 'none',
        }}>
        <Text fontWeight={600}>{label}</Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={'all .25s ease-in-out'}
            transform={isOpen ? 'rotate(180deg)' : ''}
            w={6}
            h={6}
          />
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
          {children &&
            children.map((child) => (
              <Box key={child.label} as="a" py={2} href={child.href}>
                {child.label}
              </Box>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

// Navigation Items Array
const NAV_ITEMS = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'Services',
    href: '#',
  },
  {
    label: 'Councellor',
    href: '#',
  },
  {
    label: 'Community',
    href: '#',
  },

  {
    label: 'Test Demo',
    href: '#',
  },

  {
    label: 'Contact Us',
    href: '#',
  },

  // {
  //   label: 'Our Services',
  //   href: '/services',
  //   children: [
  //     {
  //       label: 'Service 1',
  //       subLabel: 'Subtext for Service 1',
  //       href: '/service1',
  //     },
  //     {
  //       label: 'Service 2',
  //       subLabel: 'Subtext for Service 2',
  //       href: '/service2',
  //     },
  //   ],
  // },
];

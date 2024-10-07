import {
  Box,
  chakra,
  Container,
  SimpleGrid,
  Stack,
  Text,
  Input,
  IconButton,
  useColorModeValue,
  Button,
  Image,
} from '@chakra-ui/react'
import { FaInstagram, FaLinkedin, FaFacebook, FaEnvelope } from 'react-icons/fa'
import { BiPhoneCall } from 'react-icons/bi'
import cv_brand_logo from "src/assets/brand/cv_brand_logo.png";



const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}>
      <Text srOnly>{label}</Text>
      {children}
    </chakra.button>
  )
}

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue('#E5E5E5')}
      color={useColorModeValue('gray.700', 'gray.200')}>
      <Container as={Stack} maxW={'6xl'} py={10}>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>

          {/* Call Our Helpline Section */}
          <Stack spacing={4}>
            <Text fontWeight={'bold'} fontSize={'lg'}>
              Call Our Helpline
            </Text>
            <Text>Got career-related questions? Talk to our experts!</Text>
            <Stack direction={'row'} align={'center'}>
              <IconButton
                as={'a'}
                href="tel:+918939877998"
                bg={'red.500'}
                color={'white'}
                aria-label="Phone"
                icon={<BiPhoneCall />}
              />
              <Text fontWeight={'bold'}>+91 89398 77998</Text>
            </Stack>
          </Stack>

          {/* Subscribe to Newsletter Section */}
          <Stack spacing={4} >
            <Text fontWeight={'bold'} fontSize={'lg'}>
              Subscribe to our Newsletter
            </Text>
            <Text>
              Expert-written articles and everything else you need to choose the right career, delivered weekly to your inbox.
            </Text>
            <Stack direction={'row'}>
              <Input
                placeholder={'Enter Email'}
                bg={useColorModeValue('gray.100', 'gray.800')}
                border={0}
                _focus={{
                  bg: useColorModeValue('gray.200', 'gray.900'),
                }}
              />
              <IconButton
                bg={'orange.400'}
                color={'white'}
                _hover={{
                  bg: 'orange.600',
                }}
                aria-label="Subscribe"
                icon={<FaEnvelope />}
              />
            </Stack>
          </Stack>

          {/* Stay Connected Section */}
          <Stack spacing={4} align={'center'}>
            <Text fontWeight={'bold'} fontSize={'lg'}>
              Stay Connected
            </Text>
            <Text>Stay updated with all things career - trends, inspiration, and more.</Text>
            <Stack direction={'row'} spacing={4} align={'center'}>
              <SocialButton label={'YouTube'} href={'#'}>
                <FaEnvelope />
              </SocialButton>
              <SocialButton label={'Instagram'} href={'#'}>
                <FaInstagram />
              </SocialButton>
              <SocialButton label={'LinkedIn'} href={'#'}>
                <FaLinkedin />
              </SocialButton>
              <SocialButton label={'Facebook'} href={'#'}>
                <FaFacebook />
              </SocialButton>
            </Stack>
          </Stack>
        </SimpleGrid>

        {/* Footer Bottom Section */}
        <Box
          mt={10}
          borderTopWidth={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.700')}
          pt={5}
          style={{paddingBottom:'var(--chakra-space-0)'}}>
          <Container as={Stack} maxW={'6xl'} spacing={4}>
            {/* SimpleGrid for 3 columns */}
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} justifyContent="center" alignItems="top">
              {/* Logo */}
              <Box display={'flex'} justifyContent={'start'}>
                <Image src={cv_brand_logo} alt="Career Vidyalaya Logo" width={'200px'} height={'200px'} />
              </Box>

              {/* 1st Stack */}
              <Stack direction={'column'} align={'start'}>
                <Text href={'/'}>Home</Text>
                <Text>Services</Text>
                <Text>Counsellors</Text>
                <Text>Community</Text>
                <Text>Test Demo</Text>
              </Stack>

              {/* 2nd Stack */}
              <Stack direction={'column'} align={'start'}>
                <Text>Contact Us</Text>
                <Text>Terms and Conditions</Text>
                <Text>Privacy Policy</Text>
                <Text>Disclaimer</Text>
              </Stack>
            </SimpleGrid>

            {/* Footer Text */}
            <Box textAlign="center" pt={5}>
              <Text>© 2024 Career Vidyalaya. All rights reserved.</Text>
            </Box>
          </Container>
        </Box>

      </Container>
    </Box>
  )
}
import React, { useState } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Button,
  Box,
  Text,
  VStack,
  Link,
  Grid,
  Flex,
  Input
} from '@chakra-ui/react';
import SignInModal from '../SignIn/SignIn';
import student from "src/assets/icons/signup_role_icons/student.png";
import parent from "src/assets/icons/signup_role_icons/parent.png";
import councellor from "src/assets/icons/signup_role_icons/councellor.png";
import b2b from "src/assets/icons/signup_role_icons/b2b.png";
import { Image } from 'react-bootstrap';


const SignUpModal = ({ isOpen, onClose }) => {
  // const [isSignInOpen, setIsSignInOpen] = useState(false); // State to control SignInModal
  const tilecolor_purple = "#4d3acc";
  const font_family = 'Poppins, sans-serif'
  const font_family_inter = 'Inter, sans-serif'
  const role_icon_gap = 2;
  const label_bgcolor = 'white';

  const [currentModal, setCurrentModal] = React.useState('roleSelection');
  const [currentScreen, setCurrentScreen] = useState('');

  const handleRoleClick = (role) => {
    setCurrentModal(role);
  };

  const handleCurrScreen = (screen_name) => {
    setCurrentScreen(screen_name);
  }

  const handleBackButton = () => {
    if (currentScreen === 'enterDetails') {
      setCurrentScreen('roleSelection');
      setCurrentModal('roleSelection');
    } else if (currentScreen === 'getOTP') {
      setCurrentScreen('enterDetails');
    } else if (currentScreen === 'selectStream') {
      setCurrentScreen('getOTP');
    } else if (currentScreen === 'createPass') {
      setCurrentScreen('selectStream');
    }
  };



  // const openSignInModal = () => {
  //   setIsSignInOpen(true); // Open SignIn modal
  //   // onClose(); // Close SignUp modal
  // };

  // const closeSignInModal = () => {
  //   setIsSignInOpen(false); // Close SignIn modal
  // };


  // const handleSignInClick = () => {
  //   onOpenSignIn();  // Open SignIn modal
  //   onClose();       // Close SignUp modal
  // };

  return (


    <Modal isOpen={isOpen} onClose={() => { onClose(); setCurrentModal('roleSelection'); }} isCentered>
      <ModalOverlay />
      <ModalContent p={{ base: 4, md: 6 }} py={['20px', '0px']} borderRadius="15px" maxWidth="500px" bg={
        currentModal === 'studentForm' ? '#FFAD5B' :
          currentModal === 'parentForm' ? '#EABFFF' :
            currentModal === 'counsellorForm' ? '#BFE582' :
              currentModal === 'businessPartnerForm' ? '#BFDBFE' :
                '#FFFFFF'
      } mx={{ base: '10px', md: 'auto' }}
        fontFamily={font_family}
      >
        <ModalHeader position="relative">
          {/* Back button at the top-left corner */}
          {currentModal !== 'roleSelection' && (
            <Button
              variant="ghost"
              onClick={() => handleBackButton()}
              position="absolute"
              left="10px"
              top="10px"
            >
              Back
            </Button>
          )}

          {/* Centered header text */}
          <Flex justifyContent="center" width="100%">
            {currentModal === 'roleSelection' && 'Who you are!'}
            {currentModal === 'studentForm' && 'Welcome, Student.'}
            {currentModal === 'parentForm' && 'Welcome, Parent.'}
            {currentModal === 'counsellorForm' && 'Welcome, Counsellor.'}
          </Flex>
        </ModalHeader>

        <ModalCloseButton />

        <ModalBody>
          {currentModal === 'roleSelection' && (
            <VStack spacing={5}>
              <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }} gap={10} width="100%" padding={['10px', '30px']} fontFamily={font_family_inter}>
                <Button bg="#FFAD5B" height="120px" onClick={() => { handleRoleClick('studentForm'); handleCurrScreen('enterDetails'); }} px={4}>
                  <Box textAlign="center" display="flex" flexDirection="column" alignItems="center" justifyContent="center" gap={role_icon_gap}>
                    <Image src={student} alt="Student" width={'50px'} mb={2} />
                    <Text fontSize={{ base: 'md', md: 'lg' }}>Student</Text>
                  </Box>
                </Button>
                <Button bg="#D8B4FE" height="120px" onClick={() => { handleRoleClick('parentForm'); handleCurrScreen('enterDetails'); }} px={4}>
                  <Box textAlign="center" display="flex" flexDirection="column" alignItems="center" justifyContent="center" gap={role_icon_gap}>
                    <Image src={parent} alt="Student" width={'50px'} mb={2} />
                    <Text fontSize={{ base: 'md', md: 'lg' }}>Parent</Text>
                  </Box>
                </Button>
                <Button bg="#BFE582" height="120px" onClick={() => { handleRoleClick('counsellorForm'); handleCurrScreen('enterDetails'); }} px={4}>
                  <Box textAlign="center" display="flex" flexDirection="column" alignItems="center" justifyContent="center" gap={role_icon_gap}>
                    <Image src={councellor} alt="Student" width={'50px'} mb={2} />
                    <Text fontSize={{ base: 'md', md: 'lg' }}>Counsellor</Text>
                  </Box>
                </Button>
                <Button bg="#BFDBFE" height="120px" onClick={() => { handleRoleClick('businessPartnerForm'); handleCurrScreen('enterDetails'); }} px={4}>
                  <Box textAlign="center" display="flex" flexDirection="column" alignItems="center" justifyContent="center" gap={role_icon_gap}>
                    <Image src={b2b} alt="Student" width={'50px'} mb={2} />
                    <Text fontSize={{ base: 'md', md: 'lg' }} >Business Partner</Text>
                  </Box>
                </Button>
              </Grid>
              <Text fontSize={{ base: 'sm', md: 'md' }} fontFamily={font_family}>
                Have an account?{' '}
                <Link color="blue.600"
                  // onClick={openSignInModal}
                  href='#'
                  textColor={tilecolor_purple}
                  fontWeight={'700'}
                >  {/* Link to open SignInModal */}

                  Sign In
                </Link>
              </Text>
            </VStack>
          )}

          {/* Conditional rendering for specific forms */}
          {currentModal === 'studentForm' && currentScreen === 'enterDetails' && (
            <VStack spacing={4} width="100%">
              <Input placeholder="Enter First Name" size="lg" bg={label_bgcolor} />
              <Input placeholder="Enter Last Name" size="lg" bg={label_bgcolor} />
              <Input placeholder="Enter Contact Number" size="lg" bg={label_bgcolor} />
              <Input placeholder="Enter Email Address" size="lg" bg={label_bgcolor} />
              <Input placeholder="Select State" size="lg" bg={label_bgcolor} />
              <Input placeholder="Select City" size="lg" bg={label_bgcolor} />
              <Input placeholder="Select Institute" size="lg" bg={label_bgcolor} />
              <Input placeholder="Select Class" size="lg" bg={label_bgcolor} />
              <Input placeholder="Select Gender" size="lg" bg={label_bgcolor} />
              <Button colorScheme="red" width="100%" onClick={() => handleCurrScreen('getOTP')}>Get OTP</Button>
            </VStack>
          )}

          {currentModal === 'parentForm' && currentScreen === 'enterDetails' && (
            <VStack spacing={4} width="100%">
              <Input placeholder="Enter First Name" size="lg" bg={label_bgcolor} />
              <Input placeholder="Enter Last Name" size="lg" bg={label_bgcolor} />
              <Input placeholder="Enter Contact Number" size="lg" bg={label_bgcolor} />
              <Input placeholder="Enter Email Address" size="lg" bg={label_bgcolor} />
              <Input placeholder="Select State" size="lg" bg={label_bgcolor} />
              <Input placeholder="Select City" size="lg" bg={label_bgcolor} />
              <Input placeholder="Select Gender" size="lg" bg={label_bgcolor} />
              <Button colorScheme="red" width="100%" onClick={() => handleCurrScreen('getOTP')}>Get OTP</Button>
            </VStack>
          )}

          {currentModal === 'counsellorForm' && currentScreen === 'enterDetails' && (
            <VStack spacing={4} width="100%">
              <Input placeholder="Enter First Name" size="lg" bg={label_bgcolor} />
              <Input placeholder="Enter Last Name" size="lg" bg={label_bgcolor} />
              <Input placeholder="Enter Contact Number" size="lg" bg={label_bgcolor} />
              <Input placeholder="Enter Email Address" size="lg" bg={label_bgcolor} />
              <Input placeholder="Select State" size="lg" bg={label_bgcolor} />
              <Input placeholder="Select City" size="lg" bg={label_bgcolor} />
              <Input placeholder="Select Gender" size="lg" bg={label_bgcolor} />
              <Input placeholder="Select Highest Qualification" size="lg" bg={label_bgcolor} />
              <Input placeholder="Select Years of Experience" size="lg" bg={label_bgcolor} />
              <Input placeholder="Applying for Part Time/ Full Time" size="lg" bg={label_bgcolor} />
              <Input placeholder="Consulting Preferences" size="lg" bg={label_bgcolor} />

              <Button colorScheme="red" width="100%" onClick={() => handleCurrScreen('uploadDocu')}>Next</Button>
            </VStack>
          )}


          {/* Councellor upload documents */}
          {currentModal === 'counsellorForm' && currentScreen === 'uploadDocu' && (
            <VStack spacing={4} width="100%">
              {/* File Upload Fields */}
              <Input type="file" size="lg" bg={label_bgcolor} placeholder="ID Proof" />
              <Input type="file" size="lg" bg={label_bgcolor} placeholder="Photo" />
              <Input type="file" size="lg" bg={label_bgcolor} placeholder="10th Marksheet" />
              <Input type="file" size="lg" bg={label_bgcolor} placeholder="10th Marksheet" />
              <Input type="file" size="lg" bg={label_bgcolor} placeholder="UG Certificate" />
              <Input type="file" size="lg" bg={label_bgcolor} placeholder="PG Certificate" />
              <Input type="file" size="lg" bg={label_bgcolor} placeholder="PhD certificate" />
              <Input type="file" size="lg" bg={label_bgcolor} placeholder="Resume" />

              <Button colorScheme="red" width="100%" onClick={() => handleCurrScreen('getOTP')}>Get OTP</Button>
            </VStack>
          )}

          {/* Get OTP */}
          {currentScreen === 'getOTP' && (
            <VStack spacing={2} mt={4}>
              <Text>Check your contact ******* and email ******* for the OTP</Text>
              <Text>Enter OTP</Text>

              <Flex mb={5}>
                <Input placeholder="0" bg={label_bgcolor} maxLength={1} size="lg" width="50px" />
                <Input placeholder="0" bg={label_bgcolor} maxLength={1} size="lg" width="50px" ml={2} />
                <Input placeholder="0" bg={label_bgcolor} maxLength={1} size="lg" width="50px" ml={2} />
                <Input placeholder="0" bg={label_bgcolor} maxLength={1} size="lg" width="50px" ml={2} />
              </Flex> bg={label_bgcolor}
              <Button colorScheme="red" width="100%" onClick={() => handleCurrScreen('getOTP')}>Sign Up</Button>

            </VStack>
          )}



          {/* You can add similar forms for the other roles */}
        </ModalBody>
      </ModalContent>
    </Modal>




  );
};

export default SignUpModal;


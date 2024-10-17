
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
import science from "src/assets/icons/select_stream_icons/science.png";
import commerce from "src/assets/icons/select_stream_icons/commerce.png";
import arts from "src/assets/icons/select_stream_icons/arts.png";
import check_mark from "src/assets/icons/check_mark.png";
import { Image } from 'react-bootstrap';


const SignUpModal = ({ isOpen, onClose }) => {
  const [isSignInOpen, setIsSignInOpen] = useState(false); // State to control SignInModal
  const tilecolor_purple = "#4d3acc";
  const font_family = 'Poppins, sans-serif'
  const font_family_inter = 'Inter, sans-serif'
  const role_icon_gap = 2;
  const selStream_icon_gap = 5;
  const label_bgcolor = 'white';

  const [currentModal, setCurrentModal] = React.useState('roleSelection');
  const [currentScreen, setCurrentScreen] = useState('');

  // Open SIgnIn Modal
  const openSignInModal = () => {
    setIsSignInOpen(true); // Open SignIn modal
    // onClose(); // Close SignUp modal
  };

  const closeSignInModal = () => {
    setIsSignInOpen(false); // Close SignIn modal
  };

  const closeSignUp = () => {
    onClose();
    setCurrentModal('roleSelection');
    setCurrentScreen('roleSelection');
  }

  // Navigate role and screen
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
    } else if (currentScreen === 'createPassword') {
      if (currentModal === 'studentForm') {
        setCurrentScreen('selectStream');
      } else {
        setCurrentScreen('createPassword');
      }
    } else {
      setCurrentScreen('idSent');
    }
  };



  const createPassPoints = [
    {
      img: check_mark,
      text: 'At least 8 characters—the longer, the better.',
    },
    {
      img: check_mark,
      text: 'A mixture of both uppercase and lowercase letters.',
    },
    {
      img: check_mark,
      text: 'A mixture of letters and numbers.',
    },
    {
      img: check_mark,
      text: 'Inclusion of at least one special character, e.g., ! @ # ? ]',
    },
  ];


  // const handleSignInClick = () => {
  //   onOpenSignIn();  // Open SignIn modal
  //   onClose();       // Close SignUp modal
  // };

  return (
    <>

      <Modal isOpen={isOpen} onClose={() => { closeSignUp(); }} isCentered>
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
            <Flex justifyContent="center" width="100%" fontWeight={'medium'}>
              {currentModal === 'roleSelection' && 'Who you are!'}
              {currentModal === 'studentForm' && 'Welcome, Student.'}
              {currentModal === 'parentForm' && 'Welcome, Parent.'}
              {currentModal === 'counsellorForm' && currentScreen == ! 'idSent' && 'Welcome, Counsellor.'}
            </Flex>
          </ModalHeader>

          <ModalCloseButton />

          <ModalBody my={['auto', '20px', 'auto', 'auto', 'auto']}>
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
                    onClick={openSignInModal}
                    textColor={tilecolor_purple}
                    fontWeight={'700'}
                  >
                    Sign In
                  </Link>
                </Text>
              </VStack>
            )}

            <SignInModal
              isOpen={isSignInOpen}
              onClose={closeSignInModal}

            />

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
                <Button colorScheme="red" width="100%" onClick={() => handleCurrScreen(currentModal === 'parentForm' ? 'createPassword' : currentModal === 'counsellorForm' ? 'idSent' : 'selectStream')}>Sign Up</Button>

              </VStack>
            )}

            {/* Select Stream for Student */}
            {currentModal === 'studentForm' && currentScreen === 'selectStream' && (
              <VStack spacing={4} mt={4}> {/* Adjust spacing here for the gap between buttons */}
                <Text fontWeight={'bold'} fontSize={[18, 23, 24]}>Select Stream</Text>

                <Button bgColor={'#CADCFF'} width="100%" py={8} onClick={() => handleCurrScreen('createPassword')}> {/* Add vertical padding */}
                  <Box display="flex" flexDirection="row" justifyContent="space-between" alignItems="center" width="100%">
                    <Text fontSize={{ base: 'md', md: 'lg' }} mb={0} ml={'50px'}>Science</Text>
                    <Image src={science} alt="science" width={'80px'} mb={0} /> {/* Remove extra margin-bottom */}
                  </Box>
                </Button>

                <Button bgColor={'#DDFFEA'} width="100%" py={8} onClick={() => handleCurrScreen('createPassword')}> {/* Add vertical padding */}
                  <Box display="flex" flexDirection="row" justifyContent="space-between" alignItems="center" width="100%">
                    <Text fontSize={{ base: 'md', md: 'lg' }} mb={0} ml={'35px'}>Commerce</Text>
                    <Image src={commerce} alt="commerce" width={'60px'} mb={0} /> {/* Remove extra margin-bottom */}
                  </Box>
                </Button>

                <Button bgColor={'#FFFB8A'} width="100%" py={8} onClick={() => handleCurrScreen('createPassword')}> {/* Add vertical padding */}
                  <Box display="flex" flexDirection="row" justifyContent="space-between" alignItems="center" width="100%">
                    <Text fontSize={{ base: 'md', md: 'lg' }} mb={0} ml={'65px'}>Arts</Text>
                    <Image src={arts} alt="arts" width={'60px'} mb={0} /> {/* Remove extra margin-bottom */}
                  </Box>
                </Button>
              </VStack>
            )}

            {/* ID sent for Councellor */}
            {currentScreen === 'idSent' && (
              <VStack spacing={4} mt={4} alignItems="center"> {/* Added consistent spacing and alignment */}
                <Box display="flex" flexDirection="column" justifyContent="space-between" alignItems="center" width="100%" textAlign={'center'}>
                  <Text fontSize="lg">Thank you for applying with us.
                    Our team will connect with you shortly. </Text>
                  <Text fontSize="lg">Please check your Email sent to *******@gmail.com and SMS sent to +91 ******** for further communication.</Text>
                </Box>
              </VStack>
            )}

            {/* Create Password */}
            {currentScreen === 'createPassword' && (
              <VStack spacing={4} mt={4} alignItems="center"> {/* Added consistent spacing and alignment */}

                <Text fontSize="lg">Create Password</Text>
                <Input placeholder="Enter password" size="lg" bg={label_bgcolor} mb={3} />

                <Text fontSize="lg">Re-enter Password</Text>
                <Input placeholder="Re-enter password" size="lg" bg={label_bgcolor} mb={3} />

                {/* Password points list */}
                {createPassPoints.map((point, i) => (
                  <Box
                    key={i}
                    display="flex"
                    flexDirection="row"
                    justifyContent="start"
                    alignItems={'start'}
                    width="100%"
                    gap={3} /* Added some gap between icon and text */
                  >
                    <Image src={point.img} alt="point" width={'20px'} mb={0} /> {/* Align the icon */}
                    <Text fontSize={{ base: 'sm', md: 'md' }} textAlign="left">{point.text}</Text> {/* Align text */}
                  </Box>
                ))}

                <Button colorScheme="red" width="100%" mt={3}>Sign Up</Button>
              </VStack>
            )}





          </ModalBody>
        </ModalContent>
      </Modal >


    </>


  );
};

export default SignUpModal;

import React from 'react';
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

const SignUpModal = ({ isOpen, onClose, onOpenSignIn }) => {
  const [currentModal, setCurrentModal] = React.useState('roleSelection');
  const label_bgcolor = 'white';
  const handleRoleClick = (role) => {
    setCurrentModal(role);
  };

  const handleSignInClick = () => {
    onOpenSignIn();  // Open SignIn modal
    onClose();       // Close SignUp modal
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent p={{ base: 4, md: 6 }} borderRadius="15px" maxWidth="500px" bg={
        currentModal === 'studentForm' ? '#FBB562' :
        currentModal === 'parentForm' ? '#EABFFF' :
        currentModal === 'counsellorForm' ? '#BFE582' :
        currentModal === 'businessPartnerForm' ? '#FBB562' :
        '#FFFFFF'
      } mx={{ base: '10px', md: 'auto' }}>
        <ModalHeader position="relative">
          {/* Back button at the top-left corner */}
          {currentModal !== 'roleSelection' && (
            <Button
              variant="ghost"
              onClick={() => setCurrentModal('roleSelection')}
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
              <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }} gap={5} width="100%">
                <Button bg="#FBBF24" height="120px" onClick={() => handleRoleClick('studentForm')}>
                  <Box textAlign="center">
                    <Text fontSize={{ base: 'md', md: 'lg' }}>Student</Text>
                  </Box>
                </Button>
                <Button bg="#D8B4FE" height="120px" onClick={() => handleRoleClick('parentForm')}>
                  <Box textAlign="center">
                    <Text fontSize={{ base: 'md', md: 'lg' }}>Parent</Text>
                  </Box>
                </Button>
                <Button bg="#BBF7D0" height="120px" onClick={() => handleRoleClick('counsellorForm')}>
                  <Box textAlign="center">
                    <Text fontSize={{ base: 'md', md: 'lg' }}>Counsellor</Text>
                  </Box>
                </Button>
                <Button bg="#BFDBFE" height="120px" onClick={() => handleRoleClick('businessPartnerForm')}>
                  <Box textAlign="center">
                    <Text fontSize={{ base: 'md', md: 'lg' }}>Business Partner</Text>
                  </Box>
                </Button>
              </Grid>
              <Text fontSize={{ base: 'sm', md: 'md' }}>
                Have an account?{' '}
                <Link href='#' color="blue.600"> {/* Link to open SignInModal */}
                  Sign In
                </Link>
              </Text>
            </VStack>
          )}

          {/* Conditional rendering for specific forms */}
          {currentModal === 'studentForm' && (
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
              <Button colorScheme="yellow" width="100%">Get OTP</Button>
            </VStack>
          )}

          {currentModal === 'parentForm' && (
            <VStack spacing={4} width="100%">
              <Input placeholder="Enter First Name" size="lg" bg={label_bgcolor} />
              <Input placeholder="Enter Last Name" size="lg" bg={label_bgcolor} />
              <Input placeholder="Enter Contact Number" size="lg" bg={label_bgcolor} />
              <Input placeholder="Enter Email Address" size="lg" bg={label_bgcolor} />
              <Input placeholder="Select State" size="lg" bg={label_bgcolor} />
              <Input placeholder="Select City" size="lg" bg={label_bgcolor} />
              <Input placeholder="Select Gender" size="lg" bg={label_bgcolor} />
              <Button colorScheme="purple" width="100%">Get OTP</Button>
            </VStack>
          )}

          {currentModal === 'counsellorForm' && (
            <VStack spacing={4} width="100%">
              <Input placeholder="Enter First Name" size="lg" bg={label_bgcolor} />
              <Input placeholder="Enter Last Name" size="lg" bg={label_bgcolor} />
              <Input placeholder="Enter Contact Number" size="lg" bg={label_bgcolor} />
              <Input placeholder="Enter Email Address" size="lg" bg={label_bgcolor} />
              <Input placeholder="Select State" size="lg" bg={label_bgcolor} />
              <Input placeholder="Select City" size="lg" bg={label_bgcolor} />
              <Input placeholder="Select Highest Qualification" size="lg" bg={label_bgcolor} />
              <Input placeholder="Select Years of Experience" size="lg" bg={label_bgcolor} />
              <Input placeholder="Applying for Part Time/ Full Time" size="lg" bg={label_bgcolor} />
              <Input placeholder="Area of Expertise" size="lg" bg={label_bgcolor} />

              <Button colorScheme="red" width="100%">Next</Button>
            </VStack>
          )}

          {/* You can add similar forms for the other roles */}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default SignUpModal;

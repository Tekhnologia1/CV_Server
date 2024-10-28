
import React, { useEffect, useState } from 'react';
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
  Input,
  Spinner, // Import the Spinner component
  Select,
  FormControl,
  FormLabel

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
import AuthModals from "src/views/pages/SignIn/AuthModals";
import { APIRegister } from 'src/api/APIRegister';
import { api_url } from 'src/api/APIURL';
import axios from 'axios';

import { Country, State, City } from 'country-state-city';
import { ICountry, IState, ICity } from 'country-state-city'


const SignUpModal = ({ isOpen, onClose, openSignIn }) => {
  const [isSignInOpen, setIsSignInOpen] = useState(false); // State to control SignInModal
  const tilecolor_purple = "#4d3acc";
  const font_family = 'Poppins, sans-serif'
  const font_family_inter = 'Inter, sans-serif'
  const role_icon_gap = 2;
  const selStream_icon_gap = 5;
  const label_bgcolor = 'white';

  const [currentModal, setCurrentModal] = useState('roleSelection');
  const [currentScreen, setCurrentScreen] = useState('');

  const [role_id, setRole_id] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [contact, setContact] = useState('');
  const [email, setEmail] = useState('');
  //-------Country, State, City
  const [countryId] = useState("IN"); // Default to India
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  //---------------------------
  const [genders] = useState(
    [
      { 'name': 'Male' },
      { 'name': 'Female' },
      { 'name': 'Other' }
    ]
  );
  const [gender, setGender] = useState('');
  const [instituteName, setInstituteName] = useState('');
  const [studClasses] = useState(
    [
      { 'name': '7th' },
      { 'name': '8th' },
      { 'name': '9th' },
      { 'name': '10th' },
      { 'name': '11th' },
      { 'name': '12th' },
    ]
  );
  const [studClass, setStudClass] = useState('');
  const [educations] = useState(
    [
      { 'name': 'Graduation' },
      { 'name': 'Post Graduation' }
    ]
  );
  const [education, setEducation] = useState('');
  const [experiences] = useState(
    [
      { 'name': '1-3' },
      { 'name': '3-5' },
      { 'name': '5+' }
    ]
  );
  const [experience, setExperience] = useState('');
  const [jobtimings] = useState(
    [
      { 'name': 'Part Time' },
      { 'name': 'Full Time' }
    ]
  );
  const [jobTime, setJobTime] = useState('');
  const [consultingPrefs] = useState(
    [
      { 'name': '7th to 9th' },
      { 'name': '10th' },
      { 'name': '11th and 12th' },
      { 'name': '12th + Graduates' }
    ]
  );
  const [consultingPref, setConsultingPref] = useState('');
  //Docu
  const [IdProof, setIdProof] = useState('');
  const [photo, setPhoto] = useState('');
  const [sscMarkSheet, setSscMarkSheet] = useState('');
  const [hscMarkSheet, setHscMarkSheet] = useState('');
  const [ugCertificate, setUgCertificate] = useState('');
  const [pgCertificate, setPgCertificate] = useState('');
  const [phdCertificate, setPhdCertificate] = useState('');
  const [resume, setResume] = useState('');

  const [otpArray, setOtpArray] = useState(Array(6).fill(""));
  const [otp, setOTP] = useState(''); // This will hold the final OTP number
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false); // Loading state

  const [succMessage, setSuccMessage] = useState('');
  const [errMessage, setErrMessage] = useState('');



  useEffect(() => {
    // Load states for India on component mount
    const indianStates = State.getStatesOfCountry(countryId);
    setStates(indianStates);
  }, [countryId]);

  const handleStateChange = (isoCode, name) => {
    const selectedStateId = isoCode;

    setState(name);
    console.log(name);
    // Load cities for the selected state
    const stateCities = City.getCitiesOfState(countryId, selectedStateId);
    setCities(stateCities);
  };

  const handleCityChange = (e) => {
    setCity(e.target.value);
    console.log(e.target.value);

  };

  // Open SIgnIn Modal
  // const openSignInModal = () => {
  //   openSignIn();
  //   // setIsSignInOpen(true); // Open SignIn modal
  //   // AuthModals();
  //   // onClose(); // Close SignUp modal
  // };

  const closeSignInModal = () => {
    setIsSignInOpen(false); // Close SignIn modal
  };

  const closeSignUp = () => {
    onClose();
    setCurrentModal('roleSelection');
    setCurrentScreen('roleSelection');
    setOTP('');
  }

  // Navigate role and screen
  const handleRoleClick = (role) => {
    setCurrentModal(role);
    console.log(role);
    role === 'student' ? setRole_id('1') :
      role === 'parent' ? setRole_id('2') :
        role === 'counsellor' ? setRole_id('3') :
          setRole_id('4')

  };





  const handleCurrScreen = (screen_name) => {
    setCurrentScreen(screen_name);
    // if (currentScreen === 'idSent') {
    //   signUp();
    // }
  }

  const handleBackButton = () => {
    setOtpArray(Array(6).fill(""));
    setOTP("");
    if (currentScreen === 'enterDetails') {
      setCurrentScreen('roleSelection');
      setCurrentModal('roleSelection');

    } else if (currentScreen === 'getOTP') {
      if (currentModal === 'b2b') {
        setCurrentScreen('selectStream');
      } else {
        setCurrentScreen('enterDetails');
      }

    } else if (currentScreen === 'selectStream') {
      if (currentModal === 'b2b') {
        setCurrentScreen('enterDetails');
      } else {
        setCurrentScreen('getOTP');
      }

    } else if (currentScreen === 'createPassword') {
      if (currentModal === 'student') {
        setCurrentScreen('selectStream');
      } else {
        setCurrentScreen('createPassword');
      }

    } else if (currentScreen === 'uploadDocu') {
      setCurrentScreen('enterDetails');
    } else {
      setCurrentScreen('idSent');
    }
  };


  const handleStreamNavigate = () => {
    handleCurrScreen('getOTP');
    sendOTP();
  }



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


  const signUp = () => {
    console.log('entered signup');

    setIsLoading(true); // Set loading to true

    // Create a new FormData object
    const formData = new FormData();

    // Append the data to formData
    formData.append('role_id', role_id);
    formData.append('firstName', firstName);
    formData.append('lastName', lastName);
    formData.append('contact', contact);
    formData.append('email', email);
    formData.append('state', state);
    formData.append('city', city);
    formData.append('gender', gender);
    if (currentModal === 'counsellor' || currentModal === 'b2b') {
      formData.append('password', 'user@123'); // Ensure 'Class' is correctly declared/defined
    } else {
      formData.append('password', password);

    }

    // Conditionally add properties based on the current modal
    if (currentModal === 'student') {
      formData.append('instituteName', instituteName);
      formData.append('class', studClass); // Ensure 'Class' is correctly declared/defined
    }

    // If you need to add other conditional properties, do it here
    // e.g., if the modal is for 'counsellor', append relevant data
    if (currentModal === 'counsellor') {
      formData.append('education', education);
      formData.append('experience', experience);
      formData.append('jobTime', jobTime);
      formData.append('consultingPref', consultingPref);
      //   Add more fields as needed
    }

    formData.forEach((value, key) => {
      console.log(key + ': ' + value);
    });

    // Call the API with the formData
    APIRegister()
      .REGISTER(formData) // Pass formData to the API
      .then((response) => {
        if (response.message === 'User created successfully') {
          setSuccMessage('User created successfully');
          setErrMessage('');
          setIsLoading(false); // Stop loading
          console.log('got the data');

          setTimeout(() => {
            setSuccMessage('');
            closeSignUp();
          }, 2000);
        } else if (response.message === 'This email already exists.') {
          console.log('already exists');
          setErrMessage('Email already exists');
          setSuccMessage('');
          setTimeout(() => {
            setErrMessage('');
          }, 1000);
          setIsLoading(false); // Stop loading
        }
      }).catch((error) => {
        console.error("Some error, solve it: ", error);
        setErrMessage('Something went wrong, try again.');
        setSuccMessage('');
        setTimeout(() => {
          setErrMessage('');
        }, 1000);
        setIsLoading(false); // Stop loading
      });

    console.log(formData);
  };

  const sendOTP = () => {
    setIsLoading(true); // Set loading to true
    APIRegister()
      .SendOTP({
        email_phone: email
      }) // Pass formData to the API
      .then((response) => {
        if (response.message === 'Verification code sent to email') {

          setIsLoading(false); // Stop loading
          console.log('OTP is sent');


        } else if (response.error === 'Email or phone number is required') {
          console.log('Email or phone number is required');

          // setTimeout(() => {
          //   setErrMessage('');
          // }, 1000);
          setIsLoading(false); // Stop loading
        }
      }).catch((error) => {
        console.error("Some error, solve it: ", error);
        // setErrMessage('Something went wrong, try again.');
        // setSuccMessage('');
        // setTimeout(() => {
        //   setErrMessage('');
        // }, 1000);
        setIsLoading(false); // Stop loading
      });

  }

  const handleChangeOTP = (e, index) => {
    const value = e.target.value;
    if (!/^\d$/.test(value)) return; // Only allow single digits

    // Create a copy of the OTP array, update the current index with the new value
    const newOtpArray = [...otpArray];
    newOtpArray[index] = value;
    setOtpArray(newOtpArray);

    // Move focus to the next input if the current one is filled
    if (value && index < newOtpArray.length - 1) {
      document.getElementById(`otp-input-${index + 1}`).focus();
    }

    // Set the OTP as a number only when all fields are filled
    if (newOtpArray.every((digit) => digit)) {
      setOTP(newOtpArray.join(""));
    }
  };

  const handleKeyDownOTP = (e, index) => {
    if (e.key === "Backspace" && otpArray[index] === "" && index > 0) {
      document.getElementById(`otp-input-${index - 1}`).focus();
    }
  };


  const verifyOTP = () => {
    setIsLoading(true); // Set loading to true
    console.log('Entered OTP is :', email);
    console.log('Entered OTP is :', otp);


    const VerifyOTP = async (data) => {
      console.log(data);
      try {
        const response = await axios.post(`${api_url}/verifyOTP`, data);
        return response.data;
      } catch (error) {
        console.log('OTP verify error', error);
        throw error;
      }
    };


    VerifyOTP({
      email_phone: email,
      enteredCode: otp
    }) // Pass formData to the API
      .then((response) => {
        if (response.message === 'Verification successful') {
          console.log(response.message);
          setIsLoading(false); // Stop loading
          console.log('Verification successful');
          setSuccMessage('Verification successful !!');
          setTimeout(() => {
            setSuccMessage('');
          }, 1000);


          if (currentModal === 'parent') {
            handleCurrScreen('createPassword');
          } else if (currentModal === 'counsellor' || currentModal === 'b2b') {
            signUp();
            handleCurrScreen('idSent');
          } else {
            handleCurrScreen('selectStream');
          }



        } else if (response.error === 'No code found for this email or phone number') {
          console.log('no code found');
          setSuccMessage('');
          setErrMessage('Please re-enter OTP');
          console.log(response.error);
          setTimeout(() => {
            setErrMessage('');
          }, 1000);
          setIsLoading(false); // Stop loading
          handleCurrScreen('getOTP');

        } else if (response.error === 'Verification failed') {
          setIsLoading(false); // Stop loading
          console.log('wrong OTP');
          setSuccMessage('');
          setErrMessage('Please enter correct OTP');
          console.log(response.error);
          setTimeout(() => {
            setErrMessage('');
          }, 1000);
          handleCurrScreen('getOTP');

        }
      }).catch((error) => {
        console.error("OTP veify error: ", error);
        setSuccMessage('');
        setErrMessage('Please try again');
        // setErrMessage('Something went wrong, try again.');
        // setSuccMessage('');
        setTimeout(() => {
          setErrMessage('');
        }, 1000);
        setIsLoading(false); // Stop loading
        handleCurrScreen('getOTP');

      });

  }

  // Reset OTP fields whenever the screen changes from 'getOTP'
  useEffect(() => {
    if (currentModal !== 'getOTP') {
      setOtpArray(Array(6).fill(""));
      setOTP("");
    }
  }, [currentModal]);




  // const handleSignInClick = () => {
  //   onOpenSignIn();  // Open SignIn modal
  //   onClose();       // Close SignUp modal
  // };

  return (

    <Modal isOpen={isOpen} onClose={() => { closeSignUp(); }} isCentered>
      <ModalOverlay />
      <ModalContent p={{ base: 4, md: 6 }} py={['20px', '0px']} borderRadius="15px" maxWidth="500px" bg={
        currentModal === 'student' ? '#FFAD5B' :
          currentModal === 'parent' ? '#EABFFF' :
            currentModal === 'counsellor' ? '#BFE582' :
              currentModal === 'b2b' ? '#BFDBFE' :
                '#FFFFFF'
      } mx={{ base: '10px', md: 'auto' }}
        fontFamily={font_family}

      >
        <ModalHeader position="relative">
          {/* Back button at the top-left corner */}
          {!(currentModal === 'roleSelection' || currentScreen === 'idSent') && (
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
            {currentModal === 'student' && 'Welcome, Student.'}
            {currentModal === 'parent' && 'Welcome, Parent.'}
            {currentModal === 'counsellor' && currentScreen !== 'idSent' && 'Welcome, Consultant.'}
            {currentModal === 'b2b' && 'Welcome, Partner.'}

          </Flex>
        </ModalHeader>

        <ModalCloseButton />

        <ModalBody my={['auto', '20px', 'auto', 'auto', 'auto']}>
          {currentModal === 'roleSelection' && (
            <VStack spacing={5}>
              <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }} gap={10} width="100%" padding={['10px', '30px']} fontFamily={font_family_inter}>
                <Button bg="#FFAD5B" height="120px" onClick={() => { handleRoleClick('student'); handleCurrScreen('enterDetails'); }} px={4}>
                  <Box textAlign="center" display="flex" flexDirection="column" alignItems="center" justifyContent="center" gap={role_icon_gap}>
                    <Image src={student} alt="Student" width={'50px'} mb={2} />
                    <Text fontSize={{ base: 'md', md: 'lg' }}>Student</Text>
                  </Box>
                </Button>
                <Button bg="#D8B4FE" height="120px" onClick={() => { handleRoleClick('parent'); handleCurrScreen('enterDetails'); }} px={4}>
                  <Box textAlign="center" display="flex" flexDirection="column" alignItems="center" justifyContent="center" gap={role_icon_gap}>
                    <Image src={parent} alt="Student" width={'50px'} mb={2} />
                    <Text fontSize={{ base: 'md', md: 'lg' }}>Parent</Text>
                  </Box>
                </Button>
                <Button bg="#BFE582" height="120px" onClick={() => { handleRoleClick('counsellor'); handleCurrScreen('enterDetails'); }} px={4}>
                  <Box textAlign="center" display="flex" flexDirection="column" alignItems="center" justifyContent="center" gap={role_icon_gap}>
                    <Image src={councellor} alt="Student" width={'50px'} mb={2} />
                    <Text fontSize={{ base: 'md', md: 'lg' }}>Consultant</Text>
                  </Box>
                </Button>
                <Button bg="#BFDBFE" height="120px" onClick={() => { handleRoleClick('b2b'); handleCurrScreen('enterDetails'); }} px={4}>
                  <Box textAlign="center" display="flex" flexDirection="column" alignItems="center" justifyContent="center" gap={role_icon_gap}>
                    <Image src={b2b} alt="Student" width={'50px'} mb={2} />
                    <Text fontSize={{ base: 'md', md: 'lg' }} >Strategic Partner</Text>
                  </Box>
                </Button>
              </Grid>
              <Text fontSize={{ base: 'sm', md: 'md' }} fontFamily={font_family}>
                Have an account?{' '}
                <Link color="blue.600"
                  onClick={openSignIn}
                  textColor={tilecolor_purple}
                  fontWeight={'700'}
                >
                  Sign In
                </Link>
              </Text>
            </VStack>
          )}

          {/* <SignInModal
              isOpen={isSignInOpen}
              onClose={closeSignInModal}

            /> */}

          {/* Conditional rendering for specific forms */}
          {currentModal === 'student' && currentScreen === 'enterDetails' && (
            <VStack spacing={4} width="100%">
              <Input placeholder="Enter First Name" size="lg" bg={label_bgcolor} onChange={(e) => setFirstName(e.target.value)} />
              <Input placeholder="Enter Last Name" size="lg" bg={label_bgcolor} onChange={(e) => setLastName(e.target.value)} />
              <Input placeholder="Enter Contact Number" size="lg" bg={label_bgcolor} onChange={(e) => setContact(e.target.value)} />
              <Input placeholder="Enter Email Address" size="lg" bg={label_bgcolor} onChange={(e) => setEmail(e.target.value)} />

              <Select
                placeholder="Select State"
                size="lg"
                bg={label_bgcolor}
                color={state ? "black" : "gray"}
                onChange={(e) => {
                  const selectedIsoCode = e.target.value;
                  const selectedState = states.find(state => state.isoCode === selectedIsoCode);
                  handleStateChange(selectedState.isoCode, selectedState.name);
                }}
              >
                {states.map((state) => (
                  <option key={state.isoCode} value={state.isoCode}>
                    {state.name}
                  </option>
                ))}
              </Select>

              <Select placeholder="Select City" size="lg" bg={label_bgcolor} onChange={handleCityChange} isDisabled={!state} color={city ? "black" : "gray"}>
                {cities.map((city) => (
                  <option key={city.name} value={city.name}>
                    {city.name}
                  </option>
                ))}
              </Select>

              <Input placeholder="Enter Institute name" size="lg" bg={label_bgcolor} onChange={(e) => setInstituteName(e.target.value)} />
              <Select placeholder="Select Class" size="lg" bg={label_bgcolor} onChange={(e) => setStudClass(e.target.value)} color={studClass ? "black" : "gray"}>

                {studClasses.map((sclass) => (
                  <option key={sclass.name} value={sclass.name}>
                    {sclass.name}
                  </option>
                ))}
              </Select>
              <Select placeholder="Select Gender" size="lg" bg={label_bgcolor} onChange={(e) => setGender(e.target.value)} color={gender ? "black" : "gray"}>

                {genders.map((gender) => (
                  <option key={gender.name} value={gender.name}>
                    {gender.name}
                  </option>
                ))}
              </Select>
              <Button colorScheme="red" width="100%" onClick={() => { handleCurrScreen('getOTP'); sendOTP(); }}>Get OTP</Button>
            </VStack>
          )}

          {currentModal === 'parent' && currentScreen === 'enterDetails' && (
            <VStack spacing={4} width="100%">
              <Input placeholder="Enter First Name" size="lg" bg={label_bgcolor} onChange={(e) => setFirstName(e.target.value)} />
              <Input placeholder="Enter Last Name" size="lg" bg={label_bgcolor} onChange={(e) => setLastName(e.target.value)} />
              <Input placeholder="Enter Contact Number" size="lg" bg={label_bgcolor} onChange={(e) => setContact(e.target.value)} />
              <Input placeholder="Enter Email Address" size="lg" bg={label_bgcolor} onChange={(e) => setEmail(e.target.value)} />
              <Select
                placeholder="Select State"
                size="lg"
                bg={label_bgcolor}
                color={state ? "black" : "gray"}
                onChange={(e) => {
                  const selectedIsoCode = e.target.value;
                  const selectedState = states.find(state => state.isoCode === selectedIsoCode);
                  handleStateChange(selectedState.isoCode, selectedState.name);
                }}
              >
                {states.map((state) => (
                  <option key={state.isoCode} value={state.isoCode}>
                    {state.name}
                  </option>
                ))}
              </Select>

              <Select placeholder="Select City" size="lg" bg={label_bgcolor} onChange={handleCityChange} isDisabled={!state} color={city ? "black" : "gray"}>
                {cities.map((city) => (
                  <option key={city.name} value={city.name}>
                    {city.name}
                  </option>
                ))}
              </Select>
              <Select placeholder="Select Gender" size="lg" bg={label_bgcolor} onChange={(e) => setGender(e.target.value)} color={gender ? "black" : "gray"}>
                {genders.map((gender) => (
                  <option key={gender.name} value={gender.name}>
                    {gender.name}
                  </option>
                ))}
              </Select>
              <Button colorScheme="red" width="100%" onClick={() => { handleCurrScreen('getOTP'); sendOTP(); }}>Get OTP</Button>
            </VStack>
          )}

          {currentModal === 'counsellor' && currentScreen === 'enterDetails' && (
            <VStack spacing={4} width="100%">
              <Input placeholder="Enter First Name" size="lg" bg={label_bgcolor} onChange={(e) => setFirstName(e.target.value)} />
              <Input placeholder="Enter Last Name" size="lg" bg={label_bgcolor} onChange={(e) => setLastName(e.target.value)} />
              <Input placeholder="Enter Contact Number" size="lg" bg={label_bgcolor} onChange={(e) => setContact(e.target.value)} />
              <Input placeholder="Enter Email Address" size="lg" bg={label_bgcolor} onChange={(e) => setEmail(e.target.value)} />
              <Select
                placeholder="Select State"
                size="lg"
                bg={label_bgcolor}
                color={state ? "black" : "gray"}
                onChange={(e) => {
                  const selectedIsoCode = e.target.value;
                  const selectedState = states.find(state => state.isoCode === selectedIsoCode);
                  handleStateChange(selectedState.isoCode, selectedState.name);
                }}
              >
                {states.map((state) => (
                  <option key={state.isoCode} value={state.isoCode}>
                    {state.name}
                  </option>
                ))}
              </Select>

              <Select placeholder="Select City" size="lg" bg={label_bgcolor} onChange={handleCityChange} isDisabled={!state} color={city ? "black" : "gray"}>
                {cities.map((city) => (
                  <option key={city.name} value={city.name}>
                    {city.name}
                  </option>
                ))}
              </Select>
              <Select placeholder="Select Gender" size="lg" bg={label_bgcolor} onChange={(e) => setGender(e.target.value)} color={gender ? "black" : "gray"}>
                {genders.map((gender) => (
                  <option key={gender.name} value={gender.name}>
                    {gender.name}
                  </option>
                ))}
              </Select>
              <Select placeholder="Select Highest Qualification" size="lg" bg={label_bgcolor} onChange={(e) => setEducation(e.target.value)} color={education ? "black" : "gray"}>
                {educations.map((education) => (
                  <option key={education.name} value={education.name}>
                    {education.name}
                  </option>
                ))}
              </Select>
              <Select placeholder="Select Years of Experience" size="lg" bg={label_bgcolor} onChange={(e) => setExperience(e.target.value)} color={experience ? "black" : "gray"}>
                {experiences.map((experience) => (
                  <option key={experience.name} value={experience.name}>
                    {experience.name}
                  </option>
                ))}
              </Select>
              <Select placeholder="Applying for Part Time/ Full Time" size="lg" bg={label_bgcolor} onChange={(e) => setJobTime(e.target.value)} color={jobTime ? "black" : "gray"}>
                {jobtimings.map((jobTime) => (
                  <option key={jobTime.name} value={jobTime.name}>
                    {jobTime.name}
                  </option>
                ))}
              </Select>
              <Select placeholder="Consulting Preferences" size="lg" bg={label_bgcolor} onChange={(e) => setConsultingPref(e.target.value)} color={consultingPref ? "black" : "gray"}>
                {consultingPrefs.map((consultingPref) => (
                  <option key={consultingPref.name} value={consultingPref.name}>
                    {consultingPref.name}
                  </option>
                ))}
              </Select>

              {/* <Input placeholder="Select Highest Qualification" size="lg" bg={label_bgcolor} onChange={(e) => setEducation(e.target.value)} />
              <Input placeholder="Select Years of Experience" size="lg" bg={label_bgcolor} onChange={(e) => setExperience(e.target.value)} />
              <Input placeholder="Applying for Part Time/ Full Time" size="lg" bg={label_bgcolor} onChange={(e) => setJobTime(e.target.value)} />
              <Input placeholder="Consulting Preferences" size="lg" bg={label_bgcolor} onChange={(e) => setConsultingPref(e.target.value)} /> */}

              <Button colorScheme="red" width="100%" onClick={() => handleCurrScreen('uploadDocu')}>Next</Button>
            </VStack>
          )}


          {/* Councellor upload documents */}
          {currentModal === 'counsellor' && currentScreen === 'uploadDocu' && (
            <VStack spacing={4} width="100%">
              {/* File Upload Fields */}
              <FormControl>
                <FormLabel>ID Proof</FormLabel>
                <Input type="file" size="lg" bg={label_bgcolor} pt={2}/>
              </FormControl>
              <FormControl>
                <FormLabel>Photo</FormLabel>
                <Input type="file" size="lg" bg={label_bgcolor} pt={2}/>
              </FormControl>
              <FormControl>
                <FormLabel>10th Marksheet</FormLabel>
                <Input type="file" size="lg" bg={label_bgcolor} pt={2}/>
              </FormControl>
              <FormControl>
                <FormLabel>12th Marksheet</FormLabel>
                <Input type="file" size="lg" bg={label_bgcolor} pt={2}/>
              </FormControl>
              <FormControl>
                <FormLabel>UG Certificate</FormLabel>
                <Input type="file" size="lg" bg={label_bgcolor} pt={2}/>
              </FormControl>
              <FormControl>
                <FormLabel>PG Certificate</FormLabel>
                <Input type="file" size="lg" bg={label_bgcolor} pt={2}/>
              </FormControl>
              <FormControl>
                <FormLabel>PhD Certificate</FormLabel>
                <Input type="file" size="lg" bg={label_bgcolor} pt={2}/>
              </FormControl>
              <FormControl>
                <FormLabel>Resume</FormLabel>
                <Input type="file" size="lg" bg={label_bgcolor} pt={2}/>
              </FormControl>

              <Button colorScheme="red" width="100%" onClick={() => { handleCurrScreen('getOTP'); sendOTP(); }}>
                Get OTP
              </Button>
            </VStack>

          )}


          {currentModal === 'b2b' && currentScreen === 'enterDetails' && (
            <VStack spacing={4} width="100%">
              <Input placeholder="Enter First Name" size="lg" bg={label_bgcolor} onChange={(e) => setFirstName(e.target.value)} />
              <Input placeholder="Enter Last Name" size="lg" bg={label_bgcolor} onChange={(e) => setLastName(e.target.value)} />
              <Input placeholder="Enter Contact Number" size="lg" bg={label_bgcolor} onChange={(e) => setContact(e.target.value)} />
              <Input placeholder="Enter Email Address" size="lg" bg={label_bgcolor} onChange={(e) => setEmail(e.target.value)} />
              <Select
                placeholder="Select State"
                size="lg"
                bg={label_bgcolor}
                color={state ? "black" : "gray"}
                onChange={(e) => {
                  const selectedIsoCode = e.target.value;
                  const selectedState = states.find(state => state.isoCode === selectedIsoCode);
                  handleStateChange(selectedState.isoCode, selectedState.name);
                }}
              >
                {states.map((state) => (
                  <option key={state.isoCode} value={state.isoCode}>
                    {state.name}
                  </option>
                ))}
              </Select>

              <Select placeholder="Select City" size="lg" bg={label_bgcolor} onChange={handleCityChange} isDisabled={!state} color={city ? "black" : "gray"}>
                {cities.map((city) => (
                  <option key={city.name} value={city.name}>
                    {city.name}
                  </option>
                ))}
              </Select>

              <Button colorScheme="red" width="100%" onClick={() => handleCurrScreen('selectStream')}>Next</Button>
            </VStack>
          )}

          {/* Get OTP */}
          {currentScreen === 'getOTP' && (
            <VStack spacing={2} mt={4}>
              <Text>Check your contact ******* and email ******* for the OTP</Text>

              <Text>
                {isLoading ? (
                  <Box display="flex" justifyContent="center" mt={4} mb={4}>
                    <Spinner size="lg" />
                  </Box>
                ) :
                  'Enter OTP'
                }
              </Text>


              <Flex mb={5}>
                {otpArray.map((value, index) => (
                  <Input
                    key={index}
                    id={`otp-input-${index}`}
                    placeholder="0"
                    bg={label_bgcolor}
                    maxLength={1}
                    size="lg"
                    width="50px"
                    ml={index === 0 ? 0 : 2}
                    value={value}
                    onChange={(e) => handleChangeOTP(e, index)}
                    onKeyDown={(e) => handleKeyDownOTP(e, index)}
                  />
                ))}
              </Flex>
              {/* <Flex mb={5}>
                <Input placeholder="0" bg={label_bgcolor} maxLength={1} size="lg" width="50px" />
                <Input placeholder="0" bg={label_bgcolor} maxLength={1} size="lg" width="50px" ml={2} />
                <Input placeholder="0" bg={label_bgcolor} maxLength={1} size="lg" width="50px" ml={2} />
                <Input placeholder="0" bg={label_bgcolor} maxLength={1} size="lg" width="50px" ml={2} />
                <Input placeholder="0" bg={label_bgcolor} maxLength={1} size="lg" width="50px" ml={2} />
                <Input placeholder="0" bg={label_bgcolor} maxLength={1} size="lg" width="50px" ml={2} />
              </Flex> */}
              <Button
                colorScheme="red"
                width="100%"
                onClick={() => {
                  verifyOTP();

                }}
              >
                Verify
              </Button>

            </VStack>
          )}

          {/* Select Stream for Student */}
          {(currentModal === 'student' || currentModal === 'b2b') && currentScreen === 'selectStream' && (
            <VStack spacing={4} mt={4}> {/* Adjust spacing here for the gap between buttons */}
              <Text fontWeight={'bold'} fontSize={[18, 23, 24]}>Select Stream</Text>

              <Button bgColor={'#CADCFF'} width="100%" py={8}
                onClick={() => { currentModal === 'b2b' ? handleStreamNavigate() : handleCurrScreen('createPassword') }}
              > {/* Add vertical padding */}
                <Box display="flex" flexDirection="row" justifyContent="space-between" alignItems="center" width="100%">
                  <Text fontSize={{ base: 'md', md: 'lg' }} mb={0} ml={'50px'}>Science</Text>
                  <Image src={science} alt="science" width={'80px'} mb={0} /> {/* Remove extra margin-bottom */}
                </Box>
              </Button>

              <Button bgColor={'#DDFFEA'} width="100%" py={8}
                onClick={() => { currentModal === 'b2b' ? handleStreamNavigate() : handleCurrScreen('createPassword') }}
              > {/* Add vertical padding */}
                <Box display="flex" flexDirection="row" justifyContent="space-between" alignItems="center" width="100%">
                  <Text fontSize={{ base: 'md', md: 'lg' }} mb={0} ml={'35px'}>Commerce</Text>
                  <Image src={commerce} alt="commerce" width={'60px'} mb={0} /> {/* Remove extra margin-bottom */}
                </Box>
              </Button>

              <Button bgColor={'#FFFB8A'} width="100%" py={8}
                onClick={() => { currentModal === 'b2b' ? handleStreamNavigate() : handleCurrScreen('createPassword') }}
              > {/* Add vertical padding */}
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
              <Input placeholder="Enter password" size="lg" bg={label_bgcolor} mb={3} onChange={(e) => setPassword(e.target.value)} />

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

              <Button colorScheme="red" width="100%" mt={3}
                onClick={() => { signUp(); }}
              >
                {isLoading ? (
                  <Box display="flex" justifyContent="center" mt={4} mb={4}>
                    <Spinner size="lg" />
                  </Box>
                ) :
                  'Sign Up'
                }

              </Button>
            </VStack>
          )}
          {errMessage && (((currentModal === 'counsellor' || currentModal === 'b2b') && currentScreen === 'getOTP') || (currentModal === 'student' || currentModal === 'parent')) &&
            <Text color='red' textAlign='center'>
              {errMessage}
            </Text>
          }
          {succMessage && !(currentModal === 'counsellor' || currentModal === 'b2b') &&
            <Text color='green' textAlign='center'>
              {succMessage}
            </Text>
          }




        </ModalBody>
      </ModalContent>
    </Modal >





  );
};

export default SignUpModal;

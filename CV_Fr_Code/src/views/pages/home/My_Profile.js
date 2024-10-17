import { Box, VStack, Link, Text, Icon, Spinner, Center, Divider, Image } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { FaCalendarAlt, FaUsers, FaFileAlt, FaCog, FaCommentDots, FaQuestionCircle } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { Auth } from "src/auth/AuthUser";
import Navbar_with_login from 'src/components/othercomponents/Navbar/Navbar_with_login';
import { UserContext } from "src/context/UserContextProvider";
import counsel from "src/assets/icons/my_profile_icons/counsel.png";
import exams from "src/assets/icons/my_profile_icons/exams.png";
import calendar from "src/assets/icons/my_profile_icons/calendar.png";
import result from "src/assets/icons/my_profile_icons/result.png";
import setting from "src/assets/icons/my_profile_icons/setting.png";
import feedback from "src/assets/icons/my_profile_icons/feedback.png";
import faqs from "src/assets/icons/my_profile_icons/faqs.png";
import signout from "src/assets/icons/my_profile_icons/signout.png";


const My_Profile = () => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);  // State for loading spinner
  const [role, setRole] = useState('');

  const refresh = () => {
    setTimeout(() => {
      window.location.reload();
    }, 2000);
  }

  useEffect(() => {
    if (user.userId === null) {
      refresh();
      navigate('/');
    }
  }, [user, navigate]);

  const signOut = () => {
    setLoading(true);  // Show spinner when logout is initiated
    Auth.logout();
    refresh();
    setTimeout(() => {
      setLoading(false);  // Hide spinner after page reload
      navigate('/');
    }, 2000);  // Adjust the timeout duration as needed
  }

  if (loading) {
    // Show a loading spinner while logging out
    return (
      <Center minH="100vh">
        <Spinner size="xl" color="purple.500" />
      </Center>
    );
  }

  return (
    <div className="wrapper d-flex flex-column min-vh-100 bg-light">
      {/* Navbar */}
      <Box boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)">
        <Navbar_with_login />
      </Box>

      {/* Center the entire box */}
      <Center flex="1">
        <Box
          w={["90%", "80%", "75%", "80%", "80%"]}  // Responsive width for different screen sizes
          p={[5, 8, 10]}  // Responsive padding
          py={10}
          my={'50px'}
        >
          <VStack align="start" spacing="6">
            {/* Counselling Sessions */}
            <Link href="#" display="flex" alignItems="center" textDecoration={'none'}>
              <Image src={counsel} boxSize={["32px", "36px", "40px"]} alt="Counselling" />  {/* Increased size */}
              <Text ml="3" fontSize={["md", "lg", "xl"]} fontWeight="semibold" >  {/* Increased font size and weight */}
                Counselling sessions
              </Text>
            </Link>
            <Divider borderWidth="1px" borderColor="black" />

            {/* Exams */}
            <Link href="#" display="flex" alignItems="center">
              <Image src={exams} boxSize={["32px", "36px", "40px"]} alt="Exams" />
              <Text ml="3" fontSize={["md", "lg", "xl"]} fontWeight="semibold">
                Exams
              </Text>
            </Link>
            <Divider borderWidth="1px" borderColor="black" />

            {/* Calendar */}
            <Link href="#" display="flex" alignItems="center">
              <Image src={calendar} boxSize={["32px", "36px", "40px"]} alt="Calendar" />
              <Text ml="3" fontSize={["md", "lg", "xl"]} fontWeight="semibold">
                Calendar
              </Text>
            </Link>
            <Divider borderWidth="1px" borderColor="black" />

            {/* Result */}
            <Link href="#" display="flex" alignItems="center">
              <Image src={result} boxSize={["32px", "36px", "40px"]} alt="Result" />
              <Text ml="3" fontSize={["md", "lg", "xl"]} fontWeight="semibold">
                Result
              </Text>
            </Link>
            <Divider borderWidth="1px" borderColor="black" />

            {/* Settings */}
            <Link href="#" display="flex" alignItems="center">
              <Image src={setting} boxSize={["32px", "36px", "40px"]} alt="Settings" />
              <Text ml="3" fontSize={["md", "lg", "xl"]} fontWeight="semibold">
                Settings
              </Text>
            </Link>
            <Divider borderWidth="1px" borderColor="black" />

            {/* Feedback */}
            <Link href="#" display="flex" alignItems="center">
              <Image src={feedback} boxSize={["32px", "36px", "40px"]} alt="Feedback" />
              <Text ml="3" fontSize={["md", "lg", "xl"]} fontWeight="semibold">
                Feedback
              </Text>
            </Link>
            <Divider borderWidth="1px" borderColor="black" />

            {/* FAQs */}
            <Link href="#" display="flex" alignItems="center">
              <Image src={faqs} boxSize={["32px", "36px", "40px"]} alt="FAQs" />
              <Text ml="3" fontSize={["md", "lg", "xl"]} fontWeight="semibold">
                FAQs
              </Text>
            </Link>
            <Divider borderWidth="1px" borderColor="black" />

            {/* Sign Out */}
            <Link color="#4830C0" display="flex" alignItems="center" onClick={signOut}>
              <Image src={signout} boxSize={["32px", "36px", "40px"]} alt="Sign Out" />
              <Text ml="3" fontSize={["md", "lg", "xl"]} fontWeight="bold">
                Sign Out
              </Text>
            </Link>
          </VStack>
        </Box>
      </Center>
    </div>
  );
}

export default My_Profile;

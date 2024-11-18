import React, { useEffect, useState } from 'react';
import { Box, Grid, GridItem, Image, Text, Button, VStack, Center, Spinner } from '@chakra-ui/react';
import image1 from "src/assets/images/counsellors_image/image1.png";
import image2 from "src/assets/images/counsellors_image/image2.png";
import image3 from "src/assets/images/counsellors_image/image3.png";
import image4 from "src/assets/images/counsellors_image/image4.png";
import image5 from "src/assets/images/counsellors_image/image5.png";
import image6 from "src/assets/images/counsellors_image/image6.png";
import { APIStudent } from 'src/services/api/APIStudent';



const CounsellorCard = ({ name, experience, img }) => (
  <VStack
    bg="#D9D9D9"
    rounded="md"
    boxShadow="lg"
    p={5}
    textAlign="center"
    spacing={3}
    w="100%"
    _hover={{ boxShadow: '2xl' }}
  >
    <Image
      borderRadius="full"
      boxSize="250px"
      src={img}
      alt={name}
    />
    <Text fontWeight="bold" fontSize="2xl" mb={'-1'}>{name}</Text>
    <Text fontSize="xl">{experience}</Text>
    <Button bg="#FF5353" color="white" _hover={{ bg: '#bf3f3f' }}>
      Book a Session
    </Button>
  </VStack>
);

const CounsellorsGrid = () => {

  const [counsellors, setCounsellors] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    APIStudent()
      .GetAllConsellors()
      .then((response) => {
        setCounsellors(response[0]); // Set the counsellors array with data from response[0]
        setIsLoading(false); // Stop loading
      })
      .catch((error) => {
        console.error("Some error, solve it: ", error);
        setIsLoading(false); // Stop loading on error
      });
  }, []);

  if (isLoading) {
    // Show a loading spinner while logging out
    return (
      <Center minH="100vh">
        <Spinner size="xl" color="purple.500" />
      </Center>
    );
  }

  return (
    <Box p={8} mb={9}

    >
      <Text fontSize="3xl" fontWeight="bold" textAlign="center" mb={8}>
        Our Counsellors
      </Text>
      <Grid
        templateColumns={{ base: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' }}
        gap={6}

      >
        {counsellors.map((counsellor, index) => (
          <GridItem key={index}
            transition="all 0.2s"
            _hover={{ transform: 'scale(1.02)' }}>
            <CounsellorCard
              name={counsellor.firstName}
              experience={counsellor.experience}
              img={counsellor.photo}
            />
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
};

export default CounsellorsGrid;

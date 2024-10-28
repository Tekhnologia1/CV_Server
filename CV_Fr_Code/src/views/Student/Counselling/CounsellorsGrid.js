import React from 'react';
import { Box, Grid, GridItem, Image, Text, Button, VStack } from '@chakra-ui/react';
import image1 from "src/assets/images/counsellors_image/image1.png";
import image2 from "src/assets/images/counsellors_image/image2.png";
import image3 from "src/assets/images/counsellors_image/image3.png";
import image4 from "src/assets/images/counsellors_image/image4.png";
import image5 from "src/assets/images/counsellors_image/image5.png";
import image6 from "src/assets/images/counsellors_image/image6.png";

const counsellors = [
  { name: 'Anita', subject: 'Arts', img: image1 },
  { name: 'Aniket', subject: 'Science', img: image2 },
  { name: 'Saurabh', subject: 'Medical Science', img: image3 },
  { name: 'Shubhangi', subject: 'Journalism', img: image4 },
  { name: 'Nazeem', subject: 'Mathematics', img: image5 },
  { name: 'Sharon', subject: 'Law', img: image6 },
];

const CounsellorCard = ({ name, subject, img }) => (
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
    <Text fontSize="xl">{subject}</Text>
    <Button bg="#FF5353" color="white" _hover={{ bg: '#bf3f3f' }}>
      Book a Session
    </Button>
  </VStack>
);

const CounsellorsGrid = () => {
  return (
    <Box p={8} mb={9}>
      <Text fontSize="3xl" fontWeight="bold" textAlign="center" mb={8}>
        Our Counsellors
      </Text>
      <Grid
        templateColumns={{ base: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' }}
        gap={6}
      >
        {counsellors.map((counsellor, index) => (
          <GridItem key={index}>
            <CounsellorCard
              name={counsellor.name}
              subject={counsellor.subject}
              img={counsellor.img}
            />
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
};

export default CounsellorsGrid;

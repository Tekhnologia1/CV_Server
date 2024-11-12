import { Box, FormControl, Input, Text } from '@chakra-ui/react';
import React, { useState } from 'react';

const File_Upload = ({ onFileSelect, label }) => {
    const [fileName, setFileName] = useState('');

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setFileName(file.name);
            onFileSelect(file); // Pass the selected file to the parent
        }
    };

    return (
        <FormControl>
            <Box position="relative" width="100%">
                <Input
                    type="file"
                    onChange={handleFileChange}
                    opacity="0"
                    position="absolute"
                    right="0"
                    width="100%"
                    height="100%"
                    zIndex="2"
                    cursor="pointer"
                />
                <Box
                    as="label"
                    position="absolute"
                    right="3"
                    top="1"
                    zIndex="1"
                    paddingY="1"
                    mt={1}
                    cursor="pointer"
                    color="black"
                    bg="#ADDEF6"
                    width="150px"
                    height="auto"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    borderRadius="none"
                >
                    Choose File
                </Box>
                <Box
                    bg="white"
                    height="100%"
                    display="flex"
                    alignItems="center"
                    pl={4}
                    pr="150px"
                    borderRadius="md"
                >
                    <Text color="gray.600" pt={3}>{fileName || label}</Text>
                </Box>
            </Box>
        </FormControl>
    );
};

export default File_Upload;

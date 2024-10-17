import React from 'react';
import { useDisclosure } from '@chakra-ui/react';
import SignInModal from './SignInModal';
import SignUpModal from '../signup/Signup';

const AuthModals = () => {
    // const { isOpen: isSignInOpen, onOpen: onSignInOpen, onClose: onSignInClose } = useDisclosure();
    // const { isOpen: isSignUpOpen, onOpen: onSignUpOpen, onClose: onSignUpClose } = useDisclosure();

    return (
        <>
            {/* <SignInModal
                isOpen={isSignInOpen}
                onClose={onSignInClose}
                onOpen={onSignUpOpen}   // Pass function to open SignUp modal
            />
            <SignUpModal
                isOpen={isSignUpOpen}
                onClose={onSignUpClose}
                onOpen={onSignInOpen}   // Pass function to open SignIn modal
            /> */}
        </>
    );
};

export default AuthModals;

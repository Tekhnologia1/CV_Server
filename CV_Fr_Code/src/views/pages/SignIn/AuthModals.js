import React, { useState } from 'react';
import SignUpModal from '../signup/Signup';  // Your signup modal
import SignInModal from '../SignIn/SignIn';    // Your signin modal

const AuthModals = (openSignIn) => {
  const [isSignUpOpen, setIsSignUpOpen] = useState(true);  // Initially open sign-up
  const [isSignInOpen, setIsSignInOpen] = useState(false); // Initially closed sign-in

  const openSignUpModal = () => {
    setIsSignUpOpen(true); // Open SignUp modal
    setIsSignInOpen(false); // Ensure SignIn modal is closed
  };

  const openSignInModal = () => {
    setIsSignInOpen(true);  // Open SignIn modal
    setIsSignUpOpen(false); // Close SignUp modal
  };

  const closeSignUpModal = () => {
    setIsSignUpOpen(false); // Close SignUp modal
  };

  const closeSignInModal = () => {
    setIsSignInOpen(false); // Close SignIn modal
  };

  return (
    <>
      {/* Sign Up Modal */}
      <SignUpModal
        isOpen={isSignUpOpen}
        onClose={closeSignUpModal}
        openSignIn={openSignInModal}  // Pass this prop to handle switching modals
      />

      {/* Sign In Modal */}
      <SignInModal
        isOpen={isSignInOpen}
        onClose={closeSignInModal}
      />
    </>
  );
};

export default AuthModals;

 {/* <SignInModal
                isOpen={isSignInOpen}
                onClose={onSignInClose}
                onOpen={onSignUpOpen}   // Pass function to open SignUp modal
            /> */}
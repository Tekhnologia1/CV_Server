import React, { useEffect, useState } from 'react';
import SignUpModal from '../signup/Signup';  // Your signup modal
import SignInModal from './SignIn';    // Your signin modal

const AuthModals = ({ openSignIn, openSignUp }) => {
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);  // Initially closed
  const [isSignInOpen, setIsSignInOpen] = useState(false); // Initially closed

  useEffect(() => {
    if (openSignIn) {
      closeSignUpModal(); // Close sign-up modal if sign-in should open
      setIsSignInOpen(true); // Open sign-in modal
    } else if (openSignUp) {
      setIsSignInOpen(false); // Close sign-in modal if sign-up should open
      setIsSignUpOpen(true); // Open sign-up modal
    }
  }, [openSignIn, openSignUp]);

  const closeSignUpModal = () => setIsSignUpOpen(false);
  const closeSignInModal = () => setIsSignInOpen(false);

  return (
    <>
      <SignUpModal
        isOpen={isSignUpOpen}
        onClose={closeSignUpModal}
      />

      <SignInModal
        isOpen={isSignInOpen}
        onClose={closeSignInModal}
      />
    </>
  );
};

export default AuthModals;

import { useState } from 'react';
import UserProfile from './UserProfile';
import Register from '../auth/Register';


const ParentComponent = () => {
  const [registered, setRegistered] = useState(false);

  const handleRegisterSuccess = () => {
    setRegistered(true); // Update state to trigger navigation
  };

  return (
    <div>
      {!registered ? (
        <Register onRegisterSuccess={handleRegisterSuccess} /> // Ensure onRegisterSuccess is passed correctly
      ) : (
        <UserProfile />
      )}
    </div>
  );
}

export default ParentComponent;


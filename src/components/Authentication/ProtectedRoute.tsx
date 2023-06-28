import { Navigate } from 'react-router-dom';

import { FirebaseUser } from '@/models/firebaseUserModel';

interface ProtectedRouteProps {
    children: React.ReactNode; 
    user: FirebaseUser | null; // add user prop
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children, user }) => {
    if (!user) {
      return <Navigate to="/" />; // replace '/' with your login page path if available
    }
  
    return <>{children}</>;
};

export default ProtectedRoute;

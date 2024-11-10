// This component is used to redirect unauthenticated users to the login page
import { Navigate } from 'react-router-dom';
import { useAuthenticationStore } from '../stores';

const ProtectedRoute = ({ element }) => {
  const { isAuthenticated } = useAuthenticationStore();

  return isAuthenticated ? element : <Navigate to="/login" />;
};

export default ProtectedRoute;
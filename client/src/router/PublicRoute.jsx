import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

const PublicRoute = () => {
  const { token } = useSelector(state => state.user);

  return token ? <Navigate to="/dashboard" replace /> : <Outlet/>;
}

export default PublicRoute;
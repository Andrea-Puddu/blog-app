import {Login} from '../pages';
import {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';

// component to wrap/protect the pages
// does the page need user authentication? (E.g. Login Page can be rendered without user authentication)
// authentication = true = protected = page cannot be rendered
const Protected = ({children, authentication = true}) => {
  const authStatus = useSelector((state) => state.auth.status);

  const navigate = useNavigate();

  const [loader, setLoader] = useState(true);

  useEffect(() => {
    // if page protection is needed (true) and user is not logged in (false) we want to redirect user to login page
    if (authentication && authStatus !== authentication) {
      navigate('/login');
      // if page protection is not needed (false) and user is already logged in (true) we want to redirect user to home page (No need for a logged in user to access again login or signup pages)
    } else if (!authentication && authStatus !== authentication) {
      navigate('/');
    } else setLoader(false);
  }, [authStatus, authentication, navigate]);

  return loader || <>{children}</>;
};

export default Protected;

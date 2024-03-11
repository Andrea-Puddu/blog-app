import authService from '../../appwrite/auth';
import {useDispatch} from 'react-redux';
import {logout} from '../../store';

function LogoutBtn() {
  const dispatch = useDispatch();

  const logoutHandler = () => {
    // appwrite logout + redux state update
    authService.logout().then(dispatch(logout()));
  };

  return (
    <button
      onClick={logoutHandler}
      className=' px-6 py-2 rounded-full hover:bg-gray-200 duration-200'
    >
      Logout
    </button>
  );
}

export default LogoutBtn;

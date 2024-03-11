import Container from '../container/Container';
import Logo from '../Logo';
import LogoutBtn from './LogoutBtn';
import {Link} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
import {useSelector} from 'react-redux';

function Header() {
  const navigate = useNavigate();
  const authStatus = useSelector((state) => state.auth.status);

  const navItems = [
    {
      name: 'Home',
      path: '/',
      active: true,
    },
    {
      name: 'Login',
      path: '/login',
      active: !authStatus,
    },
    {
      name: 'Signup',
      path: '/signup',
      active: !authStatus,
    },
    {
      name: 'All Posts',
      path: '/all-posts',
      active: authStatus,
    },
    {
      name: 'Add Post',
      path: '/add-post',
      active: authStatus,
    },
  ];

  return (
    <header className=' py-3 shadow bg-gray-500'>
      <Container>
        <nav className=' flex'>
          <div className=' mr-4'>
            <Link to='/'>
              <Logo />
            </Link>
          </div>
          <ul className=' flex ml-auto'>
            {navItems.map(
              (item) =>
                item.active && (
                  <li key={item.name}>
                    <button
                      onClick={() => navigate(item.path)}
                      className=' inline-block px-6 py-2 rounded-full hover:bg-gray-200 duration-200'
                    >
                      {item.name}
                    </button>
                  </li>
                )
            )}
            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  );
}

export default Header;

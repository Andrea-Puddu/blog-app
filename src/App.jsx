import './App.css';
import {Outlet} from 'react-router-dom';
import Header from './components/header/Header';
import {useEffect, useState} from 'react';
import {login, logout} from './store';
import {useDispatch} from 'react-redux';
import authService from './appwrite/auth';

const App = () => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({userData}));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => setLoading(false));
  }, []);

  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between'>
      <div className='w-full block'>
        <Header />
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  ) : null;
};

export default App;

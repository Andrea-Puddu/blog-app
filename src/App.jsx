import './App.css';
import {Outlet} from 'react-router-dom';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default App;

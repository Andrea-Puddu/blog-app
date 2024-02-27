import {Outlet} from 'react-router-dom';
import Footer from './components/footer/Footer';

const App = () => {
  return (
    <>
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default App;

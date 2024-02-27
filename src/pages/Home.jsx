import Button from '../components/Button';
import Input from '../components/Input';
import Select from '../components/Select';

const Home = () => {
  return (
    <div>
      <Button>Click Me!</Button>
      <Input label='Song' />
      <Select label='Select one item' options={['gatto', 'cane', 'uccello']} />
    </div>
  );
};

export default Home;

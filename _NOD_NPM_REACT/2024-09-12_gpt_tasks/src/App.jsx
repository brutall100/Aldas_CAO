import './App.css';
import Hero from './components/Hero';
import Greeting from './components/Greeting';
import ColorButton from './components/ColorButton';
import ProductList from './components/ProductList';
import InfoCard from './components/InfoCard';
import FruitList from './components/FruitList'; // Pakeičiau į teisingą 'FruitList'
import UserDetails from './components/UserDetails';

const App = () => {
  const user = {
    vardas: 'Jonas',
    amzius: 28,
    miestas: 'Vilnius'
  };

  return (
    <>
      <Hero
        title="Her"
        subtitle="This is a subtitle"
      />

      <Greeting name="Jonas" />
      <Greeting name="Pete" />

      <ColorButton color="red" />
      <ColorButton color="blue" />
      <ColorButton color="white" />

      <ProductList
        products={['Apple', 'Banana', 'Orange']}
      />

      <InfoCard
        title="j"
        content="Content"
        image="https://via.placeholder.com/150"
      />

      <FruitList
        title="KAS YRA"
        fruits={["Apple", "Banana", "Orange"]}
      />

      <div>
        <h1>Vartotojo informacija</h1>
        <UserDetails user={user} />
      </div>
    </>
  );
};

export default App;

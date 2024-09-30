import React, { useContext } from 'react';
import { MyContext } from '../components/MyContext'; // Importuojame kontekstą iš kito failo

const Header = () => {
  const { userName, userAge } = useContext(MyContext); // Pasiimame reikšmes iš konteksto

  return (
    <header>
      <h1>Sveikas, {userName}!</h1>  {/* Naudojame userName iš konteksto */}
      <p>Amžius: {userAge}</p>       {/* Naudojame userAge iš konteksto */}
    </header>
  );
};

export default Header;

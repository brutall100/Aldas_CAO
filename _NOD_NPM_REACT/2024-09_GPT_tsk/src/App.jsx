import React, { useState } from 'react';
import { MyContext } from './components/MyContext';  // Importuojame kontekstą iš kito failo
import Header from './components/Header';

function App() {
  const [userName, setUserName] = useState("Jonas"); // Vartotojo vardas
  const [userAge, setUserAge] = useState("5");       // Vartotojo amžius

  return (
    <MyContext.Provider value={{ userName, userAge }}>  {/* Apjungiame reikšmes į objektą */}
      <div>
        <Header /> {/* Header gali pasiimti duomenis iš MyContext */}
      </div>
    </MyContext.Provider>
  );
}

export default App;


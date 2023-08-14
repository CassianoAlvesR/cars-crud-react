import { useState } from 'react'
import './App.css'

import { CarForm } from './components/CarForm'
import { CarList } from './components/CarList'

function App() {
  const [cars, setCars] = useState([]);

  const handleAddCar = (carName) => {
    setCars([...cars, carName]);
  };

  return (
    <div className="App">
      <CarForm addCar={handleAddCar} />
      <CarList cars={cars} />
    </div>
  );
}

export default App;

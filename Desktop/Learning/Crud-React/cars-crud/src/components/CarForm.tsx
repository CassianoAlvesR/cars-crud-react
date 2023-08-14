import React, { useState, ChangeEvent } from 'react';
import './CarForm.style.css';

type Car = {
  name: string;
  color: string;
  value: string;
  options: string;
  year: string;
  model: string;
  image: File | null;
};

type CarFormProps = {
  addCar: (car: Car) => void;
};

export function CarForm({ addCar }: CarFormProps) {
  const [car, setCar] = useState<Car>({
    name: '',
    color: '',
    value: '',
    options: '',
    year: '',
    model: '',
    image: null,
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCar((prevCar) => ({ ...prevCar, [name]: value }));
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const imageFile = e.target.files?.[0];
    setCar((prevCar) => ({ ...prevCar, image: imageFile || null }));
  };

  const handleAddCar = () => {
    addCar(car);
    setCar({
      name: '',
      color: '',
      value: '',
      options: '',
      year: '',
      model: '',
      image: null,
    });
  };

  return (
    <div className="CarForm">
        <h2>Cadastro de Carros</h2>
        <input
            type="text"
            name="name"
            placeholder="Nome do carro"
            value={car.name}
            onChange={handleChange}
        />
        <input
            type="text"
            name="color"
            placeholder="Cor"
            value={car.color}
            onChange={handleChange}
        />
        <input
            type="text"
            name="value"
            placeholder="Valor"
            value={car.value}
            onChange={handleChange}
        />
        <input
            type="text"
            name="options"
            placeholder="Opcionais"
            value={car.options}
            onChange={handleChange}
        />
        <input
            type="text"
            name="year"
            placeholder="Ano"
            value={car.year}
            onChange={handleChange}
        />
        <input
            type="text"
            name="model"
            placeholder="Modelo"
            value={car.model}
            onChange={handleChange}
        />
        <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleImageChange}
        />
        <button onClick={handleAddCar}>Adicionar Carro</button>
    </div>
  );
}

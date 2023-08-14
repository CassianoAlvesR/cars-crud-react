import React from 'react';
import './CarList.style.css';

type Car = {
  name: string;
  color: string;
  value: string;
  options: string;
  year: string;
  model: string;
  image: File | null;
};

type CarListProps = {
  cars: Car[];
};

export function CarList({ cars }: CarListProps) {
  return (
    <ul className="CarList">
      {cars.map((car, index) => (
        <li key={index} className="CarItem">
          <h2>{car.name}</h2>
          <p>Cor: {car.color}</p>
          <p>Valor: {car.value}</p>
          <p>Opcionais: {car.options}</p>
          <p>Ano: {car.year}</p>
          <p>Marca: {car.model}</p>
          {car.image && (
            <img src={URL.createObjectURL(car.image)} alt={`Car ${car.name}`} />
          )}
        </li>
      ))}
    </ul>
  );
}

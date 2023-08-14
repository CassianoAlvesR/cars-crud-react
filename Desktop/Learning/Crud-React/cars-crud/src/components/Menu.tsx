import { Link } from 'react-router-dom'; // Import the Link component from React Router

export function Menu() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/cadastro">Cadastar Carro</Link>
        </li>
        <li>
          <Link to="/listagem">Listar Carros</Link>
        </li>
      </ul>
    </nav>
  );
}

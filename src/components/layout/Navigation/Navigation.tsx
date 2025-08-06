import { Link } from 'react-router-dom';

export function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/available-products">Available Products</Link>
        </li>
      </ul>
    </nav>
  );
}

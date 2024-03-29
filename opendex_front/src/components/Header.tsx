import { FunctionComponent } from 'react';
import "../css/header.css";
import { Link } from 'react-router-dom';

const Header: FunctionComponent = () => {
  return (
    <header>
        Coucou
        <Link to="/login">Se connecter</Link>
    </header>
  );
}

export default Header;
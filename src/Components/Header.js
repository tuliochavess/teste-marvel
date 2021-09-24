import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import logo from "../Assets/logo.svg";
import profile from "../Assets/profile-picture.svg";

const Header = () => {
  return (
    <header className={styles.header}>
      <nav>
        <ul>
          <img src={logo} alt="Logo Marvel" className={styles.logo} />
          <Link to="/personagens">
            <li className={styles.personagens}>Personagens</li>
          </Link>
          <Link to="/filmes">
            <li className={styles.filmes}>Filmes</li>
          </Link>
          <Link to="/hqs">
            <li className={styles.hqs}>HQs</li>
          </Link>
          <img src={profile} alt="Profile" className={styles.profile}/>
          <Link to="/">
            <li className={styles.sair}>Sair</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

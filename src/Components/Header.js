import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import logo from "../Assets/logo.svg";
import profile from "../Assets/profile-picture.svg";

const Header = () => {
  const url = window.location.href;

  return (
    <header className={styles.header}>
      <nav>
        <ul>
          <img src={logo} alt="Logo Marvel" className={styles.logo} />
          <Link to="/personagens">
            <li
              className={`${
                url === "http://localhost:3000/personagens" ? styles.ativo : ""
              } ${styles.personagens}`}
            >
              Personagens
            </li>
          </Link>
          <Link to="/filmes">
            <li
              className={`${
                url === "http://localhost:3000/filmes" ? styles.ativo : ""
              } ${styles.filmes}`}
            >
              Filmes
            </li>
          </Link>
          <Link to="/hqs">
            <li
              className={`${
                url === "http://localhost:3000/hqs" ? styles.ativo : ""
              } ${styles.hqs}`}
            >
              HQs
            </li>
          </Link>
          <img src={profile} alt="Profile" className={styles.profile} />
          <Link to="/">
            <li className={styles.sair}>Sair</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

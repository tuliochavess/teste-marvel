import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import logo from "../Assets/logo.svg";
import profile from "../Assets/profile-picture.svg";

const Header = () => {
  let [select, setSelect] = React.useState("0");

  return (
    <header className={styles.header}>
      <nav>
        <ul>
          <img src={logo} alt="Logo Marvel" className={styles.logo} />
          <Link to="/personagens">
            <li
              onClick={() => setSelect("1")}
              className={`${select === "1" ? styles.ativo : ""} ${
                styles.personagens
              }`}
            >
              Personagens
            </li>
          </Link>
          <Link to="/filmes">
            <li
              onClick={() => setSelect("2")}
              className={`${select === "2" ? styles.ativo : ""} ${
                styles.filmes
              }`}
            >
              Filmes
            </li>
          </Link>
          <Link to="/hqs">
            <li
              onClick={() => setSelect("3")}
              className={`${select === "3" ? styles.ativo : ""} ${styles.hqs}`}
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

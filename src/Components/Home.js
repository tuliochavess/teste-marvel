import React from "react";
import { Link } from "react-router-dom";
import styles from "./Home.module.css";
import logo from "../Assets/logo.svg";
import background from "../Assets/background.svg";

const Home = () => {
  return (
    <>
      <section className={styles.home}>
        <div className={styles.form}>
          <img src={logo} alt="logo marvel" className={styles.logo} />
          <h1>Bem-vindo(a) de volta!</h1>
          <p className={styles.access}>Acesse sua conta:</p>
          <input type="text" placeholder="Usuário" className={styles.user} />
          <input type="text" placeholder="Senha" className={styles.password} />
          <div className={styles.beforeButton}>
            <input type="checkbox" className={styles.check} />
            <p>Salvar login</p>
            <a href="https://mestresdaweb.com.br/">
              <p>Esqueci a senha</p>
            </a>
          </div>
          <Link to="/personagens">
            <button>Entrar</button>
          </Link>
          <div className={styles.afterButton}>
            <p>Ainda não tem o login?</p>
            <a href="https://mestresdaweb.com.br/">
              <p>Cadastre-se</p>
            </a>
          </div>
        </div>
        <div className={styles.background}>
          <img src={background} alt="logo marvel" />
        </div>
      </section>
    </>
  );
};

export default Home;

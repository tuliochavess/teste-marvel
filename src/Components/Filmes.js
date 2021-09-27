import React from "react";
import styles from "./Filmes.module.css";
import stars4 from "../Assets/Personagens/stars4.svg";
import stars3 from "../Assets/Personagens/stars3.svg";
import close from "../Assets/Personagens/close.svg";
import disney from "../Assets/filmes/disney.svg";
import Header from "./Header";

const Filmes = () => {
  let [show, setShow] = React.useState("main");
  return (
    <>
      <Header />
      <section className={styles.filmes}>
        {/* -------------------------------------- Início box principal 1 -------------------------------------- */}
        <div
          className={`${styles.mainBox1} ${
            show === "america" || show === "marvel"
              ? styles.dontShownOnScreen
              : ""
          } ${show === "iron" ? styles.opacity : ""}`}
        >
          <div className={styles.backgroundMainImg}>
            <h2>Capitão América</h2>
            <p>
              Em Capitão América: O Primeiro Vingador, conhecemos a história de
              Steve Rogers (Chris Evans) e como ele se tornou o melhor soldado
              do mundo.
            </p>
            <span
              onClick={() => {
                setShow("america");
              }}
            >
              ver detalhes
            </span>
          </div>
        </div>
        {/* -------------------------------------- Final box principal 1 -------------------------------------- */}

        {/* -------------------------------------- Início box detalhes 1 -------------------------------------- */}
        <div
          className={`${styles.mainBox1Details} ${
            show === "america" ? "" : styles.dontShownOnScreen
          }`}
        >
          <div className={styles.details}>
            <h2>Capitão América: Primeiro Vingador</h2>
            <p className={styles.text}>
              Em Capitão América: O Primeiro Vingador, conhecemos a história de
              Steve Rogers (Chris Evans) e como ele se tornou o melhor soldado
              do mundo.
            </p>
            <h3>Disponível em streaming:</h3>
            <img src={disney} alt="Americanas" className={styles.disney} />
            <h4>Critica</h4>
            <img
              src={stars4}
              alt="Estrelas Avaliação"
              className={styles.stars}
            />
            <img
              src={close}
              alt="Ícone fechar Modal"
              className={styles.close}
              onClick={() => {
                setShow("main");
              }}
            />
          </div>
        </div>
        {/* -------------------------------------- Final box detalhes 1 -------------------------------------- */}

        {/* -------------------------------------- Início box principal 2 -------------------------------------- */}
        <div
          className={`${styles.mainBox2} ${
            show === "america" || show === "marvel" || show === "iron"
              ? styles.dontShownOnScreen
              : ""
          }`}
        >
          <div className={styles.backgroundMainImg}>
            <h2>Capitã Marvel</h2>
            <p>
              Capitã Marvel, parte do exército de elite dos Kree, uma raça
              alienígena, encontra-se no meio de uma batalha entre seu povo e os
              Skrulls.
            </p>
            <span
              onClick={() => {
                setShow("marvel");
              }}
            >
              ver detalhes
            </span>
          </div>
        </div>
        {/* -------------------------------------- Final box principal 2 -------------------------------------- */}

        {/* -------------------------------------- Início box detalhes 2 -------------------------------------- */}
        <div
          className={`${styles.mainBox2Details} ${
            show === "marvel" ? "" : styles.dontShownOnScreen
          }`}
        >
          <div className={styles.details}>
            <h2>Capitã Marvel</h2>
            <p className={styles.text}>
              Em Capitão América: O Primeiro Vingador, conhecemos a história de
              Steve Rogers (Chris Evans) e como ele se tornou o melhor soldado
              do mundo.
            </p>
            <h3>Disponível em streaming:</h3>
            <img src={disney} alt="Americanas" className={styles.disney} />
            <h4>Critica</h4>
            <img
              src={stars4}
              alt="Estrelas Avaliação"
              className={styles.stars}
            />
            <img
              src={close}
              alt="Ícone fechar Modal"
              className={styles.close}
              onClick={() => {
                setShow("main");
              }}
            />
          </div>
        </div>
        {/* -------------------------------------- Final box detalhes 2 -------------------------------------- */}

        {/* -------------------------------------- Início box principal 3 -------------------------------------- */}
        <div
          className={`${styles.mainBox3} ${
            show === "iron" ? styles.dontShownOnScreen : ""
          } ${show === "america" || show === "marvel" ? styles.opacity : ""}`}
        >
          <div className={styles.backgroundMainImg}>
            <h2>Homem de Ferro</h2>
            <p>
              Tony Stark (Robert Downey Jr.) é um industrial bilionário, que
              também é um brilhante inventor, ao ser sequestrado, ele é obrigado
              a construir uma arma devastadora, mas ao invés disso, cria uma
              armadura capaz de mudar a história.
            </p>
            <span
              onClick={() => {
                setShow("iron");
              }}
            >
              ver detalhes
            </span>
          </div>
        </div>
        {/* -------------------------------------- Final box principal 3 -------------------------------------- */}

        {/* -------------------------------------- Início box detalhes 3 -------------------------------------- */}
        <div
          className={`${styles.mainBox3Details} ${
            show === "iron" ? "" : styles.dontShownOnScreen
          }`}
        >
          <div className={styles.details}>
            <h2>Homem de Ferro</h2>
            <p className={styles.text}>
              Tony Stark (Robert Downey Jr.) é um industrial bilionário, que
              também é um brilhante inventor, ao ser sequestrado, ele é obrigado
              a construir uma arma devastadora, mas ao invés disso, cria uma
              armadura capaz de mudar a história.
            </p>
            <h3>Disponível em streaming:</h3>
            <img src={disney} alt="Americanas" className={styles.disney} />
            <h4>Critica</h4>
            <img
              src={stars3}
              alt="Estrelas Avaliação"
              className={styles.stars}
            />
            <img
              src={close}
              alt="Ícone fechar Modal"
              className={styles.close}
              onClick={() => {
                setShow("main");
              }}
            />
          </div>
        </div>
        {/* -------------------------------------- Final box detalhes 3 -------------------------------------- */}
      </section>
    </>
  );
};

export default Filmes;

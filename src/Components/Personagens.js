import React from "react";
import styles from "./Personagens.module.css";
import stars4 from "../Assets/Personagens/stars4.svg";
import stars5 from "../Assets/Personagens/stars5.svg";
import close from "../Assets/Personagens/close.svg";
import Header from "./Header";

const Personagens = () => {
  let [show, setShow] = React.useState("main");
  return (
    <>
    <Header />
      <section className={styles.personagens}>
        {/* -------------------------------------- Início box principal 1 -------------------------------------- */}
        <div
          className={`${styles.mainBox1} ${
            show === "wanda" || show === "thanos"
              ? styles.dontShownOnScreen
              : ""
          } ${show === "hulk" ? styles.opacity : ""}`}
        >
          <div className={styles.backgroundMainImg}>
            <h2>Wanda Maximoff</h2>
            <p>
              Wanda Maximoff foi sequestrada da Sérvia e trazida para a Montanha
              Wundagore, base do Alto Evolucionário. Durante anos, ela e seu
              irmão gêmeo, Pietro, acreditavam que eram filhos de um casal de
              ciganos.
            </p>
            <span
              onClick={() => {
                setShow("wanda");
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
            show === "wanda" ? "" : styles.dontShownOnScreen
          }`}
        >
          <div className={styles.details}>
            <h2>Wanda Maximoff</h2>
            <p className={styles.aparicoes}>Aparições:</p>
            <p>Vingadores - Era de Ultron</p>
            <p>Capitão América - Guerra Civi</p>
            <p>Vingadores - Guerra Infinita</p>
            <p>Vingadores - Ultimato</p>
            <p>WandaVision</p>
            <h3>Avaliações dos Fãs</h3>
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
            show === "wanda" || show === "thanos" || show === "hulk"
              ? styles.dontShownOnScreen
              : ""
          }`}
        >
          <div className={styles.backgroundMainImg}>
            <h2>Thanos</h2>
            <p>
              A lua Titã era governada por Mentor (A'Lars), quando então reinava
              paz e tecnologia. Mentor tinha dois filhos: Eros e Thanos. Ao
              contrário do irmão, Thanos, era bem mais poderoso e almejava ainda
              mais.
            </p>
            <span
              onClick={() => {
                setShow("thanos");
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
            show === "thanos" ? "" : styles.dontShownOnScreen
          }`}
        >
          <div className={styles.details}>
            <h2>Thanos</h2>
            <p className={styles.aparicoes}>Aparições:</p>
            <p>Vingadores</p>
            <p>Guardiões da Galáxia - vol. I</p>
            <p>Vingadores - Guerra Infinita</p>
            <p>Vingadores - Ultimato</p>
            <h3>Avaliações dos Fãs</h3>
            <img
              src={stars5}
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
            show === "hulk" ? styles.dontShownOnScreen : ""
          } ${show === "wanda" || show === "thanos" ? styles.opacity : ""}`}
        >
          <div className={styles.backgroundMainImg}>
            <h2>Hulk</h2>
            <p>
              Na história original dos quadrinhos, o Hulk é um selvagem e
              poderoso alter ego do Dr. Robert Bruce Banner, um cientista que
              foi atingido por raios gama enquanto salvava um adolescente
              durante o teste militar.
            </p>
            <span
              onClick={() => {
                setShow("hulk");
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
            show === "hulk" ? "" : styles.dontShownOnScreen
          }`}
        >
          <div className={styles.details}>
            <h2>Hulk</h2>
            <p className={styles.aparicoes}>Aparições:</p>
            <p>Vingadores</p>
            <p>Vingadores - Era de Ultron</p>
            <p>Thor - Ragnarok</p>
            <p>Vingadores - Guerra Infinita</p>
            <p>Vingadores - Ultimato</p>
            <h3>Avaliações dos Fãs</h3>
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
        {/* -------------------------------------- Final box detalhes 3 -------------------------------------- */}
      </section>
    </>
  );
};

export default Personagens;

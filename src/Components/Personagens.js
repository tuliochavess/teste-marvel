import React from "react";
import Header from "./Header";
import styles from "./Personagens.module.css";
import stars from "../Assets/Personagens/stars.svg";
import close from "../Assets/Personagens/close.svg";

const Personagens = () => {
  let [show, setShow] = React.useState('main');
  console.log(show);
  return (
    <>
      <Header />
      <section className={styles.personagens}>
        {/* -------------------------------------- Início box principal 1 -------------------------------------- */}
        <div
          className={`${styles.mainBox1} ${
            show === 'wanda' || show === 'thanos' || show === 'hulk' ? styles.dontShownOnScreen : ''
          }`}
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
                setShow((show = 'wanda'));
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
            show === 'wanda' ? "" : styles.dontShownOnScreen
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
              src={stars}
              alt="Estrelas Avaliação"
              className={styles.stars}
            />
            <img
              src={close}
              alt="Ícone fechar Modal"
              className={styles.close}
              onClick={() => {
                setShow((show = 'main'));
              }}
            />
          </div>
        </div>
        {/* -------------------------------------- Final box detalhes 1 -------------------------------------- */}

        {/* -------------------------------------- Início box principal 2 -------------------------------------- */}
        <div
          className={`${styles.mainBox2} ${
            show === 'wanda' || show === 'thanos' || show === 'hulk' ? styles.dontShownOnScreen : ""
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
                setShow((show = 'thanos'));
              }}
            >
              ver detalhes
            </span>
          </div>
        </div>
        {/* -------------------------------------- Final box principal 2 -------------------------------------- */}
      </section>
    </>
  );
};

export default Personagens;

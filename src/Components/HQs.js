import React from "react";
import Header from "./Header";
import styles from "./HQs.module.css";
import stars4 from "../Assets/Personagens/stars4.svg";
import close from "../Assets/Personagens/close.svg";
import americanas from "../Assets/Hqs/americanas.svg"
import amazon from "../Assets/Hqs/amazon.svg"

const HQs = () => {
  let [show, setShow] = React.useState("main");
  console.log(show);
  return (
    <>
      <Header />
      <section className={styles.hqs}>
        {/* -------------------------------------- Início box principal 1 -------------------------------------- */}
        <div
          className={`${styles.mainBox1} ${
            show === "thor" || show === "surfista"
              ? styles.dontShownOnScreen
              : ""
          } ${show === "origem" ? styles.opacity : ""}`}
        >
          <div className={styles.backgroundMainImg}>
            <h2>Thor: Vikings</h2>
            <p>
              Garth Ennis e sua violência atacam novamente na HQ que leva a
              violência das histórias de Thor ao limite! Na minissérie de 2003
              vemos vikings de um passado distante voltando a vida.
            </p>
            <span
              onClick={() => {
                setShow((show = "thor"));
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
            show === "thor" ? "" : styles.dontShownOnScreen
          }`}
        >
          <div className={styles.details}>
            <h2>Thor: Vikings</h2>
            <p className={styles.text}>
              Garth Ennis e sua violência atacam novamente na HQ que leva a
              violência das histórias de Thor ao limite! Na minissérie de 2003
              vemos vikings de um passado distante voltando a vida.
            </p>
            <h3>Disponível para comprar:</h3>
            <img src={americanas} alt="Americanas" className={styles.americanas}/>
            <img src={amazon} alt="Amazon" className={styles.amazon} />
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
                setShow((show = "main"));
              }}
            />
          </div>
        </div>
        {/* -------------------------------------- Final box detalhes 1 -------------------------------------- */}

        {/* -------------------------------------- Início box principal 2 -------------------------------------- */}
        <div
          className={`${styles.mainBox2} ${
            show === "thor" || show === "surfista" || show === "origem"
              ? styles.dontShownOnScreen
              : ""
          }`}
        >
          <div className={styles.backgroundMainImg}>
            <h2>Surfista Prateado: Parábola</h2>
            <p>
              O único oponente do Devorador de Mundos é o herói que ele
              aprisionou na Terra: o Surfista Prateado, Galactus jurou não
              consumir o planeta, mas e se, em vez disso, ele transformar a
              civilização em seus adoradores?
            </p>
            <span>ver detalhes</span>
          </div>
        </div>
        {/* -------------------------------------- Final box principal 2 -------------------------------------- */}

        {/* -------------------------------------- Início box principal 3 -------------------------------------- */}
        <div
          className={`${styles.mainBox3} ${
            show === "origem" ? styles.dontShownOnScreen : ""
          } ${show === "thor" || show === "surfista" ? styles.opacity : ""}`}
        >
          <div className={styles.backgroundMainImg}>
            <h2>Wolverine: Origens</h2>
            <p>
              Origem é uma minissérie em quadrinhos publicada pela Marvel Comics
              em seis edições, entre 2001 e 2002. A história conta a revelação
              do passado do personagem Wolverine.
            </p>
            <span>ver detalhes</span>
          </div>
        </div>
        {/* -------------------------------------- Final box principal 3 -------------------------------------- */}
      </section>
    </>
  );
};

export default HQs;

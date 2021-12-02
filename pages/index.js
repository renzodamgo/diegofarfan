import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import NavBar from './shared/navbar'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Diego Farfán</title>
      </Head>

      <nav>
        <NavBar />
      </nav>

      <main>
        <section id={styles.hero}>

          <div className={styles.container}>
            <div id={styles.hero_text}>
              <header>
                <h1>
                  Posiciono a marcas mediante la creación de contenido audiovisual
                </h1>
                <h2>
                  FOTOGRAFÍA · EDICIÓN · VIDEO
                </h2>
              </header>
            </div>

            <div id={styles.hero_img}>
              <img src="/img/diegofarfan.png" alt="diego farfan" />
            </div>

            <div id={styles.button}>
              <button>Hablemos</button>
            </div>
          </div>


        </section>
        <section id={styles.miedos}>
          <div className={styles.container}>
            <h2>
              si eres dueño de una marca o tienes una marca personal, probablemente...
            </h2>
            <div className={styles.beneficios_elements}>
              <div className={styles.beneficios_element}>
                <img src="/img/contenido.png" alt="contenido logo" />

                <p>
                  No planificas el contenido que publicas

                </p>
              </div>
              <div className={styles.beneficios_element}>
                <img src="/img/camara.png" alt="camara logo" />
                {/* <svg id="Capa_1" data-name="Capa 1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 143.97 143.97"><defs><style>.cls-1{fill:none;}.cls-2{opacity:0.49;}.cls-3{fill:#ffbc00;}.cls-4{clip - path:url(#clip-path);}</style><clipPath id="clip-path" transform="translate(-157.58 -1595.63)"><rect class="cls-1" x="198.09" y="1629.03" width="64.07" height="64.07" /></clipPath></defs><circle class="cls-3" cx="71.98" cy="71.98" r="71.98" /></svg> */}
                <p>
                  No empleas una estrategia clara para tu contenido.

                </p>
              </div>
              <div className={styles.beneficios_element}>
                <img src="/img/smartphone.png" alt="smartphone logo" />

                {/* <svg id="Capa_1" data-name="Capa 1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 144.71 144.71"><defs><style>.cls-1{fill:none;}.cls-2{opacity:0.49;}.cls-3{fill:#ffbc00;}.cls-4{clip - path:url(#clip-path);}</style><clipPath id="clip-path" transform="translate(-157.41 -1856.43)"><rect class="cls-1" x="194.49" y="1893.65" width="70.55" height="70.54" /></clipPath></defs><circle class="cls-3" cx="72.36" cy="72.36" r="72.36" /></svg> */}
                <p>
                  Tu contenido no te da los resultados de alcance buscas.

                </p>
              </div>

            </div>

          </div>

        </section>
        <section id={styles.beneficios}>

        </section>
        <section id={styles.quien_soy}>

        </section>
        <section id={styles.procesos}>

        </section>
        <section id={styles.testimonios}>

        </section>
        <section id={styles.lead_magnet}>

        </section>
        <section id={styles.hero_footer}>

        </section>
      </main>
      <footer>

      </footer>
    </div>
  )
}

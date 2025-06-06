import regiao from "../assets/images/região.png";
import idade from "../assets/images/idade.png";
import genero from "../assets/images/gênero.png";
import raca from "../assets/images/raça.png";
import tipoBolsaRegiao from "../assets/images/tegiao_tipobolsa.png";
import tipobolsa from "../assets/images/tipobolsa.png";
import deficientes from "../assets/images/deficientes.png";
import top10 from "../assets/images/top10.png";
import top102 from "../assets/images/top102.png";
import top1013 from "../assets/images/top103.png";

import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/estatistica.css";

function Estatisticas() {
  document.title = "PreveBolsa | Estatísticas";

  return (
    <>
      <Header />

      <main id="estatisticas-page">
        <h1>Estatísticas</h1>
        <p className="intro">
          Acompanhe análises e dados históricos usados para as previsões.
        </p>

        <section className="dados-fontes">
          <h2>Base de Dados</h2>
          <p>
            Nesta análise, utilizamos o banco de dados referente ao ano de 2017,
            contendo informações sobre os beneficiários, como perfil
            socioeconômico, tipo de bolsa, instituição de ensino, curso, região,
            gênero, raça e se há deficiência física. Os resultados revelam
            insights sobre a distribuição geográfica das bolsas, os cursos mais
            procurados, o perfil predominante dos beneficiários e como esses
            fatores se relacionam.
          </p>
        </section>

        <section className="estatisticas-grid">
          <div className="card">
            <h2>Região dos beneficiários</h2>
            <img src={regiao} alt="" />
          </div>

          <div className="card">
            <h2>Idade dos beneficiários</h2>
            <img src={idade} alt="" />
          </div>

          <div className="card">
            <h2>Genero dos beneficiários</h2>
            <img src={genero} alt="" />
          </div>

          <div className="card">
            <h2>Raça dos beneficiários</h2>
            <img src={raca} alt="" />
          </div>
          <div className="card">
            <h2>Tipo de bolsa por regiao</h2>
            <img src={tipoBolsaRegiao} alt="" />
          </div>
          <div className="card">
            <h2>Tipo de bolsa</h2>
            <img src={tipobolsa} alt="" />
          </div>
          <div className="card">
            <h2>Deficientes mais beneficiários</h2>
            <img src={deficientes} alt="" />
          </div>
          <div className="card">
            <h2>Top 10 cursos com mais bolsas</h2>
            <img src={top10} alt="" />
          </div>
          <div className="card">
            <h2>Top 10 instituições com mais bolsas</h2>
            <img src={top102} alt="" />
          </div>
          <div className="card">
            <h2>Top 10 cursos mais populares</h2>
            <img src={top1013} alt="" />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Estatisticas;

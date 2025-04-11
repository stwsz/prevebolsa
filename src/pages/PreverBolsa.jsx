import Header from "../components/Header";
import Footer from "../components/Footer";
import React, { useState } from "react";
import '../styles/prever-bolsa.css';

import { Link } from "react-router-dom";

function PreverBolsa() {
  document.title = "PreveBolsa | Prever Bolsa";

  const [form, setForm] = useState({
    instituicao: "",
    tipoBolsa: "",
    modalidade: "",
    curso: "",
    turno: "",
    raca: "",
    pcd: "",
    uf: "",
    municipio: "",
    enemNotas: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    alert("Formulário enviado com sucesso!");
  };
  console.log(form)
  return (
    <>
      <Header />

      <main id="form-page">
        <h1>Prever Bolsa</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label>
              Instituição de preferência:
              <input
                type="text"
                name="instituicao"
                value={form.instituicao}
                onChange={handleChange}
                required
              />
            </label>
            
          </div>
          <div className="form-group">
            <label>
              Tipo de bolsa:
              <select
                name="tipoBolsa"
                value={form.tipoBolsa}
                onChange={handleChange}
                required
              >
                <option value="">Selecione</option>
                <option value="integral">Integral</option>
                <option value="parcial">Parcial</option> 
              </select>
            </label>
          </div>
          <div className="form-group">
            <label>
              Modalidade:
              <select
                name="modalidade"
                value={form.modalidade}
                onChange={handleChange}
                required
              >
                <option value="">Selecione</option>
                <option value="presencial">Presencial</option>
                <option value="ead">EAD</option>
              </select>
            </label>
          </div>
          <div className="form-group">
            <label>
              Nome do curso:
              <input
                type="text"
                name="curso"
                value={form.curso}
                onChange={handleChange}
                required
              />
            </label>
          </div>
          <div className="form-group">
            <label>
              Turno:
              <select
                name="turno"
                value={form.turno}
                onChange={handleChange}
                required
              >
                <option value="">Selecione</option>
                <option value="matutino">Matutino</option>
                <option value="vespertino">Vespertino</option>
                <option value="noturno">Noturno</option>
                <option value="integral">Integral</option>
              </select>
            </label>
          </div>
          <div className="form-group">
            <label>
              Raça:
              <select
                name="raca"
                value={form.raca}
                onChange={handleChange}
                required
              >
                <option value="">Selecione</option>
                <option value="branco">Branco</option>
                <option value="preto">Preto</option>
                <option value="pardo">Pardo</option>
                <option value="indigena">Indígena</option>
                <option value="amarelo">Amarelo</option>
                <option value="nao_informar">Prefiro não informar</option>
              </select>
            </label>
          </div>
          <div className="form-group">
            <label>
              Pessoa com deficiência?
              <select
                name="pcd"
                value={form.pcd}
                onChange={handleChange}
                required
              >
                <option value="">Selecione</option>
                <option value="sim">Sim</option>
                <option value="nao">Não</option>
              </select>
            </label>
          </div>
          <div className="form-group">
            <label>
              UF:
              <select
                name="uf"
                value={form.uf}
                onChange={handleChange}
                required
              >
                <option value="">Selecione</option>
                <option value="SP">PE</option>
                <option value="RJ">RJ</option>
                <option value="MG">MG</option>
                <option value="MG">MA</option>
                <option value="MG">PI</option>
                <option value="MG">CE</option>
                <option value="MG">RN</option>
                <option value="MG">SC</option>
                <option value="MG">RS</option>
                <option value="MG">GO</option>
                <option value="MG">RR</option>
                <option value="MG">BA</option>
                <option value="MG">AM</option>
                <option value="MG">PR</option>
                <option value="MG">PA</option>
                <option value="MG">SP</option>
                <option value="MG">AL</option>
                <option value="MG">SE</option>
                <option value="MG">PB</option>
                <option value="MG">AC</option>
                <option value="MG">MT</option>
                <option value="MG">MS</option>
                <option value="MG">ES</option>
                <option value="MG">RO</option>
                <option value="MG">TO</option>
                <option value="MG">AP</option>
              </select>
            </label>
          </div>
          <div className="form-group">
            <label>
              Município:
              <input
                type="text"
                name="municipio"
                value={form.municipio}
                onChange={handleChange}
                required
              />
            </label>
          </div>
          <div className="form-group">
            <label>
              Notas do ENEM (separadas por vírgula):
              <input
                type="text"
                name="enemNotas"
                placeholder="Ex: 700, 680, 710, 690, 720"
                value={form.enemNotas}
                onChange={handleChange}
                required
              />
            </label>
          </div>
          <button type="submit">Prever bolsa</button>
        </form>
      </main>

      <Footer />
    </>
  );
}

export default PreverBolsa;

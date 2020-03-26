import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import './style.css';
import logoImg from '../../assets/logo.svg';  

export default function NewIncident(){
  return(
    <div className="new-incident">
      <div className="content">
        <section>
          <img src={logoImg} alt="logo"/>
          <h1>Cadastrar Novo caso</h1>
          <p>Descriva o caso detalhadamente para encontrar um herói para resolver isso.</p>

          <Link className="back-link" to="/profile">
            <FiArrowLeft size={16} color="#e02041"/> 
            Voltar para home
          </Link>
        </section>

        <form>
          <input placeholder="Titulo do caso"/>
          <textarea placeholder="Descrição"/>
          <input placeholder="Valor em reais"/>

          <button className="button" type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
  );
}
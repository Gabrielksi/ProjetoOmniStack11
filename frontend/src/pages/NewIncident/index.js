import React from 'react';
import logoImage from '../../assets/logo.svg';
import {FiArrowLeft} from 'react-icons/fi';
import { Link } from 'react-router-dom'

import './style.css'

export default function NewIncident(){
    return(
        <div className="newIncident-container">
            <div className="content">
                <section>
                    <img src={logoImage} alt="Be The Hero"/>
                    <h1>Cadastrar novo caso</h1>
                    <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso.</p> 
                    <Link className="back-link" to="/Profile">
                        <FiArrowLeft size={16} color="#E02041"/>
                        Voltar para home
                     </Link>
                </section>

                <form>
                    <input placeholder="Titulo do caso"/>
                    <textarea placeholder="Descrição"/>
                    <input placeholder="Valor em reais"/>
                    <button className="button" type="submit">
                        Cadastrar
                    </button>
                </form>
            </div>
        </div>
    );
}
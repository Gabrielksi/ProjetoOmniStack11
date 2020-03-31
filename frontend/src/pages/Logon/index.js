import React from 'react';
import heroesImage from '../../assets/heroes.png';
import logoImage from '../../assets/logo.svg';
import {FiLogIn} from 'react-icons/fi';
import { Link } from 'react-router-dom'
import './style.css';

export default function Logon(){
    return(
        <div className="Logon-container">
            <section className="form">
                <img src={logoImage} alt="Logo"/>

                <form>
                    <h1>Faça seu logon</h1>

                    <input placeholder="Sua ID"/>
                    <button className="button" type="submit">Entrar</button>

                    <Link className="back-link" to="/register">
                        <FiLogIn size={16} color="#E02041"/>
                        Não tenho cadastro
                     </Link>
                </form>
            </section>

            <img src={heroesImage} alt="Heroes"/>
        </div>
    );
}
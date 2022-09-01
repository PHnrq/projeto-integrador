import { useState } from "react";
import { Link } from "react-router-dom";

import { Container } from "./styles.js";
import { FormCadastro } from "../../components/FormCadastro";

import logo from "../../assets/logo.svg";
import publi1 from "../../assets/publi1.png";
import publi2 from "../../assets/publi2.png";
import aboutImg from "../../assets/image.svg";

export function openMenu() {
  document.body.classList.add('menu-expanded')
}

export function closeMenu() {
  document.body.classList.remove('menu-expanded')
}

export function Home() {
  const [showSingInForm, setShowSingInForm] = useState(false);

  


  return (
    <Container>
      {showSingInForm && <FormCadastro setShowSingInForm={setShowSingInForm} />}

      <header className="header" id="home">
        <div className="header-bar">
          <img className="logo" src={logo} alt="Donare" />

          <button href="#" className="mobile-open-menu" aria-expanded="false" aria-label="Abrir menu" onClick={openMenu()} ></button>

          <button href="#" className="mobile-close-menu" aria-expanded="true" aria-label="Fechar menu" onClick={closeMenu()} ></button>

          <div className="mobile-menu">
            <ul>
              <li><a href="#missao" onclick="closeMenu()">Missão</a></li>
              <li><a href="#results" onclick="closeMenu()">Publicações</a></li>
              <li><a href="#about" onclick="closeMenu()">Sobre Nós</a></li>
              <li><a onClick={() => {setShowSingInForm(true);}} onclick="closeMenu()">Cadastro</a></li>
              <li><Link to="/login" onclick="closeMenu()">Login</Link></li>
            </ul>
          </div>

          <nav className="header-menu">
            <a href="#missao" className="header-menu-item">
              Missão
            </a>
            <a href="#results" className="header-menu-item">
              Publicações
            </a>
            <a href="#about" className="header-menu-item">
              Sobre Nós
            </a>
            <button
              className="btn-create-account"
              onClick={() => {
                setShowSingInForm(true);
              }}
            >
              Cadastro
            </button>
            <Link to="/login">
              <button className="btn-login">Login</button>
            </Link>
          </nav>
        </div>

        <div className="header-content">
          <h2 className="header-subtitle">Juntos podemos mais!</h2>
          <p className="header-paragraph">
            Nos ajude a reduzir o desperdício de alimentos ajudando os mais
            necessitados.
          </p>
          <button
            className="btn-create-account"
            onClick={() => {
              setShowSingInForm(true);
            }}
          >
            Faça parte agora
          </button>
        </div>
      </header>

      <main className="main">
        <div className="publications" id="missao">
          <div className="publi-text">
            <h3 className="publi-title">A diferença por meio da ação</h3>
            <p className="publi-paragraph">
              Nossa missão é reduzir o desperdício de alimentos e ajudar pessoas
              em situação de vulnerabilidade, fazemos isso conectando doadores e
              ONGs com base na localização, possibilitando assim que as ONGs
              encontre o doador mais proximo.
            </p>
            <p className="publi-paragraph">
              Utilizamos uma base de dados para catalogar os produtos
              disponibilizados pelos doadores, tornando possivel o resgate de
              produtos que iriam para o lixo.
            </p>
          </div>

          <div className="publi-image">
            <img src={publi1} alt="donation" className="image1" />
            <img src={publi2} alt="vegetables" className="image2" />
          </div>
        </div>

        <div className="our-results" id="results">
          <div className="tons-people-city-container">
            <div className="tons">
              <p className="tons-quantity">1 TONELADA</p>
              <p className="tons-text">DE ALIMENTOS SALVOS</p>
            </div>
            <div className="people">
              <p className="people-quantity">2 MIL PESSOAS</p>
              <p className="people-text">BENEFICIADAS DIARIAMENTE</p>
            </div>
            <div className="city">
              <p className="city-quantity">600 CIDADES</p>
              <p className="city-text">COM DOADORES</p>
            </div>
          </div>
        </div>

        <div className="about" id="about">
          <img src={aboutImg} alt="people talking" className="about-image" />
          <div className="about-text">
            <h3 className="about-title">Sobre Nós</h3>
            <p className="about-paragraph">
              Somos um grupo de desenvolvedores que acredita que iniciativas como esta podem mudar o mundo!
            </p>
          </div>
        </div>
      </main>
      <footer className="footer">
        <div className="footer-logo-container">
          <img className="logo" src={logo} alt="Donare" />
          <p className="footer-text">&copy; Copyright 2022</p>
          <p className="footer-text">Privacy | Terms</p>
        </div>

        <div className="footer-menu">
          <a href="#home" className="footer-menu-item">
            Início
          </a>
          <a href="#missao" className="footer-menu-item">
            Missão
          </a>
          <a href="#results" className="footer-menu-item">
            Publicações
          </a>
          <a href="#about" className="footer-menu-item">
            Sobre nós
          </a>
        </div>
      </footer>
    </Container>
  );
}

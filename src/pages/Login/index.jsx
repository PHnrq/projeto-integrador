import React from "react";
import { Container } from "./styles";
import logo from "../../assets/logoLg.svg";
import vetorLogin from "../../assets/vector-login.png";

export function Login() {
  return (
    <Container>
      <div className="main-left">
        <img className="main-left__logo" src={logo} alt="" />
        <h3 className="main-left__description">
          Conectamos doadores às pessoas em insuficiência alimentar e ONGs com o
          objetivo de reduzir o desperdício de alimentos.
        </h3>
      </div>
      <form className="main-right__login form" action="#" method="post">
        <label htmlFor="email"></label>
        <input
          type="text"
          className="main-right__login__input"
          placeholder="E-mail"
        />
        <label htmlFor="password"></label>
        <input
          type="password"
          className="main-right__login__input"
          placeholder="Senha"
        />
        <button className="btn btn-login" type="submit">
          <img src={vetorLogin} alt="" />
          <p className="btn-text">Login</p>
        </button>
        <hr className="line" />
        <p className="main-right__register">Novo(a) por aqui?</p>
        <button className="btn btn-register btn-text">Cadastre-se</button>
      </form>
    </Container>
  );
}

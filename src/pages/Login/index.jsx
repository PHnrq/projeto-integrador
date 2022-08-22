import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { userData } from "../../services/userData";

import { Container } from "./styles";
import { FormCadastro } from "../../components/FormCadastro";

import logo from "../../assets/logoLg.svg";
import vetorLogin from "../../assets/vector-login.png";

export function Login({handleCurrentUser}) {
  const [showSingInForm, setShowSingInForm] = useState(false);

  const [userDB, setUserDB] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [warningMsg, setWarningMsg] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    userData.get("/users").then((r) => {
      const data = r.data;
      setUserDB(data);
    });
  }, []);

  const handleChange = (e) => {
    if (e.target.id === "email") {
      setEmail(e.target.value);
    } else if (e.target.id === "password") {
      setPassword(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const userSelected = userDB.find((user) => user.email === email);

    if(userSelected){
      if (userSelected.password === password) {
        handleCurrentUser(userSelected);
        navigate("../dashboard", { replace: true });
        setWarningMsg("")
      } else {
        setWarningMsg("Senha inválida");
      }
    }else{
      setWarningMsg("O email informado não está cadastrado");
    }

  };

  return (
    <Container>
      {showSingInForm && <FormCadastro setShowSingInForm={setShowSingInForm} />}
      <div className="main-left">
        <img className="main-left__logo" src={logo} alt="" />
        <h3 className="main-left__description">
          Conectamos doadores às pessoas em insuficiência alimentar e ONGs com o
          objetivo de reduzir o desperdício de alimentos.
        </h3>
      </div>
      <form className="main-right__login form" action="#" method="post" onSubmit={handleSubmit}>
        <label htmlFor="email"></label>
        <input
          type="text"
          className="main-right__login__input"
          placeholder="E-mail"
          id="email"
          onChange={handleChange}
          value={email}
        />
        <label htmlFor="password"></label>
        <input
          type="password"
          className="main-right__login__input"
          placeholder="Senha"
          id="password"
          onChange={handleChange}
          value={password}
        />
        <span className="warning-msg">{warningMsg}</span>
        <button className="btn btn-login" type="submit">
          <img src={vetorLogin} alt="" />
          <p className="btn-text">Login</p>
        </button>
        <hr className="line" />
        <p className="main-right__register">Novo(a) por aqui?</p>
        <button
          className="btn btn-register btn-text"
          type="button"
          onClick={() => {
            setShowSingInForm(true);
          }}
        >
          Cadastre-se
        </button>
      </form>
    </Container>
  );
}

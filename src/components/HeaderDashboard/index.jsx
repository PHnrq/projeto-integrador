import React from "react";
import {Container} from "./styles";
import logo from "../../assets/logo.svg";
import avatar from "../../assets/avatar.png";
import { Link } from "react-router-dom";

export function Header(){
    return (
        <Container className="header">
            <img className="header__logo" src={logo} alt="logo da Donare" />
            <Link to="/login" className="logout">Sair</Link>
        </Container>
    )
}
import React from "react";
import {Container} from "./styles";
import logo from "../../assets/logo.svg";
import avatar from "../../assets/avatar.png";

export function Header(){
    return (
        <Container className="header">
            <img className="header__logo" src={logo} alt="logo da Donare" />
            <img className="header__avatar" src={avatar} alt="avatar" />
        </Container>
    )
}
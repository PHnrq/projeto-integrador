import React from "react";
import {Container} from "./styles";
import logo from "../../assets/logo.svg";

export function Footer(){
    return (
        <Container className="footer">
            <img className="footer__logo" src={logo} alt="logo da Donare" />
            <span>&copy; 2022 — 2022</span>
        </Container>
    )
}

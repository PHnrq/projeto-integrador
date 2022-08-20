import React from "react";
import {Header} from "./styles";
import logo from "../../assets/logo.svg";
import avatar from "../../assets/avatar.png";

const Header = () => {
    return (
        <Header className="header">
            <img className="header__logo" src={logo} alt="logo da Donare" />
            <img className="header__avatar" src={avatar} alt="avatar" />
        </Header>
    )
}

export default Header;
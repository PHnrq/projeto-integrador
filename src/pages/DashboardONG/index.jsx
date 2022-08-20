import React from "react";
import {Header} from "../../components/HeaderDashboard/index";
import {Container} from "./styles";

import bean from "./assets/bean.png";
import buyAdd from "./assets/buy-add.png";
import buyConfirm from "./assets/buy-confirm.png";
import flour from "./assets/flour.png";
import leftArrow from "./assets/left-arrow.png";
import rice from "./assets/rice.png";
import rightArrow from "./assets/right-arrow.png";
import sugar from "./assets/sugar.png";
import trash from "./assets/trash.png";

export function DashboardOng() {
    return (
        <Container>
            <Header />

            <main class="main">

                <div class="right-container">

                    <section class="find-donors">

                        <h2 class="find-donors-title">Ache os doadores mais próximos</h2>

                        <div class="search-radius-container">
                            <label for="search-radius">Defina o raio de busca</label>
                            <input type="range" name="search-radius" id="search-radius" />
                        </div>

                        <div class="map-and-donors-list">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6162.28090355021!2d-51.1622968501601!3d-23.311616892832973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94eb435f8940fd39%3A0xf9d4888545f0b415!2sCatedral%20Metropolitana%20de%20Londrina!5e0!3m2!1spt-BR!2sbr!4v1659648510301!5m2!1spt-BR!2sbr"
                                width="217" height="150" style="border:0;" allowfullscreen="" loading="lazy"
                                referrerpolicy="no-referrer-when-downgrade">
                            </iframe>

                            <ul class="donors-list">
                                <li class="donors-list-item">Mercado Mão Amiga</li>
                                <li class="donors-list-item">Deskontão</li>
                                <li class="donors-list-item">João Silva</li>
                            </ul>

                        </div>

                    </section>

                    <section class="available-products">
                        <h2 class="available-products-title">Produtos disponives em&nbsp;<span class="donor-name">Mercado
                            Mão
                            Amiga</span></h2>

                        <div class="see-all-container">
                            <a href="#" class="see-all">Ver todos</a>
                        </div>

                        <div class="partial-product-list">

                            <button class="btn-arrow"><img src={rightArrow} alt="right-arrow" /></button>

                            <ul class="product-list">

                                <li class="product-list-item">
                                    <div class="product-item-date">
                                        <img src={rice} alt="rice" class="list-item-img" />
                                        <p class="list-item-validity">VAL: 13 / 08 / 2022</p>
                                    </div>

                                    <p class="list-item-name">Arroz Branco</p>

                                    <div class="buy-add-icon-container">
                                        <button class="buy-add-icon"><img src={buyAdd}
                                            alt="buy-add-icon" /></button>
                                    </div>


                                </li>

                                <li class="product-list-item">
                                    <div class="product-item-date">
                                        <img src={sugar} alt="sugar" class="list-item-img" />
                                        <p class="list-item-validity">VAL: 13 / 08 / 2022</p>
                                    </div>

                                    <p class="list-item-name">Açucar Cristal</p>

                                    <div class="buy-add-icon-container">
                                        <button class="buy-add-icon"><img src={buyAdd}
                                            alt="buy-add-icon" /></button>
                                    </div>
                                </li>

                                <li class="product-list-item">
                                    <div class="product-item-date">
                                        <img src={bean} alt="bean" class="list-item-img" />
                                        <p class="list-item-validity">VAL: 13 / 08 / 2022</p>
                                    </div>

                                    <p class="list-item-name">Feijão Carioca</p>

                                    <div class="buy-add-icon-container">
                                        <button class="buy-add-icon"><img src={buyAdd}
                                            alt="buy-add-icon" /></button>
                                    </div>
                                </li>

                            </ul>

                            <button class="btn-arrow"><img src={leftArrow} alt="left-arrow" /></button>

                        </div>
                    </section>
                </div>

                <div class="left-container">

                    <form action="" class="demand-form">

                        <h2 class="demand-title">Meu pedido</h2>

                        <div class="donor-demand-container">
                            <p class="donor-demand-name">Mercado Mão Amiga</p>
                            <div class="donor-demand-others-data">
                                <div class="item-img-container">
                                    <img src={flour} alt="flour" class="item-img" />
                                </div>
                                <div class="item-name-qtd-container">
                                    <p class="demand-item-name">Farinha de trigo</p>
                                    <div class="qtd-sign-trash-container">
                                        <span class="qtd">QTD</span>
                                        <div class="sign-value-container">
                                            <button class="minus-sign">-</button>
                                            <span class="qtd-value">2</span>
                                            <button class="plus-sign">+</button>
                                        </div>
                                        <button class="trash-icon"><img src={trash} alt="trash-icon" /></button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="demand-get-date">
                            <p class="demand-text">Selecione a data de retirada</p>
                            <input type="date" name="get-date" id="get-date" />
                        </div>

                    </form>

                    <div class="submit-btn-container">
                        <button type="submit" class="submit-btn"><img src={buyConfirm}
                            alt="buy-confirm-icon" />&nbsp;Finalizar Pedido</button>
                    </div>

                </div>

            </main>

        </Container>

    )
}

export default Container


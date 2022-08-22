import React from "react";
import { Header } from "../../components/HeaderDashboard";
import { Container } from "./styles";

import bean from "../../assets/bean.png";
import buyAdd from "../../assets/buy-add.png";
import buyConfirm from "../../assets/buy-confirm.png";
import flour from "../../assets/flour.png";
import leftArrow from "../../assets/left-arrow.png";
import rice from "../../assets/rice.png";
import rightArrow from "../../assets/right-arrow.png";
import sugar from "../../assets/sugar.png";
import trash from "../../assets/trash.png";

export function DashboardOng({currentUser}) {
  return (
    <Container>
      <Header />

      <main className="main">
        <div className="right-container">
          <section className="find-donors">
            <h2 className="find-donors-title">Ache os doadores mais próximos</h2>

            <div className="search-radius-container">
              <label htmlFor="search-radius">Defina o raio de busca</label>
              <input type="range" name="search-radius" id="search-radius" />
            </div>

            <div className="map-and-donors-list">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6162.28090355021!2d-51.1622968501601!3d-23.311616892832973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94eb435f8940fd39%3A0xf9d4888545f0b415!2sCatedral%20Metropolitana%20de%20Londrina!5e0!3m2!1spt-BR!2sbr!4v1659648510301!5m2!1spt-BR!2sbr"
                width="217"
                height="150"
                style={{border: 0}}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Map"
              ></iframe>

              <ul className="donors-list">
                <li className="donors-list-item">Mercado Mão Amiga</li>
                <li className="donors-list-item">Deskontão</li>
                <li className="donors-list-item">João Silva</li>
              </ul>
            </div>
          </section>

          <section className="available-products">
            <h2 className="available-products-title">
              Produtos disponives em&nbsp;
              <span className="donor-name">Mercado Mão Amiga</span>
            </h2>

            <div className="see-all-container">
              <button className="see-all">
                Ver todos
              </button>
            </div>

            <div className="partial-product-list">
              <button className="btn-arrow">
                <img src={rightArrow} alt="right-arrow" />
              </button>

              <ul className="product-list">
                <li className="product-list-item">
                  <div className="product-item-date">
                    <img src={rice} alt="rice" className="list-item-img" />
                    <p className="list-item-validity">VAL: 13 / 08 / 2022</p>
                  </div>

                  <p className="list-item-name">Arroz Branco</p>

                  <div className="buy-add-icon-container">
                    <button className="buy-add-icon">
                      <img src={buyAdd} alt="buy-add-icon" />
                    </button>
                  </div>
                </li>

                <li className="product-list-item">
                  <div className="product-item-date">
                    <img src={sugar} alt="sugar" className="list-item-img" />
                    <p className="list-item-validity">VAL: 13 / 08 / 2022</p>
                  </div>

                  <p className="list-item-name">Açucar Cristal</p>

                  <div className="buy-add-icon-container">
                    <button className="buy-add-icon">
                      <img src={buyAdd} alt="buy-add-icon" />
                    </button>
                  </div>
                </li>

                <li className="product-list-item">
                  <div className="product-item-date">
                    <img src={bean} alt="bean" className="list-item-img" />
                    <p className="list-item-validity">VAL: 13 / 08 / 2022</p>
                  </div>

                  <p className="list-item-name">Feijão Carioca</p>

                  <div className="buy-add-icon-container">
                    <button className="buy-add-icon">
                      <img src={buyAdd} alt="buy-add-icon" />
                    </button>
                  </div>
                </li>
              </ul>

              <button className="btn-arrow">
                <img src={leftArrow} alt="left-arrow" />
              </button>
            </div>
          </section>
        </div>

        <div className="left-container">
          <form className="demand-form">
            <h2 className="demand-title">Meu pedido</h2>

            <div className="donor-demand-container">
              <p className="donor-demand-name">Mercado Mão Amiga</p>
              <div className="donor-demand-others-data">
                <div className="item-img-container">
                  <img src={flour} alt="flour" className="item-img" />
                </div>
                <div className="item-name-qtd-container">
                  <p className="demand-item-name">Farinha de trigo</p>
                  <div className="qtd-sign-trash-container">
                    <span className="qtd">QTD</span>
                    <div className="sign-value-container">
                      <button className="minus-sign">-</button>
                      <span className="qtd-value">2</span>
                      <button className="plus-sign">+</button>
                    </div>
                    <button className="trash-icon">
                      <img src={trash} alt="trash-icon" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="demand-get-date">
              <p className="demand-text">Selecione a data de retirada</p>
              <input type="date" name="get-date" id="get-date" />
            </div>
          </form>

          <div className="submit-btn-container">
            <button type="submit" className="submit-btn">
              <img src={buyConfirm} alt="buy-confirm-icon" />
              &nbsp;Finalizar Pedido
            </button>
          </div>
        </div>
      </main>
    </Container>
  );
}

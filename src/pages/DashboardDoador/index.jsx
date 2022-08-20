import { Container } from "./styles";
import {Header} from "../../components/HeaderDashboard"

import acucarCristal from "../../assets/açucar-cristal.png";
import btnLeft from "../../assets/button-left.svg";
import btnRigth from "../../assets/button-rigth.svg";
import feijaoKicaldo from "../../assets/feijao-kicaldo.png";
import iconBtn from "../../assets/icon-btn.png";
import macarrao from "../../assets/macarrão.png";
import massaDonaBenta from "../../assets/massa-dona-benta.png";
import arrozBranco from "../../assets/arroz-branco.png";

export function DashboardDoador() {
  return (
    <Container>
      <Header />
      <main className="content">
        <div className="container">
          <div className="div">
            <div className="box-1">
              <img className="btn-left" src={btnLeft} alt='' />
              <div className="products">
                <div className="registered-products">
                  <h3 className="registered-products__title">
                    Produtos Cadastrados
                  </h3>
                  <p className="registered-products__view-all">Ver todos.</p>
                </div>
                <div className="aliments">
                  <div className="aliment">
                    <div className="aliment__div">
                      <img
                        src={arrozBranco}
                        alt="Arroz branco"
                        className="aliment__image"
                      />
                      <p className="aliment__validity">VAL: 13 / 08 / 22 </p>
                    </div>
                    <p className="aliment__item-name">Arroz branco</p>
                    <div className="aliment__quantity-div">
                      <span className="aliment__quantity">QTD</span>
                      <span className="aliment__add">
                        <p className="aliment__add__remove">-</p>
                        <p className="aliment__add__number">1</p>
                        <p className="aliment__add__add-more">+</p>
                      </span>
                    </div>
                  </div>
                  <div className="aliment">
                    <div className="aliment__div">
                      <img
                        src={acucarCristal}
                        alt="Arroz branco"
                        className="aliment__image"
                      />
                      <p className="aliment__validity">VAL: 13 / 08 / 22 </p>
                    </div>
                    <p className="aliment__item-name">Açucar Cristal</p>
                    <div className="aliment__quantity-div">
                      <span className="aliment__quantity">QTD</span>
                      <span className="aliment__add">
                        <p className="aliment__add__remove">-</p>
                        <p className="aliment__add__number">1</p>
                        <p className="aliment__add__add-more">+</p>
                      </span>
                    </div>
                  </div>

                  <div className="aliment">
                    <div className="aliment__div">
                      <img
                        src={feijaoKicaldo}
                        alt="Arroz branco"
                        className="aliment__image"
                      />
                      <p className="aliment__validity">VAL: 13 / 08 / 22 </p>
                    </div>
                    <p className="aliment__item-name">Feijão Carioca</p>
                    <div className="aliment__quantity-div">
                      <span className="aliment__quantity">QTD</span>
                      <span className="aliment__add">
                        <p className="aliment__add__remove">-</p>
                        <p className="aliment__add__number">1</p>
                        <p className="aliment__add__add-more">+</p>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <img className="btn-right" src={btnRigth} alt="" />
            </div>
            <button className="btn-add-to-card">
              {" "}
              <img className="icon-btn" src={iconBtn} alt="" /> Adicionar
              Produtos
            </button>
          </div>
          <div className="div-2">
            <div className="box-2">
              <div className="order">
                <h3 className="order__title">Fila de pedidos</h3>
                <p className="order__ong-name">ONG Criança Feliz</p>
                <div className="order__date">
                  <p className="order__date__p">Data de retirada:</p>
                  <p className="order__date__number">27/07/2023</p>
                </div>
                <div className="order__aliments">
                  <img
                    className="order__button-left"
                    src="assets/images/button-left.svg"
                    alt=""
                  />
                  <div className="order__aliment">
                    <img
                      className="order__aliment__image"
                      src={arrozBranco}
                      alt=""
                    />
                    <p className="order__aliment__title">Arroz branco</p>
                    <div className="order__aliment__div">
                      <p className="order__quantity">QTD</p>
                      <p className="order__total">1</p>
                    </div>
                  </div>
                  <div className="order__aliment">
                    <img
                      className="order__aliment__image"
                      src={macarrao}
                      alt=""
                    />
                    <p className="order__aliment__title">Farinha de Trigo</p>

                    <div className="order__aliment__div">
                      <p className="order__quantity">QTD</p>
                      <p className="order__total">1</p>
                    </div>
                  </div>
                  <div className="order__aliment">
                    <img
                      className="order__aliment__image"
                      src={massaDonaBenta}
                      alt=""
                    />
                    <p className="order__aliment__title">Macarrão Espageth</p>

                    <div className="order__aliment__div">
                      <p className="order__quantity">QTD</p>
                      <p className="order__total">1</p>
                    </div>
                  </div>
                  <img
                    className="order__button-rigth"
                    src={btnRigth}
                    alt=''
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Container>
  );
}

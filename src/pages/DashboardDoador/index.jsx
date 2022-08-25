import { useState } from "react";

import { Container } from "./styles";
import { Header } from "../../components/HeaderDashboard";
import { ModalCadastroProdutos } from "../../components/ModalCadastroProdutos";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import acucarCristal from "../../assets/açucar-cristal.png";
import btnLeft from "../../assets/button-left.svg";
import btnRigth from "../../assets/button-rigth.svg";
import feijaoKicaldo from "../../assets/feijao-kicaldo.png";
import iconBtn from "../../assets/icon-btn.png";
import macarrao from "../../assets/macarrão.png";
import massaDonaBenta from "../../assets/massa-dona-benta.png";
import arrozBranco from "../../assets/arroz-branco.png";

export function DashboardDoador({ currentUser }) {
  const [showProductRegistration, setShowProductRegistration] = useState(false);

  return (
    <Container>
      <Header />
      {showProductRegistration && (
        <ModalCadastroProdutos
          setShowProductRegistration={setShowProductRegistration}
          currentUserId={currentUser.id}
        />
      )}
      <main className="content">
        <div className="container">
          <div className="div">
            <div className="box-1">
              <div className="products">
                <div className="registered-products">
                  <h3 className="registered-products__title">
                    Produtos Cadastrados
                  </h3>
                </div>
                <Swiper
                  slidesPerView={3}
                  spaceBetween={30}
                  slidesPerGroup={3}
                  loop={true}
                  loopFillGroupWithBlank={true}
                  pagination={{
                    clickable: true,
                  }}
                  modules={[Pagination, Navigation]}
                  className="mySwiper"
                >
                  <SwiperSlide>
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
                  </SwiperSlide>

                  <SwiperSlide>
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
                  </SwiperSlide>

                  <SwiperSlide>
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
                  </SwiperSlide>

                  <SwiperSlide>
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
                  </SwiperSlide>

                  <SwiperSlide>
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
                  </SwiperSlide>

                  <SwiperSlide>
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
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
            <button
              className="btn-add-to-card"
              onClick={() => setShowProductRegistration(true)}
            >
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

                <Swiper
                  slidesPerView={3}
                  spaceBetween={30}
                  slidesPerGroup={3}
                  loop={true}
                  loopFillGroupWithBlank={true}
                  pagination={{
                    clickable: true,
                  }}
                  modules={[Pagination, Navigation]}
                  className="mySwiper-sm"
                >
                  <SwiperSlide>
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
                  </SwiperSlide>
                  <SwiperSlide>
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
                  </SwiperSlide>
                  <SwiperSlide>
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
                  </SwiperSlide>
                  <SwiperSlide>
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
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Container>
  );
}

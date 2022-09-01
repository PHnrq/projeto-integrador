import { useState } from "react";
import { userData } from "../../../services/userData";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

import { CardProdutoDoador } from "../../../components/CardProdutoDoador";

import { Container } from "./styles";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import iconBtn from "../../../assets/icon-btn.png";

export function ListaProdutosCadastrados({
  currentUserProducts,
  setCurrentUserProducts,
  setShowProductRegistration,
  currentUserId
}) 
{
  function handleRemoveProduct(index) {
    const filterProducts = currentUserProducts.filter(
      (product) => currentUserProducts.indexOf(product) !== index
    );
    setCurrentUserProducts(filterProducts);

    userData.get(`/users/${currentUserId}`).then(response => {
      userData.put(`/users/${currentUserId}`, {
        ...response.data,
        products: filterProducts,
      });
    })
  }

  function handleUpdateAmount(updatedAmount, index) {
    const updateCurrentUserProducts = currentUserProducts;
    updateCurrentUserProducts[index].amount = updatedAmount;
    setCurrentUserProducts(updateCurrentUserProducts);

    userData.get(`/users/${currentUserId}`).then(response => {
      userData.put(`/users/${currentUserId}`, {
        ...response.data,
        products: updateCurrentUserProducts,
      });
    })
  }

  return (
    <Container>
      <div className="products">
        <div className="registered-products">
          <h3 className="registered-products__title">Produtos Cadastrados</h3>
        </div>
        <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
          className="mySwiper"
        >
          {currentUserProducts.map((product, index) => (
            <SwiperSlide className='swiper-flex'>
              <div key={index} className="card-wrapper">
                <CardProdutoDoador
                  index={index}
                  nameProduct={product.nameProduct}
                  amount={product.amount}
                  expirationDate={product.expirationDate}
                  handleRemoveProduct={handleRemoveProduct}
                  handleUpdateAmount={handleUpdateAmount}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <button
        className="btn-add-to-card"
        onClick={() => setShowProductRegistration(true)}
      >
        <img className="icon-btn" src={iconBtn} alt="" /> Adicionar Produtos
      </button>
    </Container>
  );
}

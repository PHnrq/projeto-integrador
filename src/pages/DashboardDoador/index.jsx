import { useState, useEffect } from "react";

import { Container } from "./styles";
import { Header } from "../../components/HeaderDashboard";
import { ModalCadastroProdutos } from "../../components/ModalCadastroProdutos";
import { CardProdutoDoador } from "../../components/CardProdutoDoador";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import iconBtn from "../../assets/icon-btn.png";

import { userData } from "../../services/userData";
import { OrderCard } from "../../components/OrderCard";

export function DashboardDoador({ currentUser }) {
  const [showProductRegistration, setShowProductRegistration] = useState(false);
  const [orderQueue, setOrderQueue] = useState([]);

  useEffect(() => {
    userData.get(`/users/${currentUser.id}`).then((response) => {
      setOrderQueue([...orderQueue, response.data.chart]);
    });
  }, []);

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
                  {currentUser.products.map((product, index) => (
                    <SwiperSlide>
                      <CardProdutoDoador
                        nameProduct={product.nameProduct}
                        amount={product.amount}
                        expirationDate={product.expirationDate}
                      />
                    </SwiperSlide>
                  ))}
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
                {orderQueue.map((order, i) => (
                  <OrderCard 
                    name={order.nome}
                    carrinho={order.carrinho}  
                  />
                ))}

              </div>
            </div>
          </div>
        </div>
      </main>
    </Container>
  );
}

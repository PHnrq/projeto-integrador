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

  //Salva os produtos do usuario em uma estado.
  const [currentUserProducts, setCurrentUserProducts] = useState(
    currentUser.products
  );

  useEffect(() => {
    userData.get(`/users/${currentUser.id}`).then((response) => {
      setOrderQueue([...orderQueue, response.data.chart]);
    });
  }, []);

  //Função para remover produto, ela recebe o index como parametro.
  function handleRemoveProduct(index) {
    //Cria um array filtrado, esse filtro retorna uma copia do array de produtos removendo o elemento que tem o index igual ao informado.
    const filterProducts = currentUserProducts.filter(
      (product) => currentUserProducts.indexOf(product) !== index
    );

    //Atualiza o estado passando o array filtrado, quando o estado for atualizado o map será executado novamente, removendo o produto desejado da tela
    setCurrentUserProducts(filterProducts);
  }

  //Função para atualizar a quantidade dos produtos no array, ela recebe o index do produto que será atualizado e o valor da quantidade atualizado.
  function handleUpdateAmount(updatedAmount, index) {
    //Faz uma copia do array de produtos
    const updateCurrentUserProducts = currentUserProducts;

    //Atualiza a quantidade na nossa copia, passando o index, e atribuindo o novo valor.
    updateCurrentUserProducts[index].amount = updatedAmount;

    //Atualiza nosso array original, passando a copia com os valores atuais.
    setCurrentUserProducts(updateCurrentUserProducts);
  }

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
                  {currentUserProducts.map((product, index) => (
                    <SwiperSlide>
                      <div key={index}>
                        {/* Na importação do componente passar todas as propriedades e funções necessarias */}
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
                  <OrderCard name={order.nome} carrinho={order.carrinho} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </Container>
  );
}

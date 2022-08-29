import { useState, useEffect } from "react";

import { Container } from "./styles";
import { userData } from "../../services/userData";
import { OrderCard } from "../../components/OrderCard";
import { Header } from "../../components/HeaderDashboard";
import { Footer } from "../../components/FooterDashboard";
import { ListaProdutosCadastrados } from "./ListaProdutosCadastrados";
import { ModalCadastroProdutos } from "../../components/ModalCadastroProdutos";

import iconBtn from "../../assets/icon-btn.png";

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
            <ListaProdutosCadastrados currentUser={currentUser}/>
            <button
              className="btn-add-to-card"
              onClick={() => setShowProductRegistration(true)}
            >
              <img className="icon-btn" src={iconBtn} alt="" /> Adicionar
              Produtos
            </button>
          </div>

          <div className="div-2">
            <h3 className="order__title">Fila de pedidos</h3>
            <div className="box-2">
              <div className="order">
                {orderQueue.map((order) => (
                  <OrderCard name={order.nome} carrinho={order.carrinho} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </Container>
  );
}

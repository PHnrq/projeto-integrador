import { useState, useEffect } from "react";

import { Container } from "./styles";
import { userData } from "../../services/userData";
import { OrderCard } from "../../components/OrderCard";
import { Header } from "../../components/HeaderDashboard";
import { ListaProdutosCadastrados } from "./ListaProdutosCadastrados";
import { ModalCadastroProdutos } from "../../components/ModalCadastroProdutos";

export function DashboardDoador({ currentUser }) {
  const [currentUserProducts, setCurrentUserProducts] = useState(
    currentUser.products
  );
  const [showProductRegistration, setShowProductRegistration] = useState(false);
  const [orderQueue, setOrderQueue] = useState(currentUser.chart);

  return (
    <Container>
      <Header />
      {showProductRegistration && (
        <ModalCadastroProdutos
          setShowProductRegistration={setShowProductRegistration}
          currentUserId={currentUser.id}
          setCurrentUserProducts={setCurrentUserProducts}
        />
      )}
      <main className="content">
        <div className="container">
          <div className="div">
            <ListaProdutosCadastrados
              currentUserProducts={currentUserProducts}
              setCurrentUserProducts={setCurrentUserProducts}
              setShowProductRegistration={setShowProductRegistration}
              currentUserId={currentUser.id}
            />
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
    </Container>
  );
}

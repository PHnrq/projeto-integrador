import { useState } from "react";

import { Container } from "./styles";

import { Header } from "../../components/HeaderDashboard";
import { ListaProdutosCadastrados } from "./ListaProdutosCadastrados";
import { ModalCadastroProdutos } from "../../components/ModalCadastroProdutos";
import { ListaPedidos } from "./ListaPedidos";

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

          <ListaPedidos orderQueue={orderQueue}/>
        </div>
      </main>
    </Container>
  );
}

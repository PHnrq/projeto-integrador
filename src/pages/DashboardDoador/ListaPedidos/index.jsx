import { OrderCard } from "../../../components/OrderCard";
import { Container } from "./style";

export function ListaPedidos({ orderQueue }) {
  return (
    <Container>
      <h3 className="order__title">Fila de pedidos</h3>
      <div className="box-2">
        <div className="order">
          {orderQueue.map((order) => (
            <OrderCard name={order.nome} carrinho={order.carrinho} />
          ))}
        </div>
      </div>
    </Container>
  );
}

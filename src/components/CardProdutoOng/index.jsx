import { Container } from "./styles";

import placeholderImg from "../../assets/placeholder-Img.svg";
import addCartImg from "../../assets/buy-add.png";

export function CardProdutoOng({expirationDate, nameProduct, product, setCart, cart, productImage}) {
  return (
    <Container>
      <div>
        <img src={productImage? productImage : placeholderImg} alt=""/>
        <p className="available-at-tag">VAL: {expirationDate}</p>
      </div>
      <p className="product-name">{nameProduct}</p>

      <div className="add-decrease-remove-wrapper">
        <button onClick={() => setCart([...cart, product])}>
          <img src={addCartImg} alt="trash-icon" />
        </button>
      </div>
    </Container>
  );
}

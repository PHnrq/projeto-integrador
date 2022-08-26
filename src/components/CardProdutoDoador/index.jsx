import { Container } from "./styles";

import placeholderImg from "../../assets/placeholder-Img.svg";
import trashImg from "../../assets/trash.png";

export function CardProdutoDoador({amount, expirationDate, nameProduct}) {
  return (
    <Container>
      <div>
        <img src={placeholderImg} />
        <p className="available-at-tag">VAL: {expirationDate}</p>
      </div>
      <p className="product-name">{nameProduct}</p>

      <div className="add-decrease-remove-wrapper">
        <div>
          <p>QTD</p>
          <div className="amount__modifier">
            <button>-</button>
            <span>{amount}</span>
            <button>+</button>
          </div>
        </div>

        <button>
          <img src={trashImg} alt="trash-icon" />
        </button>
      </div>
    </Container>
  );
}

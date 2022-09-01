import{ useState} from 'react'

import { Container } from "./styles";

import placeholderImg from "../../assets/placeholder-Img.svg";
import trashImg from "../../assets/trash.png";

//Receber como paramentro todas a propriedades necessarias.
export function CardProduto({amount, nameProduct, index, handleRemoveProduct, handleUpdateAmount}) {
  const [productAmount, setProductAmount] = useState(parseInt(amount))

  function handleAmountDecrease() {
    if(productAmount <= 1){
      return
    }

    setProductAmount(productAmount - 1)

    handleUpdateAmount(productAmount, index)
  }

  function handleAmountIncrease() {
    setProductAmount(productAmount + 1)
    handleUpdateAmount(productAmount, index)
  }

  return (
    <Container>
      <div>
        <img src={placeholderImg} alt=""/>
      </div>
      <p className="product-name">{nameProduct}</p>

      <div className="add-decrease-remove-wrapper">
        <div>
          <div className="amount__modifier">
            <button onClick={() => handleAmountDecrease()}>-</button>
            <span>{productAmount}</span>
            <button onClick={() => handleAmountIncrease()}>+</button>
          </div>
        </div>

        <button onClick={() => handleRemoveProduct(index)}>
          <img src={trashImg} alt="trash-icon" />
        </button>
      </div>
    </Container>
  );
}

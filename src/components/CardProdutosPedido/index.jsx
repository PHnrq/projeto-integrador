import{ useState} from 'react'

import { Container } from "./styles";

import placeholderImg from "../../assets/placeholder-Img.svg";
import trashImg from "../../assets/trash.png";
import addIcon from "../../assets/add_FILL0_wght400_GRAD0_opsz48 1.svg"
import removeIcon from "../../assets/remove_FILL0_wght400_GRAD0_opsz48 1.svg"

//Receber como paramentro todas a propriedades necessarias.
export function CardProduto({amount, nameProduct, index, handleRemoveProduct, handleUpdateAmount, productImage}) {
  const [productAmount, setProductAmount] = useState(1)

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
        <img src={productImage? productImage : placeholderImg} alt="" className="product-img"/>
      </div>
      <p className="product-name">{nameProduct}</p>

      <div className="add-decrease-remove-wrapper">
        <div>
          <div className="amount__modifier">
            <button onClick={() => handleAmountDecrease()} className="btn_add-remove"><img src={removeIcon} alt="Diminuir" /></button>
            <span>{productAmount}</span>
            <button onClick={() => handleAmountIncrease()} className="btn_add-remove"><img src={addIcon} alt="Adicionar" /></button>
          </div>
        </div>

        <button onClick={() => handleRemoveProduct(index)}>
          <img src={trashImg} alt="trash-icon" />
        </button>
      </div>
    </Container>
  );
}

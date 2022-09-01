import{ useState} from 'react'

import { Container } from "./styles";

import placeholderImg from "../../assets/placeholder-Img.svg";
import trashImg from "../../assets/trash.png";

//Receber como paramentro todas a propriedades necessarias.
export function CardProdutoDoador({amount, expirationDate, nameProduct, index, handleRemoveProduct, handleUpdateAmount}) {
  //Tive que converter para inteiro pois ele vinha por padrão uma String, esse valor é o que será manipulado.
  const [productAmount, setProductAmount] = useState(parseInt(amount))

  //Função para diminuir a quantidade
  function handleAmountDecrease() {
    //Não permitir que diminua a quantidade a um valor menor que 1
    if(productAmount <= 1){
      return
    }

    //Atualiza o valor da quantidade.
    setProductAmount(productAmount - 1)

    //Aciona a função criada na dashboard, para atualizar valores no array
    handleUpdateAmount(productAmount, index)
  }

  function handleAmountIncrease() {
    //Atualiza o valor da quantidade.
    setProductAmount(productAmount + 1)
    //Aciona a função criada na dashboard, para atualizar valores no array
    handleUpdateAmount(productAmount, index)
  }

  return (
    <Container>
      <div>
        <img src={placeholderImg} alt=""/>
        <p className="available-at-tag">VAL: {expirationDate}</p>
      </div>
      <p className="product-name">{nameProduct}</p>

      <div className="add-decrease-remove-wrapper">
        <div>
          {/* <p>QTD</p> */}
          <div className="amount__modifier">
            <button onClick={() => handleAmountDecrease()}>-</button>
            <span>{productAmount}</span>
            <button onClick={() => handleAmountIncrease()}>+</button>
          </div>
        </div>
        {/* Passa a função de remoção que recebemos como paramentro no onClick */}
        <button onClick={() => handleRemoveProduct(index)}>
          <img src={trashImg} alt="trash-icon" />
        </button>
      </div>
    </Container>
  );
}

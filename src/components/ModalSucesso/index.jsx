 import "./style.css"
 
 export function ModalSucesso(){
  return(
  <section class="container">
      <div class="modal">
        <h3 class="modal-title">Pedido realizado com sucesso</h3>

        <p>
          Retirar pedido dia <span class="data">12/10/2022</span> no seguinte endereço:
          <br/>
          <i class="address">
            Rua Frederico Moura, 267 - Cidade Nova, Franca/SP
            <br/>
            CEP: 14401-150
          </i>
        </p>

        <button class="btn">Voltar pra tela inicial</button>
      </div>
  </section>
  )
 }
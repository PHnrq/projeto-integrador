 import { Container } from "./style"
 
 export function ModalSucesso({withdraw, street, number, district, city, uf, cep, setShowSucessModal}){
  return(
  <Container>
      <div class="modal">
        <h3 class="modal-title">Pedido realizado com sucesso</h3>

        <p>
          Retirar pedido dia <span class="data">{withdraw}</span> no seguinte endereço:
          <br/>
          <i class="address">
            {street}, {number} - {district}, {city}/{uf}
            <br/>
            CEP: {cep}
          </i>
        </p>

        <button class="btn" onClick={() => setShowSucessModal(false)}>Voltar pra tela inicial</button>
      </div>
  </Container>
  )
 }
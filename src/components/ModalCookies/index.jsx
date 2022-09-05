 import { Container } from "./style"

 import logo from "../../assets/logoLg.svg"
 
 export function ModalCookies(setIsCookiesOpen){
  return(
  <Container>
      <div className="modal">
        <img src={logo} alt="donare"/> 

        <h2 className="modal-title">
          Sua privacidade é importante pra nós
        </h2>

        <p>
          Ao clicar em “OK”, você autoriza o uso de cookies que melhoram sua experiência em nosso site, ajudam a analisar o desempenho e uso de nossas páginas e permitem a exibição de conteúdo de marketing relevante. Você pode gerenciar os cookies nas configurações abaixo. Ver Política de cookies
        </p>

        <div>
          <button onClick={() => setIsCookiesOpen(false)}>
            OK
          </button>

          <button className="btn-necessario" onClick={() => setIsCookiesOpen(false)}>
            Apenas cookies necessarios
          </button>
        </div>
      </div>
  </Container>
  )
 }
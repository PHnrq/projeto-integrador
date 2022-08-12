import "./style.css";

import plusIcon from "../../assets/plus-icon.svg";
import closeIcon from "../../assets/close_FILL0_wght400_GRAD0_opsz48.svg";

export function ModalCadastroProdutos() {
  return (
    <section class="container">
      <div class="modal">
        <button class="btn-close-form">
          <img src={closeIcon} alt="Fechar" />
        </button>

        <form action="" class="form">
          <label for="nameProduct" class="form__label">
            <span>Nome do produto</span>
            <input
              type="text"
              name="nameProduct"
              id="nameProduct"
              class="form__input"
              placeholder="Feijão Preto"
            />
          </label>

          <label for="amount" class="form__label">
            <span>Quantidade</span>
            <input
              type="number"
              name="amount"
              id="amount"
              class="form__input"
              placeholder="2"
            />
          </label>

          <label for="expirationDate" class="form__label">
            <span>Data de validade</span>
            <input
              type="date"
              name="expirationDate"
              id="expirationDate"
              class="form__input"
              placeholder="2"
            />
          </label>

          <label for="productImage" class="form__label label-flex">
            <span class="form__input-file__label">Imagem do produto</span>
            <input
              type="file"
              name="productImage"
              id="productImage"
              class=""
              hidden
            />
            <span class="form__input-file__span" id="file-chosen">
              Nenhum arquivo escolhido
            </span>
          </label>

          <button type="submit" class="form-btn">
            <img src={plusIcon} />
            Adicionar produto
          </button>
        </form>
      </div>
    </section>
  );
}

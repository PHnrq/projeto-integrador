import { Formik, Form } from "formik";
import { Container } from "./style";
import { userData } from "../../services/userData";

import plusIcon from "../../assets/plus-icon.svg";
import closeIcon from "../../assets/close_FILL0_wght400_GRAD0_opsz48.svg";

export function ModalCadastroProdutos({setShowProductRegistration, currentUserId}) {
  return (
    <Container>
      <div className="modal">
        <button className="btn-close-form" onClick={() => setShowProductRegistration(false)}>
          <img src={closeIcon} alt="Fechar" />
        </button>

        <Formik
          initialValues={{
            nameProduct: "",
            amount: "",
            expirationDate: "",
            productImage: "",
          }}
          validate={(values) => {
            const errors = {};

            if (!values.nameProduct) {
              errors.nameProduct = "O nome é obrigatorio";
            } else if (values.nameProduct.length < 3) {
              errors.nameProduct = "Este nome é muito curto";
            }

            if (!values.amount) {
              errors.amount = "A quantidade é obrigatoria";
            } else if (parseInt(values.amount) <= 0) {
              errors.amount = "A quantidade tem que ser maior que 0";
            }

            if (!values.expirationDate) {
              errors.expirationDate = "A data de validade é obrigatoria";
            }

            if (!values.productImage) {
              errors.productImage = "A imagem do produto é obrigatória";
            } else if (
              !values.productImage.match("([/|.|w|s|-])*.(?:jpg|gif|png)")
            ) {
              errors.productImage =
                "O arquivo selecionado não é uma imagem valida";
            }

            return errors;
          }}
          onSubmit={async (values) => {
            userData.get(`/users/${currentUserId}`).then(response => {
              if(response.data.products){
                userData.put(`/users/${currentUserId}`, {...response.data, products: [...response.data.products, values]})
              }else{
                userData.put(`/users/${currentUserId}`, {...response.data, products: [values]})
              }
            })
          }}
        >
          {(props) => (
            <Form className="form">
              <label htmlFor="nameProduct" className="form__label">
                <span>Nome do produto</span>
                <input
                  type="text"
                  name="nameProduct"
                  id="nameProduct"
                  className="form__input"
                  placeholder="Feijão Preto"
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  value={props.values.nameProduct}
                />
                {props.touched.nameProduct && props.errors.nameProduct ? (
                  <span className="warning-input">
                    {props.errors.nameProduct}
                  </span>
                ) : null}
              </label>

              <label htmlFor="amount" className="form__label">
                <span>Quantidade</span>
                <input
                  type="number"
                  name="amount"
                  id="amount"
                  className="form__input"
                  placeholder="2"
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  value={props.values.amount}
                />
                {props.touched.amount && props.errors.amount ? (
                  <span className="warning-input">{props.errors.amount}</span>
                ) : null}
              </label>

              <label htmlFor="expirationDate" className="form__label">
                <span>Data de validade</span>
                <input
                  type="date"
                  name="expirationDate"
                  id="expirationDate"
                  className="form__input"
                  placeholder="2"
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  value={props.values.expirationDate}
                />
                {props.touched.expirationDate && props.errors.expirationDate ? (
                  <span className="warning-input">
                    {props.errors.expirationDate}
                  </span>
                ) : null}
              </label>

              <label htmlFor="productImage" className="form__label label-flex">
                <span className="form__input-file__label">
                  Imagem do produto
                </span>
                <input
                  type="file"
                  name="productImage"
                  id="productImage"
                  className=""
                  accept="image/gif, image/jpeg, image/png"
                  hidden
                  onChange={props.handleChange}
                  value={props.values.productImage}
                />
                <span className="form__input-file__span" id="file-chosen">
                  {props.values.productImage
                    ? props.values.productImage.replace("C:\\fakepath\\", "")
                    : "Nenhum arquivo selecionado"}
                </span>
              </label>
              {props.touched.productImage && props.errors.productImage ? (
                <span className="warning-input">
                  {props.errors.productImage}
                </span>
              ) : null}

              <button type="submit" className="form-btn">
                <img src={plusIcon} />
                Adicionar produto
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </Container>
  );
}

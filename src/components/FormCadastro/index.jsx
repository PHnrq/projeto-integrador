import { Formik, Field, Form } from "formik";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import closeIcon from "../../assets/close_FILL0_wght400_GRAD0_opsz48.svg";
import { viaCepApi } from "../../services/viaCepApi";
import { userData } from "../../services/userData";

import { Container } from "./styles";

function maskPhone(elementProps) {
  const elementValue = elementProps.target.value;

  let phoneNumber = elementValue.replace(/\D/g, "");
  phoneNumber = phoneNumber.replace(/^0/, "");
  if (phoneNumber.length > 10) {
    phoneNumber = phoneNumber.replace(/^(\d\d)(\d{5})(\d{4}).*/, "($1) $2-$3");
  } else if (phoneNumber.length > 5) {
    phoneNumber = phoneNumber.replace(
      /^(\d\d)(\d{4})(\d{0,4}).*/,
      "($1) $2-$3"
    );
  } else if (phoneNumber.length > 2) {
    phoneNumber = phoneNumber.replace(/^(\d\d)(\d{0,5})/, "($1) $2");
  }

  elementProps.target.value = phoneNumber;
}

export function FormCadastro({setShowSingInForm}) {
  const navigate = useNavigate();
  
  const [city, setCity] = useState("");
  const [uf, setUf] = useState("");

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        tel: "",
        password: "",
        cep: "",
        street: "",
        number: "",
        district: "",
        complement: "",
        city: "",
        uf: "",
        type: "",
      }}
      validate={(values) => {
        const errors = {};
        if (!values.name) {
          errors.name = "O nome é obrigatório";
        }

        if (!values.email) {
          errors.email = "O email é obrigatório";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
        ) {
          errors.email = "Email invalido";
        }

        if (!values.tel) {
          errors.tel = "O telefone é obrigatório";
        } else if (values.tel.replace(/\D/g, "").length !== 11) {
          errors.tel = "Telefone invalido";
        }

        if (!values.password) {
          errors.password = "A senha é obrigatória";
        } else if (
          !values.password.match("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})")
        ) {
          errors.password =
            "A senha deve ter no minimo 8 caracteres, e deve conter pelo menos uma letra maiuscula, uma letra minuscula e um numero";
        }

        if (!values.cep) {
          errors.cep = "O CEP é obrigatório";
        } else if (values.cep.length !== 8) {
          errors.cep = "O CEP é invalido";
        } else {
          viaCepApi.get(`${values.cep}/json/`).then((response) => {
            if (response.data.erro) {
              errors.cep = "O CEP é invalido";
            } else {
              setCity(response.data.localidade);
              setUf(response.data.uf);
            }
          });
        }

        if (!values.street) {
          errors.street = "A rua é obrigatória";
        }

        if (!values.number) {
          errors.number = "O numero é obrigatório";
        }

        if (!values.district) {
          errors.district = "O bairro é obrigatório";
        }

        if (
          !document.getElementById("doador").checked &&
          !document.getElementById("beneficiado").checked
        ) {
          errors.type = "Selecione uma opção";
        }

        return errors;
      }}
      onSubmit={(values) => {
        userData.post("/users", values);
        navigate("/login", { replace: true });
        setShowSingInForm(false);
      }}
    >
      {(props) => (
        <Container>
          <div className="container">
            <Form className="form">
              <button className="btn-close-form">
                <img src={closeIcon} alt="Fechar" onClick={() => {setShowSingInForm(false)}}/>
              </button>
              <fieldset className="form__fieldset">
                <legend className="form__legend">Dados pessoais</legend>

                <label htmlFor="name" className="form__label">
                  Nome completo
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="form__input"
                    placeholder="Nome da empresa ou nome pessoal"
                    required
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props.values.name}
                  />
                  {props.touched.name && props.errors.name ? (
                    <span className="warning-input">{props.errors.name}</span>
                  ) : null}
                </label>

                <label htmlFor="email" className="form__label">
                  Email
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Digite seu email"
                    className="form__input"
                    required
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props.values.email}
                  />
                  {props.touched.email && props.errors.email ? (
                    <span className="warning-input">{props.errors.email}</span>
                  ) : null}
                </label>

                <label htmlFor="tel" className="form__label">
                  Telefone
                  <input
                    type="tel"
                    name="tel"
                    id="tel"
                    placeholder="11987654321"
                    className="form__input"
                    length="11"
                    required
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props.values.tel}
                    onInput={maskPhone.bind(this)}
                  />
                  {props.touched.tel && props.errors.tel ? (
                    <span className="warning-input">{props.errors.tel}</span>
                  ) : null}
                </label>

                <label htmlFor="password" className="form__label">
                  Senha
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Digite sua senha"
                    className="form__input"
                    required
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props.values.password}
                  />
                  {props.touched.password && props.errors.password ? (
                    <span className="warning-input">
                      {props.errors.password}
                    </span>
                  ) : null}
                </label>
              </fieldset>

              <fieldset className="form__fieldset">
                <legend className="form__legend">Endereço</legend>

                <label htmlFor="cep" className="form__label">
                  CEP
                  <input
                    type="text"
                    name="cep"
                    id="cep"
                    className="form__input"
                    placeholder="5555555"
                    required
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props.values.cep}
                  />
                  {props.touched.cep && props.errors.cep ? (
                    <span className="warning-input">{props.errors.cep}</span>
                  ) : null}
                </label>

                <div className="fild-wrapper">
                  <label htmlFor="street" className="form__label label-lg">
                    Rua
                    <input
                      type="text"
                      name="street"
                      id="street"
                      placeholder="Rua Fulano de tal"
                      className="form__input"
                      required
                      onChange={props.handleChange}
                      onBlur={props.handleBlur}
                      value={props.values.street}
                    />
                    {props.touched.street && props.errors.street ? (
                      <span className="warning-input">
                        {props.errors.street}
                      </span>
                    ) : null}
                  </label>

                  <label htmlFor="number" className="form__label label-sm">
                    Numero
                    <input
                      type="text"
                      name="number"
                      id="number"
                      placeholder="02"
                      className="form__input input-sm"
                      required
                      onChange={props.handleChange}
                      onBlur={props.handleBlur}
                      value={props.values.number}
                    />
                    {props.touched.number && props.errors.number ? (
                      <span className="warning-input">
                        {props.errors.number}
                      </span>
                    ) : null}
                  </label>
                </div>

                <label htmlFor="district" className="form__label">
                  Bairro
                  <input
                    type="text"
                    name="district"
                    id="district"
                    placeholder="Bairro X"
                    className="form__input"
                    required
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props.values.district}
                  />
                  {props.touched.district && props.errors.district ? (
                    <span className="warning-input">
                      {props.errors.district}
                    </span>
                  ) : null}
                </label>

                <label htmlFor="complement" className="form__label">
                  Complemento
                  <input
                    type="text"
                    name="complement"
                    id="complement"
                    placeholder="Condominio 00"
                    className="form__input"
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props.values.complement}
                  />
                  {props.touched.complement && props.errors.complement ? (
                    <span className="warning-input">
                      {props.errors.complement}
                    </span>
                  ) : null}
                </label>

                <div className="fild-wrapper">
                  <label htmlFor="city" className="form__label label-lg">
                    Cidade
                    <input
                      type="text"
                      name="city"
                      id="city"
                      placeholder="Cidade Z"
                      className="form__input"
                      readOnly
                      value={(props.values.city = city)}
                    />
                  </label>

                  <label htmlFor="state" className="form__label label-sm">
                    Estado
                    <select
                      className="form__input input-sm"
                      id="uf"
                      name="uf"
                      readOnly
                      value={(props.values.uf = uf)}
                    >
                      <option value="">UF</option>
                      <option value="AC">AC</option>
                      <option value="AL">AL</option>
                      <option value="AP">AP</option>
                      <option value="AM">AM</option>
                      <option value="BA">BH</option>
                      <option value="CE">CE</option>
                      <option value="DF">DF</option>
                      <option value="ES">ES</option>
                      <option value="GO">GO</option>
                      <option value="MA">MA</option>
                      <option value="MS">MS</option>
                      <option value="MT">MT</option>
                      <option value="MG">MG</option>
                      <option value="PA">PA</option>
                      <option value="PB">PB</option>
                      <option value="PR">PR</option>
                      <option value="PE">PE</option>
                      <option value="PI">PI</option>
                      <option value="RJ">RJ</option>
                      <option value="RN">RN</option>
                      <option value="RS">RS</option>
                      <option value="RO">RO</option>
                      <option value="RR">RR</option>
                      <option value="SC">SC</option>
                      <option value="SP">SP</option>
                      <option value="SE">SE</option>
                      <option value="TO">TO</option>
                    </select>
                    <span className="warning-input"></span>
                  </label>
                </div>
              </fieldset>

              <div className="radio-wrapper">
                <div className="radio-wrapper__title">
                  <h3>Cadastrar como:</h3>
                  {props.touched.type && props.errors.type ? (
                    <span className="warning-input">{props.errors.type}</span>
                  ) : null}
                </div>

                <label htmlFor="doador" className="radio-label">
                  <Field
                    type="radio"
                    name="type"
                    id="doador"
                    value="Doador"
                    className="radio-input"
                    required
                  />
                  <span className="radio-span">Doador</span>
                </label>

                <label htmlFor="beneficiado" className="radio-label">
                  <Field
                    type="radio"
                    name="type"
                    id="beneficiado"
                    value="Beneficiado"
                    className="radio-input"
                  />
                  <span className="radio-span">Beneficiado</span>
                </label>
              </div>

              <button type="submit" className="form-btn">
                Finalizar cadastro
              </button>
            </Form>
          </div>
        </Container>
      )}
    </Formik>
  );
}

import { useFormik } from "formik";

import closeIcon from "../../assets/close_FILL0_wght400_GRAD0_opsz48.svg";
import { viaCepApi } from "../../services/viaCepApi";

import "./styles.css";

function maskPhone(elementProps) {
  const elementValue = elementProps.target.value

  let phoneNumber = elementValue.replace(/\D/g, "");
  phoneNumber = phoneNumber.replace(/^0/, "");
  if (phoneNumber.length > 10) {
    phoneNumber = phoneNumber.replace(/^(\d\d)(\d{5})(\d{4}).*/, "($1) $2-$3");
  } else if (phoneNumber.length > 5) {
    phoneNumber = phoneNumber.replace(/^(\d\d)(\d{4})(\d{0,4}).*/, "($1) $2-$3");
  } else if (phoneNumber.length > 2) {
    phoneNumber = phoneNumber.replace(/^(\d\d)(\d{0,5})/, "($1) $2");
  }
  
  elementProps.target.value = phoneNumber;
}

const validate = (values) => {
  const errors = {};
  if (!values.name) {
    errors.name = "O nome é obrigatório";
  }

  if (!values.email) {
    errors.email = "O email é obrigatório";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Email invalido";
  }

  if (!values.tel) {
    errors.tel = "O telefone é obrigatório";
  } else if (values.tel.replace(/\D/g, "").length !== 11) {
    errors.tel = "Telefone invalido";
  }

  if (!values.password) {
    errors.password = "A senha é obrigatória";
  } else if (!values.password.match("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})")) {
    errors.password =
      "A senha deve ter no minimo 8 caracteres, e deve conter pelo menos uma letra maiuscula, uma letra minuscula e um numero";
  }

  if (!values.cep) {
    errors.cep = "O CEP é obrigatório";
  } else if (values.cep.length !== 8) {
    errors.cep = "O CEP é invalido";

    document.getElementById("city").value = "";
    document.getElementById("uf").value = "";
  } else {
    viaCepApi.get(`${values.cep}/json/`).then((response) => {
      if (response.data.erro) {
        errors.cep = "O CEP é invalido";

        document.getElementById("uf").value = "";
      } else {
        document.getElementById("city").value = response.data.localidade;
        document.getElementById("uf").value = response.data.uf;
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

  return errors;
};

export function FormCadastro() {
  const formik = useFormik({
    initialValues: {
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
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className="container">
      <form action="" className="form" onSubmit={formik.handleSubmit}>
        <button className="btn-close-form">
          <img src={closeIcon} alt="Fechar" />
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
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
            />
            {formik.touched.name && formik.errors.name ? (
              <span className="warning-input">{formik.errors.name}</span>
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
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
              <span className="warning-input">{formik.errors.email}</span>
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
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.tel}
              onInput={maskPhone.bind(this)}
            />
            {formik.touched.tel && formik.errors.tel ? (
              <span className="warning-input">{formik.errors.tel}</span>
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
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
            {formik.touched.password && formik.errors.password ? (
              <span className="warning-input">{formik.errors.password}</span>
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
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.cep}
            />
            {formik.touched.cep && formik.errors.cep ? (
              <span className="warning-input">{formik.errors.cep}</span>
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
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.street}
              />
              {formik.touched.street && formik.errors.street ? (
                <span className="warning-input">{formik.errors.street}</span>
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
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.number}
              />
              {formik.touched.number && formik.errors.number ? (
                <span className="warning-input">{formik.errors.number}</span>
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
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.district}
            />
            {formik.touched.district && formik.errors.district ? (
              <span className="warning-input">{formik.errors.district}</span>
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
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.complement}
            />
            {formik.touched.complement && formik.errors.complement ? (
              <span className="warning-input">{formik.errors.complement}</span>
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
                disabled
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.city}
              />
            </label>

            <label htmlFor="state" className="form__label label-sm">
              Estado
              <select
                className="form__input input-sm"
                id="uf"
                disabled
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.uf}
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
          <h3 className="radio-wrapper__title">Cadastrar como:</h3>

          <label htmlFor="doador" className="radio-label">
            <input
              type="radio"
              name="type"
              id="doador"
              value="doador"
              className="radio-input"
            />
            <span className="radio-span">Doador</span>
          </label>

          <label htmlFor="beneficiado" className="radio-label">
            <input
              type="radio"
              name="type"
              id="beneficiado"
              value="doador"
              className="radio-input"
            />
            <span className="radio-span">Beneficiado</span>
          </label>
        </div>

        <button type="submit" className="form-btn">
          Finalizar cadastro
        </button>
      </form>
    </div>
  );
}

import { useState, useEffect } from "react";

import { Header } from "../../components/HeaderDashboard";
import { CardProduto } from "../../components/CardProdutosPedido";
import { localidadeApi } from "../../services/localidadeApi";
import { userData } from "../../services/userData";
import { Container } from "./styles";

import bean from "../../assets/bean.png";
import buyAdd from "../../assets/buy-add.png";
import buyConfirm from "../../assets/buy-confirm.png";
import leftArrow from "../../assets/left-arrow.png";
import rice from "../../assets/rice.png";
import rightArrow from "../../assets/right-arrow.png";
import sugar from "../../assets/sugar.png";

export function DashboardOng({ currentUser }) {
  const ufNumber = [
    {
      id: 11,
      sigla: "RO",
    },
    {
      id: 12,
      sigla: "AC",
    },
    {
      id: 13,
      sigla: "AM",
    },
    {
      id: 14,
      sigla: "RR",
    },
    {
      id: 15,
      sigla: "PA",
    },
    {
      id: 16,
      sigla: "AP",
    },
    {
      id: 17,
      sigla: "TO",
    },
    {
      id: 21,
      sigla: "MA",
    },
    {
      id: 22,
      sigla: "PI",
    },
    {
      id: 23,
      sigla: "CE",
    },
    {
      id: 24,
      sigla: "RN",
    },
    {
      id: 25,
      sigla: "PB",
    },
    {
      id: 26,
      sigla: "PE",
    },
    {
      id: 27,
      sigla: "AL",
    },
    {
      id: 28,
      sigla: "SE",
    },
    {
      id: 29,
      sigla: "BA",
    },
    {
      id: 31,
      sigla: "MG",
    },
    {
      id: 32,
      sigla: "ES",
    },
    {
      id: 33,
      sigla: "RJ",
    },
    {
      id: 35,
      sigla: "SP",
    },
    {
      id: 41,
      sigla: "PR",
    },
    {
      id: 42,
      sigla: "SC",
    },
    {
      id: 43,
      sigla: "RS",
    },
    {
      id: 50,
      sigla: "MS",
    },
    {
      id: 51,
      sigla: "MT",
    },
    {
      id: 52,
      sigla: "GO",
    },
    {
      id: 53,
      sigla: "DF",
    },
  ];
  const [cities, setCities] = useState([]);
  const [allDonors, setAllDonors] = useState([]);
  const [ufValue, setUfValue] = useState(currentUser.uf);
  const [citiesValue, setCitiesValue] = useState("");

  useEffect(() => {
    const stateSelected = ufNumber.find((i) => i.sigla === ufValue);

    if (stateSelected) {
      localidadeApi.get(`/${stateSelected.id}/municipios`).then((r) => {
        const updateCities = r.data.map((i) => i.nome);
        setCities(updateCities);
      });
    }
  }, [ufValue]);

  useEffect(() => {
    userData.get("users?type=Doador").then((r) => {
      setAllDonors(r.data);
    });
  }, []);

  function handleUfValueChange(e) {
    setUfValue(e.target.value);
  }

  function handleCitiesValueChange(e) {
    setCitiesValue(e.target.value);
  }

  return (
    <Container>
      <Header />
      <main className="main">
        <div className="right-container">
          <section className="find-donors">
            <div className="search-radius-container">
              <h2 className="find-donors-title">Doadores em:</h2>

              <form className="filter-form">
                <label htmlFor="state" className="form__label label-md">
                  Cidade
                  <select
                    className="form__input input-md"
                    id="city"
                    name="city"
                    onChange={(e) => handleCitiesValueChange(e)}
                  >
                    <option value="">Selcionar Cidade</option>
                    {cities.map((city, index) => (
                      <option key={index} value={city}>
                        {city}
                      </option>
                    ))}
                  </select>
                  <span className="warning-input"></span>
                </label>

                <label htmlFor="state" className="form__label label-sm">
                  Estado
                  <select
                    className="form__input input-sm"
                    id="uf"
                    name="uf"
                    onChange={(e) => handleUfValueChange(e)}
                    value={ufValue}
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
              </form>
            </div>

            <div className="map-and-donors-list">
              <ul className="donors-list">
                {allDonors.map((donor) => {
                  if (citiesValue) {
                    if (ufValue === donor.uf && citiesValue === donor.city) {
                      return (
                        <li key={donor.id} className="donors-list-item">
                          {donor.name}
                        </li>
                      );
                    }
                  } else {
                    if (ufValue === donor.uf) {
                      return (
                        <li key={donor.id} className="donors-list-item">
                          {donor.name}
                        </li>
                      );
                    }
                  }
                })}
              </ul>
            </div>
          </section>

          <section className="available-products">
            <h2 className="available-products-title">
              Produtos disponives em&nbsp;
              <span className="donor-name">Mercado Mão Amiga</span>
            </h2>

            <div className="see-all-container">
              <button className="see-all">Ver todos</button>
            </div>

            <div className="partial-product-list">
              <button className="btn-arrow">
                <img src={rightArrow} alt="right-arrow" />
              </button>

              <ul className="product-list">
                <li className="product-list-item">
                  <div className="product-item-date">
                    <img src={rice} alt="rice" className="list-item-img" />
                    <p className="list-item-validity">VAL: 13 / 08 / 2022</p>
                  </div>

                  <p className="list-item-name">Arroz Branco</p>

                  <div className="buy-add-icon-container">
                    <button className="buy-add-icon">
                      <img src={buyAdd} alt="buy-add-icon" />
                    </button>
                  </div>
                </li>

                <li className="product-list-item">
                  <div className="product-item-date">
                    <img src={sugar} alt="sugar" className="list-item-img" />
                    <p className="list-item-validity">VAL: 13 / 08 / 2022</p>
                  </div>

                  <p className="list-item-name">Açucar Cristal</p>

                  <div className="buy-add-icon-container">
                    <button className="buy-add-icon">
                      <img src={buyAdd} alt="buy-add-icon" />
                    </button>
                  </div>
                </li>

                <li className="product-list-item">
                  <div className="product-item-date">
                    <img src={bean} alt="bean" className="list-item-img" />
                    <p className="list-item-validity">VAL: 13 / 08 / 2022</p>
                  </div>

                  <p className="list-item-name">Feijão Carioca</p>

                  <div className="buy-add-icon-container">
                    <button className="buy-add-icon">
                      <img src={buyAdd} alt="buy-add-icon" />
                    </button>
                  </div>
                </li>
              </ul>

              <button className="btn-arrow">
                <img src={leftArrow} alt="left-arrow" />
              </button>
            </div>
          </section>
        </div>

        <div className="left-container">
          <form className="demand-form">
            <h2 className="demand-title">Meu pedido</h2>

            <div className="donor-demand-container">
              <p className="donor-demand-name">Mercado Mão Amiga</p>
              <CardProduto />
            </div>

            <div className="demand-get-date">
              <p className="demand-text">Selecione a data de retirada</p>
              <input type="date" name="get-date" id="get-date" />
            </div>
          </form>

          <div className="submit-btn-container">
            <button type="submit" className="submit-btn">
              <img src={buyConfirm} alt="buy-confirm-icon" />
              &nbsp;Finalizar Pedido
            </button>
          </div>
        </div>
      </main>
    </Container>
  );
}

import { useState, useEffect } from "react";

import { Header } from "../../components/HeaderDashboard";
import { Footer } from "../../components/FooterDashboard";
import { CardProduto } from "../../components/CardProdutosPedido";
import { localidadeApi } from "../../services/localidadeApi";
import { userData } from "../../services/userData";
import { Container } from "./styles";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import buyConfirm from "../../assets/buy-confirm.png";
import { CardProdutoOng } from "../../components/CardProdutoOng";

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
  const [selectedDonors, setSelectedDonors] = useState({});
  const [ufValue, setUfValue] = useState(currentUser.uf);
  const [citiesValue, setCitiesValue] = useState("");
  const [cart, setCart] = useState([]);

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

  function handleSelectedDonors(val) {
    setSelectedDonors(val);
  }

  function handleSubmit(e) {
    e.preventDefault();
    userData
      .get(`/users/1`)
      .then((response) =>
        userData.put(`/users/1`, { ...response.data, chart: [] })
      );
  }

  function handleRemoveProduct(index) {
    console.log("delete");
    const filterProducts = cart.filter(
      (product) => cart.indexOf(product) !== index
    );
    setCart(filterProducts);
  }

  function handleUpdateAmount(updatedAmount, index) {
    console.log("update");
    const updateCurrentUserProducts = cart;
    updateCurrentUserProducts[index].amount = updatedAmount;
    setCart(updateCurrentUserProducts);
  }

  return (
    <Container>
      <Header />
      <main className="main">
        <div className="main-wrapper">
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
                          <li
                            key={donor.id}
                            className="donors-list-item"
                            onClick={() => handleSelectedDonors(donor)}
                          >
                            {donor.name}
                          </li>
                        );
                      }
                    } else {
                      if (ufValue === donor.uf) {
                        return (
                          <li
                            key={donor.id}
                            className="donors-list-item"
                            onClick={() => handleSelectedDonors(donor)}
                          >
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
                Produtos disponíves em&nbsp;
                <span className="donor-name">{selectedDonors.name}</span>
              </h2>

              <Swiper
                slidesPerView={3}
                spaceBetween={30}
                slidesPerGroup={3}
                loop={true}
                loopFillGroupWithBlank={true}
                pagination={{
                  clickable: true,
                }}
                modules={[Pagination, Navigation]}
                className="mySwiper"
              >
                {selectedDonors.products
                  ? selectedDonors.products.map((product) => (
                      <SwiperSlide>
                        <CardProdutoOng
                          expirationDate={product.expirationDate}
                          nameProduct={product.nameProduct}
                          product={product}
                          setCart={setCart}
                          cart={cart}
                        />
                      </SwiperSlide>
                    ))
                  : null}
                ;
              </Swiper>
            </section>
          </div>

          <div className="left-container">
            <form className="demand-form" onSubmit={(e) => handleSubmit(e)}>
              <h2 className="demand-title">Meu pedido</h2>

              <div className="donor-demand-container">
                <p className="donor-demand-name">Mercado Mão Amiga</p>
                <Swiper
                  slidesPerView={2}
                  spaceBetween={30}
                  pagination={{
                    clickable: true,
                  }}
                  modules={[Pagination]}
                  className="mySwiper-sm"
                >
                  {cart.map((product, index) => (
                    <SwiperSlide className="swiper-flex">
                      <CardProduto
                        index={index}
                        nameProduct={product.nameProduct}
                        amount={product.amount}
                        expirationDate={product.expirationDate}
                        handleRemoveProduct={handleRemoveProduct}
                        handleUpdateAmount={handleUpdateAmount}
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              <div className="demand-get-date">
                <p className="demand-text">Selecione a data de retirada</p>
                <input type="date" name="get-date" id="get-date" />
              </div>

              <div className="submit-btn-container">
                <button type="submit" className="submit-btn">
                  <img src={buyConfirm} alt="buy-confirm-icon" />
                  &nbsp;Finalizar Pedido
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </Container>
  );
}

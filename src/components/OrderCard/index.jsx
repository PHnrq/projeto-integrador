import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

import { CardItemList } from "../CardItemList";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Container } from "./style";

export function OrderCard({ client, cart, withdraw }) {
  return (
    <Container>
      <p className="order__ong-name">{client}</p>
      <div className="order__date">
        <p className="order__date__p">Data de retirada:</p>
        <p className="order__date__number">{withdraw}</p>
      </div>

      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper-sm"
      >
        {cart.map((product) => {
          return (
            <SwiperSlide className="swiper-flex">
              <CardItemList nameProduct={product.nameProduct} productImage={product.productImage} amount={product.amount}/>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Container>
  );
}

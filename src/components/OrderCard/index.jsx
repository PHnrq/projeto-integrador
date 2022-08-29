import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

import {CardItemList} from "../CardItemList"

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Container } from "./style";



export function OrderCard({name, carrinho}){
  return(
    <Container>
    <p className="order__ong-name">{name}</p>
    <div className="order__date">
      <p className="order__date__p">Data de retirada:</p>
      <p className="order__date__number">27/07/2023</p>
    </div>

    <Swiper
      slidesPerView={5}
      spaceBetween={30}
      slidesPerGroup={5}
      loop={true}
      loopFillGroupWithBlank={true}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination, Navigation]}
      className="mySwiper-sm"
    >
      <SwiperSlide className="swiper-flex">
        {carrinho.map(item => (
          <CardItemList />
        ))}
      </SwiperSlide>
    </Swiper>
  </Container>
  )
}
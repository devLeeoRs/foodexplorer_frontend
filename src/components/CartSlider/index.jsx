import { useState, useEffect } from "react";
import { Container, TitleCategory } from "./styles";
import { CartPreLoader } from "../CartPreLoader";
import { api } from "../../services/api";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Cart from "../Cart";
import "swiper/css";
import "swiper/css/navigation";

function CartSlider({ category, title }) {
  const [loading, setLoading] = useState(true);
  const [loader, setLoader] = useState([1, 2, 3, 4, 5]);
  const [dishes, setDishes] = useState([]);
  const breakPointsSwiper = {
    319: {
      slidesPerView: 1.5,
      spaceBetween: 30,
    },
    374: {
      slidePerView: 2,
      spaceBetween: 16,
    },
    425: {
      slidesPerView: 1.5,
      spaceBetween: 16,
    },
    768: {
      slidesPerView: 2.5,
      spaceBetween: 85,
    },
    1023: {
      slidesPerView: 3.5,
      spaceBetween: 130,
    },
    1440: {
      slidesPerView: 4,
      spaceBetween: 27,
    },
  };

  useEffect(() => {
    async function getDishes() {
      const response = await api.get(`/dishes/${category}`);
      setDishes(response.data);
      setLoading(false);
    }

    getDishes();
  }, []);

  return (
    <Container>
      <TitleCategory>{title}</TitleCategory>
      <Swiper
        className="slider-dish"
        slidesPerView={1.5}
        grabCursor={true}
        navigation={true}
        modules={[Navigation]}
        slidesOffsetAfter={30}
        breakpoints={breakPointsSwiper}
      >
        {loading
          ? loader.map((load) => (
              <SwiperSlide key={load}>
                <CartPreLoader />
              </SwiperSlide>
            ))
          : dishes.map((dish) => (
              <SwiperSlide key={dish.id}>
                <Cart
                  key={dish.id}
                  cartId={dish.id}
                  title={dish.name}
                  description={dish.description}
                  price={dish.price}
                  photo={`${api.defaults.baseURL}/uploads/${dish.photo_url}`}
                />
              </SwiperSlide>
            ))}
      </Swiper>
    </Container>
  );
}

export default CartSlider;

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

function Slider({ workSlides, partnersSlides }) {

  const pagination = {
    type: 'fraction',
    renderFraction: function (currentClass) {
      return '<span class="' + currentClass + '">';
    },
  }

  return (
    <Swiper
      className="slider"
      modules={[Navigation, Pagination, Autoplay]}
      slidesPerView={1}
      breakpoints={partnersSlides && {
        600: {
          slidesPerView: 2
        },
        960: {
          slidesPerView: 3
        }
      }}
      navigation={workSlides && true}
      pagination={workSlides && pagination}
      spaceBetween={partnersSlides && 50}
      grabCursor={partnersSlides && true}
      loop={partnersSlides && true}
      freeMode={partnersSlides && true}
      autoplay={partnersSlides && {
        delay: 2000,
        disableOnInteraction: false,
      }}
    >
      {workSlides && workSlides.map((item) => {
        return <SwiperSlide key={item.id}>
          <div className="slider__slide">
            <div
              className="slider__icon"
              style={{backgroundImage: `url(${require(`../images/work-icons/work-icon-${item.id}.svg`)})`}}
            />
            <div className="slider__text-container">
              <h3 className="slider__title">{item.title}</h3>
              <p className="slider__text">{item.text}</p>
            </div>
          </div>
        </SwiperSlide>
      })}
      {partnersSlides && partnersSlides.map((item) => {
        return <SwiperSlide key={item.name}>
          <img
            className="slider__image"
            src={require(`../images/partners-images/partners-${item.name}.png`)}
            alt={item.name}
          />
        </SwiperSlide>
      })}
    </Swiper>
  )
}

export default Slider

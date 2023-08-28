import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

import { workSlides } from '../utils/constants'

function Slider() {

  return (
    <Swiper
      className="slider__container"
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      slidesPerView={1}
      navigation
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {workSlides.map((item) => {
        return <SwiperSlide key={item.id}>
          <div className="slider__slide">
            <div
              className="slider__slide-icon"
              style={{backgroundImage: `url(${require(`../images/work-icons/work-icon-${item.id}.svg`)})`}}
            />
            <div className="slider__text-container">
              <h3 className="slider__title">{item.title}</h3>
              <p className="slider__text">{item.text}</p>
            </div>
          </div>
        </SwiperSlide>
      })}
    </Swiper>
  )
}

export default Slider

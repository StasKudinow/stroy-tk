import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import { workSlides } from '../utils/constants'

function Slider() {

  const pagination = {
    type: 'fraction',
    renderFraction: function (currentClass) {
      return '<span class="' + currentClass + '">';
    },
  }

  return (
    <Swiper
      className="slider__container"
      modules={[Navigation, Pagination]}
      slidesPerView={1}
      navigation={true}
      pagination={pagination}
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

import { Link, useNavigate } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

function Gallery({ photos }) {

  const navigate = useNavigate()

  const pagination = {
    type: 'fraction',
    formatFractionCurrent: function (number) {
      return ('0' + number).slice(-2);
    },
    formatFractionTotal: function (number) {
        return ('0' + number).slice(-2);
    },
    renderFraction: function (currentClass, totalClass) {
      return '<span class="' + currentClass + '"></span>' +
              '<span class="' + totalClass + '"></span>'
    },
  }

  return (
    <Swiper
      className="gallery"
      modules={[Navigation, Pagination]}
      slidesPerView={1}
      navigation={{
        prevEl: '.gallery__button-prev',
        nextEl: '.gallery__button-next',
      }}
      pagination={pagination}
    >
      {photos.map((photo) => {
        return <SwiperSlide key={photo.id}>
          <div
            className="gallery__photo"
            style={{
              backgroundImage:
                `url(${require(`../images/test-photo/${photo.dirname}/random-${photo.id}.jpg`)})`
            }}
          />
        </SwiperSlide>
      })}
      <div className="gallery__buttons">
        <div className="gallery__button-container">
          <button className="gallery__button-prev" />
          <div className="gallery__button-line" />
        </div>
        <div className="gallery__separator" />
        <div className="gallery__button-container">
          <div className="gallery__button-line" />
          <button className="gallery__button-next" />
        </div>
      </div>
      <Link
        className="gallery__button-back"
        onClick={() => navigate(-1)}
      >
        вернуться к услугам
        <div className="gallery__arrow" />
      </Link>
    </Swiper>
  )
}

export default Gallery

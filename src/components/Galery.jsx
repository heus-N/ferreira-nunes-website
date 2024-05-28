import React from 'react'
import { Swiper, SwiperSlide} from 'swiper/react'

function Galery({ active }) {
  const data = [
    { id: '1', image: './resources/imgs/Imagem 01.jpg'},
    { id: '1', image: './resources/imgs/Imagem 03 hd.jpg'}
  ]
  return (
    <div className={`${active}`}>
        <Swiper
          slidesPerView={1}
          pagination={{clickable: true}}
          navigation
        >
          {data.map( (item) => (
            <SwiperSlide key={item.id}>
              <img
               src={item.image}
               alt="Slider"
               className='slide-item'
               />
            </SwiperSlide>
          ))}
        </Swiper>
    </div>
  )
}

export default Galery;

import React, { useState } from 'react'
import { Swiper, SwiperSlide} from 'swiper/react'
import ImageModal from './ImageModal';

function Galery({ active }) {
  const [selectedImage, setSelectedImage] = useState(null);
  const data = [
    { id: '1', image: './resources/imgs/Imagem 01.jpg'},
    { id: '1', image: './resources/imgs/Imagem 03 hd.jpg'}
  ];

  const openModal = (imageSrc) => {
    setSelectedImage(imageSrc);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className={`${active}`}>
        <Swiper
          slidesPerView={1}
          pagination={{clickable: true}}
          navigation
        >
          {data.map( (item, index) => (
            <SwiperSlide key={item.id}>
              <img
               src={item.image}
               alt="Slider"
               className={`slide-item ${selectedImage === index ? 'hide' : ''}`}
               onClick={() => openModal(index)}
               />
            </SwiperSlide>
          ))}
        </Swiper>
      {selectedImage !== null && (
        <ImageModal 
          images={data.map(item => item.image)} 
          initialIndex={selectedImage}
          onClose={closeModal} />
        )}
    </div>
  )
}

export default Galery;

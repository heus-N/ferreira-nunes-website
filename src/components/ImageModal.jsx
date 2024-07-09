import React from 'react';
import { Swiper, SwiperSlide} from 'swiper/react'
import '../App.css'; // Adicione aqui o CSS para estilizar o modal

const ImageModal = ({ onClose, initialIndex, images = [] }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
      <button className="close-button" onClick={onClose}>X</button>
        <Swiper initialSlide={initialIndex} navigation pagination={{ clickable: true }}>
          {Array.isArray(images) ? images.map((imageSrc, index) => (
            <SwiperSlide key={index}>
                <img src={imageSrc} alt={`Slide ${index}`} />
              </SwiperSlide>
            )) : null}
          </Swiper>
      </div>
    </div>
  );
};

export default ImageModal;

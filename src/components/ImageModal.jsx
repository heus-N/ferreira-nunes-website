import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide} from 'swiper/react'
import '../App.css'; // Adicione aqui o CSS para estilizar o modal

const ImageModal = ({ onClose, initialIndex, images = [] }) => {

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true)
    }, 10)
  }, [])

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => {
      onClose()
    }, 300)
  }

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget){
      handleClose();
    }
  }

  return (
    <div className={`modal-overlay ${isVisible ? 'show' : ''}`} onClick={handleOverlayClick}>
      <div className={`modal-content ${isVisible ? 'show' : ''}`} onClick={(e) => e.stopPropagation()}>
      <button className="close-button" onClick={handleClose}>X</button>
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

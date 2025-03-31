import React, { Fragment, useRef, useState } from "react";
import PropTypes from "prop-types";
import { EffectFade, Thumbs } from 'swiper';
import AnotherLightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Swiper, { SwiperSlide } from "../../components/swiper";

const ProductImageGallery = ({ product }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [index, setIndex] = useState(-1);
  const slides = product?.image.map((img, i) => ({
      src: process.env.PUBLIC_URL + img,
      key: i,
  }));

  // swiper slider settings
  const gallerySwiperParams = {
    spaceBetween: 10,
    loop: true,
    effect: "fade",
    fadeEffect: {
      crossFade: true
    },
    thumbs: { swiper: thumbsSwiper },
    modules: [EffectFade, Thumbs],
  };

  const thumbnailSwiperParams = {
    onSwiper: setThumbsSwiper,
    spaceBetween: 10,
    slidesPerView: 4,
    touchRatio: 0.2,
    freeMode: true,
    loop: true,
    slideToClickedSlide: true,
    navigation: true
  };
  const [lensPosition, setLensPosition] = useState({ x: 0, y: 0 });
  const [backgroundPosition, setBackgroundPosition] = useState('0% 0%');
  const imgRef = useRef(null);
  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setBackgroundPosition(`${x}% ${y}%`);
    setLensPosition({ x: e.clientX - 75, y: e.clientY - 75 });
  };

  

  return (
    <Fragment>
      <div className="product-large-image-wrapper">
        {product.discount || product.new ? (
          <div className="product-img-badges">
            {product.discount ? (
              <span className="pink">-{product.discount}%</span>
            ) : (
              ""
            )}
            {product.new ? <span className="purple">New</span> : ""}
          </div>
        ) : (
          ""
        )}
        {/* {product?.image?.length ? (
          <Swiper options={gallerySwiperParams}>
            {product.image.map((single, key) => (
              <SwiperSlide key={key}>
                <button className="lightgallery-button" onClick={() => setIndex(key)}>
                  <i className="pe-7s-expand1"></i>
                </button>
                <div className="single-image">
                  <img
                    src={process.env.PUBLIC_URL + single}
                    className="img-fluid"
                    alt=""
                  />
                </div>
              </SwiperSlide>
            ))}
            <AnotherLightbox
                open={index >= 0}
                index={index}
                close={() => setIndex(-1)}
                slides={slides}
                plugins={[Thumbnails, Zoom, Fullscreen]}
            />
          </Swiper>
        ) : null} */}



{product?.image?.length ? (
  <Swiper options={gallerySwiperParams}>
    {product.image.map((single, key) => (
      <SwiperSlide key={key}>
        <button className="lightgallery-button" onClick={() => setIndex(key)}>
          <i className="pe-7s-expand1"></i>
        </button>
        <div 
          className="single-image"
          onMouseMove={handleMouseMove}
        >
          <img
            ref={imgRef}
            src={process.env.PUBLIC_URL + single}
            className="img-fluid"
            alt=""
          />
          <div
            className="magnifying-lens"
            style={{
              left: `${lensPosition.x}px`,
              top: `${lensPosition.y}px`,
              backgroundImage: `url(${process.env.PUBLIC_URL + single})`,
              backgroundPosition: backgroundPosition,
            }}
          />
        </div>
      </SwiperSlide>
    ))}
    <AnotherLightbox
      open={index >= 0}
      index={index}
      close={() => setIndex(-1)}
      slides={slides}
      plugins={[Thumbnails, Zoom, Fullscreen]}
    />
  </Swiper>
) : null}

      </div>
      <div className="product-small-image-wrapper mt-15">
        {product?.image?.length ? (
          <Swiper options={thumbnailSwiperParams}>
            {product.image.map((single, key) => (
              <SwiperSlide key={key}>
                <div className="single-image">
                  <img
                    src={process.env.PUBLIC_URL + single}
                    className="img-fluid"
                    alt=""
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : null}
      </div>
    </Fragment>
  );
};

ProductImageGallery.propTypes = {
  product: PropTypes.shape({})
};

export default ProductImageGallery;

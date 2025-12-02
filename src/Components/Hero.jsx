import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { Link } from 'react-router';

const Hero = () => {
  const slides = [
    {
      id: 1,
      image:
        'https://images.unsplash.com/photo-1521334884684-d80222895322?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170',
      title: 'Bring Nature Indoors 🌿',
      subtitle: 'Discover easy-care plants that refresh your space.',
    },
    {
      id: 2,
      image:
        'https://images.unsplash.com/photo-1592150621744-aca64f48394a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1191',
      title: 'Breathe Better with GreenNest 🌱',
      subtitle: 'Air-purifying plants for a healthy home.',
    },
    {
      id: 3,
      image:
        'https://images.unsplash.com/photo-1609762751666-4ba213fb0b5f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=736',
      title: 'Add Life to Every Corner 🌸',
      subtitle: 'Beautiful plants for every mood and room.',
    },
  ];

  return (
    <section className="w-full h-[68vh] overflow-hidden">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        effect="fade"
        pagination={{ clickable: true }}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        loop={true}
        className="w-full h-full"
      >
        {slides.map(slide => (
          <SwiperSlide key={slide.id}>
            <div
              className="relative w-full h-full bg-cover bg-center flex items-center justify-center"
              style={{
                backgroundImage: `url(${slide.image})`,
              }}
            >
              <div className="absolute inset-0 bg-green-900/46"></div>

              <div className="relative text-center text-white z-10 px-4">
                <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
                  {slide.title}
                </h1>
                <p className="text-lg md:text-xl font-medium drop-shadow-md">
                  {slide.subtitle}
                </p>
                <Link to={'/plants'}>
                  <button
                    to={'/plants'}
                    className=" mt-6 px-6 py-3 bg-[#E3B23C] hover:bg-[#B97C16] transition rounded-lg font-semibold shadow-lg cursor-pointer"
                  >
                    Explore Plants
                  </button>
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Hero;

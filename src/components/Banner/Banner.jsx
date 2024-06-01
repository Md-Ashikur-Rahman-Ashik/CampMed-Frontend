// import Swiper JS
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper styles
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Banner = () => {
  return (
    <div className="">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div>
            <img
              className="h-[500px] w-full rounded-xl relative opacity-80"
              src="https://i.ibb.co/pyPJS2j/first-Slide.png"
              alt=""
            />
            <p className="absolute bg-gradient-to-r from-[#151515] to-[#634a4a] bottom-5 lg:bottom-5 lg:text-4xl text-2xl text-green-200 p-4 rounded-xl md:left-24 lg:left-64 text-center font-bold md:w-3/4 lg:w-2/3 opacity-90">
              Discover the impact of our medical camps through inspiring success
              stories
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img
              className="h-[500px] opacity-70 w-full rounded-xl relative"
              src="https://i.ibb.co/ZMFmpDG/second-Slide.png"
              alt=""
            />
            <p className="absolute text-center bottom-5 lg:bottom-5 lg:text-4xl text-2xl text-green-200 bg-gradient-to-r from-[#151515] to-[#634a4a] p-4 rounded-xl md:left-24 lg:left-64 font-bold md:w-3/4 lg:w-2/3 opacity-90">
              From record-breaking attendance to life-saving interventions, see
              what we’ve accomplished together
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img
              className="h-[500px] opacity-70 w-full rounded-xl relative"
              src="https://i.ibb.co/9GgZkW6/third-Slide.png"
              alt=""
            />
            <p className="absolute bottom-5 text-center lg:bottom-5 lg:text-4xl text-2xl text-green-200 bg-gradient-to-r from-[#151515] to-[#634a4a] p-4 rounded-xl md:left-24 lg:left-64 font-bold md:w-3/4 lg:w-2/3 opacity-90">
              Real stories of recovery and hope, made possible by our dedicated
              team and participants
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;

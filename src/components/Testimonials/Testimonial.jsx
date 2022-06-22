import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination } from "swiper";
import "swiper/css/pagination";
import profilePic1 from "../../img/profile1.jpg";
import dp from "../../img/dp.jpeg"
import dp2 from "../../img/dp2.jpeg"
const Testimonial = () => {
  const clients = [
    {
      img: dp,
      review:
        "BTech From CSJM University Kanpur",
        from:"2018-2022",
        link:"http://www.csjmuniversity.co.in/"
    },
    {
      img: dp2,
      review:
        "Secondary Education from Sarvodaya Bal Vidyalaya",
        from:"2017-2018",
        link:""
    },
    {
      img: dp2,
      review:
        "Higher Education from Govt. Boys Senior Secondary School",
        link:""

    },
   
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>Clients always get </span>
        <span>Exceptional Work </span>
        <span>from me...</span>
      <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
      <div className="blur t-blur2" style={{ background: "skyblue" }}></div>

      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            console.log(client,"hello"),
            <SwiperSlide key={index}>
              
              <div className="testimonial">
                {/* <p>{index+1}</p> */}
                <img src={client.img} alt="" />
                <span style={{ color: "var(--orange)"}}>{client.review}</span>
                <p>{client.from}</p>
                <a  href={client.link} target="_blank">
                  <button className="visit_button">Visit</button>
                </a>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;

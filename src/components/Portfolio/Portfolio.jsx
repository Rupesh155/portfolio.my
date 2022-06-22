// import React, { useContext } from "react";
// import "./Portfolio.css";
// import { Swiper, SwiperSlide } from "swiper/react"
// import "swiper/css";
// import Sidebar from "../../img/sidebar.png";
// import village from "../../img/village.jpg"
// // import Village from "../../img/"
// import Ecommerce from "../../img/ecommerce.png";
// import HOC from "../../img/hoc.png";
// import MusicApp from "../../img/musicapp.png";
// import { themeContext } from "../../Context";
// const Portfolio = () => {
// const theme = useContext(themeContext);
// const darkMode = theme.state.darkMode;
//   return (
//     <div className="portfolio" id="portfolio">
//       {/* heading */}
//       <span style={{color: darkMode?'white': ''}}>Recent Projects</span>
//       <span>Portfolio</span>

//       {/* slider */}
//       <Swiper
//         spaceBetween={30}
//         slidesPerView={3}
//         grabCursor={true}
//         className="portfolio-slider"
//       >
//         <h4> </h4>
//         <SwiperSlide>
//           <h2></h2>
//           <a href="https://bhogaon.netlify.app/" target="_blank">
//             {/* <button>click me</button> */}
//           <img src={village} alt="village " />
//           </a>
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src={Ecommerce} alt="" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src={MusicApp} alt="" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src={HOC} alt="" />
//         </SwiperSlide>
//       </Swiper>
//     </div>
//   );
// };

// export default Portfolio;
import React, { useContext } from 'react'
import projectData from './portfolioData'
import "./Portfolio.css";

import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <>
      <div className="portfolio" id="portfolio">

        <span style={{ color: darkMode ? 'white' : '' }}>Recent Projects</span>
        <span>Portfolio</span>
      </div>


      {/* <div>Portfolio</div> */}
      <div className={darkMode? 'Container' :'light_Conainer'}    >
      
        <div className='row'>
          
          {
            projectData.map((data) => {
              return (<>
                {console.log(data, "data")}

                <div className='col-lg-3 col-md-6 col-sm-12'>
                  <div className={ darkMode?'card':"light_card"} style={{  height: "16rem",width:"13rem"}}>
                    <div className={darkMode?'card-body':"light_body"}>
                      <div className={darkMode?"":'Content'}>
                    <p className={darkMode?'Contant_p':"light_Contant_p"}> {data.aboutProject}</p>
                    <p  className={darkMode?"contact":"light_contact"} >{data.link}</p>
                    <button className={darkMode?'card__button':"light_card_button"}>
                      <a href={data.a}  className={darkMode?"ancher":"light_ancher"} target="_black">
                      view
                      </a>
                    </button>
                    </div>
                    
                    </div>

                  </div>

                </div>
              </>)
            })
          }
</div>
        </div>

      
    </>
  )
}

export default Portfolio

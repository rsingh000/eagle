import React, { useEffect } from 'react';
import './styles/work.scss';
import Navbar from './utils/Navbar';
import Topbar from './utils/Topbar';
import Footer from './utils/Footer';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import { EffectCube, Pagination } from "swiper";
import Aos from "aos";
import "aos/dist/aos.css";
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
import { Player } from 'video-react';
import ParticleBackground from './utils/ParticleBackground';

const Work = () => {

    useEffect(()=>{
        Aos.init({ duration: 2000})
        Aos.refresh();
    },[]);


  return (
    <>
        <Topbar/>
        <Navbar/>
        <div className="workMain">
            <div className="main-title" data-aos="fade-up">
                <h1 className="title roboto-semi-bold-white-64px">
                    RECENT PROJECTS
                </h1>
                <div className="sub-title roboto-semi-bold-gray-24px">
                Eagle Pro brings homeowners and businesses a fast, affordable and high quality solution for all of their interior or exterior residential, commercial and industrial painting projects. We respect your time as much as you do and provide the quality paint job you expect, in a timeline that is unexpected.                </div>
            </div>
        </div>
        
        <div className="workSection"><br/><br/>
            <ParticleBackground/> 
            <div className="workContent" >
                <div className="cube" data-aos="fade-up">
                    <h1 className="cubicTitle" data-aos="flip-left">EXPLORING YOUR FUTURE HOME WITH CUBIC WALLS<br/>(Drag to the Left to view more)</h1> 
                    <Swiper
                    effect={"cube"}
                    grabCursor={true}
                    cubeEffect={{
                    shadow: true,
                    slideShadows: true,
                    shadowOffset: 20,
                    shadowScale: 0.94,
                    }}
                    pagination={true}
                    modules={[EffectCube, Pagination]}
                    className="mySwiper"
                    >
                        <SwiperSlide><img className="imgCubic" src="https://i.ibb.co/Y8y0Bxy/Unknown.jpg" style={{width: "100%"}} alt="" /></SwiperSlide>
                        <SwiperSlide><img className="imgCubic" src="https://i.ibb.co/88QcZQ7/after1.jpg" style={{width: "100%"}} alt=""/></SwiperSlide>
                        <SwiperSlide><img className="imgCubic" src="https://i.ibb.co/MZDK7K6/after2.png" style={{width: "100%"}} alt="" /></SwiperSlide>
                        <SwiperSlide><img className="imgCubic" src="https://i.ibb.co/WGrMXh3/after3.jpg" style={{width: "100%"}} alt="" /></SwiperSlide>
                        <SwiperSlide>< img className="imgCubic" src="https://i.ibb.co/ggTXnSp/after4.jpg" style={{width: "100%"}} alt="" /></SwiperSlide>
                        <SwiperSlide><img className="imgCubic" src="https://i.ibb.co/1njQ4Cq/welcome.jpg" style={{width: "100%"}} alt="" /></SwiperSlide>
                        <SwiperSlide><img className="imgCubic" src="https://i.ibb.co/LnVmQCn/Unknown1.jpg" style={{width: "100%"}} alt="" /></SwiperSlide>
                        {/* <SwiperSlide><video src="https://cdn.animaapp.com/projects/61f442dbf9ef2c79fcd1f396/files/final-61f06420dbdce300e0177ab8-507745.mp4" controls playsinline style={{width: "100%"}}></video></SwiperSlide> */}
                    </Swiper>
                </div>
                <div className="compare">
                
    {/* https://i.ibb.co/JKqxmwB/before1.jpg 

    https://i.ibb.co/4Yt77q5/before4.jpg */}
                    <h1 className="compareTitle" data-aos="fade-down">DRAG THE SLIDER BETWEEN IMAGES BELOW TO CHECK HOW WE TRANFORM DREAMS INTO IDEAS</h1>
                    <div className="projects">
                            <div className="twoProjects">
                                <ReactCompareSlider className="imgCompare"  data-aos="flip-up"
                                    itemOne={<ReactCompareSliderImage src="https://i.ibb.co/JKqxmwB/before1.jpg" alt="Image one" />}
                                    itemTwo={<ReactCompareSliderImage src="https://i.ibb.co/88QcZQ7/after1.jpg" alt="Image two" />}
                                />
                                <ReactCompareSlider className="imgCompare" data-aos="flip-up"
                                    itemOne={<ReactCompareSliderImage src="https://i.ibb.co/kSJLzRB/before2.jpg" alt="Image one" />}
                                    itemTwo={<ReactCompareSliderImage src="https://i.ibb.co/MZDK7K6/after2.png" alt="Image two" />}
                                />
                            </div>
                            <div className="roboto-semi-bold-tundora-18px desc" data-aos="fade-up"><h1>This home owner needed to enjoy the colorful summer of her home and do so very quickly, she used Eagle to get all of her interior and exterior painting done and get a fresh look.</h1></div>
                        <div className="thirdProject">
                            {/* <ReactCompareSlider style={{width: '50%', height: '50%'}}
                                itemOne={<ReactCompareSliderImage src="https://i.ibb.co/nwCMbRY/before3.jpg" alt="Image one" />}
                                itemTwo={<ReactCompareSliderImage src="https://i.ibb.co/VSYH97D/after3.jpg" alt="Image two" />}
                            /> */}
                            <ReactCompareSlider style={{width: '80%', height: '50%'}} data-aos="flip-up"
                                itemOne={<ReactCompareSliderImage src="https://i.ibb.co/4Yt77q5/before4.jpg" alt="Image one" />}
                                itemTwo={<ReactCompareSliderImage src="https://i.ibb.co/ggTXnSp/after4.jpg" alt="Image two" />}
                            /> 
                            <div className="roboto-semi-bold-tundora-18px desc" data-aos="fade-up"><h1>This beautiful home needed a new coat of paint, flooring, counter tops and some rotted wood repairs in order to bring top dollar on the market at sale.</h1></div>
                        </div>
                    </div>
                    {/* <div className="thirdProject">
                        https://i.ibb.co/JKqxmwB/before1.jpg
    https://i.ibb.co/kSJLzRB/before2.jpg
    https://i.ibb.co/nwCMbRY/before3.jpg
    https://i.ibb.co/4Yt77q5/before4.jpg
                        <div className="roboto-semi-bold-tundora-18px desc"><h1>The owner did not want to spend too much money on changing cabinets. We gave newly painted cabinets in a budget.</h1></div>
                    </div> */}
                </div>
                <div className="video" >
                    <h1 className="videoTitle">CHECK OUT OUR VIDEO</h1>
                    <Player >
                        <source src="https://cdn.animaapp.com/projects/61f442dbf9ef2c79fcd1f396/files/final-61f06420dbdce300e0177ab8-507745.mp4" />
                    </Player>
                </div>
            </div>  
        </div>
        <Footer />
    </>
  );
};

export default Work;

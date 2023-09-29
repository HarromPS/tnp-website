import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

//Swiper
import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import Amazon from "../../img/Posters2223/Amazon.png";
import Bitwise from "../../img/Posters2223/BITWISE.png";
import CERN from "../../img/Posters2223/cern.png";
import Centiro from "../../img/Posters2223/Centiro.png";
import Cognologix from "../../img/Posters2223/COGNOLOGIX.png";
// import EnH from "../../img/Posters2223/e&h.png";
import Elastik from "../../img/Posters2223/ELASTIK.png";
import Iauro from "../../img/Posters2223/iauro.png";
// import Infinichains from "../../img/Posters2223/Infinichains.png";
import Kratin from "../../img/Posters2223/KRATIN.png";
import Microsoft from "../../img/Posters2223/MICROSOFT.png";
import RSL1 from "../../img/Posters2223/RSL 1.png";
import RSL2 from "../../img/Posters2223/RSL 2.png";
import Sarvaha from "../../img/Posters2223/Sarvaha.png";
// import Scandid from "../../img/Posters2223/SCANDID.png";
import TCS from "../../img/Posters2223/TCS DIGITAL.png";
import Tejas from "../../img/Posters2223/TEJAS NETWORK.png";
// import TIAA from "../../img/Posters2223/TIAA.png";
import Trident2 from "../../img/Posters2223/TRIDENT.png";
import Trident from "../../img/Posters2223/Trident Group.png";
import Trident_23_24_12LPA from "../../img/Posters23-24/trident_12Lpa.jpg";
import sarvaha_7_5LPA from "../../img/Posters23-24/sarvaha_7_5LPA.jpg";

const Carousel = () => {
  return (
    <Swiper
      className="home-posters"
      loop={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      modules={[Navigation, Pagination, Autoplay]}
      navigation
      pagination={{ clickable: true }}
    >
      <SwiperSlide>
        <img src={CERN} style={{ width: "100%" }} alt="Poster" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={Trident2} style={{ width: "100%" }} alt="Poster" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={Microsoft} style={{ width: "100%" }} alt="Poster 1" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={Amazon} style={{ width: "100%" }} alt="Poster 3" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={Trident_23_24_12LPA} style={{ width: "100%" }} alt="Poster 3" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={Tejas} className="d-block w-100" alt="Poster 4" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={Trident} className="d-block w-100" alt="Poster 11" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={Iauro} className="d-block w-100" alt="Poster 5" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={sarvaha_7_5LPA} className="d-block w-100" alt="Poster 6" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={RSL1} className="d-block w-100" alt="Poster 6" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={RSL2} className="d-block w-100" alt="Poster 7" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={Sarvaha} className="d-block w-100" alt="Poster 8" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={TCS} className="d-block w-100" alt="Poster 9" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={Cognologix} className="d-block w-100" alt="Poster 10" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={Kratin} className="d-block w-100" alt="Poster 17" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={Bitwise} className="d-block w-100" alt="Poster 12" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={Centiro} className="d-block w-100" alt="Poster 13" />
      </SwiperSlide>
      {/* <SwiperSlide>
        <img src={EnH} className="d-block w-100" alt="Poster 14" />
      </SwiperSlide> */}
      <SwiperSlide>
        <img src={Elastik} className="d-block w-100" alt="Poster 15" />
      </SwiperSlide>
      {/* <SwiperSlide>
        <img src={Infinichains} className="d-block w-100" alt="Poster 16" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={Scandid} className="d-block w-100" alt="Poster 16" />
      </SwiperSlide> */}
    </Swiper>
  );
};

export default function Achievements() {
  return (
    <div className="home-ach-container">
      <Carousel />
      <div className="home-ach">
        <h3>ACHIEVEMENTS</h3>
        <p className="italic">
          Established in 1981, Shri Guru Gobind Singhji Institute of Engineering
          and Technology (SGGSIET), Nanded, is one of the promising leader
          institutions in technical education, research and technology transfer.
          Since its inception, the institute is dedicated to students’ centric
          learning and believes in pursuing academic excellence. It is having
          neat, clean and green campus spread over land of 46 acres. It receives
          100% grant-in aid from Government of Maharashtra.
        </p>
        <ul>
          <li>
            <FontAwesomeIcon className="check-icon" icon={faCheckCircle} /> The
            Institute has collaborations with a number of premier institutes
            (including foreign universities) and industries through which
            substantial opportunities like internships, credit transfers and
            industry relevant projects.{" "}
          </li>
          <li>
            <FontAwesomeIcon className="check-icon" icon={faCheckCircle} /> The
            institute has established the industry supported laboratories like
            E-PASS laboratory sponsored by Emerson Automation Solution, Mumbai,
            Center for VLSI Design and Verification by Mentor Graphics, USA and
            NVDIA GPU Education Center, Pune giving fillip to the research and
            skill development activities.{" "}
          </li>
          <li>
            <FontAwesomeIcon className="check-icon" icon={faCheckCircle} />{" "}
            Institute has excellent track record of publications with recent
            statistics as 1200+ peer reviewed publications, 8000+ research
            citations, 25 patents filed and two awarded.
          </li>
        </ul>
        <p>
          Students at SGGS bagged AIR-1 three times and several students in top
          100 in GATE examination every year. Also students design and build new
          vehicle every year by participating in Baja and Supra competitions.
          Students get exposure to multidisciplinary and innovative project in
          institute Innovation laboratory, which is kept open 24 X 7.
        </p>
      </div>
    </div>
  );
}

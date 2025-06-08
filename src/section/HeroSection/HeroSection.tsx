import type { FC } from "react";

import Button from "@components/Button/Button";

import GirlPic from "../../assets/Group 211.png";

import "./heroSection.scss";

const HeroSection: FC = () => {

  return(
    <section className="hero">
      <div id="hero__container" className="container grid">
        <div className="hero__left flexing">
          <h1>ROBO SCHOOL</h1>
          <p>Курсы повышения квалификации по робототехнике для педагогов начальной школы</p>
          <div className="hero__left-btnContainer">
            <Button text="Записаться на курс" action={() => {}} hover="btn--hover"/>          
          </div>
        </div>
        <div className="hero__right flexing">
          <img src={GirlPic} alt="Girl image" loading="lazy"/>
        </div>
      </div>
    </section>
  )
}

export default HeroSection;

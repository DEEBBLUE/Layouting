import type { FC } from "react";
import "./aboutSection.scss";

const AboutSection: FC = () => {

  return(
    <section className="about">
      <div className="container grid about__container">
        <h2 className="about-desc">
          <span>Robo School</span> – учреждение для формирования кадрового педагогического резерва в сфере робототехники и программирования
        </h2>
        <ul className="about-list grid">
          <li className="about-listItem">
            <h1 className="about-listItem--header">10</h1>
            <p className="about-listItem--text">УМК по различным направлениям по робототехнике</p>
          </li>
          <li className="about-listItem">
            <h1 className="about-listItem--header">20</h1>
            <p className="about-listItem--text">Школ, в которых запущена робототехника</p>
          </li>
          <li className="about-listItem">
            <h1 className="about-listItem--header">100</h1>
            <p className="about-listItem--text">Педагогов прошедших курсы повышения квалификации</p>
          </li>
          <li className="about-listItem">
            <h1 className="about-listItem--header">10 000</h1>
            <p className="about-listItem--text">Обученных детей на базе собственных центров</p>
          </li>
        </ul>
      </div>
    </section>
  )
} 

export default AboutSection;

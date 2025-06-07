import type { FC } from "react";
import "./perspectivesSection.scss";

const PerspectivesSection: FC = () => {

  return(
    <section className="perspectives">
      <div className="container grid perspectives__container">
        <h1 className="perspectives__header">Что вы получите после курса</h1>
        <ul className="perspectives__list grid">
          <li className="perspectives__list--item">
            <h2>Удостоверение</h2>
            <p>Дающее право преподавать робототехнику для детей 6-12 лет в образовательных учреждениях</p>
          </li>
          <li className="perspectives__list--item">
            <h2>Знания</h2>
            <p>По основам разработки учебно-методических комплексов
по робототехнике и программированию</p>
          </li>
          <li className="perspectives__list--item">
            <h2>Практику</h2>
            <p>Возможность пройти практику  по преподаванию робототехники на базе R:ED LAB (в оффлайн или онлайн формате)</p>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default PerspectivesSection; 

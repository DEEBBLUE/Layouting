import type { FC } from "react";

import Button from "@components/Button/Button";

import "./packageSection.scss";

const PackageSection: FC = () => {

  return(
    <section className="package">
      <div className="container">
        <h1 className="package__header">Выберите нужный пакет</h1>
        <ul className="package__list grid">
          <li className="package__list--item">
            <div className="item__container">
              <h2 className="item__header">PRO</h2>
              <h1 className="item__price">20.000</h1>
              <p className="item__about">УМК по робототетхнике  и программированию</p>
              <div className="item__btn--container">
                <Button text="Оставить заявку" action={() => {}}/>
              </div>
            </div>
          </li>
          <li className="package__list--item">
            <div className="item__container">
              <h2 className="item__header">ROBO</h2>
              <h1 className="item__price">15.000</h1>
              <p className="item__about">УМК по робототетхнике</p>
              <div className="item__btn--container">
                <Button text="Оставить заявку" action={() => {}}/>
              </div>
            </div>
          </li>
          <li className="package__list--item">
            <div className="item__container">
              <h2 className="item__header">PROG</h2>
              <h1 className="item__price">10.000</h1>
              <p className="item__about">УМК по робототетхнике</p>
              <div className="item__btn--container">
                <Button text="Оставить заявку" action={() => {}}/>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default PackageSection;

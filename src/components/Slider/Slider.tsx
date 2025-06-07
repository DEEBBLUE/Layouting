import type { FC } from "react";
import type { ISliderItem } from "../../types/ISliderItem";

import RigthArrow from "../../assets/Right.svg";
import LeftArrow from "../../assets/Left.svg";

import "./slider.scss";

interface SliderProps{
  list: ISliderItem[]
}

const Slider: FC<SliderProps> = ({ list }) => {
  return(
    <div className="slider">
      <ul className="slider__list grid">             
        {
          list.map((item) => 
            <li className="slider__list--item">
              <div className="slider__list--item-container">
                <div className="item__img--container">
                  <img src={item.url} alt={item.name + "photo"}/>
                </div>
                <h2 className="item__name">{item.name}</h2>
                <p className="item__about">{item.about}</p>
                <p className="item__link">Подробнее</p>
              </div>
            </li>
          ) 
        } 
      </ul>
      <div className="slider__btn--container">
        <img src={LeftArrow} alt="left arrow icon"/>
        <img src={RigthArrow} alt="right arrow icon"/>
      </div>
    </div>
  )
} 

export default Slider;

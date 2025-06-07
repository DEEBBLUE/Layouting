import type { FC } from "react";
import Slider from "@components/Slider/Slider";
import { CoashList } from "./CoashList";
import './teacherSection.scss'

const TeacherSection: FC = () => {
  return(
    <section className="teacher">
      <div className="container grid">
        <h1 className="teacher__header">Профессиональные тренеры</h1>
        <div className="teacher__slider-container">
          <Slider list={CoashList}/>
        </div>
      </div>
    </section>
  )
} 

export default TeacherSection;

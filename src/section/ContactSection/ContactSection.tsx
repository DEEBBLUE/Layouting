import type { FC } from "react";
import "./contacktSection.scss";

const ContactSection: FC = () => {
  return(
    <section className="contact">
      <div className="container">
        <div className="contact__container grid">
          <div className="contact__desc">
            <h1 className="contact__desc--header">Запишитесь на курс <br/> со скидкой 10%</h1>
            <p className="contact__desc--par">Акция действительна до 10 марта 2022 года</p>
          </div>
          <div className="contact__form--container">
            <form className="contact__form">
              <input className="contact__form--input" placeholder="name"/>
              <input className="contact__form--input" placeholder="tel"/>
              <input className="contact__form--input" placeholder="emial"/>
              <button className="contact__form--submit" type="submit">Оформить заявку</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
} 

export default ContactSection;

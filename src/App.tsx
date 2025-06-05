import Header from "./components/Header/Header";

import Button from "./components/Button/Button";

import GirlPic from "./assets/Group 211.png";

import "./App.scss"


function App() {
  return (
    <>
      <Header/>
      <main className="main">
        <section className="intro">
          <div className="intro__left flexing">
            <h1>ROBO SCHOOL</h1>
            <p>Курсы повышения квалификации по робототехнике для педагогов начальной школы</p>
            <div className="intro__left-btnContainer">
              <Button text="Записаться на курс" action={() => {}} hover="btn--hover"/>          
            </div>
          </div>
          <div className="intro__right flexing">
            <img src={GirlPic} alt="Girl image" loading="lazy"/>
          </div>

        </section>
      </main>
    </>
  )
}

export default App

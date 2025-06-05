import type { FC } from "react";
import "./header.scss";

const Header: FC = () => {
  return(
    <header className="header">
      <p className="header__name">
        ROBO.SCHOOL    
      </p>
      <nav className="header__nav">
        <ul className="header__nav-list">
          <li className="header__nav-listItem"><p>О школе</p></li>
          <li className="header__nav-listItem"><p>Тренеры</p></li>
          <li className="header__nav-listItem"><p>Стоимость</p></li>
        </ul>
      </nav>
      <p className="header__contacts ">
        +7 800 000 11 22
      </p>
    </header>
  )
}

export default Header;

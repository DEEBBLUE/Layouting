import type { FC } from "react";
import "./footer.scss";

const Footer: FC = () => {

  return(
    <footer className="footer">
      <div className="footer__leftSide--container">
        <h1 className="footer__leftSide--header">ROBO.SCHOOL</h1>
        <p className="footer__leftSide--copypaste">© ROBO.SCHOOL</p>
      </div>
      <div className="footer__rigthSide--container">
        <p className="footer__rigthSide--phoneNumber">+7 800 000 11 22</p>
      </div>
    </footer>
  )
}
export default Footer;

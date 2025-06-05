import type { FC } from "react";
import "./button.scss";

type hovering = "btn--hover"

interface ButtonProps{
  text: string,
  action: () => void,
  hover?: hovering
}

const Button: FC<ButtonProps> = ({ text,action, hover }) => {
  return(
    <button className={"btn " + hover} onClick={action}>
      <p>
        {text}
      </p>
    </button>
  )

} 

export default Button;

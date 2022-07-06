import React  from "react";
import style from  "./button.module.scss"

type Props = {
    children?: React.ReactNode
  };

class Button extends React.Component<Props> {
    render(){
        return (
            <button className={style.button}>{this.props.children}</button>
        )
    }
}

export default Button;
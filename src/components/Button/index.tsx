import React from "react";
import style from "./button.module.scss"

type Props = {
    children?: React.ReactNode
    type?: 'button' | 'submit' | 'reset' | undefined
};

class Button extends React.Component<Props> {
    render() {
        return (
            <button className={style.button} type={this.props.type ? this.props.type : 'button'}>{this.props.children}</button>
        )
    }
}

export default Button;
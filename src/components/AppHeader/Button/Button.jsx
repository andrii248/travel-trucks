import css from "./Button.module.css"

export default function Button({text, type = "button" , handleClick }) {
    return <button className={css.button} type={type} onClick={handleClick}>{text}</button>
}
import { Link, NavLink } from "react-router-dom"
import css from "./AppHeader.module.css"

export default function AppHeader (){
    return <header className={css.header}>
        <nav>
            <Link>
                <span className={css.logo}>Travel<span className={css.logoGray}>Trucks</span></span>
            </Link>
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/campers">Catalog</NavLink></li>
            </ul>
        </nav>
    </header>
}
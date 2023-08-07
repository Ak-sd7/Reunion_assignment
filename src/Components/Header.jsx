import { Link } from "react-router-dom"
import "../Styles/nav.css"

const Header = () => {
return (
<header>
    <nav className='nav'>
        <div className="start">
            <div className='estate'><Link className='link' to={"/"}><h2 className='st'>Estatery</h2></Link></div>
                <ul className="nav-side">
                    <li>
                        <Link to="/" className="link">Rent</Link>
                    </li>
                    <li>
                        <Link to="/" className="link">Buy</Link>
                    </li>
                    <li>
                        <Link to="/" className="link">Sell</Link>
                    </li>
                    <li>
                        <Link to="/" className="link">Manage Property</Link>
                    </li>
                    <li>
                        <Link to="/" className="link">Resources</Link>
                    </li>
                </ul>
            </div>
            <div className="end">
                <ul className="nav-end">
                    <li>
                        <Link className='login' to={"/login"}>Login</Link>
                    </li>
                    <li>
                        <Link className='signup' to={"/signup"}>SignUp</Link>
                    </li>
                </ul>
            </div>
    </nav>
</header>
)
}

export default Header
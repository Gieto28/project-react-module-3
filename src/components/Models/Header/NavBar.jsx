
import {GiHamburgerMenu} from "react-icons/gi"
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom";

export default function NavBar() {

    const dispatch = useDispatch();

    const openSideBar = () => {
        dispatch({
            type: "OPEN_SIDEBAR"
        })
    }

    return (
        <div className='navbar'>
            <div className='navbar--wrapper '>
                <div className="navbar--logo">
                    <Link className="link" to={"/"}>
                    <img className="logo" src="/images/leagueLogo.png" alt="League of legends Icon/Logo" /></Link>
                </div>
                <ul className="navbar--filters">
                    <Link className="link" to={"/champions"}>
                        <li className="navbar--filter">
                            Champions
                        </li>
                    </Link>
                    <Link className="link" to={"/collection"}>
                        <li className="navbar--filter">
                            collection
                        </li>
                    </Link>
                    <Link className="link" to={"/items"}>
                        <li className="navbar--filter">
                            items
                        </li>
                    </Link>
                    <Link className="link" to={"/about"}>
                        <li className="navbar--filter">
                            about
                        </li>
                    </Link>
                </ul>
                <GiHamburgerMenu className="navbar--burger" onClick={() => openSideBar()}/>
            </div>
        </div>
    )
}

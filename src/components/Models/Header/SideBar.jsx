import { useDispatch, useSelector } from "react-redux"
import { RiCloseLine } from "react-icons/ri"
import { Link } from "react-router-dom";

export default function SideBar() {

    const sidebarState = useSelector(state => state.sidebar);

    const dispatch = useDispatch();

    const closeSideBar = () => {
        dispatch({
            type: "CLOSE_SIDEBAR"
        })
    }

    return (
        <div className="sidebar" id={sidebarState ? "open_sidebar" : "close_sidebar"}>
            <ul className="sidebar--filters">
                <Link className="link" to={"/champions"} onClick={closeSideBar}>
                    <li className="navbar--filter">
                        Champions 
                    </li>
                </Link>
                <Link className="link" to={"/collection"} onClick={closeSideBar}>
                    <li className="navbar--filter">
                        collection
                    </li>
                </Link>
                <Link className="link" to={"/items"} onClick={closeSideBar}>
                    <li className="navbar--filter">
                        items
                    </li>
                </Link>
                <Link className="link" to={"/about"} onClick={closeSideBar}>
                    <li className="navbar--filter">
                        About
                    </li>
                </Link>
            </ul>
            <div className="sidebar--close">
                <RiCloseLine onClick={closeSideBar}/>
            </div>
        </div>
    )
}

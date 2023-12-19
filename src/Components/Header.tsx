import React from 'react';
import {Link} from "react-router-dom";
class Header extends React.Component{
    render(){
        return(
            <header>
                <div className="header_wrapper">
                    <nav>
                        <ul className="header_list">
                            <li className="header_item">
                                <img
                                    src="Vector.svg"
                                    alt="collections"
                                />
                                <Link to="/collections">
                                    <h3>Коллекция</h3>
                                </Link>
                            </li>
                            <li className="header_item">
                                <img
                                    src="Vector (1).svg"
                                    alt="add"
                                />
                                <Link to="/adding">
                                    <h3>Добавить</h3>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                    <div className="header_logo">
                        <li>
                            <Link to="/">
                                <img
                                    src="Watch_Later_Logo_Short.svg"
                                    alt="logo"
                                />
                            </Link>
                        </li>
                    </div>
                    <nav>
                        <ul className="header_list">
                            <li className="header_item">
                                <img
                                    src="Icon.svg"
                                    alt="search"
                                />
                                <Link to="/search">
                                    <h3>Поиск</h3>
                                </Link>
                            </li>
                            <li >
                                <Link to="/profile">
                                    <img
                                        src="Property 1=Web-Button-Profile.svg"
                                        alt="profile"
                                    />
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>

        );
    }
}
export default Header;
import Header from "../Components/Header.tsx";
import SearchFunction from "../Components/SearchFunction.tsx";
import {useState} from "react";
import {Button} from "react-bootstrap";

function Adding() {
    const [activeTab, setActiveTab] = useState("Кинопоиск");

    const handleTabClick = (tab: string) => {
        setActiveTab(tab);
    };

    return (
        <div>
            <Header />
            <main>
                <div className="search_info">
                    <div>
                        <h1>О фильме</h1>
                    </div>
                    <div className="collections_option">
                        <div
                            className={`collections_option_word ${
                                activeTab === "Кинопоиск" ? "active" : ""
                            }`}
                            onClick={() => handleTabClick("Кинопоиск")}
                        >
                            <p>Кинопоиск</p>
                        </div>
                        <div
                            className={`collections_option_word ${
                                activeTab === "Вручную" ? "active" : ""
                            }`}
                            onClick={() => handleTabClick("Вручную")}
                        >
                            <p>Вручную</p>
                        </div>
                    </div>
                    {activeTab === "Кинопоиск" ? <SearchFunction /> :
                        <div className="film_info">
                            <div className="film_point">
                                <h2>Название</h2>
                                <input className="searching_input" placeholder="Например, Титаник"/>
                            </div>
                            <div className="film_point">
                                <h2>Год</h2>
                                <input className="searching_input" placeholder="Укажите год выхода фильма"/>
                            </div>
                            <div className="film_point">
                                <h2>Описание</h2>
                                <input className="searching_input" placeholder="Напишите пару слов о сюжете"/>
                            </div>
                            <div className="film_point">
                                <h2>Жанр</h2>
                                <input className="searching_input" placeholder="Выберите из списка"/>
                            </div>
                            <div>
                                <h2>Постер</h2>
                                <div className="add_photo_poster">
                                    <img
                                        src={"SF Symbol.svg"}
                                        alt={"SF Symbol"}
                                    />
                                    <p>Загрузить фото</p>
                                </div>
                            </div>
                            <div className="div_button">
                                <Button className="adding_button"><h4>Сохранить</h4></Button>
                            </div>


                        </div>
                    }
                </div>
            </main>
        </div>
    );
}

export default Adding;

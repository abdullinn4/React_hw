import Header from "../Components/Header.tsx";
import {Button} from "react-bootstrap";
import {useState} from "react";

function Profile(){
    const [isEditing, setIsEditing] = useState(false);
    const [name,setName] = useState('Анастасия');
    const[bio, setBio] = useState('Студентка, иллюстратор');
    const[favoriteGenres, setFavoriteGenres] = useState(['Фантастика','Боевик','Триллер'])

    const handleEditClick = () => {
        setIsEditing(true);
    }

    const handleSaveClick = () => {
        setIsEditing(false);
    }


    return (
        <div>
            <Header />
            <main>
                {isEditing ? (
                    <div className="search_info">
                        <div>
                            <h1>Профиль</h1>
                        </div>
                        <div className="add_photo_poster">
                            <img
                                src={"SF Symbol.svg"}
                                alt={"SF Symbol"}
                            />
                            <p>Загрузить фото</p>
                        </div>
                        <input
                            className="profile_input"
                            placeholder="Имя"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <input
                            className="profile_input"
                            placeholder="О себе"
                            value={bio}
                            onChange={(e) => setBio(e.target.value)}
                        />
                        <input
                            className="profile_input"
                            placeholder="Любимые жанры"
                            value={favoriteGenres.join(", ")}
                            onChange={(e) => setFavoriteGenres(e.target.value.split(", "))}
                        />
                        <div className="div_button">
                            <Button className="adding_button" onClick={handleSaveClick}>
                                <h4>Сохранить</h4>
                            </Button>
                        </div>
                    </div>
                ) : (
                    <div className="search_info">
                        <div className="profile_name">
                            <h1>{name}</h1>
                            <h3>{bio}</h3>
                        </div>
                        <div>
                            <img src="Ellipse 1.svg" alt={"profile_photo"} />
                        </div>
                        <div className="profile_name">
                            <h2>Любимые жанры</h2>
                            <div className="genres">
                                {favoriteGenres.map((genre, index) => (
                                    <div className="film_genre" key={index}>
                                        <h4>{genre}</h4>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="div_button">
                            <Button className="redact_button" onClick={handleEditClick}>
                                <h3>Редактировать</h3>
                            </Button>
                        </div>
                    </div>
                )}
            </main>
        </div>
    );
}
export default Profile
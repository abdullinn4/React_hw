import {useState} from 'react';
import Header from "../Components/Header.tsx";
import MoviesComponent from "../Components/MoviesComponent.tsx";

function Collections () {
    const [activeTab, setActiveTab] = useState('Буду смотреть');
    const[showOnlyTitles, setShowOnlyTitles] = useState(false);
    const[filterImage, setFilterImage] = useState('Icon_List.svg');
    const[moviesFile, setMoviesFile] = useState('src/jsons/movies_will_watch.json')
    const[optionWordClass, setOptionWordClass] = useState('collections_option_word')

    const handleTabClick = (tab: string) =>{
        setActiveTab(tab);
        setShowOnlyTitles(false);
        setFilterImage('Icon_List.svg');
        if (tab === 'Буду смотреть'){
            setMoviesFile('src/jsons/movies_will_watch.json');
            setOptionWordClass('collections_option_word');
        }else if (tab === 'Просмотрено'){
            setMoviesFile('src/jsons/movies_watched.json');
            setOptionWordClass('collections_option_word');
        }
    };

    const handleImageFilterClick = () => {
        setShowOnlyTitles((prevShowOnlyTitles) => !prevShowOnlyTitles);
        setFilterImage((prevFilterImage) =>
            prevFilterImage === 'Icon_List.svg' ? 'Icon_Thumbnails.svg' : 'Icon_List.svg'
        );
    };
        return (
            <div>
                <Header/>
                <main>
                    <div className="collections_info">
                        <div>
                            <h1>Коллекция</h1>
                        </div>
                        <div className="collections_options">
                            <div className="collections_option">
                                <div className={`${optionWordClass} ${activeTab === 'Буду смотреть' ? 'active' : ''}`} onClick={() => handleTabClick('Буду смотреть')}>
                                        <div className="collections_option_word">
                                            <p>Буду смотреть</p>
                                        </div>
                                </div>
                                <div className={`${optionWordClass} ${activeTab === 'Просмотрено' ? 'active' : ''}`} onClick={() => handleTabClick('Просмотрено')}>
                                        <div className="collections_option_word">
                                            <p>Просмотрено</p>
                                        </div>
                                </div>
                            </div>
                            <div>
                                <div onClick={handleImageFilterClick}>
                                    <img
                                        src={filterImage}
                                    />
                                </div>
                            </div>
                        </div>
                        <MoviesComponent showOnlyTitles={showOnlyTitles} moviesFile={moviesFile}/>
                    </div>
                </main>
            </div>
        );
}

export default Collections;
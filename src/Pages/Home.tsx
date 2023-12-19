import React from 'react';
import Header from "../Components/Header.tsx";

class Home extends React.Component {
    render() {
        return (
            <><Header/>
                <main>
                    <div className="full_logo">
                        <div>
                            <img
                                className="full_logo_img"
                                src={"Watch_Later_Logo_Full.svg"}
                                alt={"full_logo"}
                                width="292px"
                                height="126px"/>
                        </div>
                        <div>
                            <img
                                className="agona_img"
                                src={"Агона логотип.svg"}
                                alt={"Агона логотип"}/>
                        </div>
                    </div>
                </main>
            </>
        );
    }
}

export default Home;
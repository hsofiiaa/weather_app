import React from "react";
import Container from "../../components/Container/Container.jsx";
import WidgetWrapper from "../../compositions/WidgetWrapper/WidgetWrapper.jsx";
import { Link } from 'react-router-dom'

import './PageWeatherDashboard.scss'

const citys = [
    { city: "Vinnytsya", name: "Винница" },
    { city: "Poltava", name: "Полтава" },
    { city: "Kharkiv", name: "Харьков" },
    { city: "Lugansk", name: "Луганск" }, //
    { city: "Smooth", name: "Ровно" },
    { city: "Kherson", name: "Херсон" },
    { city: "Donetsk", name: "Донецк" }, //
    { city: "Lutsk", name: "Луцк" },
    { city: "Kamelnitskiy", name: "Хмельницкий" },
    { city: "Zhytomyr", name: "Житомир" },
    { city: "Lviv", name: "Львов" },
    { city: "Sumi", name: "Сумы" },
    { city: "Cherkassi", name: "Черкассы" },
    { city: "Zaporozhe", name: "Запорожье" },
    { city: "Nikolaev", name: "Николаев" }, //
    { city: "Ternopil", name: "Тернополь" },
    { city: "Chernigov", name: "Чернигов" },
    { city: "Odessa", name: "Одесса" },
    { city: "Uzhhorod", name: "Ужгород" },
    { city: "Chernovitsy", name: "Черновцы" },
    { city: "Kyiv", name: "Киев" },
];


const PageWeatherDashboard = () => {
    return (
        <WidgetWrapper pageName={'Weather dashboard'}>
            <div className="weather-dashboard">
                <Container>
                    <div className="weathers">
                        {citys.map(({city, name}, index) => {
                            return <Link key={index} to={city} className="weather-card">{name}</Link>
                        })}
                    </div>
                </Container>
            </div>
        </WidgetWrapper>
    )
}

export default PageWeatherDashboard;
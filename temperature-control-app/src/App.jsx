import React from 'react';
import { Route, Routes } from 'react-router-dom';
import PageRooms from './pages/PageRooms/PageRooms';
import PageBadRoom from './pages/PageBadroom/PageBadRoom';
import PageWeatherDashboard from "./pages/PageWeatherDashboard/PageWeatherDashboard.jsx";
import PageWeatherCity from "./pages/PageWeatherCity/PageWeatherCity.jsx";
import PageChildren from "./pages/PageChildren/PageChildren.jsx";

function App() {
    return (
        <Routes>
            {/*<Route path='/' element={<PageBadRoom />} />*/}
            <Route index element={<PageBadRoom />} />
            <Route path='/home' element={<PageRooms />} />
            <Route path='/home/room' element={<PageBadRoom />} />
            <Route path='/home/baby-room' element={<PageChildren/>} />
            <Route path='/weather' element={<PageWeatherDashboard/>} />
            <Route path='/weather/:cityName' element={<PageWeatherCity/>} />
        </Routes>
    )
}

export default App

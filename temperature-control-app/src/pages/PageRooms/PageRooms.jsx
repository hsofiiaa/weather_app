import React from "react";
import {Link} from 'react-router-dom'
import Container from "../../components/Container/Container";
import Room from './icons/room.svg?react';
import WidgetWrapper from "../../compositions/WidgetWrapper/WidgetWrapper.jsx";
import BabyRoom from './icons/baby_bed_room.svg?react';

import './PageRooms.scss';

const PageRooms = () => {
    return (
        <WidgetWrapper pageName='Rooms'>
            <div className="home-dashboard">
                <Container>
                    <div className="dashboard-rooms">
                        <div className="room-card">
                            <Link to="/home/room" className="room-icon">
                                <Room/>
                            </Link>
                        </div>
                        <div className="room-card">
                            <Link to="/home/baby-room" className="room-icon">
                                <BabyRoom/>
                            </Link>
                        </div>
                    </div>
                </Container>
            </div>
    </WidgetWrapper>
    )
}

export default PageRooms

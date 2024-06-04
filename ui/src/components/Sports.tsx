import React from 'react';
import { FaFutbol, FaBasketballBall, FaBaseballBall, FaFootballBall, FaHockeyPuck, FaTennisBall } from 'react-icons/fa';

const sports = [
    { name: "Soccer", icon: <FaFutbol /> },
    { name: "Basketball", icon: <FaBasketballBall /> },
    { name: "Baseball", icon: <FaBaseballBall /> },
    { name: "Football", icon: <FaFootballBall /> },
    { name: "Hockey", icon: <FaHockeyPuck /> }
];

function Sports() {
    return (
        <div className="flex flex-col justify-center gap-3 p-4 bg-gray-100 min-h-80 w-80">
            {sports.map((sport, index) => (
                <button key={index} className="flex items-center gap-2 btn">
                    {sport.icon}
                    <span>{sport.name}</span>
                </button>
            ))}
        </div>
    );
}

export default Sports;

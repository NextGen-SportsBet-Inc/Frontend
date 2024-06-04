import Gameitem from "./Gameitem";
function GameList() {
    const gamesData = [
        {
            homeTeam: "Benfica",
            awayTeam: "Podfnjm",
            time: "19:45h",
            odds: {
                home: 2.4,
                draw: 3.2,
                away: 3.8
            }
        },
        {
            homeTeam: "Austria",
            awayTeam: "Serbia",
            time: "18:00h",
            odds: {
                home: 2.1,
                draw: 3.3,
                away: 3.5
            }
        },
        {
            homeTeam: "Real Madrid",
            awayTeam: "Barcelona",
            time: "21:00h",
            odds: {
                home: 2.0,
                draw: 3.5,
                away: 3.0
            }
        },
        {
            homeTeam: "Manchester United",
            awayTeam: "Chelsea",
            time: "20:00h",
            odds: {
                home: 2.5,
                draw: 3.0,
                away: 2.8
            }
        },
    ];
    return (
        <div className="flex flex-col gap-3 overflow-scroll">
            {gamesData.map((game, index) => (
                <Gameitem
                    key={index}
                    homeTeam={game.homeTeam}
                    awayTeam={game.awayTeam}
                    time={game.time}
                    odds={game.odds}
                />
            ))}
        </div>
    );
}

export default GameList;
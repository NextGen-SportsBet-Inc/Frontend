export default function Gameitem({ homeTeam, awayTeam, time, odds }) {
    return (
        <div className="card w-[50rem] bg-neutral text-neutral-content">
            <div className="items-center text-center card-body">
                <div className="grid items-center grid-cols-3 gap-3">
                    <h2 className="text-2xl truncate card-title">{homeTeam}</h2>
                    <h2 className="mx-auto badge-info badge">{time}</h2>
                    <h2 className="text-2xl break-words truncate card-title">{awayTeam}</h2>
                </div>
                <div className="flex justify-between w-full mt-4">
                    <a className="flex flex-col items-center justify-center w-32 h-20 btn btn-primary">
                        <span className="text-3xl">{odds.home}</span>
                        <span className="text-xs truncate">{homeTeam}</span>
                    </a>
                    <a className="flex flex-col items-center justify-center w-32 h-20 btn btn-accent">
                        <span className="text-3xl">{odds.draw}</span>
                        <span className="text-xs truncate">Draw</span>
                    </a>
                    <a className="flex flex-col items-center justify-center w-32 h-20 btn btn-secondary">
                        <span className="text-3xl">{odds.away}</span>
                        <span className="text-xs truncate">{awayTeam}</span>
                    </a>
                </div>
            </div>
        </div>
    );
}




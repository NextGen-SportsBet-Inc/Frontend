import GameList from '../components/Gamelist';
import Tally from '../components/Tally';
import Sports from '../components/Sports';

function Landing() {
    return (
        <div className="flex w-full">
            <div className="sticky top-0">
                <Sports />
            </div>
            <div className="flex items-center justify-center flex-grow">
                <div className="w-full max-w-[50rem]">
                    <GameList />
                </div>
            </div>
            <div className="sticky top-0">
                <Tally />
            </div>
        </div>
    );
}

export default Landing;

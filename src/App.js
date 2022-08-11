import "./App.sass";
import { Spinner } from "./components/Spinner/Spinner";
import { Loader } from "./components/Loader/Loader";
import { PlayerInfo } from "./components/PlayerInfo/PlayerInfo";
import { TournamentItem } from "./components/TournamentItem/TournamentItem";

export const App = () => {
  return (
    <div className="App">
      <div className="App-container">
        <div className="App-title">Poker</div>
        <Spinner />
        <PlayerInfo />
        <Loader />
        <TournamentItem />
      </div>
    </div>
  );
};

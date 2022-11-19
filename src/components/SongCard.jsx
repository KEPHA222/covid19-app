import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import PlayPause from "./PlayPause";
import { playPause, setActiveSong } from "../redux/features/playerSlice";

const SongCard = ({ song, i, dataData, activeSong }) => {
  // const dispatch = useDispatch()
  // const handlePauseClick = () => {
  // dispatch(playPause(false))
  // }
  // const handlePlayClick = () => {
  // dispatch(setActiveSong({song, data, i}))
  // dispatch(playPause(true))
  // }

  return (
    <div className="flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer  hover:bg-black ">
      {/* <div className="relative w-full h-56 group">
        <div
          className={`absolute inset-0 justify-center items-center bg-black bg-opacity-50 group-hover:flex ${
            activeSong?.country === song.country
              ? "flex bg-black bg-opacity-70"
              : "hidden"
          }`}
        >
          <PlayPause isPlaying = {isPlaying} activeSong={activeSong} song={song} handlePause={handlePauseClick} handlePlay= {handlePlayClick} />
        </div>
        <img alt="song_img" src={song.country?.coverart} />
      </div> */}
      {/* <div className="mt-4 flex flex-col">
        <p>
          Continent: <Link>{song.continent}</Link>
        </p>
      </div> */}
      <div className="mt-4 flex flex-col ">
        <p className=" font-semibold text-lg text-white translate">
          Country: <Link to="#">{song.country}</Link>
        </p>
        <p className="text-sm truncate text-gray-300 mt-1 ">
          Day: <Link>{song.day}</Link>
        </p>
        <p className="text-sm truncate text-gray-300 mt-1">
          Population: <Link>{song.population}</Link>
        </p>
        <p className="text-sm truncate text-gray-300 mt-1">
          Cases: <Link>{song.cases.total}</Link>
        </p>
        <p className="text-sm truncate text-gray-300 mt-1">
          Death: <Link>{song.deaths.total}</Link>
        </p>
        <p className="text-sm truncate text-gray-300 mt-1">
          Tests: <Link>{song.tests.total}</Link>
        </p>
        {/* <p className="text-sm truncate text-gray-300 mt-1">
          Tests: <Link to={song.artists ? `/artists/${song?.artists[0]?.adamid}` : '/top-artists'} >{song.subtitle}</Link>
        </p> */}
      </div>
    </div>
  );
};

export default SongCard;

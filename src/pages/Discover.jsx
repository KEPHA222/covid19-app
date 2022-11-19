import { useDispatch, useSelector } from "react-redux";

import { Error, Loader, SongCard } from "../components";
import { genres } from "../assets/constants";
import { useGetTopChartsQuery } from "../redux/services/shazamCore";

const Discover = () => {
  const dipatch = useDispatch();
  const { activeSong, isPlaying } = useSelector((state) => state.player);

  const { data, isFetching, error } = useGetTopChartsQuery();
  const genreTitle = "Pop";

  if (isFetching) return <Loader title="Loading..." />;

  if (error) return <Error />;

  const dataData = data?.response;

  // console.log(dataData);

  return (
    <div className="flex flex-col">
      <div className="w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10">
        <h2 className="font-bold text-3xl text-white text-left">
          Covid19 Analysis System
        </h2>
        {/* <select
          onChange={() => {}}
          value=""
          className="bg-black text-gray-300 p-3 text-sm rounded-lg outline-none sm:mt-0 mt-5"
        >
          {genres.map((genre) => (
            <option key={genre.value} value={genre.value}>
              {genre.title}
            </option>
          ))}
        </select> */}
      </div>
      {/*  isPlaying = {isPlaying}  */}
      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {dataData?.map((song, i) => (
          <SongCard
            key={song.key}
            dataData={dataData}
            activeSong={activeSong}
            song={song}
            i={i}
          />
        ))}
      </div>
    </div>
  );
};

export default Discover;

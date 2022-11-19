// import { useDispatch, useSelector } from "react-redux";

// import { Error, Loader, SongCard } from "../components";
// import { genres } from "../assets/constants";
// import { useGetTopChartsHistoryQuery } from "../redux/services/shazamCore";

const CountryTracks = () => {
  // const dipatch = useDispatch();
  // const { activeSong, isPlaying } = useSelector((state) => state.player);

  // const { data, isFetching, error } = useGetTopChartsHistoryQuery();

  // const genreTitle = "Pop";

  // if (isFetching) return <Loader title="Loading songs..." />;

  // const dataHistoy = data?.response?.cases;

  // //console.log(dataHistoy);

  // if (error) return <Error />;

  return (
    <>
      {/* <div className="flex flex-col">
      <div className="w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10">
        <h2 className="font-bold text-3xl text-white text-left">
          Discover {genreTitle}
        </h2>
        <select
          onChange={() => {}}
          value=""
          className="bg-black text-gray-300 p-3 text-sm rounded-lg outline-none sm:mt-0 mt-5"
        >
          {genres.map((genre) => (
            <option key={genre.value} value={genre.value}>
              {genre.title}
            </option>
          ))}
        </select>
      </div>
        isPlaying = {isPlaying}  
      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {dataHistoy?.map((song, i) => (
          <SongCard
            key={song.key}
            dataHistoy={dataHistoy}
            activeSong={activeSong}
            song={song}
            i={i}
          />
        ))}
      </div>
    </div> */}
    </>
  );
};

export default CountryTracks;

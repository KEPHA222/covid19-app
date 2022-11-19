import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { Error, Loader, SongCard } from "../components";
import { useGetSongsBySearchQuery } from "../redux/services/shazamCore";

const Search = () => {
  const { searchTerm } = useParams();
  const { data, isFetching, error } = useGetSongsBySearchQuery(searchTerm);

  const dataSearch = data?.response;
  //console.log(dataSearch);

  //  const songs = dataData?.tracks?.hits?.map((song) => song.track);
  const songs = dataSearch?.map((country) => country);

  if (isFetching) return <Loader title="Loading to charts" />;

  if (error) return <Error />;

  return (
    <>
      <div className="flex flex-col">
        <h2 className="font-bold text-3xl text-white text-left mt-4 mb-10">
          Showing results for COUNTRY:{" "}
          <span className="font-black text-red-600">{searchTerm}</span>
        </h2>

        <div className="flex flex-wrap sm:justify-start justify-center gap-8">
          {songs?.map((song, i) => (
            <SongCard key={i} song={song} data={data} i={i} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Search;

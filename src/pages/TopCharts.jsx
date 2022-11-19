import { useDispatch, useSelector } from "react-redux";
import { Line } from "react-chartjs-2";
import { Error, Loader, SongCard } from "../components";
//import { genres } from "../assets/constants";
import { useGetTopChartsHistoryQuery } from "../redux/services/shazamCore";

const TopCharts = () => {
  // const dipatch = useDispatch();

  const { data, isFetching, error } = useGetTopChartsHistoryQuery();

  if (isFetching) return <Loader title="Loading..." />;
  if (error) return <Error />;

  const dataHistoy = data?.response?.cases;

  //console.log(dataHistoy);

  return (
    <div className="flex flex-col">
      <div className="w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10">
        <h2 className="font-bold text-3xl text-white text-left">
          Covid19 Analysis System
        </h2>
      </div>

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
    </div>
  );
};

export default TopCharts;

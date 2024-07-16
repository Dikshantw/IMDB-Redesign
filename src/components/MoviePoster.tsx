import { useState } from "react";
import Dune from "../assets/movies/Dune.png";
import addToWatchListICON from "../assets/addtoWatchList.svg";
import addedToWatchListICON from "../assets/addedToWatchList.svg";

const MoviePoster = () => {
  const [addToWatchList, setAddToWatchList] = useState(false);
  return (
    <div>
      <img src={Dune} alt="Dune part 2" className="absolute" />
      <div className="relative top-0 left-5">
        <button onClick={() => setAddToWatchList(!addToWatchList)}>
          {addToWatchList ? (
            <img src={addedToWatchListICON} alt="" />
          ) : (
            <img src={addToWatchListICON} alt="" />
          )}
        </button>
      </div>
    </div>
  );
};

export default MoviePoster;

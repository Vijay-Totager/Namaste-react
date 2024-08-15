import Restcard from "./Restcard";
import { cardData } from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  const [data, setData] = useState(cardData);
  return (
    <div className="body">
      <div>
        <button
          className="filter-btn"
          onClick={() => {
            li = data.filter((res) => res.info.rating.aggregate_rating > 4);
            setData(li);
          }}
        >
          {" "}
          Top Rated Resturents
        </button>
        <button className="filter-btn" onClick={() => setData(cardData)}>
          Clear
        </button>
      </div>
      <div className="restocards">
        {data.map((item, index) => (
          <Restcard key={item.info.resId} data={item} />
        ))}
      </div>
    </div>
  );
};
export default Body;

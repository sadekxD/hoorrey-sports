import React, { useEffect, useState } from "react";
import axios from "axios";
import Card3 from "../components/cards/Card3";
import TopNavbar from "../components/topnavbar/TopNavbar";

const Result = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(
        "/fixtures?api_token=YqWNTDSm37V7u4dKKmyy3tgZ9yADTwt8SBLn2VBEnC4TvPQ8hAKD41UEx04L&include=localteam,visitorteam,venue,winnerteam&filter[league_id]=3&filter[starts_between]=2021-10-20,now&filter[status]=Finished",
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
          },
        }
      )
      .then((res) => setData(res.data.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="page">
      <TopNavbar />
      {data.map((item) => (
        <Card3 key={item.id} fixture_id={item.id} {...item} />
      ))}
    </div>
  );
};

export default Result;

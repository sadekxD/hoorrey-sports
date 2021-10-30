import axios from "axios";
import React, { useEffect, useState } from "react";
import Card1 from "../components/cards/Card1";
import TopNavbar from "../components/topnavbar/TopNavbar";

const Live = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(
        "/livescores?api_token=YqWNTDSm37V7u4dKKmyy3tgZ9yADTwt8SBLn2VBEnC4TvPQ8hAKD41UEx04L&include=localteam,visitorteam,venue",
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
        <Card1 key={item.id} fixture_id={item.id} {...item} />
      ))}
    </div>
  );
};

export default Live;

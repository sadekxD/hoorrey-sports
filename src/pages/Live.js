import axios from "axios";
import React, { useEffect, useState } from "react";
import Card1 from "../components/cards/Card1";
import TopNavbar from "../components/topnavbar/TopNavbar";

const Live = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(
        "/fixtures?api_token=YqWNTDSm37V7u4dKKmyy3tgZ9yADTwt8SBLn2VBEnC4TvPQ8hAKD41UEx04L&filter[league_id]=3",
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
          },
        }
      )
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="page">
      <TopNavbar />
      <Card1 />
      <Card1 />
      <Card1 />
    </div>
  );
};

export default Live;

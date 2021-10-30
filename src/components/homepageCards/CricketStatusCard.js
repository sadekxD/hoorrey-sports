import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { FlexboxGrid } from "rsuite";
import Card4 from "../cards/Card4";

const CricketStatusCard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(
        "/livescores?api_token=YqWNTDSm37V7u4dKKmyy3tgZ9yADTwt8SBLn2VBEnC4TvPQ8hAKD41UEx04L&include=localteam,visitorteam,runs",
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
    <div className="cricket-status-card">
      <FlexboxGrid align="middle" justify="space-between" className="row-1">
        <FlexboxGrid.Item className="header">Sports</FlexboxGrid.Item>
        <FlexboxGrid.Item>
          <Link to="/live">See all</Link>
        </FlexboxGrid.Item>
      </FlexboxGrid>
      {/* <div className="row-2">
        <h3>Live</h3>
        {data.slice(0, 2).map((item) => (
          <Card4 key={item.id} fixture_id={item.id} {...item} />
        ))}
      </div> */}
      {/* <hr className="hr" />
      <div className="row-3">
        <h3>Upcoming</h3>
        <FlexboxGrid align="middle" justify="space-between">
          <FlexboxGrid.Item>IND</FlexboxGrid.Item>
          <FlexboxGrid.Item>0/10</FlexboxGrid.Item>
        </FlexboxGrid>
        <FlexboxGrid align="middle" justify="space-between">
          <FlexboxGrid.Item>AUS</FlexboxGrid.Item>
          <FlexboxGrid.Item>233/5</FlexboxGrid.Item>
        </FlexboxGrid>
      </div> */}
    </div>
  );
};

export default CricketStatusCard;

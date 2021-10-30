import React, { useEffect, useState } from "react";
import axios from "axios";
import Card3 from "../components/cards/Card3";
import TopNavbar from "../components/topnavbar/TopNavbar";
import { FlexboxGrid, SelectPicker } from "rsuite";
const SelectData = [
  {
    label: "Internationals",
    value: 17,
  },
  {
    label: "Leagues",
    value: "",
  },
];

const Result = () => {
  const [data, setData] = useState([]);
  const [type, setType] = useState("17");

  useEffect(() => {
    axios
      .get(
        `/fixtures?api_token=YqWNTDSm37V7u4dKKmyy3tgZ9yADTwt8SBLn2VBEnC4TvPQ8hAKD41UEx04L&include=localteam,visitorteam,venue,winnerteam&filter[league_id]=${type}&filter[starts_between]=2021-10-20,now&filter[status]=Finished`,
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
          },
        }
      )
      .then((res) => setData(res.data.data))
      .catch((err) => console.log(err));
  }, [type]);

  return (
    <div className="page">
      <TopNavbar />
      <FlexboxGrid justify="end">
        <FlexboxGrid.Item>
          <SelectPicker
            data={SelectData}
            style={{ width: 224, margin: ".5rem 0", marginLeft: "auto" }}
            searchable={false}
            onChange={(v) => setType(v)}
            defaultValue={3}
          />
        </FlexboxGrid.Item>
      </FlexboxGrid>
      {data.map((item) => (
        <Card3 key={item.id} fixture_id={item.id} {...item} />
      ))}
    </div>
  );
};

export default Result;

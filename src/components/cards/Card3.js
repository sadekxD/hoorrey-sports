import React, { useState, useEffect } from "react";
import axios from "axios";
import { FlexboxGrid } from "rsuite";

const Card3 = ({
  fixture_id,
  localteam,
  visitorteam,
  winnerteam,
  note,
  venue,
  type,
  round,
  starting_at,
}) => {
  const [localteamData, setLocateamData] = useState({});
  const [visitorTeamData, setVisitorteamData] = useState({});

  useEffect(() => {
    axios
      .get(
        `/fixtures/${fixture_id}?api_token=YqWNTDSm37V7u4dKKmyy3tgZ9yADTwt8SBLn2VBEnC4TvPQ8hAKD41UEx04L&include=runs`,
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
          },
        }
      )
      .then((res) => {
        res.data.data.runs.forEach((item) => {
          if (item.team_id === localteam.id) {
            setLocateamData({ ...localteamData, ...item });
          } else {
            setVisitorteamData({ ...visitorTeamData, ...item });
          }
        });
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="result-card">
      <h6 className="h6">
        {round}, {localteam.code} vs {visitorteam.code}, {type} Series, 2021
      </h6>
      <p className="p">{starting_at}</p>

      <FlexboxGrid
        align="middle"
        justify="space-between"
        className={`row-1 ${localteam.id === winnerteam.id ? "winner" : ""}`}
      >
        <FlexboxGrid.Item>
          <FlexboxGrid align="middle">
            <FlexboxGrid.Item>
              <img
                src={localteam.image_path}
                alt={localteam.code}
                className="team-img"
              />
            </FlexboxGrid.Item>
            <FlexboxGrid.Item className="team-name">
              {localteam.code}
            </FlexboxGrid.Item>
            {localteam.id === winnerteam.id ? (
              <FlexboxGrid.Item>
                <i className="win-icon fas fa-trophy"></i>
              </FlexboxGrid.Item>
            ) : (
              ""
            )}
          </FlexboxGrid>
        </FlexboxGrid.Item>
        {localteamData.score && localteamData.wickets && localteamData.overs && (
          <FlexboxGrid.Item style={{ flex: 0.5 }}>
            <FlexboxGrid justify="space-between">
              <FlexboxGrid.Item className="run">
                Run {localteamData.score}
              </FlexboxGrid.Item>
              <FlexboxGrid.Item className="wicket">
                Wicket {localteamData.wickets}
              </FlexboxGrid.Item>
              <FlexboxGrid.Item className="over">
                Over {localteamData.overs}
              </FlexboxGrid.Item>
            </FlexboxGrid>
          </FlexboxGrid.Item>
        )}
      </FlexboxGrid>
      <FlexboxGrid
        align="middle"
        justify="space-between"
        className={`row-2 ${visitorteam.id === winnerteam.id ? "winner" : ""}`}
      >
        <FlexboxGrid.Item>
          <FlexboxGrid align="middle">
            <FlexboxGrid.Item>
              <img
                src={visitorteam.image_path}
                alt={visitorteam.code}
                className="team-img"
              />
            </FlexboxGrid.Item>
            <FlexboxGrid.Item className="team-name">
              {visitorteam.code}
            </FlexboxGrid.Item>
            {visitorteam.id === winnerteam.id ? (
              <FlexboxGrid.Item>
                <i className="win-icon fas fa-trophy"></i>
              </FlexboxGrid.Item>
            ) : (
              ""
            )}
          </FlexboxGrid>
        </FlexboxGrid.Item>
        {visitorTeamData.score &&
          visitorTeamData.wickets &&
          visitorTeamData.overs && (
            <FlexboxGrid.Item style={{ flex: 0.5 }}>
              <FlexboxGrid justify="space-between">
                <FlexboxGrid.Item className="run">
                  Run {visitorTeamData.score}
                </FlexboxGrid.Item>
                <FlexboxGrid.Item className="wicket">
                  Wicket {visitorTeamData.wickets}
                </FlexboxGrid.Item>
                <FlexboxGrid.Item className="over">
                  Over {visitorTeamData.overs}
                </FlexboxGrid.Item>
              </FlexboxGrid>
            </FlexboxGrid.Item>
          )}
      </FlexboxGrid>
      {venue && <p className="stadium">{venue.name}</p>}
      <p className="match-result">{note}</p>
    </div>
  );
};

export default Card3;

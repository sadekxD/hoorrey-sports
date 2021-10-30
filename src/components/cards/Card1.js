import React, { useState, useEffect } from "react";
import axios from "axios";
import { Col, FlexboxGrid, Grid, Row } from "rsuite";

const Card1 = ({
  fixture_id,
  toss_won_team_id,
  elected,
  localteam,
  visitorteam,
  note,
  venue,
  round,
}) => {
  const [localteamData, setLocateamData] = useState({});
  const [visitorTeamData, setVisitorteamData] = useState({});

  useEffect(() => {
    axios
      .get(
        `/livescores/${fixture_id}?api_token=YqWNTDSm37V7u4dKKmyy3tgZ9yADTwt8SBLn2VBEnC4TvPQ8hAKD41UEx04L&include=runs`,
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
    <div className="live-card">
      <h5 className="h5">
        LIVE{" "}
        <i
          className="fas fa-broadcast-tower"
          style={{ fontSize: 14, marginLeft: 8 }}
        ></i>
      </h5>
      <p className="p">{round}</p>

      <Grid fluid>
        <Row className="row-1">
          <Col xs={12}>
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
              {localteam.id === toss_won_team_id ? (
                <FlexboxGrid.Item style={{ fontWeight: 700, marginLeft: 8 }}>
                  ({elected})
                </FlexboxGrid.Item>
              ) : (
                ""
              )}
            </FlexboxGrid>
          </Col>
          <Col xs={12}>
            {localteamData.score &&
              localteamData.wickets &&
              localteamData.overs && (
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
              )}
          </Col>
        </Row>
      </Grid>

      <Grid fluid>
        <Row className="row-2">
          <Col xs={12}>
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
              {visitorteam.id === toss_won_team_id ? (
                <FlexboxGrid.Item style={{ fontWeight: 700, marginLeft: 8 }}>
                  ({elected})
                </FlexboxGrid.Item>
              ) : (
                ""
              )}
            </FlexboxGrid>
          </Col>
          <Col xs={12}>
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
          </Col>
        </Row>
      </Grid>

      {venue && <p className="stadium">{venue.name}</p>}
      <p className="toss-status">
        {toss_won_team_id === localteam.id
          ? localteam.name
          : toss_won_team_id === visitorteam.id
          ? visitorteam.name
          : ""}{" "}
        Elected to{" "}
        <span style={{ textTransform: "capitalize" }}>{elected}</span>
      </p>
    </div>
  );
};

export default Card1;

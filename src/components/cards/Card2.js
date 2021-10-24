import React from "react";
import { FlexboxGrid } from "rsuite";

const Card2 = ({ localteam, visitorteam, venue, type, round, starting_at }) => {
  return (
    <div className="upcoming-card">
      <h6 className="h6">
        {round}, {localteam.code} vs {visitorteam.code}, {type} Series, 2021
      </h6>
      <p className="p">{starting_at}</p>

      <FlexboxGrid align="middle" justify="space-between" className="row-1">
        <FlexboxGrid.Item>
          <FlexboxGrid>
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
          </FlexboxGrid>
        </FlexboxGrid.Item>
        <FlexboxGrid.Item style={{ flex: 0.5 }}>
          <FlexboxGrid justify="space-between">
            <FlexboxGrid.Item className="run">Run 0</FlexboxGrid.Item>
            <FlexboxGrid.Item className="wicket">Wicket 0</FlexboxGrid.Item>
            <FlexboxGrid.Item className="over">Over 0</FlexboxGrid.Item>
          </FlexboxGrid>
        </FlexboxGrid.Item>
      </FlexboxGrid>
      <FlexboxGrid align="middle" justify="space-between" className="row-2">
        <FlexboxGrid.Item>
          <FlexboxGrid>
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
          </FlexboxGrid>
        </FlexboxGrid.Item>
        <FlexboxGrid.Item style={{ flex: 0.5 }}>
          <FlexboxGrid justify="space-between">
            <FlexboxGrid.Item className="run">Run 0</FlexboxGrid.Item>
            <FlexboxGrid.Item className="wicket">Wicket 0</FlexboxGrid.Item>
            <FlexboxGrid.Item className="over">Over 0</FlexboxGrid.Item>
          </FlexboxGrid>
        </FlexboxGrid.Item>
      </FlexboxGrid>
      {venue && <p className="stadium">{venue.name}</p>}
      <p className="toss-status">Match Yet to Begin</p>
    </div>
  );
};

export default Card2;

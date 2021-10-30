import React from "react";
import { FlexboxGrid } from "rsuite";

const Card4 = ({ fixture_id, toss_won_team_id, localteam, visitorteam }) => {
  return (
    <FlexboxGrid align="middle" justify="space-between">
      {/* <FlexboxGrid.Item>
        <FlexboxGrid align="middle">
          <FlexboxGrid.Item>
            <img
              src={localteam.image_path}
              alt={localteam.code}
              className="team-img"
            />
            <FlexboxGrid.Item className="team-name">
              {localteam.code}
            </FlexboxGrid.Item>
          </FlexboxGrid.Item>
        </FlexboxGrid>
      </FlexboxGrid.Item>
      <FlexboxGrid.Item>0/10</FlexboxGrid.Item> */}
    </FlexboxGrid>
  );
};

export default Card4;

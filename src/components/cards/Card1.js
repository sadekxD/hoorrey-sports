import React from "react";
import { FlexboxGrid } from "rsuite";

const Card1 = () => {
  return (
    <div className="live-card">
      <h5 className="h5">LIVE</h5>
      <p className="p">3rd T20</p>

      <FlexboxGrid align="middle" justify="space-between" className="row-1">
        <FlexboxGrid.Item>
          <FlexboxGrid>
            <FlexboxGrid.Item>
              <img src="" alt="" className="team-img" />
            </FlexboxGrid.Item>
            <FlexboxGrid.Item className="team-name">
              India (Batting)
            </FlexboxGrid.Item>
          </FlexboxGrid>
        </FlexboxGrid.Item>
        <FlexboxGrid.Item style={{ flex: 0.5 }}>
          <FlexboxGrid justify="space-between">
            <FlexboxGrid.Item className="run">Run 142</FlexboxGrid.Item>
            <FlexboxGrid.Item className="wicket">Wicket 07</FlexboxGrid.Item>
            <FlexboxGrid.Item className="over">Over 13.3</FlexboxGrid.Item>
          </FlexboxGrid>
        </FlexboxGrid.Item>
      </FlexboxGrid>
      <FlexboxGrid align="middle" justify="space-between" className="row-2">
        <FlexboxGrid.Item>
          <FlexboxGrid>
            <FlexboxGrid.Item>
              <img src="" alt="" className="team-img" />
            </FlexboxGrid.Item>
            <FlexboxGrid.Item className="team-name">
              India (Batting)
            </FlexboxGrid.Item>
          </FlexboxGrid>
        </FlexboxGrid.Item>
        <FlexboxGrid.Item style={{ flex: 0.5 }}>
          <FlexboxGrid justify="space-between">
            <FlexboxGrid.Item className="run">Run 142</FlexboxGrid.Item>
            <FlexboxGrid.Item className="wicket">Wicket 07</FlexboxGrid.Item>
            <FlexboxGrid.Item className="over">Over 13.3</FlexboxGrid.Item>
          </FlexboxGrid>
        </FlexboxGrid.Item>
      </FlexboxGrid>
      <p className="stadium">Qatar Stadium</p>
      <p className="toss-status">Australia Elected to field</p>
    </div>
  );
};

export default Card1;

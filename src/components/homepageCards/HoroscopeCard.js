import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { FlexboxGrid } from "rsuite";

function zodiac(day, month) {
  var zodiac = [
    "",
    "Capricorn",
    "Aquarius",
    "Pisces",
    "Aries",
    "Taurus",
    "Gemini",
    "Cancer",
    "Leo",
    "Virgo",
    "Libra",
    "Scorpio",
    "Sagittarius",
    "Capricorn",
  ];
  var last_day = ["", 19, 18, 20, 20, 21, 21, 22, 22, 21, 22, 21, 20, 19];
  return day > last_day[month] ? zodiac[month * 1 + 1] : zodiac[month];
}

const HoroscopeCard = () => {
  const [data, setData] = useState({ date_range: "", description: "" });
  const [sign, setSign] = useState("");

  useEffect(() => {
    setSign(zodiac(19, 7));
  }, []);

  useEffect(() => {
    if (sign) {
      axios
        .post(`https://aztro.sameerkumar.website/?sign=${sign}&day=today`)
        .then((res) => setData({ ...data, ...res.data }))
        .catch((err) => {
          console.log(err);
        });
    }
  }, [sign]);

  console.log(data);

  return (
    <div className="horoscope-card">
      <FlexboxGrid align="middle" justify="space-between" className="row-1">
        <FlexboxGrid.Item className="header">
          Today's Horoscope
        </FlexboxGrid.Item>
        {/* <FlexboxGrid.Item>
          <Link to="/live">See all</Link>
        </FlexboxGrid.Item> */}
      </FlexboxGrid>
      <FlexboxGrid
        align="middle"
        justify="space-between"
        style={{ marginTop: 10 }}
      >
        <FlexboxGrid.Item className="col-1">
          <img
            src="https://cdn5.vectorstock.com/i/1000x1000/54/69/virgo-zodiac-line-art-eps-10-vector-31705469.jpg"
            alt="virgo"
          />
        </FlexboxGrid.Item>
        <FlexboxGrid.Item className="col-2">
          <h3>
            {sign} <span>({data.date_range})</span>
          </h3>
          <hr className="hr" />
          <p>{data.description}</p>
        </FlexboxGrid.Item>
      </FlexboxGrid>
    </div>
  );
};

export default HoroscopeCard;

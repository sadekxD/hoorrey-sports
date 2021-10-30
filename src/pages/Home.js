import React from "react";
import CricketStatusCard from "../components/homepageCards/CricketStatusCard";
import HoroscopeCard from "../components/homepageCards/HoroscopeCard";

const Home = () => {
  return (
    <div className="page">
      <CricketStatusCard />
      <HoroscopeCard />
    </div>
  );
};

export default Home;

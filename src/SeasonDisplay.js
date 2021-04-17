import React from "react";

const seasonConfig = {
  winter: {
    text: "its chilly",
    icon: "1"
  },
  summer: {
    text: "its hot",
    icon: "2"
  }
};

const SeasonDisplay = () => {
  const season = "winter";
  const { text, icon } = seasonConfig[season];
  return (
    <div>
      <h1>{text}</h1>
      <h5>{icon}</h5>
    </div>
  );
};

export default SeasonDisplay;

import React from "react";
import CardList from "./CardList";
import { robots } from "./robot";
import SearchBox from "./SearchBar";

const App = () => {
  return (
    <div className="tc">
      <h1>RobotFriends</h1>
      <SearchBox />
      <CardList robots={robots} />
    </div>
  );
};

export default App;

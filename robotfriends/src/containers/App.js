import React, { Component } from "react";
import CardList from "../components/CardList";
import SearchBar from "../components/SearchBar";
import "./App.css";
import Scroll from "../components/Scroll";
import ErrorBoundry from "../components/ErrorBoundry";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchfield: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users/")
      .then((response) => response.json())
      .then((users) => this.setState({ robots: users }));
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  };

  render() {
    const { robots, searchfield } = this.state;
    const filteredRobots = robots.filter((robot) => {
      return robot.name
        .toLocaleLowerCase()
        .includes(searchfield.toLocaleLowerCase());
    });
    if (!robots.length) {
      return <h1>LOADING....</h1>;
    } else {
      return (
        <div className="tc">
          <h1 className="f1">RobotFriends</h1>
          <SearchBar searchChange={this.onSearchChange} />
          <ErrorBoundry>
            <Scroll>
              <CardList robots={filteredRobots} />
            </Scroll>
          </ErrorBoundry>
        </div>
      );
    }
  }
}

export default App;

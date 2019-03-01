import React, { Component } from "react";
import axios from "axios";
import { BrowserRouter, Route} from "react-router-dom";
import {Jumbotron, Container, Row, Col, Image} from 'react-bootstrap'
import "./App.css";
import Player from "./components/player";
import Home from "./components/home";
import Search from "./components/search";
import Searched from "./components/searched";
import NavBar from './components/navbar'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playerSearch: [
        "01601811446485dc03e47cbbd7bf6283",
        "2f972cd4105eb35a904e69890c75c3a8",
        "1ac1911a4ac43b03176a74f805ef97c5"
      ],
      player: {},
      homePlayer: [],
      searched: []
    };
  }
  componentDidMount() {
    let name = this.state.playerSearch;
    let fun = this.getPlayer;
    let arr = [];
    name.forEach(name => {
      arr.push(fun(name));
    });
    axios.all(arr).then(
      axios.spread((a, b, c) => {
        this.setState({
          homePlayer: [a.data, b.data, c.data]
        });
      })
    );
  }
  searchPlayer(name) {
    axios
      .get("https://apextab.com/api/search.php", {
        params: {
          platform: "pc",
          search: name
        }
      })
      .then(res => {
        this.setState({
          searched: res.data.results
        });
      })
      .catch(err => {
        console.log(err);
      });
  }
  getPlayer(id) {
    return axios.get("https://apextab.com/api/player.php", {
      params: {
        aid: id
      }
    });
  }
  singlePlayer(id){
    axios.get("https://apextab.com/api/player.php", {
      params: {
        aid: id
      }
    })
    .then(res => {
      this.setState({
        player : res.data
      })
    })
    .catch(err =>{
      console.log(err)
    })
  }
  render() {
    return (
      <Container className="App">
        <BrowserRouter>
          <Container>
            <NavBar search={this.searchPlayer.bind(this)}/>
            <Route
              path="/Searches"
              render={props => {
                return <Searched allPlayer={this.state.searched} single={this.singlePlayer.bind(this)} />;
              }}
            />
            <Route
              exact
              path="/"
              render={props => {
                return <Home home={this.state.homePlayer} single={this.singlePlayer.bind(this)}/>;
              }}
            />
            <Route
              path={`/${this.state.player.name}`}
              render={props => {
                return <Player play={this.state.player} />;
              }}
            />
          </Container>
        </BrowserRouter>
      </Container>
    );
  }
}

export default App;

import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import Player from "./components/player";
import Home from "./components/home";
import search from './components/search'
import Search from "./components/search";

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
      homePlayer: []
    };
  }
  componentDidMount() {
    let name = this.state.playerSearch;
    let fun = this.getPlayer;
    let arr = []
    name.forEach(name =>{
      arr.push(fun(name))
    })
    axios.all(arr)
    .then(axios.spread((a,b,c)=>{
      this.setState({
        homePlayer : [a.data,b.data,c.data]
      })
    }))
    
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
        console.log(res.data);
        // this.setState({
        //   homePlayer : res.data
        // })
      })
      .catch(err => {
        console.log(err);
      });
  }
  getPlayer(id) {
    return axios
      .get("https://apextab.com/api/player.php", {
        params: {
          aid: id
        }
      })
      // .then(res => {
      //   return res.data
      // })
      // .catch(err => {
      //   console.log(err);
      // });
  }

  render() {
    return (
      <div className="App">
        <Search/>
        <Home home={this.state.homePlayer} />
        {/* <Player play={this.state.player} /> */}
      </div>
    );
  }
}

export default App;

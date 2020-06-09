import React, { Component } from "react";
import "./styles.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      player: "X",
      b1: "-",
      b2: "-",
      b3: "-",
      b4: "-",
      b5: "-",
      b6: "-",
      b7: "-",
      b8: "-",
      b9: "-",
      XArr: [],
      OArr: [],
      count: 0
    };
  }

  updatePlayer = () => {
    let value = this.state.player === "X" ? "O" : "X";
    this.setState({ player: value });
  };

  checkWin = (arr, value) => {
    this.setState({ count: this.state.count + 1 });
    let tempArr = [];
    let ogArr = arr;
    ogArr.push(value);
    while (ogArr.length > 2) {
      if (ogArr[1] === null) {
        ogArr = tempArr;
      }
      let valueToFind = 15 - (ogArr[0] + ogArr[1]);

      if (ogArr.find(v => v === valueToFind)) {
        if (valueToFind === ogArr[0] || valueToFind === ogArr[1]) {
          tempArr.push(ogArr[1]);
          ogArr.splice(1, 1);
          continue;
        }
        alert(`Player ${this.state.player} has won!`);
        break;
      } else {
        tempArr.push(ogArr[1]);
        ogArr.splice(1, 1);
      }
      if (this.state.count === 8) {
        alert("No Winner");
        this.reset();
        break;
      }
    }
  };

  updateBox = (id, value) => {
    switch (id) {
      case 1:
        if (this.state.b1 !== "-") {
          break;
        }
        this.setState({ b1: this.state.player });
        this.updatePlayer();
        break;
      case 2:
        if (this.state.b2 !== "-") {
          break;
        }
        this.setState({ b2: this.state.player });
        this.updatePlayer();
        break;
      case 3:
        if (this.state.b3 !== "-") {
          break;
        }
        this.setState({ b3: this.state.player });
        this.updatePlayer();
        break;
      case 4:
        if (this.state.b4 !== "-") {
          break;
        }
        this.setState({ b4: this.state.player });
        this.updatePlayer();
        break;
      case 5:
        if (this.state.b5 !== "-") {
          break;
        }
        this.setState({ b5: this.state.player });
        this.updatePlayer();
        break;
      case 6:
        if (this.state.b6 !== "-") {
          break;
        }
        this.setState({ b6: this.state.player });
        this.updatePlayer();
        break;
      case 7:
        if (this.state.b7 !== "-") {
          break;
        }
        this.setState({ b7: this.state.player });
        this.updatePlayer();
        break;
      case 8:
        if (this.state.b8 !== "-") {
          break;
        }
        this.setState({ b8: this.state.player });
        this.updatePlayer();
        break;
      case 9:
        if (this.state.b9 !== "-") {
          break;
        }
        this.setState({ b9: this.state.player });
        this.updatePlayer();
        break;
      default:
        return 0;
    }

    if (this.state.player === "X") {
      this.setState({
        XArr: [...this.state.XArr, value]
      });
      this.checkWin(this.state.XArr, value);
    } else if (this.state.player === "O") {
      this.setState({
        OArr: [...this.state.OArr, value]
      });

      this.checkWin(this.state.OArr);
    }
  };

  reset = () => {
    this.setState({
      player: "X",
      b1: "-",
      b2: "-",
      b3: "-",
      b4: "-",
      b5: "-",
      b6: "-",
      b7: "-",
      b8: "-",
      b9: "-",
      XArr: [],
      OArr: [],
      count: 0
    });
  };

  render() {
    return (
      <div className="App">
        <div>
          <button
            type="submit"
            value={8}
            id="1"
            onClick={() => this.updateBox(1, 8)}
          >
            {this.state.b1}
          </button>
          <button
            type="submit"
            value={3}
            id="2"
            onClick={() => this.updateBox(2, 3)}
          >
            {this.state.b2}
          </button>
          <button
            type="submit"
            value={4}
            id="3"
            onClick={() => this.updateBox(3, 4)}
          >
            {this.state.b3}
          </button>
        </div>
        <div>
          <button
            type="submit"
            value={1}
            id="4"
            onClick={() => this.updateBox(4, 1)}
          >
            {this.state.b4}
          </button>
          <button
            type="submit"
            value={5}
            id="5"
            onClick={() => this.updateBox(5, 5)}
          >
            {this.state.b5}
          </button>
          <button
            type="submit"
            value={9}
            id="6"
            onClick={() => this.updateBox(6, 9)}
          >
            {this.state.b6}
          </button>
        </div>
        <div>
          <button
            type="submit"
            value={6}
            id="7"
            onClick={() => this.updateBox(7, 6)}
          >
            {this.state.b7}
          </button>
          <button
            type="submit"
            value={7}
            id="8"
            onClick={() => this.updateBox(8, 7)}
          >
            {this.state.b8}
          </button>
          <button
            type="submit"
            value={2}
            id="9"
            onClick={() => this.updateBox(9, 2)}
          >
            {this.state.b9}
          </button>
        </div>
        <div>
          <button className="reset" type="submit" onClick={() => this.reset()}>
            Reset
          </button>
        </div>
      </div>
    );
  }
}

export default App;

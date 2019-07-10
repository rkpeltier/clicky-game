import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import CardFile from "./components/Cardfile";
import images from "./images.json";
import DaRules from "./components/DaRules";

class App extends Component {
  state = {
    images: images,
    clickedImages: [],
    score: 0,
    highScore: 0,
    totalClick: 0
  };
  
    handleShuffle(id) {
    if (!this.state.clickedImages.includes(id)) {
      this.setState({
        score: this.state.score + 1,
        displayMessage:
          this.state.score + 1 === 12
            ? "You won! Play again?"
            : "How good is your memory?",
        clickedImages: [...this.state.clickedImages, id],
        highScore:
          this.state.score + 1 > this.state.highScore
            ? this.state.score + 1
            : this.state.highScore
      });
    } else {
      this.setState({
        score: 0,
        displayMessage: "Bummer! You lost. Try again?",
        clickedImages: []
      });
    }
    this.setState({
      images: images.sort(() => Math.random() - 0.5),
      totalClick: this.state.totalClick + 1
    });
  }

render() {
  return (
    <>
    <Navbar
      score={this.state.score}
      highScore={this.state.highScore}
      msg={this.state.displayMessage}
    />
    <DaRules />
    <Wrapper>
      {this.state.images.map(
        pic => (
          <CardFile
          key={pic.id}
          name={pic.name}
          image={pic.image}
          clickHandler={() => this.handleShuffle(pic.id)}
          />
        )
      )}
    </Wrapper>
    </>
  );
  }
};


export default App;
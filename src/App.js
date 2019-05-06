/* eslint-disable no-undef */
import React from 'react';
import Navbar from "./components/Navbar";
import CardFile from "./components/Cardfile";
import images from "./images.json";


class App extends React.Component() {
  state = {
    images: [],
    clickedImages,
    score: 0,
  };

  handleShuffle(id) {
        if (!this.state.clickedImages.includes(id)) {
      this.setState({
        score: this.state.score + 1,
        clickedImages: [...this.state.clickedImages, id]
      });
    }
    this.setState({
      images: images.sort(() => Math.random() - 0.5),
      totalClick: this.state.totalClick + 1
    });
  };

  handleIncrement = () => {
    const newScore = this.state.currentScore + 1;
    this.setState({
      currentScore: newScore,
      correctIncorrect: "You guessed correctly!"
    });
    if (newScore >= this.state.topScore) {
      this.setState({ topScore: newScore });
    }
    else if (newScore === 12) {
      this.setState({ correctIncorrect: "You win!" });
    }
    this.handleShuffle();
  };

  handleReset = () => {
    this.setState({
      currentScore: 0,
      topScore: this.state.topScore,
      correctIncorrect: "You guessed incorrectly!",
      images: []
    });
    this.handleShuffle();
  };

render() {
  return (
    <>
    <Navbar />
    <CardFile />
    </>
  );
  }
};

export default App
import React from 'react';
import CardFile from "./components/Cardfile";
import images from "./images.json";


class App extends React.Component() {
  state = {
    images: [],
  }

  // handleShuffle(id) {
  //       if (!this.state.clickedImages.includes(id)) {
  //     this.setState({
  //       score: this.state.score + 1,
  //       clickedImages: [...this.state.clickedImages, id]
  //     });
  //   }
  //   this.setState({
  //     images: images.sort(() => Math.random() - 0.5),
  //     totalClick: this.state.totalClick + 1
  //   });
  // }

render() {
  return (
    <>
    <p>WIP</p>
    </>
  );
  }
};

export default App
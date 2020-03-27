import React, { Component } from 'react';
import About from "./components/About";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Intro from "./components/Intro"



class App extends Component {
  render() {
    return (
<div className="App">

<Intro />

<About />

<Work />

<Contact />

</div>
      );
  }
}

export default App;

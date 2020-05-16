import React, { Component } from 'react';
import About from "./components/About";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Intro from "./components/Intro"
import Skills from "./components/Skills"



class App extends Component {
  render() {
    return (
<div className="App">

<Intro />

<About />

<Work />

<Skills />

<Contact />

</div>
      );
  }
}

export default App;

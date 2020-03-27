import React from "react";

function Intro() {
    return(
        <div>
            <nav className="navbar navbar-b navbar-trans navbar-expand-md fixed-top" id="mainNav" >
  <div className="container">
    <a className="navbar-brand js-scroll" href="#page-top"></a>
    <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarDefault"
      aria-controls="navbarDefault" aria-expanded="false" aria-label="Toggle navigation">
      <span></span>
      <span></span>
      <span></span>
    </button>
    <div className="navbar-collapse collapse justify-content-end" id="navbarDefault">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link js-scroll active" href="#home">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link js-scroll" href="#about">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link js-scroll" href="#work">Work</a>
        </li>
        {/* <li className="nav-item">
          <a className="nav-link js-scroll" href="#blog">Blog</a>
        </li> */}
        <li className="nav-item">
          <a className="nav-link js-scroll" href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

<div id="home" className="intro route bg-image" style={{backgroundImage: "url(img/Alex_copy_2.jpg)"}}>
  <div className="overlay-itro"></div>
  <div className="intro-content display-table">
    <div className="table-cell">
      <div className="container">

        <h1 className="intro-title mb-4">Alex Dollard</h1>
        <p className="intro-subtitle"><span className="text-slider-items">Nashville_TN, Web_Developer, Web_Designer, Trash_Picker_Upper, Backseat_Philosopher, Person_Who_Respects_You. </span><strong className="text-slider"></strong></p>
         
      </div>
    </div>
  </div>
</div>
        </div>
    )
}

export default Intro;
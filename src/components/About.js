import React from "react";

function About() {
    return(
        <div>
            <section id="about" className="about-mf sect-pt4 route">
  <div className="container">
    <div className="row">
      <div className="col-sm-12">
        <div className="box-shadow-full">
          <div className="row">
            <div className="col-md-6">
              <div className="row">
                <div className="col-sm-6 col-md-5">
                  <div className="about-img">
                    <img src="img/alex_2.jpg" className="img-fluid rounded b-shadow-a" alt=""/>
                  </div>
                </div>
                <div className="col-sm-6 col-md-7">
                  <div className="about-info">
                    <p><span className="title-s">Name: </span> <span>Alexander Dollard (Alex)</span></p>
                    <p><span className="title-s">Profile: </span> <span>full stack developer</span></p>
                    <p><span className="title-s">Email: </span> <span>alexdollard141@gmail.com</span></p>
                    <p><span className="title-s">Phone: </span> <span>(770)-542-9231</span></p>
                  </div>
                </div>
              </div>

            </div>
            <div className="col-md-6">
              <div className="about-me pt-4 pt-md-0">
                <div className="title-box-2">
                  <h5 className="title-left">
                    About me
                  </h5>
                </div>
                <p className="lead">
                </p>
                <p className="lead">
                  Greetings! my name is Alex Dollard, and I'm a web developer. I graduated from Vanderbilt's 
                  full-stack development Bootcamp in April of 2020. Throughout my time at Vanderbilt I have developed a comprehensive portfolio of projects of different kinds, utilizing
                  such tools as HTML, CSS, JavaScript, React, Node.js, MySQL, and MongoDB. Please feel free to peruse my portfolio below, and 
                  reach out with any questions. 
                </p>
                <p className="lead">

                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
        </div>
    )
}

export default About;
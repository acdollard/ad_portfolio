import React, { Component } from 'react';



class App extends Component {
  render() {
    return (
      <div className="App">
              <body id="page-top" >


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
        <li className="nav-item">
          <a className="nav-link js-scroll" href="#blog">Blog</a>
        </li>
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
              <div className="skill-mf">
                <p className="title-s">Skill</p>
                <span>HTML</span> <span className="pull-right">90%</span>
                <div className="progress">
                  <div className="progress-bar" role="progressbar" style={{width: "90%" , ariaValuenow:"90" , ariaValuemin:"0" ,
                    ariaValuemax:"100"}}></div>
                </div>
                <span>CSS3</span> <span className="pull-right">75%</span>
                <div className="progress">
                  <div className="progress-bar" role="progressbar" style={{width: "75%" , ariaValuenow:"75" , ariaValuemin:"0" ,
                    ariaValuemax:"100"}}></div>
                </div>
                <span>React</span> <span className="pull-right">0%</span>
                <div className="progress">
                  <div className="progress-bar" role="progressbar" style={{width: "0%" , ariaValuenow:"0" , ariaValuemin:"0" ,
                    ariaValuemax:"100"}}></div>
                </div>
                <span>JAVASCRIPT</span> <span className="pull-right">65%</span>
                <div className="progress">
                  <div className="progress-bar" role="progressbar" style={{width: "65%" , ariaValuenow:"65" , ariaValuemin:"0" ,
                    ariaValuemax:"100"}}></div>
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




<section className="paralax-mf footer-paralax bg-image sect-mt4 route" style={{backgroundImage: "url(img/overlay-bg.jpg)"}}>
  <div className="overlay-mf"></div>
  <section id="work" className="portfolio-mf sect-pt4 route"></section>

  <div className="container">
    <div className="row">
      <div className="col-sm-12">
        <div className="title-box text-center">
          <h3 className="title-a" id="portfolio_head">
            Portfolio
          </h3>
          <p className="subtitle-a" id="portfolio_text">
            Some of my work, from newest to oldest.
          </p>
          <div className="line-mf"></div>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-md-4">
        <div className="work-box">
          <a href="img/star-dogs.png" data-lightbox="gallery-mf">
            <div className="work-img">
              <img src="img/star-dogs.png" alt="" className="img-fluid"/>
            </div>
            <div className="work-content">
              <div className="row">
                <div className="col-sm-8">
                  <h2 className="w-title">Star-Dogs</h2>
                  <div className="w-more">
                    <span className="w-ctegory">A Horoscope App for Dogs:</span>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="w-like">
                    <span className="ion-ios-plus-outline"></span>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
      <div className="col-md-4">
        <div className="work-box">
          <a href="img/animousity.png" data-lightbox="gallery-mf">
            <div className="work-img">
              <img src="img/animousity.png" alt="" className="img-fluid"/>
            </div>
            <div className="work-content">
              <div className="row">
                <div className="col-sm-8">
                  <h2 className="w-title">Animousity</h2>
                  <div className="w-more">
                    <span className="w-ctegory">For Recommending Anime:</span>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="w-like">
                    <span className="ion-ios-plus-outline"></span>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
      <div className="col-md-4">
        <div className="work-box">
          <a href="img/employee-directory.png" data-lightbox="gallery-mf">
            <div className="work-img">
              <img src="img/employee-directory.png" alt="" className="img-fluid"/>
            </div>
            <div className="work-content">
              <div className="row">
                <div className="col-sm-8">
                  <h2 className="w-title">Employee Directory</h2>
                  <div className="w-more">
                    <span className="w-ctegory">For Age-Sorting Employers:</span> 
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="w-like">
                    <span className="ion-ios-plus-outline"></span>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>


      
    </div>
  </div>
</section>

<section className="paralax-mf footer-paralax bg-image sect-mt4 route" style={{backgroundImage: 'url(img/overlay-bg.jpg)'}}> 
   <div className="overlay-mf"></div> 


  <div className="container">
    <div className="row">
      <div className="col-sm-12">
        <div className="contact-mf">
          <div id="contact" className="box-shadow-full">
            <div className="row">
              <div className="col-md-6">
                <div className="title-box-2">
                  <h5 className="title-left">
                    Send Me A Message: 
                  </h5>
                </div>
                <div>
                    <form action="" method="post" className="contactForm">
                    <div id="sendmessage">Your message has been sent. Thank you!</div>
                    <div id="errormessage"></div>
                    <div className="row">
                      <div className="col-md-12 mb-3">
                        <div className="form-group">
                          <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                          <div className="validation"></div>
                        </div>
                      </div>
                      <div className="col-md-12 mb-3">
                        <div className="form-group">
                          <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                          <div className="validation"></div>
                        </div>
                      </div>
                      <div className="col-md-12 mb-3">
                          <div className="form-group">
                            <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                            <div className="validation"></div>
                          </div>
                      </div>
                      <div className="col-md-12 mb-3">
                        <div className="form-group">
                          <textarea className="form-control" name="message" rows="5" data-rule="required" data-msg="Please write something for us" placeholder="Message"></textarea>
                          <div className="validation"></div>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <button type="submit" className="button button-a button-big button-rouded">Send Message</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-md-6">
                <div className="title-box-2 pt-4 pt-md-0">
                  <h5 className="title-left">
                    Get in Touch
                  </h5>
                </div>
                <div className="more-info">
                  <p className="lead">
                    Feel free to reach out to me with any inquiries about my work, employment, or anything else you'd like 
                    to discuss. I'd love to hear from you. 
                  </p>
                  <ul className="list-ico">
                    <li><span className="ion-ios-telephone"></span> (770)-542-9231</li>
                    <li><span className="ion-email"></span> alexdollard141@gmail.com</li>
                  </ul>
                </div>
                <div className="socials">
                  <ul>
                    <li><a href="https://github.com/acdollard"><span className="ico-circle"><i className="ion-social-github"></i></span></a></li>
                    <li><a href="https://www.linkedin.com/in/alex-dollard-a1130aa8/"><span className="ico-circle"><i className="ion-social-linkedin"></i></span></a></li>

                   
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <footer>
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <div className="copyright-box">
            <p className="copyright">&copy; Copyright <strong>DevFolio</strong>. All Rights Reserved</p>
            <div className="credits">
             
                All the links in the footer should remain intact.
                You can delete the links only if you purchased the pro version.
                Licensing information: https://bootstrapmade.com/license/
                Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/buy/?theme=DevFolio
         
              Designed with <a href="https://bootstrapmade.com/">BootstrapMade</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</section>
</body>
<a href="#" className="back-to-top"><i className="fa fa-chevron-up"></i></a>
<div id="preloader"></div>
</div>

      
      );

  }
  

}

export default App;

import React from "react"

function Work() {
    return(
        <div>
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
        </div>
    )
}

export default Work;
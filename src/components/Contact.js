import React from "react"

function Contact(){ 
    return(
        <div>
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

            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</section>
        </div>
    )
}

export default Contact;
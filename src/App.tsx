import logo from "./assets/images/logo.svg";

import imgVRMobile from "./assets/images/mobile/image-interactive.jpg";
import imgVRDesktop from "./assets/images/desktop/image-interactive.jpg";
import imgDEMobile from "./assets/images/mobile/image-deep-earth.jpg";
import imgDEDesktop from "./assets/images/desktop/image-deep-earth.jpg";
import imgNAMobile from "./assets/images/mobile/image-night-arcade.jpg";
import imgNADesktop from "./assets/images/desktop/image-night-arcade.jpg";
import imgSTMobile from "./assets/images/mobile/image-soccer-team.jpg";
import imgSTDesktop from "./assets/images/desktop/image-soccer-team.jpg";
import imgTGMobile from "./assets/images/mobile/image-grid.jpg";
import imgTGDesktop from "./assets/images/desktop/image-grid.jpg";
import imgFAMobile from "./assets/images/mobile/image-from-above.jpg";
import imgFADesktop from "./assets/images/desktop/image-from-above.jpg";
import imgPBMobile from "./assets/images/mobile/image-pocket-borealis.jpg";
import imgPBDesktop from "./assets/images/desktop/image-pocket-borealis.jpg";
import imgTCMobile from "./assets/images/mobile/image-curiosity.jpg";
import imgTCDesktop from "./assets/images/desktop/image-curiosity.jpg";
import imgMFMobile from "./assets/images/mobile/image-fisheye.jpg";
import imgMFDesktop from "./assets/images/desktop/image-fisheye.jpg";

import facebook from "./assets/images/icon-facebook.svg";
import twitter from "./assets/images/icon-twitter.svg";
import pinterest from "./assets/images/icon-pinterest.svg";
import instagram from "./assets/images/icon-instagram.svg";

import Menu from "./components/Menu";

function App() {
  return (
    <>
      <Menu></Menu>
      <section className="hero-section">
        <h1>Immersive experiences that deliver</h1>
      </section>
      <main>
        <div className="leader-section">
          <picture>
            <img src={imgVRMobile} alt="" className="mobile" />
            <img src={imgVRDesktop} alt="" className="desktop" />
          </picture>
          <div className="leader-text">
            <h2>The leader in interactive VR</h2>
            <p>
              Founded in 2011, Loopstudios has been producing world-class
              virtual reality projects for some of the best companies around the
              globe. Our award-winning creations have transformed businesses
              through digital experiences that bind to their brand.
            </p>
          </div>
        </div>
        <div className="creation-section">
          <h2>Our creations</h2>
          <div className="stacked">
            <img src={imgDEMobile} alt="" className="mobile" />
            <img src={imgDEDesktop} alt="" className="desktop" />
            <div className="img-overlay"></div>
            <span className="vr-title">Deep earth</span>
          </div>
          <div className="stacked">
            <img src={imgNAMobile} alt="" className="mobile" />
            <img src={imgNADesktop} alt="" className="desktop" />
            <div className="img-overlay"></div>
            <span className="vr-title">Night arcade</span>
          </div>
          <div className="stacked">
            <img src={imgSTMobile} alt="" className="mobile" />
            <img src={imgSTDesktop} alt="" className="desktop" />
            <div className="img-overlay"></div>
            <span className="vr-title">Soccer team VR</span>
          </div>
          <div className="stacked">
            <img src={imgTGMobile} alt="" className="mobile" />
            <img src={imgTGDesktop} alt="" className="desktop" />
            <div className="img-overlay"></div>
            <span className="vr-title">The grid</span>
          </div>
          <div className="stacked">
            <img src={imgFAMobile} alt="" className="mobile" />
            <img src={imgFADesktop} alt="" className="desktop" />
            <div className="img-overlay"></div>
            <span className="vr-title">From up above VR</span>
          </div>
          <div className="stacked">
            <img src={imgPBMobile} alt="" className="mobile" />
            <img src={imgPBDesktop} alt="" className="desktop" />
            <div className="img-overlay"></div>
            <span className="vr-title">Pocket borealis</span>
          </div>
          <div className="stacked">
            <img src={imgTCMobile} alt="" className="mobile" />
            <img src={imgTCDesktop} alt="" className="desktop" />
            <div className="img-overlay"></div>
            <span className="vr-title">The curiosity</span>
          </div>
          <div className="stacked">
            <img src={imgMFMobile} alt="" className="mobile" />
            <img src={imgMFDesktop} alt="" className="desktop" />
            <div className="img-overlay"></div>
            <span className="vr-title">Make it fisheye</span>
          </div>
          <button>See all</button>
        </div>
      </main>
      <footer>
        <img src={logo} alt="" />
        <nav className="footer-nav">
          <ul>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Events</a>
            </li>
            <li>
              <a href="#">Products</a>
            </li>
            <li>
              <a href="#">Support</a>
            </li>
          </ul>
        </nav>
        <div className="social-links">
          <a href="#">
            <img src={facebook} alt="" />
          </a>
          <a href="#">
            <img src={twitter} alt="" />
          </a>
          <a href="#">
            <img src={pinterest} alt="" />
          </a>
          <a href="#">
            <img src={instagram} alt="" />
          </a>
        </div>
        <span className="text-rights">
          © 2021 Loopstudios. All rights reserved.
        </span>
      </footer>
    </>
  );
}

export default App;

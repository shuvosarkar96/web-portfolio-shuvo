import { ArrowDownRightIcon, GlobeAltIcon } from '@heroicons/react/24/outline';
import Contact from './components/contact';
import Header from './components/header';
import Footer from './components/footer';

export default function Home() {
  return (
    <div className="page home">
      <Header />
      <section className="hero">
        <div className="upper-container">
          {/* left side container */}
          <div className="left-item-container">
            <div className="location-text">
              <span>Located</span>
              <span>in</span>
              <span>Bangladesh</span>
            </div>
            <div className="location-icon">
              <GlobeAltIcon className="h-14 text-white" />
            </div>
          </div>
          {/* end */}
          {/* right side container */}
          <div className="right-item-container">
            <div className='designation-icon'>
              <ArrowDownRightIcon className="h-10 text-white" />
            </div>
            <div className='designation'>
              <span>Autodidact</span>
              <span>Designer & Developer</span>
            </div>
          </div>
          {/* end */}
        </div>
        <div className="lower-container">
          <h1>Shuvo Sarkar —</h1>
        </div>
      </section>
      <section className="about-me">
        <div className="main-text">
          <span>Helping brands to stand out in the digital era. Together we will set the new status quo. No nonsence, always on the cutting edge.</span>
        </div>
        <div className="text-icon">
          <p className='sub-text'>The combination of my passion for design, code & interaction positions me in a unique place in the web design world.</p>
          <div className='about-button'>
            <a href="">About me</a>
          </div>
        </div>
      </section>
      <section className="work">
        <h3>Portfolio</h3>
        <hr />
        <div className="work-tile">
          <span className='big-text'>Imperial Falcon</span>
          <span className='small-text'>Interation & Development</span>
        </div>
        <hr />
        <div className="work-tile">
          <span className='big-text'>Doctopus</span>
          <span className='small-text'>Interation & Development</span>
        </div>
        <hr />
        <div className="work-tile">
          <span className='big-text'>NirBazar</span>
          <span className='small-text'>Design & Development</span>
        </div>
        <hr />
        <div className="work-tile">
          <span className='big-text'>Sample Portfolio</span>
          <span className='small-text'>Design & Development</span>
        </div>
        <hr />
        <div className="button-container">
          <button className='more-work'>More work</button>
        </div>
      </section>
      <section className="work-gallery">
        <div className='row-container'>
          <div className="horizontal-item-container">
            <div className="single-item no1"></div>
          </div>
          <div className="horizontal-item-container">
            <div className="single-item no2"></div>
          </div>
          <div className="horizontal-item-container">
            <div className="single-item no3"></div>
          </div>
          <div className="horizontal-item-container">
            <div className="single-item no4"></div>
          </div>
        </div>
      </section>
      <Contact />
      <Footer />
      {/* <section className='tem-bg'>temporary</section> */}
    </div>
  );
}
